import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
import { MyCommunities } from "@/features/MyCommunities";
import { ReactElement } from "react";

export default function Communities() {
  return <MyCommunities />;
}

Communities.getLayout = function getLayout(page: ReactElement) {
  return <TopBarLayout>{page}</TopBarLayout>;
};
