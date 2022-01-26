import * as Types from '../../../../../graphql/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ZoosQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ZoosQuery = { __typename?: 'Query', zoos?: Array<{ __typename?: 'Zoo', id: string, name?: string | null | undefined, location: Types.Location }> | null | undefined };


export const ZoosDocument = gql`
    query zoos {
  zoos {
    id
    name
    location
  }
}
    `;

/**
 * __useZoosQuery__
 *
 * To run a query within a React component, call `useZoosQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoosQuery({
 *   variables: {
 *   },
 * });
 */
export function useZoosQuery(baseOptions?: Apollo.QueryHookOptions<ZoosQuery, ZoosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZoosQuery, ZoosQueryVariables>(ZoosDocument, options);
      }
export function useZoosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZoosQuery, ZoosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZoosQuery, ZoosQueryVariables>(ZoosDocument, options);
        }
export type ZoosQueryHookResult = ReturnType<typeof useZoosQuery>;
export type ZoosLazyQueryHookResult = ReturnType<typeof useZoosLazyQuery>;
export type ZoosQueryResult = Apollo.QueryResult<ZoosQuery, ZoosQueryVariables>;