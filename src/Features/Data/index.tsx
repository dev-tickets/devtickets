import { useAuthContext } from "@/features/Auth/supabase";
import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_SUPABASE_API_URL + "/graphql/v1";

import { ApolloLink } from "@apollo/client";

const useAuthLink = () => {
  const { accessToken } = useAuthContext();
  const authHeaders = new Map();
  if (accessToken) {
    authHeaders.set("Authorization", `Bearer ${accessToken}`);
  }
  authHeaders.set("apiKey", process.env.NEXT_PUBLIC_SUPABASE_API_TOKEN!);

  const parsedHeaders = Object.fromEntries(authHeaders);
  return new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        ...parsedHeaders,
      },
    });

    return forward(operation);
  });
};

const httpLink = new HttpLink({ uri: API_URL });

export const useApolloClient = () => {
  const authLink = useAuthLink();
  const link = from([
    authLink,
    httpLink,
  ]);

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    connectToDevTools: process.env.NODE_ENV !== "production",
    link,
  });

  return { apolloClient };
};
