import * as Types from '../graphql/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type MessagePostedSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type MessagePostedSubscription = { __typename?: 'Subscription', messagePosted?: { __typename?: 'Message', id: string, content?: string | null | undefined } | null | undefined };


export const MessagePostedDocument = gql`
    subscription MessagePosted {
  messagePosted {
    id
    content
  }
}
    `;

/**
 * __useMessagePostedSubscription__
 *
 * To run a query within a React component, call `useMessagePostedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessagePostedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagePostedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMessagePostedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<MessagePostedSubscription, MessagePostedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessagePostedSubscription, MessagePostedSubscriptionVariables>(MessagePostedDocument, options);
      }
export type MessagePostedSubscriptionHookResult = ReturnType<typeof useMessagePostedSubscription>;
export type MessagePostedSubscriptionResult = Apollo.SubscriptionResult<MessagePostedSubscription>;