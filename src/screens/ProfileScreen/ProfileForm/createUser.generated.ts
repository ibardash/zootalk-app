import * as Types from '../../../graphql/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateUserMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  zooId: Types.Scalars['String'];
  avatar?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, avatar?: string | null | undefined } | null | undefined };


export const CreateUserDocument = gql`
    mutation createUser($name: String!, $zooId: String!, $avatar: String) {
  createUser(name: $name, zooId: $zooId, avatar: $avatar) {
    id
    avatar
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      zooId: // value for 'zooId'
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;