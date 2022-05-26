import { AppLayout } from "@/components/PageLayouts/AppLayout";
import { ReactElement } from "react";

export default function Tickets() {
  return <div>Tickets</div>;
}

Tickets.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
