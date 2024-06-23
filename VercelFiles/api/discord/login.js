// api/discord/login.js
export default async function handler(req, res) {
    const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
    const REDIRECT_URI = 'https://r2-loadout-calc.vercel.app/api/discord/callback'; // Replace with your production URL
    const scopes = 'identify email'; // Adjust scopes as needed
  
    const url = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=${encodeURIComponent(scopes)}`;
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(302, { Location: url });
    res.end();
  }