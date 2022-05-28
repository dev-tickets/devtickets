import { AppLayout } from "@/components/ApplicationLayouts/AppLayout";
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
  return <AppLayout>{page}</AppLayout>;
};
