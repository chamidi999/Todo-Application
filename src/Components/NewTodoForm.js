import React, { useState } from "react";
import "./NewTodoForm.css";
import { connect } from "react-redux";
import { createTodo } from "../redux/actions";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { Input, Button } from "antd";

const NewTodoForm = ({ createTodo }) => {
  const [todoText, setTodoText] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      createTodo(todoText);
      setTodoText("");
    }
  };
  const handleViewCountryList = () => {
    navigate("/todo/CountryList"); // Use the navigate function to go to the CountryList route
  };

  return (
    <div className="todo_name">
      <h1>My Todo</h1>
      <div className="new-todo-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text" 
            className="new-todo-input"
            placeholder="Enter your todo..."
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button type="primary" htmlType ="submit" className="add-todo-button">
            Add Todo
          </Button>          
          <Button
            type="default"
            className="view-countrylist-button"
            onClick={handleViewCountryList}
          >
            View Country List
          </Button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  createTodo,
};

export default connect(null, mapDispatchToProps)(NewTodoForm);
