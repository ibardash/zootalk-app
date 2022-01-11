import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export function ApiProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
