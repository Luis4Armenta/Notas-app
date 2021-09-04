import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';
import { Sidebar } from '../../../components/journal/Sidebar';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../../actions/auth', () => ({
  startLogout: jest.fn(),
}));
jest.mock('../../../actions/notes', () => ({
  startNewNote: jest.fn(),
}));

const store = mockStore({
  auth: {
    uid: '1',
    name: 'Jorge'
  },
  ui: {
    loading: false,
    msgError: null
  },
  notes: {
    active: null,
    notes: []
  }
});

store.dispatch = jest.fn();
const wrapper = mount(
  <Provider store={store}>
    <Sidebar />
  </Provider>
);


describe('pruebas en <Sidebar />', () => {
  afterEach(() => {
    store.clearActions();
  })
  
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de llamar el startLogout', () => {
    wrapper.find('button').prop('onClick')();

    expect(startLogout).toHaveBeenCalled();
  });

  test('debe de llamar el startNewNote', () => {
    wrapper.find('.journal__new-entry').prop('onClick')();

    expect(startNewNote).toHaveBeenCalled();
  });
});