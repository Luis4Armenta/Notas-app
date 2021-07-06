import { types } from "../types/types";

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err
});

export const removeError = (err) => ({
  type: types.uiRemoveError
});

export const uiStartLoading = () => ({
  type: types.uiStartLoading,
});

export const uiFinishLoading = () => ({
  type: types.uiFinishLoading,
})