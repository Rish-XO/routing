import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/events", element: <EventsPage /> },
  { path: "events/:eventId", element: <EventDetailPage /> },
  { path: "/events/new", element: <NewEventPage /> },
]);

function App() {
  return <div></div>;
}

export default App;
