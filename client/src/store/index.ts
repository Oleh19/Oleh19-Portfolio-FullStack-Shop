import { CombinedState, combineReducers, Reducer } from 'redux';
import alertReducer, { AlertState } from './reducers/alertReducer';
import cartReducer from './reducers/cartReducer';
import displayCartReducer from './reducers/displayCartReducer';
import productReducer from './reducers/productReducer';
import userReducer, { UserState, UserAction } from './reducers/userReducer';

interface RootState {
  user: UserState | null;
  alert: AlertState | null;
  products: any;
  cart: any;
  isCart: boolean;
}

const myReducers: Reducer<
  CombinedState<RootState>,
  UserAction
> = combineReducers<RootState>({
  user: userReducer,
  alert: alertReducer,
  products: productReducer,
  cart: cartReducer,
  isCart: displayCartReducer,
});

export default myReducers;
