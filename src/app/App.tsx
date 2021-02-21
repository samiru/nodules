import React from "react";
import ReactDOM from "react-dom";
import { Socket } from "./components/Socket";
import { Nodule } from "./components/Nodule";

interface Patch {
  nodules: [];
}

const App = () => {
  const nodules: Nodule.Model[] = [
    {
      sockets: [
        {
          type: Socket.Type.Input,
        },
        {
          type: Socket.Type.Input,
        },
      ],
    },
    {
      sockets: [{ type: Socket.Type.Output }],
    },
  ];

  return (
    <>
      {nodules.map((nodule, index) => {
        return (
          <Nodule.Component key={`connector-${index}`} {...nodule}>
            XXX
          </Nodule.Component>
        );
      })}
    </>
  );
};

export { App };
