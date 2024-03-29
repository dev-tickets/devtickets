import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function Ticket() {
  const router = useRouter();
  const { eventId } = router.query;
  return <div>Show the event: {eventId}</div>;
}

Ticket.getLayout = function getLayout(page: ReactElement) {
  return <TopBarLayout>{page}</TopBarLayout>;
};
