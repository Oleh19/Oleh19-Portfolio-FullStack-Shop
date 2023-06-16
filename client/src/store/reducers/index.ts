import { CombinedState, combineReducers, Reducer } from 'redux';
import userReducer, { UserState, UserAction } from './userReducer';

interface RootState {
  user: UserState | null;
}

const myReducers: Reducer<
  CombinedState<RootState>,
  UserAction
> = combineReducers<RootState>({
  user: userReducer,
});

export default myReducers;


