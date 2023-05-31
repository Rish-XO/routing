import React from 'react'
import { useParams } from 'react-router-dom'

function EventDetailPage() {
const params = useParams();
  return (
    <div>
      <h1>Event detail page</h1>
      <p>Event ID: {params.eventId}</p>
    </div>
  )
}

export default EventDetailPage
