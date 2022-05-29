import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
import { Page } from "@/components/PageLayouts/Page";
import { ReactElement } from "react";

export default function Tickets() {
  return (
    <Page title="Mis Tickets">
      Listado de mis tickets
    </Page>
  );
}

Tickets.getLayout = function getLayout(page: ReactElement) {
  return <TopBarLayout>{page}</TopBarLayout>;
};
