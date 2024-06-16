import React from 'react'
import '../../styles/Events/EventHostCard.css'

export default function EventHostCard({eventToHost}) {
  return (
    <div class="host-card">
        <div class="icon-container">
           <i className={eventToHost.iClass}></i>
        </div>
        <div class="host-card-content">
            <h2>{eventToHost.type}</h2>
            <a href="#" class="link">Host {eventToHost.tag} &rarr;</a>
        </div>
        <div class="info-icon">
        <i class="fa-solid fa-circle-info"></i>
        </div>
    </div>
  )
}
