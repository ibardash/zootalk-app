import * as Types from '../../graphql/types.generated';

import { gql } from '@apollo/client';
import { MessageFragmentDoc } from './messageFragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ChatQueryVariables = Types.Exact<{
  userId: Types.Scalars['String'];
}>;


export type ChatQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, chat?: { __typename?: 'Chat', id: string, messages?: Array<{ __typename?: 'Message', id: string, content?: string | null | undefined, poster: string }> | null | undefined } | null | undefined } | null | undefined };


export const ChatDocument = gql`
    query chat($userId: String!) {
  user(id: $userId) {
    id
    chat {
      id
      messages {
        ...message
      }
    }
  }
}
    ${MessageFragmentDoc}`;

/**
 * __useChatQuery__
 *
 * To run a query within a React component, call `useChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useChatQuery(baseOptions: Apollo.QueryHookOptions<ChatQuery, ChatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatQuery, ChatQueryVariables>(ChatDocument, options);
      }
export function useChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatQuery, ChatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatQuery, ChatQueryVariables>(ChatDocument, options);
        }
export type ChatQueryHookResult = ReturnType<typeof useChatQuery>;
export type ChatLazyQueryHookResult = ReturnType<typeof useChatLazyQuery>;
export type ChatQueryResult = Apollo.QueryResult<ChatQuery, ChatQueryVariables>;