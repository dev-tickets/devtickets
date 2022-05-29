import { useUser } from "@/features/Auth/supabase";
import React from "react";

export const useGetUserProfile = () => {
  const user = useUser();
  const { user_name, preferred_username, avatar_url } =
    (user?.user_metadata ?? {});
  return React.useMemo(() => (
    {
      avatarURL: avatar_url as string | undefined,
      username: (preferred_username || user_name) as string | undefined,
    }
  ), [avatar_url, preferred_username, user_name]);
};
