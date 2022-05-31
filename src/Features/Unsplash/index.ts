import React from "react";
import { createApi } from "unsplash-js";
import { Errors } from "unsplash-js/dist/helpers/errors";
import { NonEmptyArray } from "unsplash-js/dist/helpers/typescript";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { useDebouncedCallback } from "use-debounce";

const unsplashAPI = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || "",
});

const perPage = 20;

export const useUnsplashSearch = (query: string) => {
  const [page, setPage] = React.useState(1);
  const [fetching, setFetching] = React.useState(false);
  const [results, setResults] = React.useState<Photos["results"]>([]);
  const [error, setError] = React.useState<NonEmptyArray<string>>([""]);

  const doFetch = useDebouncedCallback(async (query: string) => {
    if (fetching) {
      return;
    }
    setFetching(true);
    setError([""]);
    try {
      const response = await unsplashAPI.search.getPhotos({
        query,
        page: 1,
        perPage,
        contentFilter: "high",
        orientation: "landscape",
      });

      if (response.errors) {
        setError(response.errors);
      } else {
        setResults(response.response.results);
      }
    } catch (e) {
      console.error(e);
      setError(["Not able to fetch"]);
    } finally {
      setFetching(false);
    }
  }, 250);

  const fetchMore = useDebouncedCallback(
    async () => {
      if (fetching) {
        return;
      }
      const newPage = page + 1;
      setFetching(true);
      setError([""]);
      try {
        const response = await unsplashAPI.search.getPhotos({
          query,
          page: newPage,
          perPage,
          contentFilter: "high",
          orientation: "landscape",
        });
        if (response.errors) {
          setError(response.errors);
        } else {
          setResults(
            initialResults => {
              return [...initialResults, ...response.response.results];
            },
          );
          setPage(newPage);
        }
      } catch (e) {
        console.error(e);
        setError(["Not able to fetch"]);
      } finally {
        setFetching(false);
      }
    },
    100,
  );

  React.useEffect(() => {
    doFetch(query);
  }, [doFetch, query]);

  return React.useMemo(() =>
    [{
      error,
      initialFetch: fetching && page === 1,
      fetching,
      results,
    }, fetchMore] as const, [error, fetchMore, fetching, page, results]);
};
