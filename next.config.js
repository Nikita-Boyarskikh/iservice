/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    images: {
      unoptimized: true
    }
  },

  webpack(config) {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: {
            prettier: false,
            svgo: false,
            svgoConfig: {
              plugins: [{ removeViewBox: false }]
            },
            titleProp: true,
            ref: true
          }
        }
      ],
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
      }
    })
    return config
  }
}

module.exports = nextConfig
