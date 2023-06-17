export interface UserState {
  user: any;
}

export interface UserAction {
  type: 'GET_USER' | 'SET_USER' | 'SET_USER_NULL';
  user?: any;
}

const userReducer = (
  state: UserState | null = null,
  action: UserAction
): UserState | null => {
  switch (action.type) {
    case 'GET_USER':
      return state;

    case 'SET_USER':
      return action.user;

    case 'SET_USER_NULL':
      return action.user;

    default:
      return state;
  }
};

export default userReducer;
