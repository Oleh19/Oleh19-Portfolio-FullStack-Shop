import { CombinedState, combineReducers, Reducer } from 'redux';
import alertReducer, { AlertState } from './alertReducer';
import productReducer from './productReducer';
import userReducer, { UserState, UserAction } from './userReducer';

interface RootState {
  user: UserState | null;
  alert: AlertState | null;
  products: any;
}

const myReducers: Reducer<
  CombinedState<RootState>,
  UserAction
> = combineReducers<RootState>({
  user: userReducer,
  alert: alertReducer,
  products: productReducer,
});

export default myReducers;
