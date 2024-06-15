import React from 'react'
import EventCard from './EventCard'
import '../../styles/Events/EventSection.css'

export default function EventSection({ event }) {

    return (
        <section className='eventSection'>  
         {/* heading of event type  */}
            <div className="eventType">
                {event.event_type}
            </div>

           {/* list of all events under this event type/category    */}
            <div className="eventList">
                {  
                    event.event_list.map((event) => (
                        <EventCard event={event}/>
                    ))
                }
            </div>
        </section>
    )
}
