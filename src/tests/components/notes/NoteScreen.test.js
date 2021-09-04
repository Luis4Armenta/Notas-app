import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../../actions/notes', () => ({
  activeNote:  jest.fn()
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
    active: {
      id: 1234,
      title: 'hola',
      body: 'mundo',
      date: 0
    },
    notes: []
  }
});

store.dispatch = jest.fn();
const wrapper = mount(
  <Provider store={store}>
    <NoteScreen />
  </Provider>
);

describe('Pruebas en <NoteScreen />', () => {
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de disparar el activeNote', () => {
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'Hola de nuevo'
      }
    });

    expect(activeNote).toHaveBeenLastCalledWith(
      1234,
      {
        body: 'mundo',
        title: 'Hola de nuevo',
        id: 1234,
        date: 0
      }
    );
  })
  
  
});