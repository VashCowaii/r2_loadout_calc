// api/discord/callback.js
import axios from 'axios';

export default async function handler(req, res) {
  const { code } = req.query;

  const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
  const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
  const REDIRECT_URI = 'https://r2-loadout-calc.vercel.app/api/discord/callback'; // Replace with your production URL

  try {
    const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
      scope: 'identify' // Adjust scopes as needed
    });

    const accessToken = tokenResponse.data.access_token;

    // Use accessToken to fetch user data from Discord API
    const userResponse = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    // Here, you would typically create a user session or JWT token for the user
    // and redirect to a page in your application
    res.writeHead(302, {
      Location: `https://cowaii.io/?token=${accessToken}`
    });
    res.end();
  } catch (error) {
    console.error('Error retrieving access token:', error);
    res.status(500).json({ error: 'Failed to retrieve access token' });
  }
}