import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../../actions/auth', () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn()
}));

const store = mockStore({
  auth: {},
  ui: {
    loading: false,
    msgError: null
  }
});

store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <LoginScreen />
    </MemoryRouter>
  </Provider>
);

describe('Pruebas en <LoginScreen />', () => {
  afterEach(() => {
    store.clearActions();
    jest.clearAllMocks();
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de disparar la acción de startGoogleLogin', () => {
    wrapper.find('.google-btn').prop('onClick')();

    expect(startGoogleLogin).toHaveBeenCalled();
  });

  test('debe de disparar el startLgoin con los respectivos argumentos', () => {
    wrapper.find('form').prop('onSubmit')({preventDefault(){}});

    expect(startLoginEmailPassword).toHaveBeenCalledWith('example@email.com', '123456');
  });

});