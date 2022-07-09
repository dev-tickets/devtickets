import * as Types from "../../../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GeTopBarUserInformationQueryVariables = Types.Exact<
  { [key: string]: never }
>;

export type GeTopBarUserInformationQuery = {
  __typename?: "Query";
  super_adminsCollection?: {
    __typename?: "super_adminsConnection";
    edges: Array<
      {
        __typename?: "super_adminsEdge";
        node?: { __typename?: "super_admins"; id: any } | null;
      }
    >;
  } | null;
};

export const GeTopBarUserInformationDocument = gql`
    query geTopBarUserInformation {
  super_adminsCollection {
    edges {
      node {
        id
      }
    }
  }
}
    `;

/**
 * __useGeTopBarUserInformationQuery__
 *
 * To run a query within a React component, call `useGeTopBarUserInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGeTopBarUserInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGeTopBarUserInformationQuery({
 *   variables: {
 *   },
 * });
 */
export function useGeTopBarUserInformationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GeTopBarUserInformationQuery,
    GeTopBarUserInformationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GeTopBarUserInformationQuery,
    GeTopBarUserInformationQueryVariables
  >(GeTopBarUserInformationDocument, options);
}
export function useGeTopBarUserInformationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GeTopBarUserInformationQuery,
    GeTopBarUserInformationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GeTopBarUserInformationQuery,
    GeTopBarUserInformationQueryVariables
  >(GeTopBarUserInformationDocument, options);
}
export type GeTopBarUserInformationQueryHookResult = ReturnType<
  typeof useGeTopBarUserInformationQuery
>;
export type GeTopBarUserInformationLazyQueryHookResult = ReturnType<
  typeof useGeTopBarUserInformationLazyQuery
>;
export type GeTopBarUserInformationQueryResult = Apollo.QueryResult<
  GeTopBarUserInformationQuery,
  GeTopBarUserInformationQueryVariables
>;
