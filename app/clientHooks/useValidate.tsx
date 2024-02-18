"use client";
import getSteamIDFromURL from "../auth/serveractions/getSteamIDFromURL";
export default async function (formData: FormData) {
  const steamidURL = formData.get("steamid") as string;
  if (steamidURL.startsWith("https://steamcommunity.com/id/")) {
    return await getSteamIDFromURL(steamidURL.slice(30).replace(/\//g, ""));
  } else if (steamidURL.startsWith("https://steamcommunity.com/profiles/")) {
    const steamid = steamidURL.replace(/\D/g, "");
    return steamid;
  }
  return;
}
