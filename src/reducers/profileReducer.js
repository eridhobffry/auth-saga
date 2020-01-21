import { PROFILE__REQUESTED__SUCCEEDED } from "../constants/actionTypes";

// The initial application state
let initialState = {
  username: null,
  password: null
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case PROFILE__REQUESTED__SUCCEEDED: {
      const { username, password } = action.payload;
      return Object.assign({}, state, {
        username,
        password
      });
    }

    default:
      return state;
  }
}
