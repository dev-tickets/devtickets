import { AppLayout } from "@/components/PageLayouts/AppLayout";
import { ReactElement } from "react";

export default function Communities() {
  return <div>Communities</div>;
}

Communities.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
