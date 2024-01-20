const providers = [
    {
      name: 'google',
      label: 'Google',
      type: 'oauth',
      version: 2,
      scope: ['profile', 'email'],
      options: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
    },
  ];
   
  module.exports = {
    providers,
    database: process.env.DATABASE_URL,
  };
  