import { userConstants } from "../_constants";

const initialState = {
  userToken: null,
  userId: null,
};
export function userAuth(state = initialState, action) {
  switch (action.type) {
    case userConstants.USER_TOKEN:
      return {
        ...state,
        userToken: action.payload,
      };
    case userConstants.USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
}
