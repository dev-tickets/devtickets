import { AppLayout } from "@/components/PageLayouts/AppLayout";
import Home from "@/features/Home";
import { ReactElement } from "react";

export default function Index() {
  return <Home />;
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
