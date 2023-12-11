import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainScreen from "./Components/MainScreen/MainScreen";
import AboutUs from "./Components/AboutUs/AboutUs";
import CarsPage from "./Components/ProductsPage/CarsPage";
import CarFullPage from "./Components/ProductsPage/CarFullPage";

const router = createBrowserRouter([
  { path: "/", element: <MainScreen /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/cars", element: <CarsPage /> },
  { path: "/car", element: <CarFullPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
