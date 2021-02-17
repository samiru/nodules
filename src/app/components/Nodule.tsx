import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

const Nodule = (props) => {
  console.log({ props });

  return (
    <Draggable>
      {props.children}
    </Draggable>
  );
};

export { Nodule };
