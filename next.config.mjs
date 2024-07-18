import path from "node:path";

const cspHeader = `
    default-src 'self' http://drupal-institucional-drupal-dev.apps.ocpdrupal.equatorial.corp;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' http://drupal-institucional-drupal-dev.apps.ocpdrupal.equatorial.corp;
    style-src 'self' 'unsafe-inline' http://drupal-institucional-drupal-dev.apps.ocpdrupal.equatorial.corp https://fonts.googleapis.com/;
    img-src 'self' blob: data: http://drupal-institucional-drupal-dev.apps.ocpdrupal.equatorial.corp https://picsum.photos;
    font-src 'self' https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self' http://drupal-institucional-drupal-dev.apps.ocpdrupal.equatorial.corp ;
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join("/", "pages"), "src/assets"],
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],    
  },
  compiler: {
    styledComponents: true
  },  
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
};

export default nextConfig;