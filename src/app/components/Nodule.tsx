import React, { ReactChild, ReactChildren } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import { DefaultProps } from "../common/Util";
import { Socket } from "./Socket";

export namespace Nodule {
  export interface Model {
    connectors: Socket.Model[];
  }

  export type Props = Model & DefaultProps;

  export const Component = (props: Props) => {
    const { connectors } = props;

    return (
      <Draggable>
        <div>
          <div>{props.children}</div>
          <div>
            {connectors.map((connector, index) => {
              return (
                <Socket.Component key={`connector-${index}`} type={connector.type} />
              );
            })}
          </div>
        </div>
      </Draggable>
    );
  };
}

