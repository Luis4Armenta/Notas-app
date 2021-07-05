import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div 
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://revistaunica.com.mx/wp-content/uploads/2020/08/ETvGTIwX0AAd-jI.jpg-large.jpg)'
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Un Nuevo día
        </p>
        <p className="journal__entry-content">
          Et culpa voluptate deserunt elit dolor quis Lorem laborum elit occaecat ea. 
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
