import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import { DefaultProps } from "../common/Util";

export namespace Connector {
  export enum Type {
    Input = "Input",
    Output = "Output",
  };

  export interface Model {
    type: Type
  }

  export type Props = Model & DefaultProps;

  export const Component = (props: Props) => {
    const { type } = props;

    console.log({ type });

    return (
      <div>
        ({type})
      </div>
    );
  };
}
