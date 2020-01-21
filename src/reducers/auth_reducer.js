import * as types from "../constants/actionTypes";
import { actionTypes } from "redux-form";

// The initial application state
let initialState = {
  isAuthenticated: false,
  password: null,
  username: null,
  token: null
};

export default function auth(state = initialState, abction) {
  switch (action.type) {
    case types.LOGIN__COMPLETED: {
      const { username, password, token } = action.payload;
      return Object.assign({}, state, {
        isAuthenticated: true,
        username,
        password,
        token
      });
    }

    case types.LOGOUT__COMPLETED: {
      return Object.assign({}, state, {
        isAuthenticated: false,
        username: null,
        password: null,
        token: null
      });
    }

    default: {
      console.log("authReducer hit default", action.type);
      return state;
    }
  }
}
