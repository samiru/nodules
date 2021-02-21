import React from "react";
import { DefaultProps } from "../common/Util";
import { Socket } from "./Socket";

export namespace Connector {
  export interface Model {
    socketA: Socket.Model,
    socketB: Socket.Model,
  }

  export type Props = Model & DefaultProps;

  export const Component = (props: Props) => {
    const { socketA, socketB } = props;

    console.log({ socketA, socketB });

    return (
      <div>
        [{ socketA.type }, { socketB.type }]
      </div>
    );
  };
}
