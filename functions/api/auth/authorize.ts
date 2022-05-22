export const onRequest: PagesFunction = async (context) => {
  return Response.redirect("https://fforres.auth0.com/authorize");
};
