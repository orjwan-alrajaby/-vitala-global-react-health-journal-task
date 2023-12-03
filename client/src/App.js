import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import routerConfig from "./router/config";

function App() {
  return (
    <div id="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RouterProvider router={routerConfig} />
      </ThemeProvider>
    </div>
  );
}

export default App;
