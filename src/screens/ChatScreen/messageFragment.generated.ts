import * as Types from '../../graphql/types.generated';

import { gql } from '@apollo/client';
export type MessageFragment = { __typename?: 'Message', id: string, content?: string | null | undefined, poster: string };

export const MessageFragmentDoc = gql`
    fragment message on Message {
  id
  content
  poster
}
    `;