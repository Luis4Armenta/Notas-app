import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { JournalEntry } from '../../../components/journal/JournalEntry';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({});
store.dispatch = jest.fn();

const nota = {
  id: 10,
  date: 0,
  title: 'hola', 
  body: 'mundo',
  url: 'https://algunLugar.com/foto.jpg'
};

const wrapper = mount(
  <Provider store={store}>
    <JournalEntry { ...nota } />
  </Provider>
);

describe('Pruebas en <JournalEntry />', () => {
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de activar la nota', () => {
    wrapper.find('.journal__entry').prop('onClick')();

    expect(store.dispatch).toHaveBeenCalled();
  });
});