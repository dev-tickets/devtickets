import FullScreenLayout from "@/components/ApplicationLayouts/FullScreenLayout";
import { useAuthContext } from "@/features/Auth/supabase";
import React, { ReactElement } from "react";

export default function Logout() {
  const { logout } = useAuthContext();
  React.useEffect(() => {
    logout();
  }, [logout]);
  return <div></div>;
}

Logout.getLayout = function getLayout(page: ReactElement) {
  return <FullScreenLayout>{page}</FullScreenLayout>;
};
