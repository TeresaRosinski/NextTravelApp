module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/build-trip',
        destination: '/all-trips',
        permanent: true,
      },
    ]
  },

}
