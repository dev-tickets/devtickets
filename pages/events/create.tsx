import { AppLayout } from "@/components/ApplicationLayouts/AppLayout";
import { Page } from "@/components/PageLayouts/Page";
import { ReactElement } from "react";

export default function Events() {
  return <Page title="Crear Evento">Show all events here 👇</Page>;
}

Events.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
