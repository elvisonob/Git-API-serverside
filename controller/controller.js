const axios = require('axios');

const userName = async (req, res, next) => {
  try {
    const repoName = req.query.name;
    if (!repoName) {
      return res.status(400).json({ error: 'Repository name is required' });
    }

    const githubResponse = await axios.get(
      `https://api.github.com/search/repositories?q=${repoName}`
    );

    res.json(githubResponse.data);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch data from Github',
      details: error.message,
    });
  }
};

exports.userName = userName;
