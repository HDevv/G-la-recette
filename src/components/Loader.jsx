import React, { useState, useEffect } from "react";
import LoaderGIF from "../../eating-cartman.gif";
import "../components/Loader.css";
const Loader = () => {
  return (
    <div>
      <img id="cartman" src={LoaderGIF} alt="" />
    </div>
  );
};

export default Loader;
