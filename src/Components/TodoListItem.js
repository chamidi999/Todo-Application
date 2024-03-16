import React, { useState } from "react";
import "./TodoListItem.css";
import { connect, useSelector } from "react-redux";
import { removeTodo, markToDoAsCompleted, editTodo } from "../redux/actions";
import { getUserRole } from "../redux/reducers";
import { Button, Input, Space, Popconfirm, message } from 'antd';
import { EditOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';



const TodoListItem = ({ todo, removeTodo, markToDoAsCompleted, editTodo }) => {
  // Local editing and completion status condition
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  // Obtain the Redux store user role.
  const userRole = useSelector((state) => getUserRole(state));
  
  // Function to enable editing mode
  const handleEdit = () => {
    setIsEditing(true);
  };
  // Function to save the edited text
  const handleSave = () => {
    if (editedText.trim() !== "") {
      editTodo(todo.text, editedText);
      setIsEditing(false);
    }
  };
  // Function to mark the task as completed
  const handleComplete = () => {
    markToDoAsCompleted(todo.text);
    setIsCompleted(true);
  };
  const handleRemove = () => {
    removeTodo(todo.text);
    message.success('Task removed successfully!');
  };

  return (
    <li className={`todo-item-container ${isCompleted ? "completed" : ""} ${isCompleted ? "completed-background" : ""}`}>
        {isEditing ? (
          <Space>
            <Input
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="edit-input"
            />
            <Button type="primary" onClick={handleSave} icon={<CheckOutlined />} />
            <Button type="default" onClick={() => setIsEditing(false)} icon={<CloseOutlined />} />
          </Space>
        ) : (
          <div className="todo-text">{todo.text}</div>
        )}
        <div className="buttons-container">
          {!isEditing && !isCompleted && userRole === "admin" && (
            <>
              <Button type="default" onClick={handleEdit} icon={<EditOutlined />} />
              <Popconfirm
                title="Are you sure to mark this task as complete?"
                onConfirm={handleComplete}
                okText="Yes"
                cancelText="No"
              >
                <Button type="default" icon={<CheckOutlined />} />
              </Popconfirm>
            </>
          )}
          {!isEditing && (
            <Popconfirm
              title="Are you sure to remove this task?"
              onConfirm={handleRemove}
              okText="Yes"
              cancelText="No"
            >
              <Button type="danger">Remove</Button>
            </Popconfirm>
          )}
        </div>
      </li>
    );
  };

const mapStateToProps = (state) => {
  // Map user role to props from Redux state
  return {
    userRole: state.todos.userRole,
  };
};

const mapDispatchToProps = {
  // Map action creators to props
  removeTodo,
  markToDoAsCompleted,
  editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
