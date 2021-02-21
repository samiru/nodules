import { ReactChild, ReactChildren } from 'react';

export interface DefaultProps {
  key: string;
  children?: ReactChild | ReactChildren;
}
