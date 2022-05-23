import React from "react";
import { useGetCommunitiesQuery } from "./getCommunities.generated";

type Props = {};

const Home = (props: Props) => {
  const [results] = useGetCommunitiesQuery();
  if (results.fetching) {
    return <div>...fetching</div>;
  }
  if (results.error || !Boolean(results.data)) {
    return <div>error</div>;
  }
  return (
    <div>
      {results.data?.communitiesCollection?.edges?.map((community) => {
        return (
          <div key={community.node?.id}>
            <h3>{community.node?.name}</h3>
            <p>{community.node?.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
