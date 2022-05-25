import { ReactElement } from "react";
import { AppLayout } from "../src/Components/Layouts/AppLayout";
import Home from "../src/Features/Home";

export default function Index() {
  return <Home />;
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
