import {useQuery as useReactQuery} from '@tanstack/react-query';

type QueryKey = string[];
type QueryFn<T> = () => Promise<T>;

interface BaseResult<T, TError> {
  data: T | undefined;
  error: TError | null;
  isInitialFetching: boolean;
  isRefetching: boolean;
  isFetching: boolean;
}

interface InitialFetchingQueryResult<T, TError> extends BaseResult<T, TError> {
  data: undefined;
  error: null;
  isInitialFetching: true;
  isRefetching: false;
  isFetching: true;
}

interface ErrorQueryResult<T, TError> extends BaseResult<T, TError> {
  data: undefined;
  error: TError;
  isInitialFetching: false;
  isRefetching: false;
  isFetching: false;
}

interface ErrorRefetchQueryResult<T, TError> extends BaseResult<T, TError> {
  data: undefined;
  error: TError;
  isInitialFetching: false;
  isRefetching: true;
  isFetching: true;
}

interface SuccessQueryResult<T, TError> extends BaseResult<T, TError> {
  data: T;
  error: null;
  isInitialFetching: false;
  isRefetching: false;
  isFetching: false;
}

interface SuccessRefetchQueryResult<T, TError> extends BaseResult<T, TError> {
  data: T;
  error: null;
  isInitialFetching: false;
  isRefetching: true;
  isFetching: true;
}

export type QueryResult<T, TError = unknown> =
  | InitialFetchingQueryResult<T, TError>
  | ErrorQueryResult<T, TError>
  | ErrorRefetchQueryResult<T, TError>
  | SuccessQueryResult<T, TError>
  | SuccessRefetchQueryResult<T, TError>;

export const useQuery = <T, TError extends Error>(queryKey: QueryKey, queryFn: QueryFn<T>): QueryResult<T, TError> => {
  const {data, error, isInitialLoading, isRefetching, isFetching} = useReactQuery<T, TError>(queryKey, queryFn);

  return {
    data,
    error,
    isInitialFetching: isInitialLoading,
    isRefetching,
    isFetching
  } as QueryResult<T, TError>;
};
