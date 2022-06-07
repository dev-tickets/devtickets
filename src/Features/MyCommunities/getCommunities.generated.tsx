import * as Types from "../../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export function useGetCommunitiesQuery(
  options?: Omit<Urql.UseQueryArgs<GetCommunitiesQueryVariables>, "query">,
) {
  return Urql.useQuery<GetCommunitiesQuery>({
    query: GetCommunitiesDocument,
    ...options,
  });
}
