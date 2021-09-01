import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('pruebas en authReducer', () => {
  test('debe de realizar el login', () => {
    const initState = {};

    const action = {
      type: types.login,
      payload: {
        uid: 'abc',
        displayName: 'Jorge'
      }
    };

    const state = authReducer(initState, action)
    expect(state).toEqual({
      uid: 'abc',
      name: 'Jorge'
    });
  });
  
  test('debe de realizar el logout', () => {
    const initState = {
      uid: 'abc',
      name: 'Jorge'
    };

    const action = {
      type: types.logout,
    };

    const state = authReducer(initState, action)
    expect(state).toEqual({});
  });

  test('No debe de hacer cambios en el state', () => {
    const initState = {
      uid: 'abc',
      name: 'Jorge'
    };

    const action = {
      type: 'dasdasd',
    };

    const state = authReducer(initState, action)
    expect(state).toEqual(initState);
  });
});