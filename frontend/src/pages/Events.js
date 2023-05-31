import React from 'react'
import { Link } from 'react-router-dom'

const DUMMY_EVENTS = [
    {
        id:'e1',
        title: 'Some event'
    },
    {
        id:'e2',
        title: 'another event'
    }
]

function EventsPage() {
  return (
    <div>
      <h1>Events page</h1>
      <ul>
        {
        DUMMY_EVENTS.map((event) => <li key={event.id}> <Link to={event.id}>{event.title}</Link></li>)
        }
      </ul>
    </div>
  )
}

export default EventsPage
 