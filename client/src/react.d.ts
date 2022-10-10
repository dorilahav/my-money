import 'react';

declare global {
  export interface PropsWithChildren {
    children: ReactNode;
  }
}
