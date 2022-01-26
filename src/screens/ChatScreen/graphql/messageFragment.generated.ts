import * as Types from '../../../graphql/types.generated';

import { gql } from '@apollo/client';
export type MessageFragment = { __typename?: 'Message', id: string, content?: string | null | undefined, sender?: { __typename?: 'User', id: string, name?: string | null | undefined, avatar?: string | null | undefined } | null | undefined };

export const MessageFragmentDoc = gql`
    fragment message on Message {
  id
  content
  sender {
    id
    name
    avatar
  }
}
    `;