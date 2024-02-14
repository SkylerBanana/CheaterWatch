"use server";
import { createClient } from "@/utils/supabase/server";

export default async function supabaseadd(steamid: string) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);
  console.log(steamid);
}
