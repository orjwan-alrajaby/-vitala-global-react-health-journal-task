import {
  createBrowserRouter,
} from "react-router-dom";
import { Typography } from '@mui/material';
import { StandardLayout } from 'components/layouts'

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <StandardLayout />,
    children: [
      {
        path: "/my-activities",
        element:
          <Typography variant="h2">Hello home!</Typography>
      },
      {
        path: "/my-goals",
        element: <div>Hello about!</div>,
      },
    ],
  },
]);

export default routerConfig