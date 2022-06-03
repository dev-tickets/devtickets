import { ConditionalAppLayout } from "@/components/ApplicationLayouts/ConditionalAppLayout";
import Payment from "@/features/Payment";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function EventPage() {
  const router = useRouter();
  const { eventId } = router.query;
  return (
    <>
      <div>Show the event: {eventId}</div>
      <Payment />
    </>
  );
}

EventPage.getLayout = function getLayout(page: ReactElement) {
  return <ConditionalAppLayout>{page}</ConditionalAppLayout>;
};
