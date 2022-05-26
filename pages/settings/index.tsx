import { AppLayout } from "@/components/PageLayouts/AppLayout";
import { ReactElement } from "react";

export default function Settings() {
  return <div>Settings</div>;
}

Settings.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
