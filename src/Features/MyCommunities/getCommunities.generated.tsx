import * as Types from "../../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetCommunitiesQueryVariables = Types.Exact<
  { [key: string]: never }
>;

export type GetCommunitiesQuery = {
  __typename?: "Query";
  communitiesCollection?: {
    __typename?: "communitiesConnection";
    edges: Array<
      {
        __typename?: "communitiesEdge";
        node?: {
          __typename?: "communities";
          id: any;
          name: string;
          description: string;
          slug: string;
        } | null;
      }
    >;
  } | null;
};

export const GetCommunitiesDocument = gql`
    query getCommunities {
  communitiesCollection {
    edges {
      node {
        id
        name
        description
        slug
      }
    }
  }
}
    `;

/**
 * __useGetCommunitiesQuery__
 *
 * To run a query within a React component, call `useGetCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCommunitiesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCommunitiesQuery,
    GetCommunitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCommunitiesQuery, GetCommunitiesQueryVariables>(
    GetCommunitiesDocument,
    options,
  );
}
export function useGetCommunitiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCommunitiesQuery,
    GetCommunitiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCommunitiesQuery, GetCommunitiesQueryVariables>(
    GetCommunitiesDocument,
    options,
  );
}
export type GetCommunitiesQueryHookResult = ReturnType<
  typeof useGetCommunitiesQuery
>;
export type GetCommunitiesLazyQueryHookResult = ReturnType<
  typeof useGetCommunitiesLazyQuery
>;
export type GetCommunitiesQueryResult = Apollo.QueryResult<
  GetCommunitiesQuery,
  GetCommunitiesQueryVariables
>;
