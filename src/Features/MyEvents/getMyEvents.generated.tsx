import * as Types from "../../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetMyEventsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetMyEventsQuery = {
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
          start_date: any;
          slug: string;
          end_date: any;
          communities?: { __typename?: "communities"; name: string } | null;
        } | null;
      }
    >;
  } | null;
};

export const GetMyEventsDocument = gql`
    query getMyEvents {
  eventsCollection {
    edges {
      node {
        id
        name
        description
        start_date
        slug
        end_date
        communities {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetMyEventsQuery__
 *
 * To run a query within a React component, call `useGetMyEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyEventsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMyEventsQuery,
    GetMyEventsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMyEventsQuery, GetMyEventsQueryVariables>(
    GetMyEventsDocument,
    options,
  );
}
export function useGetMyEventsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMyEventsQuery,
    GetMyEventsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMyEventsQuery, GetMyEventsQueryVariables>(
    GetMyEventsDocument,
    options,
  );
}
export type GetMyEventsQueryHookResult = ReturnType<typeof useGetMyEventsQuery>;
export type GetMyEventsLazyQueryHookResult = ReturnType<
  typeof useGetMyEventsLazyQuery
>;
export type GetMyEventsQueryResult = Apollo.QueryResult<
  GetMyEventsQuery,
  GetMyEventsQueryVariables
>;
