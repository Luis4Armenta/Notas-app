import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes_content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        >
        </textarea>

        <div className="notes__image">
          <img
            src="https://guiauniversitaria.mx/wp-content/uploads/2020/08/%C2%BFTu-michi-te-quiere-tanto-como-piensas_-Identifica-sus-muestras-de-cari%C3%B1o.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  )
}
