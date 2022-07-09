import { useAuthContext } from "@/features/Auth/supabase";
import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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

const useHttpLink = () => {
  return new HttpLink({ uri: API_URL });
};

export const useApolloClient = () => {
  const httpLink = useHttpLink();
  const authLink = useAuthLink();
  const link = from([
    authLink,
    httpLink,
  ]);

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });

  return { apolloClient };
};
