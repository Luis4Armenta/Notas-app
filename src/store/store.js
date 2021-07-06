import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk';
import { uiReducer } from "../reducers/uiReducer";

//implementación de compatibilidad entre middlewares y devtools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//  combinando los Reducers
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer
})

//  creando una unidad central de información con createStore
export const store = createStore(
  reducers, //Reducers combinados
  composeEnhancers(
    applyMiddleware( thunk )  //aplicación del middleware
  )
);