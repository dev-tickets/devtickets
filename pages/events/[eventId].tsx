import { ConditionalAppLayout } from "@/components/ApplicationLayouts/ConditionalAppLayout";
import { EventDetail } from "@/features/EventDetail";
import Payment from "@/features/Payment";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function EventPage() {
  const router = useRouter();
  const { eventId } = router.query;

  console.log({ eventId: eventId });
  return (
    <>
      <EventDetail id={eventId as string} />;
      <Payment />
    </>
  );
}

EventPage.getLayout = function getLayout(page: ReactElement) {
  return <ConditionalAppLayout>{page}</ConditionalAppLayout>;
};
