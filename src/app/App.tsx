import React from "react";
import ReactDOM from "react-dom";
import { Socket } from "./components/Socket";
import { Nodule } from "./components/Nodule";

interface Stage {
  nodules: [];
}

const App = () => {
  const nodules: Nodule.Model[] = [
    {
      connectors: [
        {
          type: Socket.Type.Input,
        },
        {
          type: Socket.Type.Input,
        },
      ],
    },
    {
      connectors: [{ type: Socket.Type.Output }],
    },
  ];

  return (
    <>
      {nodules.map((nodule, index) => {
        return (
          <Nodule.Component key={`connector-${index}`} connectors={nodule.connectors}>
            XXX
          </Nodule.Component>
        );
      })}
    </>
  );
};

export { App };
