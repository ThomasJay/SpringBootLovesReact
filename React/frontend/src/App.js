import logo from "./logo.svg";
import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Index from "./IndexPage";
import Home, { loader as homeLoader } from "./Home";
import RootLayout from "./RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Index />}></Route>
        <Route path="/home" loader={homeLoader} element={<Home />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
