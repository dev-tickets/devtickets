const errorHandler: PagesFunction = async (context) => {
  try {
    return await context.next();
  } catch (err) {
    return new Response(`${(err as Error).message}\n${(err as Error).stack}`, {
      status: 500,
    });
  }
};

const isOptions = (
  context: EventContext<unknown, any, Record<string, unknown>>
): boolean => {
  return context.request.method === "OPTIONS";
};
const corsEnabler: PagesFunction = async (context) => {
  const response = isOptions(context)
    ? new Response(null)
    : await context.next();
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Headers", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET,POST,HEAD,OPTIONS");
  return response;
};

export const onRequest = [errorHandler, corsEnabler, hello];
