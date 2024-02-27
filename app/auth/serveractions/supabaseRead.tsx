"use server";
import { createClient } from "@/utils/supabase/server";

export default async function supabaseRead() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("accounts")
    .select("steamId,DaysSinceLastBan,NumberOfGameBans,VACBanned");

  console.log(data);
}
