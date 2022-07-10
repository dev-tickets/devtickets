import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/events/jsconfcl");
  }, [router]);
  return (
    <>
    </>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return page;
};
