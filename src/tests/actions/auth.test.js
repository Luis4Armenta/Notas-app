import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { login, logout, startLoginEmailPassword, startLogout } from '../../actions/auth';
import { types } from '../../types/types';

describe('Pruebas con las acciones de auth', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  const store = mockStore({
  });

  afterEach(() => {
    store.clearActions();
  })

  const user = {
    uid: 'abc',
    displayName: 'Jorge'
  };

  test('login debe de cargar la información del usuario', () => {
    store.dispatch(login(user.uid, user.displayName));
    const actions = store.getActions();

    expect(actions[0].type).toBe(types.login)
  });

  test('logout debe retirar toda información del usuario del store', () => {
    store.dispatch(login(user.uid, user.displayName));
    store.dispatch(logout());
    const actions = store.getActions();

    expect(actions[1].type).toBe(types.logout);
    expect(actions[1].payload).not.toEqual(user);
  });

  test('debe de realizar startLogout', async () => {
    await store.dispatch(startLogout());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.logout
    });
    expect(actions[1]).toEqual({
      type: types.notesLogoutCleaning
    });
  });

  test('debe de iniciar el startLoginEmailPassword', async () => {
    const userData = {
      user: 'test@testing.com',
      password: '123456'
    };
    
    await store.dispatch(startLoginEmailPassword(userData.user, userData.password))

    const actions = store.getActions();

    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: 'FFilbdrZ9RdKE9ULDUHURyOW1hJ2',
        displayName: null
      }
    });
  });
});