"use server";
import { createClient } from "@/utils/supabase/server";

export default async function supabaseadd(playerstatus: object) {
  const supabase = createClient();

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase.from("accounts").insert({
      steamId: playerstatus.steamId,
      VACBanned: playerstatus.VACBanned,
      NumberOfGameBans: playerstatus.NumberOfGameBans,
      DaysSinceLastBan: playerstatus.DaysSinceLastBan,
    });

    if (error) {
      console.log(error);
    }
  } catch (error) {
    console.error("Supabase Error:", error);
  }
}
