import React from "react";
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

  patch.connectors = [
    {
      socketA: patch.nodules[0].sockets[0],
      socketB: patch.nodules[1].sockets[0],
    },
    {
      socketA: patch.nodules[0].sockets[1],
      socketB: patch.nodules[1].sockets[0],
    },
  ];

  return (
    <>
      {patch.nodules.map((nodule, index) => {
        return (
          <Nodule.Component key={`nodule-${index}`} {...nodule}>
            XXX
          </Nodule.Component>
        );
      })}
      {patch.connectors.map((connector, index) => {
        return (
          <Connector.Component key={`connector-${index}`} {...connector} />
        )
      })}
    </>
  );
};

export { App };
