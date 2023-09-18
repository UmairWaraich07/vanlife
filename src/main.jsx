import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  defer,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import App from "./App";
import VanDetails from "./pages/VanDetails/VanDetails";
import Host from "./pages/Host/Host";
import HostVans from "./pages/HostVans/HostVans";
import HostReviews from "./pages/HostReviews/HostReviews";
import HostIncome from "./pages/HostIncome/HostIncome";
import HostDashboard from "./pages/HostDashboard/HostDashboard";
import HostVanDetails from "./pages/HostVans/HostVanDetails/HostVanDetails";
import HostVanDetailsDetail from "./pages/HostVans/HostVanDetailsDetail/HostVanDetailsDetail";
import HostVanDetailsPricing from "./pages/HostVans/HostVanDetailsPricing/HostVanDetailsPricing";
import HostVanDetailsPhotos from "./pages/HostVans/HostVanDetailsPhotos/HostVanDetailsPhotos";
import Error from "./pages/Error/Error";
import { getHostVans, getVan, getVans } from "./api";
import Login, { loginLoader } from "./pages/Login/Login";
import { loginAction, requireAuth } from "./utils";
localStorage.setItem("isLoggedIn", true);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="host" element={<Host />}>
        <Route
          index
          element={<HostDashboard />}
          loader={async ({ request }) => await requireAuth(request)}
        />

        <Route
          path="vans"
          element={<HostVans />}
          loader={async ({ request }) => {
            await requireAuth(request);
            return defer({ hostVans: getHostVans() });
          }}
        />

        <Route
          path="reviews"
          element={<HostReviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />

        <Route
          path="income"
          element={<HostIncome />}
          loader={async ({ request }) => await requireAuth(request)}
        />

        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={async ({ params, request }) => {
            await requireAuth(request);
            return defer({ van: getVan(params.id) });
          }}
        >
          <Route index="vans/:id" element={<HostVanDetailsDetail />} />
          <Route path="pricing" element={<HostVanDetailsPricing />} />
          <Route path="photos" element={<HostVanDetailsPhotos />} />
        </Route>
      </Route>
      <Route path="about" element={<About />} />

      <Route
        path="vans"
        element={<Vans />}
        loader={() => {
          return defer({ vans: getVans() });
        }}
      />

      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={async ({ params }) => {
          return defer({ vans: getVan(params.id) });
        }}
      />

      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />

      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
