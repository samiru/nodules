import { Coordinate } from "./types";

export const usePosition = (element: HTMLElement): Coordinate => {
  const { left: x, top: y } = element.getBoundingClientRect();
  return { x, y };
}
