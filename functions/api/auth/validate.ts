const generateMagicLink = async (email: string) => {
  const headers = new Headers();
  headers.set("content-type", "application/json");
  const rawFetch = await fetch("https://fforres.auth0.com/passwordless/start", {
    method: "POST",
    headers,
    body: JSON.stringify({
      client_id: "cT9hPy1I7Z8OESCLC8ZaTFYOJibwlOJP",
      client_secret:
        "wZ_Wa4GiGxTt9iVyphr13jyAvlYMyVGgJPekqU9Bi2hxVUEdiIURj9sDBaii6pro",
      grant_type: "http://auth0.com/oauth/grant-type/passwordless/otp",
      username: "<email address>", // or "<phone number>"
      otp: "CODE",
      realm: "email", // or "sms"
      audience: "your-api-audience", // in case you need an access token for a specific API
      scope: "openid profile email", // whatever scopes you need
    }),
  });
  if (rawFetch.status !== 200) {
    throw new Error();
  }
  const response = await rawFetch.json();
  console.log(response);
  return response;
};

export const onRequestPost: PagesFunction = async (context) => {
  // Contents of context object
  const {
    request, // same as existing Worker API
    // env, // same as existing Worker API
    // params, // if filename includes [id] or [[path]]
    // waitUntil, // same as ctx.waitUntil in existing Worker API
    // next, // used for middleware or to fetch assets
    // data, // arbitrary space for passing data between middlewares
  } = context;

  const body = (await request.json()) as { email?: string };
  if (body.email) {
    await generateMagicLink(body.email);
  }
  return new Response(JSON.stringify({ msg: "Hello, world!" }));
};
