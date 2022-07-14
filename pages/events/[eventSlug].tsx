import { TopBarLayout } from "@/components/ApplicationLayouts/TopBarLayout";
import { supabase } from "@/features/Auth/supabase";
import { EventDetail } from "@/features/EventDetail";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReactElement } from "react";

// TODO: Devolver a la version anterior cuando nos auspicie vercel
export default function EventPage({ eventSlug }: { eventSlug: string }) {
  // const router = useRouter();
  // const { eventSlug } = router.query;

  return (
    <>
      <EventDetail slug={eventSlug as string} />
    </>
  );
}

EventPage.getLayout = function getLayout(page: ReactElement) {
  return <TopBarLayout>{page}</TopBarLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await supabase.from("events").select("slug");
  const paths = data?.map(el => {
    return { params: { eventSlug: el.slug } };
  }) as any;
  return {
    paths,
    fallback: true, // false or "blocking" // See the "fallback" section below
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      eventSlug: params!.eventSlug,
    },
  };
};
