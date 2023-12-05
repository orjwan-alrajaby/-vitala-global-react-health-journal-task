import {
  createBrowserRouter,
} from "react-router-dom";
import { Typography } from '@mui/material';
import { StandardLayout } from 'components/layouts';
import { HomePage, CreateActivityPage, MyActivitiesPage } from 'components/pages';
import { NAV_LINKS } from "constants/links";
import { ActivityContextProvider } from "context"

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <StandardLayout />,
    children: [
      {
        path: NAV_LINKS.home.href,
        index: true,
        element: <HomePage />,
      },
      {
        path: NAV_LINKS.myActivities.href,
        element: <ActivityContextProvider>
          <MyActivitiesPage />
        </ActivityContextProvider>,
      },
      {
        path: NAV_LINKS.createActivity.href,
        element: <ActivityContextProvider><CreateActivityPage /></ActivityContextProvider>,
      },
      {
        path: NAV_LINKS.myGoals.href,
        element: <div>Hello about!</div>,
      },
    ],
  },
]);

export default routerConfig