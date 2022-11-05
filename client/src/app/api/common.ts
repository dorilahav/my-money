import {InvalidateQueryFilters, QueryKey, useQueryClient} from '@tanstack/react-query';

export const useInvalidateQueriesOnSuccess = (queryKey: QueryKey, options?: InvalidateQueryFilters) => {
  const queryClient = useQueryClient();

  return () => {
    queryClient.invalidateQueries(queryKey, options);
  };
};
