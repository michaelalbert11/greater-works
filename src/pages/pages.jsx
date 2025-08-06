import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../layouts/loader/loader";

// ########## pages

const LandingPage = React.lazy(() => import("../pages/landing_v3/landing"));

const Pages = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<Loader loading={true} />}>
            <LandingPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Pages;
