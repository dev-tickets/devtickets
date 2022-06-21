import { ConditionalAppLayout } from "@/components/ApplicationLayouts/ConditionalAppLayout";
import { EventDetail } from "@/features/EventDetail";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function EventPage() {
  const router = useRouter();
  const { eventId } = router.query;

  return (
    <>
      <EventDetail id={eventId as string} />;
    </>
  );
}

EventPage.getLayout = function getLayout(page: ReactElement) {
  return <ConditionalAppLayout>{page}</ConditionalAppLayout>;
};
