import { ReactElement } from "react";
import { AppLayout } from "@/components/PageLayouts/AppLayout";

export default function Tickets() {
  return <div>Tickets</div>;
}

Tickets.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
