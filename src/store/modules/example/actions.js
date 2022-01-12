import * as types from '../types';

export function resizeRequest() {
  return {
    type: types.RESIZE_REQUEST,
  };
}

export function resizeSuccess() {
  return {
    type: types.RESIZE_SUCCESS,
  };
}

export function resizeFailure() {
  return {
    type: types.RESIZE_FAILURE,
  };
}
