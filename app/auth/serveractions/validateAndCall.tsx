"use server";

async function getSteamIDFromURL(steamidURL: string) {
  const customURL = steamidURL;
  if (customURL[customURL.length]) {
  }

  const response = await fetch(
    `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${process.env.NEXT_PUBLIC__STEAM_KEY}&vanityurl=${customURL}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);

  if (data.response && data.response.success === 1) {
    console.log(data.response.steamid);
    return data.response.steamid;
  } else {
    throw new Error("Unable to retrieve Steam ID from the provided URL");
  }
}

export async function validateAndCall(formData: FormData) {
  const steamidURL = formData.get("steamid") as string;

  if (steamidURL.startsWith("https://steamcommunity.com/id/")) {
    getSteamIDFromURL(steamidURL.slice(30).replace(/\//g, ""));
  } else if (steamidURL.startsWith("https://steamcommunity.com/profiles/")) {
    const steamid = steamidURL.replace(/\D/g, "");
  }
  return;
}
