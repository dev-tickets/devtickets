import * as Types from "../../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type CreateCommunityMutationVariables = Types.Exact<{
  communitiesInsertInput: Types.CommunitiesInsertInput;
}>;

export type CreateCommunityMutation = {
  __typename?: "Mutation";
  insertIntocommunitiesCollection?: {
    __typename?: "communitiesInsertResponse";
    records: Array<
      {
        __typename?: "communities";
        id: any;
        created_at?: any | null;
        name: string;
        slug: string;
        description: string;
        status: string;
      }
    >;
  } | null;
};

export const CreateCommunityDocument = gql`
    mutation CreateCommunity($communitiesInsertInput: communitiesInsertInput!) {
  insertIntocommunitiesCollection(objects: [$communitiesInsertInput]) {
    records {
      id
      created_at
      name
      slug
      description
      status
    }
  }
}
    `;
export type CreateCommunityMutationFn = Apollo.MutationFunction<
  CreateCommunityMutation,
  CreateCommunityMutationVariables
>;

/**
 * __useCreateCommunityMutation__
 *
 * To run a mutation, you first call `useCreateCommunityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommunityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommunityMutation, { data, loading, error }] = useCreateCommunityMutation({
 *   variables: {
 *      communitiesInsertInput: // value for 'communitiesInsertInput'
 *   },
 * });
 */
export function useCreateCommunityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCommunityMutation,
    CreateCommunityMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCommunityMutation,
    CreateCommunityMutationVariables
  >(CreateCommunityDocument, options);
}
export type CreateCommunityMutationHookResult = ReturnType<
  typeof useCreateCommunityMutation
>;
export type CreateCommunityMutationResult = Apollo.MutationResult<
  CreateCommunityMutation
>;
export type CreateCommunityMutationOptions = Apollo.BaseMutationOptions<
  CreateCommunityMutation,
  CreateCommunityMutationVariables
>;
