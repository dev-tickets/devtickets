import * as Types from "../../../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetUserInformationQueryVariables = Types.Exact<
  { [key: string]: never }
>;

export type GetUserInformationQuery = {
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

export const GetUserInformationDocument = gql`
    query getUserInformation {
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
 * __useGetUserInformationQuery__
 *
 * To run a query within a React component, call `useGetUserInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInformationQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInformationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserInformationQuery,
    GetUserInformationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUserInformationQuery,
    GetUserInformationQueryVariables
  >(GetUserInformationDocument, options);
}
export function useGetUserInformationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserInformationQuery,
    GetUserInformationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserInformationQuery,
    GetUserInformationQueryVariables
  >(GetUserInformationDocument, options);
}
export type GetUserInformationQueryHookResult = ReturnType<
  typeof useGetUserInformationQuery
>;
export type GetUserInformationLazyQueryHookResult = ReturnType<
  typeof useGetUserInformationLazyQuery
>;
export type GetUserInformationQueryResult = Apollo.QueryResult<
  GetUserInformationQuery,
  GetUserInformationQueryVariables
>;
