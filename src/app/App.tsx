import React, { useRef } from "react";
import { Socket } from "./components/Socket";
import { Nodule } from "./components/Nodule";
import { Connector } from "./components/Connector";

interface Patch {
  nodules?: Nodule.Model[];
  connectors?: Connector.Model[];
}

const App = () => {
  const patch: Patch = {};

  patch.nodules = [
    // Nodule 1
    {
      sockets: [
        {
          type: Socket.Type.Input,
          innerRef: useRef(),
        },
        {
          type: Socket.Type.Input,
          innerRef: useRef(),
        },
      ],
    },
    // Nodule 2
    {
      sockets: [{ type: Socket.Type.Output, innerRef: useRef() }],
    },
  ] as Nodule.Model[];

  patch.connectors = [
    {
      socketA: patch.nodules[0].sockets[0],
      socketB: patch.nodules[1].sockets[0],
    },
    {
      socketA: patch.nodules[0].sockets[1],
      socketB: patch.nodules[1].sockets[0],
    },
  ] as Connector.Model[];

  return (
    <>
      {patch.nodules.map((nodule, index) => {
        return (
          <Nodule.Component
            key={`nodule-${index}`}
            id={`nodule-${index}`}
            {...nodule}
          >
            NODULE
          </Nodule.Component>
        );
      })}
      {patch.connectors.map((connector, index) => {
        return (
          <Connector.Component key={`connector-${index}`} {...connector} />
        );
      })}
    </>
  );
};

export { App };
