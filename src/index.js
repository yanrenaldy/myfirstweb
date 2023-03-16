import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import News from "./pages/News";
import Home from "./pages/Home";
import History from "./pages/History";
import App from "./App";
import Facility from "./pages/Facility";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "berita",
        element: <News />,
      },
      {
        index: "true",
        element: <Home />,
      },
      {
        path: "tentang",
        element: <History />,
      },
      {
        path: "facility",
        element: <Facility />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
