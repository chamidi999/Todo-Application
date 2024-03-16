import React, { useState } from "react";
import "./App.css";
import { Provider } from "react-redux"; //Import Provider
import { store } from "./store"; // Import your Redux store
import AppRoutes from "./Route/AppRoutes";
import { Button, Flex } from 'antd';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    //Wrap app with the Provider and provide  Redux store
    <Provider store={store}>
      <div className="App">
        <AppRoutes
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
      </div>
    </Provider>
  );
}

export default App;
