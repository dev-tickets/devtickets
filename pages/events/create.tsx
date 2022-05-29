import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
import { Page } from "@/components/PageLayouts/Page";
import CreateEvent from "@/features/CreateEvent";
import { ReactElement } from "react";

export default function Events() {
  return (
    <Page title="Crear Evento">
      <CreateEvent />👇
    </Page>
  );
}

Events.getLayout = function getLayout(page: ReactElement) {
  return <TopBarLayout>{page}</TopBarLayout>;
};
