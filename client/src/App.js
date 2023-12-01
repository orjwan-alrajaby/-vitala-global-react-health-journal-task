import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello home!</div>,
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
    <div id="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
