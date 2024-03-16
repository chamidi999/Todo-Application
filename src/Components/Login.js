import React, { useState, useEffect } from "react";
import "./login.css";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "react-bootstrap";
import { setAuthStatus, loginSuccess, loginFailure } from "../redux/actions";
import { getUsers } from "../redux/reducers";
import { Input, Button, Form, Alert ,Flex} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const users = useSelector((state) => getUsers(state));

  useEffect(() => {
    if (email && password) {
      handleLogin();
    }
  }, []);

  const handleLogin = () => {
    // Check if the entered email and password match any user in the Users data
    const user = Object.values(users).find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Dispatch a LOGIN_SUCCESS action with the user object
      dispatch(loginSuccess(user));
      // Set alert to show successful login
      setShowAlert(true);
    } else {
      // Set error message for invalid login attempt
      setErrorMessage("Invalid email or password");
      // Dispatch a LOGIN_FAILURE action
      dispatch(loginFailure({ errorMessage: "Invalid email or password" }));
    }
  };

  const handleCancel = () => {
    setErrorMessage("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Navbar />
      <div className="login">
        <form className="login_form">
          <h1>Login Here</h1>
          <Form.Item>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="email"
              placeholder="Email"
              value={email}
              style={{backgroundColor:'#bf7373',color:'#7a3838'}}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value={password}
              style={{backgroundColor:'#bf7373',color:'#7a3838'}}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="submit_btn" onClick={handleLogin}>
              Submit
            </Button>
            <Button type="primary" className="cancel_btn" onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
          <Form.Item>
            {errorMessage && (
              <Alert message={errorMessage} type="error" showIcon />
            )}
            {showAlert && (
              <Alert
                message="Login successful!"
                type="success"
                showIcon
                className="mt-3"
              />
            )}
          </Form.Item>
        </form>
      </div>
    </div>
  );
};

export default Login;
