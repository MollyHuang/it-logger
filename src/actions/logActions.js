import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_LOADING,
  LOGS_ERROR
} from './types';

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };

// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  }
  catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add new log
export const addLog = (log) => async dispatch => {
  try {
    setLoading();
    // console.log("log=", log)

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  }
  catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Delete log from server
export const deleteLog = (id) => async dispatch => {
  try {
    setLoading();
    // console.log("[deleteLog] log=", log)

    const res = await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  }
  catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}