import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
import { Community } from "@/features/CommunityDetail";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function CommunityPage() {
  const router = useRouter();
  const { communityId } = router.query;

  return <Community slug={communityId as string} />;
}

CommunityPage.getLayout = function getLayout(page: ReactElement) {
  return <TopBarLayout>{page}</TopBarLayout>;
};
