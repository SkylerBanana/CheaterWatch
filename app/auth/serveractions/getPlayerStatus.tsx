"use server";
export default async function getPlayerStatus(steamid: string) {
  const response = await fetch(
    `https://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${process.env.NEXT_PUBLIC__STEAM_KEY}&steamids=${steamid}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);

  if (data.response && data.response.success === 1) {
    console.log(data.response.VACBanned);
    return;
  } else {
    throw new Error("Unable to retrieve Steam ID from the provided URL");
  }
}
