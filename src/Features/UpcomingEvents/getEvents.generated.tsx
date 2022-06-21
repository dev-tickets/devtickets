import * as Types from "../../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export function useGetEventsQuery(
  options?: Omit<Urql.UseQueryArgs<GetEventsQueryVariables>, "query">,
) {
  return Urql.useQuery<GetEventsQuery>({
    query: GetEventsDocument,
    ...options,
  });
}
