import React from "react";
import ReactDOM from "react-dom";
import { Nodule } from "./components/Nodule";

const App = () => {
  return (
    <>
      <Nodule>
        <div>I can now be moved xxx around!</div>
      </Nodule>
      <Nodule>
        <div>I can now be moved yyy around!</div>
      </Nodule>
      <Nodule>
        <div>I can now be moved zzz around!</div>
      </Nodule>
    </>
  );
};

export { App };
