/* eslint-disable default-param-last */
import * as types from '../types';

const initialState = {
  size: window.innerWidth,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.RESIZE_SUCCESS: {
      const newState = { ...state };
      return newState;
    }

    case types.RESIZE_REQUEST: {
      return state;
    }

    case types.RESIZE_FAILURE: {
      return state;
    }

    default: {
      return state;
    }
  }
}
