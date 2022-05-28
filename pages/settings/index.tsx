import { AppLayout } from "@/components/ApplicationLayouts/AppLayout";
import { Page } from "@/components/PageLayouts/Page";
import { ReactElement } from "react";

export default function Settings() {
  return (
    <Page title="Settings">
      <div>asd</div>
    </Page>
  );
}

Settings.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
