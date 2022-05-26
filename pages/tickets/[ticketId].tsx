import { useRouter } from "next/router";
import { ReactElement } from "react";
import { AppLayout } from "@/components/PageLayouts/AppLayout";

export default function Ticket() {
  const router = useRouter();
  const { eventId } = router.query;
  return <div>Show the event: {eventId}</div>;
}

Ticket.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
