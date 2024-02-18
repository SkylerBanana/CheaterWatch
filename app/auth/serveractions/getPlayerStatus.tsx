"use server";
export default async function getPlayerStatus(id: string) {
  const response = await fetch(
    `https://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${process.env.NEXT_PUBLIC__STEAM_KEY}&steamids=${id}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  const PlayerStatus = {
    steamId: data.players[0].SteamId as string,
    VACBanned: data.players[0].VACBanned as boolean,
    NumberOfGameBans: data.players[0].NumberOfGameBans as number,
    DaysSinceLastBan: data.players[0].DaysSinceLastBan as number,
  };
  return PlayerStatus;
}
