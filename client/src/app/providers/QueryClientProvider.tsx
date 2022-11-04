import {QueryClient, QueryClientProvider as ReactQueryClientProvider} from '@tanstack/react-query';

interface QueryClientProviderProps extends PropsWithChildren {}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      refetchOnReconnect: 'always'
    }
  }
});

export const QueryClientProvider = ({children}: QueryClientProviderProps) => {
  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>;
};
