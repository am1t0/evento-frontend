import React from 'react'
import FilterOptions from './FilterOptions'
import AllEventsCard from './AllEventsCard'
import '../../styles/particular-event/ParticularEventsSection.css'

export default function ParticularEventsSection() {
  return (
    <div className='particular-events-section'>
       <FilterOptions/>
       <AllEventsCard/>
    </div>
  )
}
