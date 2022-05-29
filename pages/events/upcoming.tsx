import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
import { Page } from "@/components/PageLayouts/Page";
import { UpcomingEvents } from "@/features/UpcomingEvents";
import { ReactElement } from "react";

export default function NextEvents() {
  return (
    <Page title="Próximos Eventos">
      <UpcomingEvents />
    </Page>
  );
}

NextEvents.getLayout = function getLayout(page: ReactElement) {
  return <TopBarLayout>{page}</TopBarLayout>;
};
