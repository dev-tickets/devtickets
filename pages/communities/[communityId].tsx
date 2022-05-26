import { ConditionalAppLayout } from "@/components/PageLayouts/ConditionalAppLayout";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function CommunityPage() {
  const router = useRouter();
  const { communityId } = router.query;
  return <div>Show the event: {communityId}</div>;
}

CommunityPage.getLayout = function getLayout(page: ReactElement) {
  return <ConditionalAppLayout>{page}</ConditionalAppLayout>;
};
