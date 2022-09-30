import 'react';

declare global {
  export type PropsWithChildren = {
    children: ReactNode;
  };
}
