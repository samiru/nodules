import React, { ReactChild, ReactChildren } from 'react';

export interface DefaultProps {
  key: string;
  id?: string;
  name?: string;
  children?: ReactChild | ReactChildren;
}

export interface InnerRef {
  innerRef: React.RefObject<any>;
}

export interface Coordinate {
  x: number;
  y: number;
}
