import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
import { Home } from "@/features/Home";
import { ReactElement } from "react";

export default function Index() {
  return <Home />;
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <TopBarLayout>{page}</TopBarLayout>;
};
