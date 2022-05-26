import { AppLayout } from "@/components/PageLayouts/AppLayout";
import { ReactElement } from "react";

export default function EventsID() {
  return <div>Show all events here 👇</div>;
}

EventsID.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
