import React from "react";
import ReactDOM from "react-dom";
import { Connector } from "./components/Connector";
import { Nodule } from "./components/Nodule";

interface Stage {
  nodules: [];
}

const App = () => {
  const nodules: Nodule.Model[] = [
    {
      connectors: [
        {
          type: Connector.Type.Input,
        },
        {
          type: Connector.Type.Input,
        },
      ],
    },
    {
      connectors: [{ type: Connector.Type.Output }],
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
