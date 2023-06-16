export interface UserState {
    user: any;
  }
  
  export interface UserAction {
      type: 'GET_USER' | 'SET_USER';
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
        return { user: action.user };
  
      default:
        return state;
    }
  };
  
  export default userReducer;