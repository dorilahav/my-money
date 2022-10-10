import {QueryClient, QueryClientProvider as ReactQueryClientProvider} from '@tanstack/react-query';

interface QueryClientProviderProps extends PropsWithChildren {}

const queryClient = new QueryClient();

export const QueryClientProvider = ({children}: QueryClientProviderProps) => {
  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>;
};
