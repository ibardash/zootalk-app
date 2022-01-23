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
  id: Scalars['String'];
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
  id: Scalars['String'];
  poster: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['Boolean']>;
  createUser?: Maybe<User>;
  postMessage?: Maybe<Message>;
};


export type MutationCreateUserArgs = {
  name: Scalars['String'];
  zooId: Scalars['String'];
};


export type MutationPostMessageArgs = {
  chatId: Scalars['String'];
  content: Scalars['String'];
  poster: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
  zoo?: Maybe<Zoo>;
  zoos?: Maybe<Array<Zoo>>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryZooArgs = {
  location: Location;
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['Boolean']>;
  messagePosted?: Maybe<Message>;
};

export type User = {
  __typename?: 'User';
  chat?: Maybe<Chat>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  zoo?: Maybe<Zoo>;
};

export type Zoo = {
  __typename?: 'Zoo';
  id: Scalars['String'];
  location: Location;
  name?: Maybe<Scalars['String']>;
  visitors?: Maybe<Array<Maybe<User>>>;
};
