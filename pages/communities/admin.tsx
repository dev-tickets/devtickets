import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
import { ReactElement } from "react";

export default function Communities() {
  return <div>Admin communities</div>;
}

Communities.getLayout = function getLayout(page: ReactElement) {
  return <TopBarLayout>{page}</TopBarLayout>;
};
