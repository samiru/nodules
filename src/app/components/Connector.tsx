import React, { RefObject, useEffect } from "react";
import { DefaultProps } from "../common/types";
import { Socket } from "./Socket";
import * as d3 from "d3";
import { usePosition } from "../common/util";

export namespace Connector {
  export interface Model {
    socketA: Socket.Model;
    socketB: Socket.Model;
  }

  export type Props = Model & DefaultProps;

  export const Component = (props: Props) => {
    const { socketA, socketB } = props;

    console.log({ socketA, socketB });

    useEffect(() => {
      const svg = d3.select("svg");
      svg
        .append("circle")
        .attr("cx", 50)
        .attr("cy", 50)
        .attr("r", 40)
        .style("fill", "yellow");

      d3.select(".connector").style("background-color", "orange");

      const source = d3.select(socketA.innerRef.current);
      const target = d3.select(socketB.innerRef.current);

      source.style("background-color", "green");
      target.style("background-color", "cyan");

      console.log({ source, target });

      const { x: sourceX, y: sourceY } = usePosition(source.node());
      console.log({ sourceX, sourceY });

      const { x: targetX, y: targetY } = usePosition(target.node());
      console.log({ targetX, targetY });

      const line = d3.line().context(null);
      const data = [[sourceX, sourceY], [targetX, targetY]];

      svg
        .append("path")
        .attr("d", line(data))
        .attr("stroke", "black");
    }, []);

    return (
      <div className="connector">
        [{socketA.type}, {socketB.type}]
      </div>
    );
  };
}
