import * as Types from "../../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type CommunityQueryVariables = Types.Exact<{
  slug: Types.Scalars["String"];
}>;

export type CommunityQuery = {
  __typename?: "Query";
  community?: {
    __typename?: "communitiesConnection";
    edges: Array<
      {
        __typename?: "communitiesEdge";
        node?: {
          __typename?: "communities";
          id: any;
          name: string;
          slug: string;
          description: string;
          image?: string | null;
          status: string;
          created_at?: any | null;
          updated_at: any;
          eventsCollection?: {
            __typename?: "eventsConnection";
            edges: Array<
              {
                __typename?: "eventsEdge";
                node?: { __typename?: "events"; id: any; name: string } | null;
              }
            >;
          } | null;
        } | null;
      }
    >;
  } | null;
};

export const CommunityDocument = gql`
    query Community($slug: String!) {
  community: communitiesCollection(filter: {slug: {eq: $slug}}) {
    edges {
      node {
        id
        name
        slug
        description
        image
        status
        created_at
        updated_at
        eventsCollection {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCommunityQuery__
 *
 * To run a query within a React component, call `useCommunityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCommunityQuery(
  baseOptions: Apollo.QueryHookOptions<CommunityQuery, CommunityQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CommunityQuery, CommunityQueryVariables>(
    CommunityDocument,
    options,
  );
}
export function useCommunityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CommunityQuery,
    CommunityQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CommunityQuery, CommunityQueryVariables>(
    CommunityDocument,
    options,
  );
}
export type CommunityQueryHookResult = ReturnType<typeof useCommunityQuery>;
export type CommunityLazyQueryHookResult = ReturnType<
  typeof useCommunityLazyQuery
>;
export type CommunityQueryResult = Apollo.QueryResult<
  CommunityQuery,
  CommunityQueryVariables
>;
