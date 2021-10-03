import { userConstants } from "../_constants";

const initialState = {
  userToken: null,
  userId: null,
  role: null,
};
export function userAuth(state = initialState, action) {
  switch (action.type) {
    case userConstants.USER_TOKEN:
      return {
        ...state,
        userToken: action.payload,
      };
    case userConstants.USER_INFO:
      return {
        ...state,
        userId: action.payload.userId,
        userToken: action.payload.token,
        role: action.payload.role,
      };
    default:
      return state;
  }
}
