import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
import { Page } from "@/components/PageLayouts/Page";
import { ReactElement } from "react";

export default function Communities() {
  return <Page title="Tus comunidades:">xxxxxdsadkfdskjh</Page>;
}

Communities.getLayout = function getLayout(page: ReactElement) {
  return <TopBarLayout>{page}</TopBarLayout>;
};
