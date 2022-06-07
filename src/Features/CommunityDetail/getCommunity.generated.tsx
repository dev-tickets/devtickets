import * as Types from "../../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type CommunityQueryVariables = Types.Exact<{
  slug?: Types.InputMaybe<Types.Scalars["String"]>;
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
    query Community($slug: String) {
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

export function useCommunityQuery(
  options?: Omit<Urql.UseQueryArgs<CommunityQueryVariables>, "query">,
) {
  return Urql.useQuery<CommunityQuery>({
    query: CommunityDocument,
    ...options,
  });
}
