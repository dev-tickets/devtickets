import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
import { MyEvents } from "@/features/MyEvents";
import { ReactElement } from "react";

export default function Events() {
  return <MyEvents />;
}

Events.getLayout = function getLayout(page: ReactElement) {
  return <TopBarLayout>{page}</TopBarLayout>;
};
