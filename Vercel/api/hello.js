// api/hello.js

module.exports = (req, res) => {
    res.status(200).json({ message: 'Hello from Vercel serverless function!' });
  };