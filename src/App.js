import "./App.css";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import RegisterSuccessfully from "./views/RegisterSuccessfully";
import About from "./views/About";
import PostContextProvider from "./contexts/PostContext";
function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>

      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route
            exact
            path="/login"
            element={<Auth name="login" authRoute="login" />}
          />
          <Route
            exact
            path="/register"
            element={<Auth name="register" authRoute="register" />}
          />
          <Route exact path="/dashboard" element={<ProtectedRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route exact path="/registerDone" element={<ProtectedRoute />}>
            <Route exact path="/registerDone" element={<RegisterSuccessfully />} />
          </Route>
          <Route exact path="/about" element={<ProtectedRoute />}>
            <Route exact path="/about" element={<About />} /> 
          </Route>
        </Routes>
      </Router>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
