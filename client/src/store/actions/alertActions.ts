export type AlertActions = {
  type:
    | 'SET_SUCCESS'
    | 'SET_WARNING'
    | 'SET_DANGER'
    | 'SET_INFO'
    | 'SET_ALERT_NULL';
  alert: {
    type: string;
    message: string;
  } | null;
};

export const alertSuccess = (message: string):AlertActions => {
  return {
    type: 'SET_SUCCESS',
    alert: { type: 'success', message: message },
  };
};

export const alertWarning = (message: string):AlertActions => {
  return {
    type: 'SET_WARNING',
    alert: { type: 'warning', message: message },
  };
};

export const alertDanger = (message: string):AlertActions => {
  return {
    type: 'SET_DANGER',
    alert: { type: 'danger', message: message },
  };
};

export const alertInfo = (message: string):AlertActions => {
  return {
    type: 'SET_INFO',
    alert: { type: 'info', message: message },
  };
};

export const alertNull = ():AlertActions => {
  return {
    type: 'SET_ALERT_NULL',
    alert: null,
  };
};
