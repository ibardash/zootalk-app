import * as Types from '../../graphql/types.generated';

import { gql } from '@apollo/client';
import { MessageFragmentDoc } from './messageFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type PostMessageMutationVariables = Types.Exact<{
  content: Types.Scalars['String'];
  poster: Types.Scalars['String'];
  chatId: Types.Scalars['String'];
}>;


export type PostMessageMutation = { __typename?: 'Mutation', postMessage?: { __typename?: 'Message', id: string, content?: string | null | undefined, poster: string } | null | undefined };


export const PostMessageDocument = gql`
    mutation postMessage($content: String!, $poster: String!, $chatId: String!) {
  postMessage(content: $content, poster: $poster, chatId: $chatId) {
    ...message
  }
}
    ${MessageFragmentDoc}`;
export type PostMessageMutationFn = Apollo.MutationFunction<PostMessageMutation, PostMessageMutationVariables>;

/**
 * __usePostMessageMutation__
 *
 * To run a mutation, you first call `usePostMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postMessageMutation, { data, loading, error }] = usePostMessageMutation({
 *   variables: {
 *      content: // value for 'content'
 *      poster: // value for 'poster'
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function usePostMessageMutation(baseOptions?: Apollo.MutationHookOptions<PostMessageMutation, PostMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostMessageMutation, PostMessageMutationVariables>(PostMessageDocument, options);
      }
export type PostMessageMutationHookResult = ReturnType<typeof usePostMessageMutation>;
export type PostMessageMutationResult = Apollo.MutationResult<PostMessageMutation>;
export type PostMessageMutationOptions = Apollo.BaseMutationOptions<PostMessageMutation, PostMessageMutationVariables>;