import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";

export const Router = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      }
    ]
  },
]);

export default Router;
