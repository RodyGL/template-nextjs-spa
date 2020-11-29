module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  async rewrites() {
    return [
      // Do not rewrite API routes
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
      // Rewrite everything else to use `pages/index`
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
};
