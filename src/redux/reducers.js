// Import necessary action types
import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  EDIT_TODO,
  SET_AUTH_STATUS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_USER_ROLE,
  SET_COUNTRY_LIST,
} from "./actions";

const initialState = {
  todos: [],
  isLoggedIn: false,
  userRole: null,
  errorMessage: null,
  countryList: [],
  users: {
    normalUser: {
      username: "user",
      email: "user1@gmail.com",
      password: "user123",
      role: "user",
    },
    adminUser: {
      username: "admin",
      email: "admin@gmail.com",
      password: "Admin123",
      role: "admin",
    },
  },
};

// Reducer function
export const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      console.log(
        "CREATE_TODO action dispatched with payload:",
        action.payload
      );
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.text !== action.payload.text),
      };

    case MARK_TODO_AS_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.text === action.payload.text
            ? { ...todo, completed: true }
            : todo
        ),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.text === action.payload.originalText
            ? { ...todo, text: action.payload.newText }
            : todo
        ),
      };

    case SET_USER_ROLE:
      return {
        ...state,
        userRole: action.payload,
      };

    case SET_AUTH_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        userRole: action.payload.userRole.role,
        isLoggedIn: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        userRole: null,
        isLoggedIn: false,
        errorMessage: action.payload.errorMessage,
      };

    case SET_COUNTRY_LIST://
      // Handle SET_COUNTRY_LIST action
      return {
        ...state,
        countryList: action.payload,
      };
    default:
      return state;
  }
};

export const getUserRole = (state) => state.todos.userRole;
export const getTodos = (state) => state.todos.todos;
export const getCountryList = (state) => state.todos.countryList;
export const getUsers = (state) => state.todos.users;

export default todos;
