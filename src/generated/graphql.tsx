import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  books?: Maybe<Array<Maybe<Book>>>;
  name?: Maybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Author>;
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['Boolean']>;
  sendMessage?: Maybe<Scalars['String']>;
};


export type MutationSendMessageArgs = {
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['Boolean']>;
  messages: Array<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['Boolean']>;
  messagePosted?: Maybe<Scalars['String']>;
};

export type MessagePostedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessagePostedSubscription = { __typename?: 'Subscription', messagePosted?: string | null | undefined };

export type GetMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMessagesQuery = { __typename?: 'Query', messages: Array<string> };


export const MessagePostedDocument = gql`
    subscription MessagePosted {
  messagePosted
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
export const GetMessagesDocument = gql`
    query GetMessages {
  messages
}
    `;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions?: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;