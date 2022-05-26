import { AppLayout } from "@/components/PageLayouts/AppLayout";
import { FormPageSectionLayout } from "@/components/PageSectionLayout/form";
import CreateCommunity from "@/features/CreateCommunities";
import { ReactElement } from "react";

export default function Communities() {
  return (
    <FormPageSectionLayout title="Nueva Comunidad">
      <CreateCommunity />
    </FormPageSectionLayout>
  );
}
Communities.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
