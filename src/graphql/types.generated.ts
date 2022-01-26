export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['ID'];
  messages?: Maybe<Array<Message>>;
  zoo?: Maybe<Zoo>;
};

export enum Location {
  Centre = 'CENTRE',
  East = 'EAST',
  West = 'WEST'
}

export type Message = {
  __typename?: 'Message';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  sender?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  postMessage?: Maybe<Message>;
};


export type MutationCreateUserArgs = {
  avatar?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  zooId: Scalars['String'];
};


export type MutationPostMessageArgs = {
  chatId: Scalars['String'];
  content: Scalars['String'];
  senderId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  zoos?: Maybe<Array<Zoo>>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  messagePosted?: Maybe<Message>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  chat?: Maybe<Chat>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** @deprecated picture is deprecated, use avatar instead */
  picture?: Maybe<Scalars['String']>;
  zoo?: Maybe<Zoo>;
};

/** A representation of Zoo */
export type Zoo = {
  __typename?: 'Zoo';
  /** uuid format */
  id: Scalars['ID'];
  location: Location;
  name?: Maybe<Scalars['String']>;
  visitors?: Maybe<Array<Maybe<User>>>;
};
