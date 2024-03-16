import React from "react";
import { useDispatch } from "react-redux";
import { setAuthStatus } from "../redux/actions";
import "../Components/Logoutbutton.css";
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';


const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
 
    dispatch(setAuthStatus(false));
  };

  return (
    <div className="logout-button-container">
      <Button
        type="primary"
        icon={<LogoutOutlined />} // Ant Design logout icon
        className="logout-button"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
