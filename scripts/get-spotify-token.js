// One-time helper to obtain a Spotify *refresh token* for the Now Playing widget.
//
// Prerequisites:
//   1. Create an app at https://developer.spotify.com/dashboard
//   2. In the app settings, add this exact Redirect URI:
//        http://127.0.0.1:8888/callback
//   3. Copy the Client ID and Client Secret.
//
// Run:
//   SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=yyy node scripts/get-spotify-token.js
//
// It prints a URL to open in your browser. Approve access, and the refresh token
// is printed back here. Put that token (and the id/secret) into Netlify env vars.

const http = require("http");
const { URL, URLSearchParams } = require("url");

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = "http://127.0.0.1:8888/callback";
const SCOPE = "user-read-currently-playing user-read-playback-state";

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error(
    "Missing SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET environment variables."
  );
  process.exit(1);
}

const authUrl =
  "https://accounts.spotify.com/authorize?" +
  new URLSearchParams({
    response_type: "code",
    client_id: CLIENT_ID,
    scope: SCOPE,
    redirect_uri: REDIRECT_URI,
  }).toString();

console.log("\nOpen this URL in your browser and approve access:\n");
console.log(authUrl + "\n");

const server = http.createServer(async (req, res) => {
  if (!req.url.startsWith("/callback")) {
    res.writeHead(404);
    res.end();
    return;
  }

  const code = new URL(req.url, REDIRECT_URI).searchParams.get("code");
  if (!code) {
    res.writeHead(400);
    res.end("No code in callback.");
    return;
  }

  try {
    const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
      "base64"
    );
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    const json = await tokenRes.json();
    if (!json.refresh_token) {
      throw new Error(JSON.stringify(json));
    }

    console.log("\n✅ Success! Your refresh token:\n");
    console.log(json.refresh_token + "\n");
    console.log("Set these in Netlify -> Site settings -> Environment variables:");
    console.log("  SPOTIFY_CLIENT_ID      =", CLIENT_ID);
    console.log("  SPOTIFY_CLIENT_SECRET  = (your secret)");
    console.log("  SPOTIFY_REFRESH_TOKEN  =", json.refresh_token, "\n");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h2>Done. Refresh token printed in your terminal. You can close this tab.</h2>"
    );
  } catch (err) {
    res.writeHead(500);
    res.end("Token exchange failed: " + err.message);
    console.error("\nToken exchange failed:", err.message, "\n");
  } finally {
    setTimeout(() => server.close(() => process.exit(0)), 500);
  }
});

server.listen(8888, "127.0.0.1", () => {
  console.log("Waiting for Spotify callback on http://127.0.0.1:8888/callback ...");
});
