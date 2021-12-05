import React, { useState } from "react";

import Home from "../../images/Home1.jpg";

const LandingPage = () => {
  return (
    <div
      className="col-12"
      id="landing-page"
      style={{ backgroundImage: `url(${Home})` }}
    >
      <span>Test</span>
    </div>
  );
};

export default LandingPage;
