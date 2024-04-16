
import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(fetchUsersSuccess(res.data));
      })
      .catch((err) =>
        dispatch(fetchUsersFailure(err.message))
      );
  };
}

