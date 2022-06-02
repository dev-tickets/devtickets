import * as Types from "../../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
          description?: string | null;
          start_date?: any | null;
          end_date?: any | null;
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
        end_date
        communities {
          name
        }
      }
    }
  }
}
    `;

export function useGetMyEventsQuery(
  options?: Omit<Urql.UseQueryArgs<GetMyEventsQueryVariables>, "query">,
) {
  return Urql.useQuery<GetMyEventsQuery>({
    query: GetMyEventsDocument,
    ...options,
  });
}
