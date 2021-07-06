import React from 'react'
import { store } from './store/store';
import { Provider } from "react-redux";
import { AppRouter } from './components/routers/AppRouter'

export const JournalApp = () => {
  return (
    // Provider de Redux con el store creado anteriormente
    <Provider store={ store }> 
      <AppRouter />
    </Provider>
  )
}
