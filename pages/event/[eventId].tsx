import { useRouter } from "next/router";
import { ReactElement } from "react";
import { ConditionalAppLayout } from "@/components/PageLayouts/ConditionalAppLayout";

export default function EventPage() {
  const router = useRouter();
  const { eventId } = router.query;
  return <div>Show the event: {eventId}</div>;
}

EventPage.getLayout = function getLayout(page: ReactElement) {
  return <ConditionalAppLayout>{page}</ConditionalAppLayout>;
};
