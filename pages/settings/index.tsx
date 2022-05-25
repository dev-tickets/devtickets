import { ReactElement } from "react";
import { AppLayout } from "@/components/PageLayouts/AppLayout";

export default function Settings() {
  return <div>Settings</div>;
}

Settings.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
