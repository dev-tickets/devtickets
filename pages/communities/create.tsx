import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
import { Page } from "@/components/PageLayouts/Page";
import CreateCommunity from "@/features/CreateCommunities";
import { ReactElement } from "react";

export default function Communities() {
  return (
    <Page title="Nueva Comunidad">
      <CreateCommunity />
    </Page>
  );
}
Communities.getLayout = function getLayout(page: ReactElement) {
  return <TopBarLayout>{page}</TopBarLayout>;
};
