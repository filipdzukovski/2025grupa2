import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFail,
  removeUserRequest,
  removeUserSuccess,
  removeUserFail,
} from "./actions";
import { getUsers, deleteUser } from "./../../../api/usersApi";

export const fetchUsers = (requestParams) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest(requestParams));
    return getUsers(requestParams)
      .then((res) => {
        dispatch(fetchUsersSuccess(res));
        return res;
      })
      .catch((err) => {
        dispatch(fetchUsersFail(err.message));
        return err.message;
      });
  };
};

export const deleteUserFromApp = (requestParams) => {
  return (dispatch) => {
    dispatch(removeUserRequest(requestParams));
    return deleteUser(requestParams)
      .then((res) => {
        dispatch(removeUserSuccess(res));
        return res;
      })
      .catch((err) => {
        dispatch(removeUserFail(err.message));
        return err.message;
      });
  };
};
