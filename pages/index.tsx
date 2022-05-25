import { ReactElement } from "react";
import { AppLayout } from "@/components/PageLayouts/AppLayout";
import Home from "@/features/Home";

export default function Index() {
  return <Home />;
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
