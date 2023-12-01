import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import { Typography } from '@mui/material';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Typography variant="h2">Hello home!</Typography>,
  },
  {
    path: "/about",
    element: <div>Hello about!</div>,
  },
  {
    path: "/contact",
    element: <div>Hello contact!</div>,
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div id="App">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
