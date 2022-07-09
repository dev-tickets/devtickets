import * as Types from "../../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
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
export type CreateEventMutationFn = Apollo.MutationFunction<
  CreateEventMutation,
  CreateEventMutationVariables
>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      eventInsertInput: // value for 'eventInsertInput'
 *   },
 * });
 */
export function useCreateEventMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateEventMutation,
    CreateEventMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(
    CreateEventDocument,
    options,
  );
}
export type CreateEventMutationHookResult = ReturnType<
  typeof useCreateEventMutation
>;
export type CreateEventMutationResult = Apollo.MutationResult<
  CreateEventMutation
>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<
  CreateEventMutation,
  CreateEventMutationVariables
>;
