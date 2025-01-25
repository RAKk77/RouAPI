import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Info } from "./Pages/index";
import RootLayout from "./Layout/RootLayout";
import AboutLayout from "./Layout/AboutLayout";
import UserLayout from "./Layout/UserLayout";
import User, { Userloader } from "./Pages/User/User";
import UserDetail, { UserloaderDetail } from "./Pages/User/UserDetail";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "About",
        element: <AboutLayout />,
        children: [
          {
            path: "Vission",
            element: <h1>Vission</h1>,
          },
          {
            path: "Mission",
            element: <h1>MIssion</h1>,
          },
          {
            path: "Goal",
            element: <h1>Goal</h1>,
          },
        ],
      },
      {
        path: "Info",
        element: <Info />,
      },
      {
        path: "User",
        element: <UserLayout />,
        children: [
          {
            index: true,
            element: <User />,
            loader: Userloader,
          },
          {
            path: ":id",
            element: <UserDetail />,
            loader: UserloaderDetail,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={Routers}></RouterProvider>;
}

export default App;
