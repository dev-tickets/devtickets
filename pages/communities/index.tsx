import { AppLayout } from "@/components/ApplicationLayouts/AppLayout";
import { MyCommunities } from "@/features/MyCommunities";
import { ReactElement } from "react";

export default function Communities() {
  return <MyCommunities />;
}

Communities.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
