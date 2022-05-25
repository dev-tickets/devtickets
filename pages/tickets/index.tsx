import { ReactElement } from "react";
import { AppLayout } from "../../src/Components/Layouts/AppLayout";

export default function Tickets() {
  return <div>Tickets</div>;
}

Tickets.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
