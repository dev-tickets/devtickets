import * as Types from "../../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EventQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars["UUID"]>;
}>;

export type EventQuery = {
  __typename?: "Query";
  event?: {
    __typename?: "eventsConnection";
    edges: Array<
      {
        __typename?: "eventsEdge";
        node?: {
          __typename?: "events";
          id: any;
          name: string;
          description: string;
          city?: string | null;
          country?: any | null;
          start_date: any;
          end_date: any;
          image_link: string;
          address?: string | null;
          map_link?: string | null;
        } | null;
      }
    >;
  } | null;
};

export const EventDocument = gql`
    query Event($id: UUID) {
  event: eventsCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        id
        name
        description
        city
        country
        start_date
        end_date
        image_link
        address
        map_link
      }
    }
  }
}
    `;

export function useEventQuery(
  options?: Omit<Urql.UseQueryArgs<EventQueryVariables>, "query">,
) {
  return Urql.useQuery<EventQuery>({ query: EventDocument, ...options });
}
