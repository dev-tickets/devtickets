import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
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
  return <TopBarLayout>{page}</TopBarLayout>;
};
