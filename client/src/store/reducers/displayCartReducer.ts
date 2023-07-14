type Action =
  | { type: 'GET_CART_DISPLAY_STATE' }
  | { type: 'SET_CART_ON' }
  | { type: 'SET_CART_OFF' };

const displayCartReducer = (state: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case 'GET_CART_DISPLAY_STATE':
      return state;

    case 'SET_CART_ON':
      return true;

    case 'SET_CART_OFF':
      return false;

    default:
      return state;
  }
};

export default displayCartReducer;
