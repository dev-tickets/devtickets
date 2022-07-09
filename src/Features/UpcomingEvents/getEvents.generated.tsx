import * as Types from "../../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetEventsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetEventsQuery = {
  __typename?: "Query";
  eventsCollection?: {
    __typename?: "eventsConnection";
    edges: Array<
      {
        __typename?: "eventsEdge";
        node?: {
          __typename?: "events";
          id: any;
          name: string;
          description: string;
        } | null;
      }
    >;
  } | null;
};

export const GetEventsDocument = gql`
    query getEvents {
  eventsCollection {
    edges {
      node {
        id
        name
        description
      }
    }
  }
}
    `;

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEventsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetEventsQuery,
    GetEventsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(
    GetEventsDocument,
    options,
  );
}
export function useGetEventsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEventsQuery,
    GetEventsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(
    GetEventsDocument,
    options,
  );
}
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<
  typeof useGetEventsLazyQuery
>;
export type GetEventsQueryResult = Apollo.QueryResult<
  GetEventsQuery,
  GetEventsQueryVariables
>;
