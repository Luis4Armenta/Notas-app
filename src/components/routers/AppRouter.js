import React from 'react'
import { useEffect } from 'react';
import firebase from 'firebase/app';

import {
  HashRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import { useState } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../../actions/notes';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

        dispatch(startLoadingNotes( user.uid ));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <h1>Wait..</h1>
    ) 
  }
  
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={ isLoggedIn }
            path="/auth"
            component={ AuthRouter }
          />
          <PrivateRoute
            exact
            isAuthenticated={ isLoggedIn }
            path="/"
            component={ JournalScreen }
          />

          <Redirect to="auth/login"/>
        </Switch>
      </div>
    </Router>
  )
}