import { userConstants } from "../_constants";

const initialState = {
  userToken: null,
};
export function userAuth(state = initialState, action) {
  switch (action.type) {
    case userConstants.USER_TOKEN:
      return {
        ...state,
        userToken: action.payload,
      };
    default:
      return state;
  }
}
