"use server";
import { createClient } from "@/utils/supabase/server";

export default async function supabaseadd(PlayerStatus: object) {
  const supabase = createClient();

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase.from("accounts").insert({
      steamId: PlayerStatus.steamId,
      VACBanned: PlayerStatus.VACBanned,
      NumberOfGameBans: PlayerStatus.NumberOfGameBans,
      DaysSinceLastBan: PlayerStatus.DaysSinceLastBan,
    });

    if (error) {
      console.log(error);
    }
  } catch (error) {
    console.error("Supabase Error:", error);
  }
}
