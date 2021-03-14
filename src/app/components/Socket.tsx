import React, { useRef } from "react";
import { DefaultProps, InnerRef } from "../common/types";

export namespace Socket {
  export enum Type {
    Input = "Input",
    Output = "Output",
  };

  export type Model = {
    type: Type;
  } & InnerRef;

  export type Props = Model & DefaultProps;

  export const Component = (props: Props) => {
    const { type, innerRef } = props;

    console.log({ props });

    return (
      <div ref={innerRef}>
        ({type})
      </div>
    );
  };
}
