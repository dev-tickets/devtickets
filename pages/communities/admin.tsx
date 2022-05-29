import { AppLayout } from "@/components/ApplicationLayouts/AppLayout";
import { ReactElement } from "react";

export default function Communities() {
  return <div>Admin communities</div>;
}

Communities.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
