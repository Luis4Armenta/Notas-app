/**

* @jest-environment node

*/

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLoadingNotes, startNewNote, startSaveNote, startUploadImage } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
import * as fs from 'fs';
import { fileUpload } from '../../helpers/fileUpload';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
  auth: {
    uid: 'TESTING'
  }
});

describe('Pruebas con las acciones de notes', () => {
  afterEach(() => {
    store.clearActions();
  });

  test('debe de crear una nueva nota startNewNote', async () => {
    await store.dispatch(startNewNote());

    const actions = store.getActions();
    
    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    });

    const docId = actions[0].payload.id;
    await db.doc(`/TESTING/journal/notes/${docId}`).delete();
  })

  test('startLoadingNotes debe de cargar las notas', async() => {
    await store.dispatch(startLoadingNotes('TESTING'));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array)
    })

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number)
    }
  
    expect(actions[0].payload[0]).toMatchObject(expected)
  });

  test('startSaveNote debe de actualizar la nota', async() => {
    const note = {
      id: '4arGPZ3bd39SqGHujrOc',
      title: 'title',
      body: 'body'
    }

    await store.dispatch(startSaveNote(note));

    const actions = store.getActions();

    expect(actions[0].type).toBe(types.notesUpdated);

    const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();

    expect(docRef.data().title).toBe(note.title);
  });

//   jest.mock('../../helpers/fileUpload', () => ({
//     _esModule: true,
//     default: jest.fn(() => 'https://hola-mundo.com')
//   }));
//   test('startUploading debe de actualizar el url de entry', async() => {
// 
//     fileUpload.mockReturnValue('https://hola-mundo.com');
//     fs.writeFileSync('foto.jpg', '');
//     const file = fs.readFileSync('foto.jpg');
// 
//     await store.dispatch(startUploadImage(file));
//     const docRef = await db.doc(`/TESTING/journal/notes/XGi93phl5NTi66Csvce0`).get()
//     expect(docRef.data().url).toBe('https://hola-mundo.com')
//   });

});