import { AppLayout } from "@/components/ApplicationLayouts/AppLayout";
import { ReactElement } from "react";

export default function Tickets() {
  return <div>Tickets</div>;
}

Tickets.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
