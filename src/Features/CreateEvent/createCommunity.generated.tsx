import * as Types from "../../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type CreateEventMutationVariables = Types.Exact<{
  eventInsertInput: Types.EventsInsertInput;
}>;

export type CreateEventMutation = {
  __typename?: "Mutation";
  insertIntoeventsCollection?: {
    __typename?: "eventsInsertResponse";
    records: Array<
      {
        __typename?: "events";
        id: any;
        created_at?: any | null;
        name: string;
        description: string;
        status?: string | null;
      }
    >;
  } | null;
};

export const CreateEventDocument = gql`
    mutation CreateEvent($eventInsertInput: eventsInsertInput!) {
  insertIntoeventsCollection(objects: [$eventInsertInput]) {
    records {
      id
      created_at
      name
      description
      status
    }
  }
}
    `;

export function useCreateEventMutation() {
  return Urql.useMutation<CreateEventMutation, CreateEventMutationVariables>(
    CreateEventDocument,
  );
}
