const basePath = (
  process.env.NODE_ENV === "production"
) ? "/escape-from-beverly-hills" : ""

/** @type {import('next').NextConfig} */
module.exports = {
  basePath: basePath,
  assetPrefix: basePath,
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: './mdx-loader',
          options: undefined,
        },
      ],
    })
    return config
  }
}
