import React, { useState, useEffect } from "react";
import "./TodoList.css";
import {
  removeTodo,
  markToDoAsCompleted,
  editTodo,
  setCountryList,
  createTodo,
} from "../redux/actions";
import CountryList from "./CountryList";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import SearchBar from "./SearchBar";
import { getUserRole, getTodos, getCountryList } from "../redux/reducers";
import { useSelector, useDispatch } from "react-redux";

function TodoList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const userRole = useSelector((state) => getUserRole(state));
  const todoList = useSelector((state) => getTodos(state));
  const dispatch = useDispatch();

  useEffect(() => {
    
    const filtered = todoList.filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [searchTerm, todoList]);

  return (
    <div className="list-wrapper">
      <NewTodoForm />
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredTodos.map((todo, index) => (
          <TodoListItem
            key={index}
            todo={todo}
            userRole={userRole}
            removeTodo={(text) => dispatch(removeTodo(text))}
            markToDoAsCompleted={(text) => dispatch(markToDoAsCompleted(text))}
            editTodo={(text, newText) => dispatch(editTodo(text, newText))}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;