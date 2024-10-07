import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from './Components/Error/Error'
import App from './App';


const router1 = createBrowserRouter([
  {
    path: "/baseapparel",
    element: <App/>
  },
  {
    path: "/*",
    element: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router1} />
  </React.StrictMode>
)

