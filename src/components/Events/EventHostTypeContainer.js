import React from 'react'
import '../../styles/Events/EventHostTypeContainer.css'
import EventHostCard from './EventHostCard'

export default function EventHostTypeContainer() {
    const events = [
        {type:'Tour & travel', tag:'Tour', detail:'Host a tour and travel for peoples to join and enjoy',iClass:'fa-solid fa-earth-americas'},
        {type:'Adventures & Exploration', tag:'Adventure', detail:'Host an adventure activity for thrill-seekers to explore and experience',iClass:'fa-solid fa-mountain-sun'},
        {type:'Workshops & Webinars', tag:'Workshop', detail:'Host a workshop for people to learn new skills and engage in creative activities',iClass:'fa-solid fa-people-group'},
        {type:'Festivals Celebrations', tag:'Festival', detail:'Host a festival event to celebrate culture, music, and community',iClass:'fa-solid fa-hands-praying'},
        {type:'Cultural Events', tag:'Event', detail:'Host a festival event to celebrate culture, music, and community',iClass:'fa-solid fa-wand-magic-sparkles'},
    ];
    
  return (
    <section className='eventHostTypeContainer'>
       <div className='eventHostHead'>
           <h1>Host your Events !</h1>
           <p>Select the event you want to host from below categories</p>
       </div>


       <h1 className='eventHost-text'>Host whatever event you want 😁</h1>
       <div className="eventsToHost">
          {
            events.map((event)=>(
                <EventHostCard eventToHost={event}/>
            ))
          }
       </div>
    </section>
  )
}
