import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
import { Page } from "@/components/PageLayouts/Page";
import { ReactElement } from "react";

export default function Events() {
  return <Page title="Eventos">Show all events here 👇</Page>;
}

Events.getLayout = function getLayout(page: ReactElement) {
  return <TopBarLayout>{page}</TopBarLayout>;
};
