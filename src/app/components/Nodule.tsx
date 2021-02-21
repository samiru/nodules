import React from "react";
import Draggable from "react-draggable";
import { DefaultProps } from "../common/Util";
import { Socket } from "./Socket";

export namespace Nodule {
  export interface Model {
    sockets: Socket.Model[];
  }

  export type Props = Model & DefaultProps;

  export const Component = (props: Props) => {
    const { sockets } = props;

    return (
      <Draggable>
        <div>
          <div>{props.children}</div>
          <div>
            {sockets.map((socket, index) => {
              return (
                <Socket.Component key={`connector-${index}`} {...socket} />
              );
            })}
          </div>
        </div>
      </Draggable>
    );
  };
}

