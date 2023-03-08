import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom"; // useHistory v5 -> useNavigate v6
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";
const LoginForm = () => {

  //context
  const {loginUser} = useContext(AuthContext)

  // Navigate
  const navigate = useNavigate()

  // Local state
  const [ loginForm, setLoginForm ] = useState({
    username: "",
    password: "",
  });
  const { username, password } = loginForm;

  const [alert, setAlert] = useState(null)
  
  const onChangeLoginForm = (event) => setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async event => {

    event.preventDefault()

    try {
      const loginData = await loginUser(loginForm)
      if(loginData.success) {
        navigate('/dashboard')
      } else {
        setAlert({type: 'danger', message: loginData.message})
        setTimeout(() => {
          setAlert(null)
        }, 5000);
      }
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <Fragment>
      <Form onSubmit={login}>
        <AlertMessage info={alert}/> 
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="mt-4"
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Button variant="success" type="submit" className="mt-2">
          Login
        </Button>
      </Form>
      <p className="mt-4">
        Don't have an account?
        <Link to="/register">
          <Button variant="info" size="sm" className="ms-2">
            Register
          </Button>
        </Link>
      </p>
    </Fragment>
  );
};

export default LoginForm;
