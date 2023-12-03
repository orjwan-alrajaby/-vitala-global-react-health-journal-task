import {
  createBrowserRouter,
} from "react-router-dom";
import { Typography } from '@mui/material';
import { StandardLayout } from 'components/layouts';
import { HomePage, CreateActivityPage } from 'components/pages';
import { NAV_LINKS } from "constants/links"

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
        path: NAV_LINKS.myActivity.href,
        element: <Typography variant="h2">Hello activities!</Typography>,
      },
      {
        path: NAV_LINKS.createActivity.href,
        element: <CreateActivityPage />,
      },
      {
        path: NAV_LINKS.myGoals.href,
        element: <div>Hello about!</div>,
      },
    ],
  },
]);

export default routerConfig