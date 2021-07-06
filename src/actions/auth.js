import Swal from 'sweetalert2';
import { types } from "../types/types"
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { uiFinishLoading, uiStartLoading } from "./ui";

//  middleware dispatch
export const startLoginEmailPassword = (email, password) => {
  //  después de cierto proceso asincrono se dispara otro dispatch con la data obtenida
  return (dispatch) => {
    dispatch(uiStartLoading());
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(uiFinishLoading());
        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch(e => {
        dispatch(uiFinishLoading());
        Swal.fire('Error', e.message, 'error');
      });
  }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name
        });
        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch(e => {
        Swal.fire('Error', e.message, 'error');
      });
  }
}

export const startGoogleLogin = () => {
  //thunk provee el dispatch
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(
          login(user.uid, user.displayName)
        )
      });
  };
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch(logout())
  } 
}

export const logout = () => ({
  type: types.logout
});