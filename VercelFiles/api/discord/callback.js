import fetch from 'node-fetch';

export default async function handler(req, res) {
  try { 
    const code = req.query.code;
    const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
    const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
    const REDIRECT_URI = 'https://r2-loadout-calc.vercel.app/api/discord/callback';

    if (!CLIENT_ID || !CLIENT_SECRET) {
      throw new Error('Missing CLIENT_ID or CLIENT_SECRET');
    }

    // Exchange the authorization code for an access token
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI
      })
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json();
      console.error('Error fetching token:', errorData);
      return res.status(500).json({ error: 'Failed to fetch access token', details: errorData });
    }

    const tokenData = await tokenResponse.json();

    // Fetch user information
    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`
      }
    });

    if (!userResponse.ok) {
      const errorData = await userResponse.json();
      console.error('Error fetching user data:', errorData);
      return res.status(500).json({ error: 'Failed to fetch user data', details: errorData });
    }

    const userData = await userResponse.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(userData);
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}