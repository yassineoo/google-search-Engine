/** @type {import('next').NextConfig} */
const nextConfig = {
  images :  {
    domains:['links.papareact.com'],
  }
  ,
  buildModules: [
    '@nuxt/postcss8',
    // ...
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  reactStrictMode: true,
  css: [
    '@/assets/css/main.css',
  ],
 
}

module.exports = nextConfig
