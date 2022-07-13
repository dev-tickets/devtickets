import dynamic from "next/dynamic";
import React, { ReactNode } from "react";
import { Suspense } from "react";

const ActualLayout = dynamic(() => import("./ActualLayout"), {
  suspense: true,
  ssr: false,
});

/** This is only for authenticated users */
export const TopBarLayout = React.memo(
  function TopBarLayout({ children }: { children: ReactNode }) {
    // This is an authenticated-only layout, so first we check if the user is
    // authenticated If they are not, we send them to login
    return (
      // <Suspense fallback={null}>
      <>
        <Suspense>
          <ActualLayout />
        </Suspense>
        {children}
      </>
    );
  },
);
