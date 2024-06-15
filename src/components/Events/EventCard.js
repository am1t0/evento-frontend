import React from 'react'
import '../../styles/Events/EventCard.css'

export default function EventCard({event}) {

    return (
        <div class="event-card">
            <img src={event.image_url} alt="Event Image" class="event-image" />
            <div class="event-details">
                <div class="event-info">
                    <span class="event-registered">👥 {event.registered} registered</span>
                    <span class="event-rating">⭐ {event.ratings}</span>
                </div>
                <div class="event-header">
                    <h3 class="event-title">{event.title}</h3>
                    <p class="event-description">{event.description}</p>
                </div>
                <p class="event-date">
                    <i class="fa-solid fa-calendar"></i>
                    {event.date}
                </p>
                <p class="event-location">
                    <i class="fa-solid fa-location-dot"></i>
                    {event.location}
                </p>
                {/* <div class="event-host">
            Hosted by XYZ
        </div> */}
            </div>
        </div>
    )
}
