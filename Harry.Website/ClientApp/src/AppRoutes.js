import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        path: '/about-me',
        element: <AboutMe />
    }
];

export default AppRoutes;
