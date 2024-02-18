"use server";
export default async function getSteamIDFromURL(steamidURL: string) {
  const customURL = steamidURL;

  const response = await fetch(
    `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${process.env.NEXT_PUBLIC__STEAM_KEY}&vanityurl=${customURL}`
  );

  if (!response.ok) {
    const error = "Invalid Url";
  }

  const data = await response.json();

  if (data.response && data.response.success === 1) {
    const steamid = data.response.steamid;
    return steamid;
  } else {
    const error = "Unable to retrieve Steam ID from the provided URL";
    return error;
  }
}
