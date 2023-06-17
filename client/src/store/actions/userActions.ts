interface SetUserDetailsAction {
  type: 'SET_USER';
  user: any;
}

interface GetUserDetailsAction {
  type: 'GET_USER';
}

interface SetUserNull {
  type: 'SET_USER_NULL';
  user: null;
}

export const setUserDetails = (user: any): SetUserDetailsAction => {
  return {
    type: 'SET_USER',
    user,
  };
};

export const getUserDetails = (): GetUserDetailsAction => {
  return {
    type: 'GET_USER',
  };
};

export const setUserNull = (): SetUserNull => {
  return {
    type: 'SET_USER_NULL',
    user: null,
  };
};
