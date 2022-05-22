// var axios = require("axios").default;

// var options = {
//   method: 'POST',
//   url: 'https://fforres.auth0.com/passwordless/start',
//   headers: {'content-type': 'application/json'},
//   data: {
//     client_id: 'cT9hPy1I7Z8OESCLC8ZaTFYOJibwlOJP',
//     client_secret: 'YOUR_CLIENT_SECRET',
//     connection: 'email',
//     email: 'USER_EMAIL',
//     send: 'link'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

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
      connection: "email",
      email,
      send: "link",
      authParams: {
        scope: "openid email",
      },
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
