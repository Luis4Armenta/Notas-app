import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { login } from '../../actions/auth';
import { AppRouter } from '../../components/routers/AppRouter';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { firebase } from "../../firebase/firebase-config";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../actions/auth', () => ({
  login: jest.fn(),
}));

const store = mockStore({
  auth: {},
  ui: {
    loading: false,
    msgError: null
  },
  notes: {
    active: {
      id: 'abc'
    },
    notes: []
  }
});

store.dispatch = jest.fn();

describe('Pruebas en <AppRouter />', () => {
  test('debe de llamar el login si estoy autenticado', async () => {
    await act( async () => {
      const userCred = await firebase.auth().signInWithEmailAndPassword('test@testing.com', '123456');

      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>
      );
    });

    expect(login).toHaveBeenCalledWith('FFilbdrZ9RdKE9ULDUHURyOW1hJ2', null);
    
    
  });
});