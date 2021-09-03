import { setError, removeError, uiFinishLoading, uiStartLoading } from "../../actions/ui"
import { types } from "../../types/types";

describe('pruebas en ui-actions', () => {
  test('Todas las acciones deben de funcionar', () => {
    const action = setError('HELP');
    expect(action).toEqual({
      type: types.uiSetError,
      payload: 'HELP'
    });

    const removeErrorAction = removeError();
    const startLoginAction = uiStartLoading();
    const finishLoadingAction = uiFinishLoading();

    expect(removeErrorAction).toEqual({type: types.uiRemoveError});
    expect(startLoginAction).toEqual({type: types.uiStartLoading});
    expect(finishLoadingAction).toEqual({type: types.uiFinishLoading});
  })
  
})
