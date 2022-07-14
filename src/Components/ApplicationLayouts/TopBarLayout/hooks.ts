import { useUser } from "@/features/Auth/supabase";
import React from "react";

export const useGetUserProfile = () => {
  const user = useUser();
  const { user_name, preferred_username, avatar_url } =
    (user?.user_metadata ?? {});
  const avatarURL = user?.user_metadata?.avatar_url || "";
  const username = user?.user_metadata?.preferred_username
    || user?.user_metadata?.username || "";
  return React.useMemo(() => (
    {
      avatarURL,
      username,
    }
  ), [avatarURL, username]);
};
