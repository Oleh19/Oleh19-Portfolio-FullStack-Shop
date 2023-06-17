import { Reducer } from 'redux';

type AlertAction = {
  type:
    | 'SET_SUCCESS'
    | 'SET_WARNING'
    | 'SET_DANGER'
    | 'SET_INFO'
    | 'SET_ALERT_NULL';
  alert: string;
};

export type AlertState = string | null;

const alertReducer: Reducer<AlertState, AlertAction> = (
  state = null,
  action
) => {
  switch (action.type) {
    case 'SET_SUCCESS':
      return action.alert;

    case 'SET_WARNING':
      return action.alert;

    case 'SET_DANGER':
      return action.alert;

    case 'SET_INFO':
      return action.alert;

    case 'SET_ALERT_NULL':
      return action.alert;

    default:
      return state;
  }
};

export default alertReducer;
