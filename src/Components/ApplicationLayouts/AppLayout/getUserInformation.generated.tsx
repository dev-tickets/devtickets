import * as Types from "../../../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export function useGetUserInformationQuery(
  options?: Omit<Urql.UseQueryArgs<GetUserInformationQueryVariables>, "query">,
) {
  return Urql.useQuery<GetUserInformationQuery>({
    query: GetUserInformationDocument,
    ...options,
  });
}
