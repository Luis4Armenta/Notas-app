import { types } from "../types/types";

describe('pruebas con nuestros tipos', () => {
  test('debe de tener estos tipos', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    
      uiSetError: '[UI] Set Error',
      uiRemoveError: '[UI] Remove Error',
    
      uiStartLoading: '[UI] Start Loading',
      uiFinishLoading: '[UI] Finish Loading',
    
      notesAddNew: '[NOTES] New note',
      notesActive: '[NOTES] Set active note',
      notesLoad: '[NOTES] Load notes',
      notesUpdated: '[NOTES] Update note',
      notesFileUrl: '[NOTES] Updated image url',
      notesDelete: '[NOTES] Delete note',
      notesLogoutCleaning: '[Notes] LogoutCleaning'
    });
  });
});