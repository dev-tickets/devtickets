import { useAuthContext, useUser } from "@/features/Auth/supabase";
import { createClient } from "urql";

export const useURQLClient = () => {
  const { accessToken } = useAuthContext();
  const headers = new Map();
  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }
  headers.set("apiKey", process.env.NEXT_PUBLIC_SUPABASE_API_TOKEN!);
  const urlqlClient = createClient({
    url: process.env.NEXT_PUBLIC_SUPABASE_API_URL + "/graphql/v1",
    fetchOptions: {
      headers: Object.fromEntries(headers),
    },
  });
  return { urlqlClient };
};
