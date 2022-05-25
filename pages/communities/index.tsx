import { ReactElement } from "react";
import { AppLayout } from "../../src/Components/Layouts/AppLayout";

export default function Communities() {
  return <div>Communities</div>;
}

Communities.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
