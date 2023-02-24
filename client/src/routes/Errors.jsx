import React from "react";
import Header from "../component/Header";

const Errors = () => {
  return (
    <div>
      <Header
        heading="404"
        cls="light-btn"
        btn="Back To Home"
        error="error"
        text="We are sorry. But the page you are looking for cannot be found."
      />
    </div>
  );
};

export default Errors;
