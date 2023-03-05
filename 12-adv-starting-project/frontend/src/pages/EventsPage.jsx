// import { useCallback, useEffect, useState } from "react";
// import { Outlet } from "react-router-dom"
// import EventsList from "../components/EventsList"
// import EventItem from "../components/EventItem";


// const Events = () => {
//     const [events, setEvents] = useState([]);
    
//     const fetchEvents = useCallback (async () => {
//         const url = 'http://localhost:8080/events'
//         const response = await fetch(url)
//         const {events} = await response.json()
//         console.log(events);
//         setEvents(events)
//     },[])

//     useEffect(() => {
//         fetchEvents();
//       }, [fetchEvents]);

//     return (
//         <>
//         <EventsList events={events} />
//         <EventItem event={events[0]} />
//         <Outlet/>
//         </>
//     )
// }

// export default Events

import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {
    const data = useLoaderData()

    if (data.isError) return <p>{data.message}</p>
    const events = data.events

  return (
    <>
      <EventsList events={events} />
    </>
  );
}
export default EventsPage;

export async function loader () {
    const response = await fetch("http://localhost:8080/events");
    // We could return anything we want (ex: a response object)
    // If we fetch, it won't return a promess and we don't need to json it. It is automatically the object expected
    // thanks to the hook.
    if (!response.ok) {
        // return { isError: true, message:'Could not fetch events'}
        throw new Response (JSON.stringify({ message: 'could not fetch'}),{status:500})
    }   else {
        return response;
    }
} 