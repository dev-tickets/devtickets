import { useRouter } from "next/router";
import { ReactElement } from "react";
import { ConditionalAppLayout } from "@/components/PageLayouts/ConditionalAppLayout";

export default function CommunityPage() {
  const router = useRouter();
  const { communityId } = router.query;
  return <div>Show the event: {communityId}</div>;
}

CommunityPage.getLayout = function getLayout(page: ReactElement) {
  return <ConditionalAppLayout>{page}</ConditionalAppLayout>;
};
