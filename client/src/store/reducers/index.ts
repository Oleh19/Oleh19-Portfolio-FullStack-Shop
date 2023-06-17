import { CombinedState, combineReducers, Reducer } from 'redux';
import alertReducer, { AlertState } from './alertReducer';
import userReducer, { UserState, UserAction } from './userReducer';

interface RootState {
  user: UserState | null;
  alert: AlertState | null
}

const myReducers: Reducer<
  CombinedState<RootState>,
  UserAction
> = combineReducers<RootState>({
  user: userReducer,
  alert: alertReducer
});

export default myReducers;


