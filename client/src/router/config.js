import {
  createBrowserRouter,
} from "react-router-dom";
import { StandardLayout } from 'components/layouts';
import { HomePage, CreateActivityPage, MyActivitiesPage, EditActivityPage, NotFoundPage, DeleteActivityPage } from 'components/pages';
import { ROUTE_LINKS } from "constants/links";
import { ActivityContextProvider } from "context"

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <StandardLayout />,
    children: [
      {
        path: ROUTE_LINKS.home.href,
        index: true,
        element: <ActivityContextProvider><HomePage /></ActivityContextProvider>,
      },
      {
        path: ROUTE_LINKS.myActivities.href,
        element: <ActivityContextProvider>
          <MyActivitiesPage />
        </ActivityContextProvider>,
      },
      {
        path: ROUTE_LINKS.createActivity.href,
        element: <ActivityContextProvider><CreateActivityPage /></ActivityContextProvider>,
      },
      {
        path: ROUTE_LINKS.editActivity.href,
        element: <ActivityContextProvider><EditActivityPage /></ActivityContextProvider>,
      },
      {
        path: ROUTE_LINKS.deleteActivity.href,
        element: <ActivityContextProvider><DeleteActivityPage /></ActivityContextProvider>,
      },
      {
        path: ROUTE_LINKS.notFound.href,
        element: <NotFoundPage />
      }
    ],
  },
]);

export default routerConfig