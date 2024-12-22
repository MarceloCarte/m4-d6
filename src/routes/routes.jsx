import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Pizza from "../pages/Pizza";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/cart", element: <Cart /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/pizza/001", element: <Pizza /> },
  { path: "/profile", element: <Profile /> },
  { path: "/404", element: <NotFound /> },
  { path: "/*", element: <NotFound /> },
];

export default routes;
