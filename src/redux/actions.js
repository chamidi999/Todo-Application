
import axios from "axios";


export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => {

  return {
    type: CREATE_TODO,
    payload: { text },
  };
};

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const markToDoAsCompleted = (text) => {

  return {
    type: MARK_TODO_AS_COMPLETED,
    payload: { text },
  };
};

export const EDIT_TODO = "EDIT_TODO";
export const editTodo = (originalText, newText) => ({
  type: EDIT_TODO,
  payload: { originalText, newText },
});

export const SET_AUTH_STATUS = "SET_AUTH_STATUS";
export const setAuthStatus = (isLoggedIn) => {
  return {
    type: SET_AUTH_STATUS,
    payload: isLoggedIn,
  };
};

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = (userRole, todos) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { userRole, todos },
  };
};

export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const loginFailure = (errorMessage) => ({
  type: LOGIN_FAILURE,
  payload: { errorMessage },
});

export const SET_USER_ROLE = "SET_USER_ROLE";
export const setUserRole = (userRole) => ({
  type: SET_USER_ROLE,
  payload: userRole,
});

export const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};

export const SET_COUNTRY_LIST = "SET_COUNTRY_LIST";
export const setCountryList = (countries) => ({
  type: SET_COUNTRY_LIST,
  payload: countries,
});


