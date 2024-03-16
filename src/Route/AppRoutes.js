import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../Components/Login";
import TodoList from "../Components/TodoList";
import CountryList from "../Components/CountryList";
import LogoutButton from "../Components/LogoutButton"; 

const AppRoutes = ({ handleLogin, handleLogout }) => {
  const isLoggedIn = useSelector((state) => state.todos.isLoggedIn);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/todo/TodoList" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/todo/TodoList"
          element={
            isLoggedIn ? (
              <>
                <TodoList onLogout={handleLogout} />
                <LogoutButton /> {/* Render the LogoutButton component here */}
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/todo/CountryList"
          element={
            isLoggedIn ? (
              <>
                <CountryList />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
