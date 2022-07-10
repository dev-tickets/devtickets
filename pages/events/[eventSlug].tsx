import { ConditionalAppLayout } from "@/components/ApplicationLayouts/ConditionalAppLayout";
import { EventDetail } from "@/features/EventDetail";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function EventPage() {
  const router = useRouter();
  const { eventSlug } = router.query;

  return (
    <>
      <EventDetail slug={eventSlug as string} />;
    </>
  );
}

EventPage.getLayout = function getLayout(page: ReactElement) {
  return <ConditionalAppLayout>{page}</ConditionalAppLayout>;
};
