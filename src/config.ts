export const dashboardMainURL = (typeof window !== "undefined"
  ? // IF this is "staging" it means we are on a pages.dev env.
    window.location.origin
  : process.env.NEXT_PUBLIC_APP_HOST!).replace(
    /\/\s*$/,
    "",
  ) + "/";
