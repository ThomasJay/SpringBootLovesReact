import React from "react";

import { Outlet } from "react-router-dom";

/**
 * @author
 * @function RootLayout
 **/

const RootLayout = (props) => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
