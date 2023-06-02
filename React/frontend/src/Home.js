import React, { Suspense } from "react";

import axios from "axios";

import { Await, defer, useLoaderData } from "react-router-dom";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  const loaderData = useLoaderData();

  return (
    <div>
      <h1>Home Wating for Hello</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={loaderData.msgContent}>
          {(msgContent) => (
            <div>
              <h2>{msgContent.msg}</h2>
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default Home;

export async function loader({ params }) {
  return defer({ msgContent: getHello() });
}

async function getHello() {
  const response = await axios.get("/api/hello", {});

  return response.data;
}
