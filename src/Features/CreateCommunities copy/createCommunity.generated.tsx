import * as Types from "../../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export function useCreateCommunityMutation() {
  return Urql.useMutation<
    CreateCommunityMutation,
    CreateCommunityMutationVariables
  >(CreateCommunityDocument);
}
