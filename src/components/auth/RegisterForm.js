import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const RegisterForm = () => {

  //context
  const {registerUser} = useContext(AuthContext)

    // Navigate
    const navigate = useNavigate()

  // Local state
  const [ registerForm, setRegisterForm ] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { username, password, confirmPassword } = registerForm;

  const [alert, setAlert] = useState(null)
  
  const onChangeRegisterForm = (event) => setRegisterForm({ ...registerForm, [event.target.name]: event.target.value });

  const register = async event => {

    event.preventDefault()
    if (password !== confirmPassword) {
      setAlert({
        type: 'danger',
        message: 'Password do not match'
      })
      setTimeout(() => {
        setAlert(null)
      }, 5000);
      return
    }
    try {
      const registerData = await registerUser(registerForm)
      if(!registerData.success) {
        setAlert({type: 'danger', message: registerData.message})
        setTimeout(() => {
          setAlert(null)
        }, 5000);
      } else {
        navigate('/registerDone')
        setTimeout(() => {
          navigate('/dashboard')
        }, 5000);
      }
        
    } catch (error) {
      console.log(error)
    }}
  return (
    <Fragment>
      <Form onSubmit={register}>
      <AlertMessage info={alert}/> 
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange = {onChangeRegisterForm}
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
            onChange = {onChangeRegisterForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="mt-4"
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange = {onChangeRegisterForm}
          />
        </Form.Group>
        <Button variant="success" type="submit" className="mt-2">
          Register
        </Button>
      </Form>
      <p className="mt-4">
        Already have an account?
        <Link to="/login">
          <Button variant="info" size="sm" className="ms-2">
            Login
          </Button>
        </Link>
      </p>
    </Fragment>
  );
};

export default RegisterForm;
