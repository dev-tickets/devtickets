import { createClient } from "urql";
import { useAuthContext, useUser } from "../Auth/supabase";

export const useURQLClient = () => {
  const { accessToken } = useAuthContext();
  const headers = new Headers();
  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }
  headers.set("apiKey", process.env.NEXT_PUBLIC_SUPABASE_API_TOKEN!);

  const urlqlClient = createClient({
    url: process.env.NEXT_PUBLIC_SUPABASE_API_URL + "/graphql/v1",
    fetchOptions: {
      headers,
    },
  });
  return { urlqlClient };
};
