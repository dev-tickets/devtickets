import { ContentfulMetadata } from "./../../../src/types";
import { supabaseClient } from "./../helpers/supabase";

export const onRequestPost: PagesFunction = async (context) => {
  const email = ((await context.request.json()) as { email?: string })?.email;

  if (!email) {
    throw new Error("no email present");
  }
  const { user, error } = await supabaseClient.auth.signIn({
    email,
  });

  if (error) {
    throw new Error(error.message);
  }

  return new Response(JSON.stringify(user));
};
