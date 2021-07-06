import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch( startLogout() )
  }
  
  return (
    <aside className="journal__sidebar">
      <div className="jorunal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="fa fa-moon"></i>
          <span> Luis Angel</span>
        </h3>

        <button
          className="btn"
          onClick={ handleLogout }
        >
          Logout
        </button>
      </div>

      <div className="journal__new-entry">
        <i className="fa fa-calendar-plus fa-5x"></i>
        <p className="mt-5">
          New entry
        </p>
      </div>

      <JournalEntries />
    </aside>
  )
}
