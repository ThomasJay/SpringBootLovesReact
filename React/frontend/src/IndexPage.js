import React from "react";

import { Link } from "react-router-dom";

/**
 * @author
 * @function Index
 **/

const Index = (props) => {
  return (
    <div>
      This is your Index page Go to Home<p></p> <Link to="/home">Home</Link>
    </div>
  );
};

export default Index;
