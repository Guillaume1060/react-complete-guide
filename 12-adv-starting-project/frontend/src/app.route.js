import Home from "./pages/HomePage";
import Events from "./pages/EventsPage";
import EventDetail from "./pages/EvenDetailPage";
import EditEvent from "./pages/EditEventPage";
import NewEvent from "./pages/NewEventPage";
import { loader as eventsLoader } from "./pages/EventsPage";

const appRoute = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Events />,
    loader: eventsLoader,
    children: [
      {
        path: ":id",
        element: <EventDetail />,
        children: [
          {
            path: "edit",
            element: <EditEvent />,
          },
        ],
      },
      {
        path: "new",
        element: <NewEvent />,
      },
    ],
  },
];

export default appRoute;
