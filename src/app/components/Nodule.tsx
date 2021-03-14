import React, { useRef } from "react";
import Draggable from "react-draggable";
import { DefaultProps } from "../common/types";
import { Socket } from "./Socket";

export namespace Nodule {
  export interface Model {
    sockets: Socket.Model[];
  }

  export type Props = Model & DefaultProps;

  export const Component = (props: Props) => {
    const { id, sockets } = props;

    return (
      <Draggable>
        <div id={id}>
          <div>{props.children}</div>
          <div>
            {sockets.map((socket, index) => {
              return (
                <Socket.Component id={``} key={`connector-${index}`} {...socket} />
              );
            })}
          </div>
        </div>
      </Draggable>
    );
  };
}
