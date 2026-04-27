/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'imgd.aeplcdn.com' },
      { protocol: 'https', hostname: 'stimg.cardekho.com' },
      { protocol: 'https', hostname: 'imgd-ct.aeplcdn.com' },
      { protocol: 'https', hostname: 'media.zigcdn.com' },
      { protocol: 'https', hostname: 'images.carandbike.com' },
      { protocol: 'https', hostname: 'mda.spinny.com' },
      { protocol: 'https', hostname: '5.imimg.com' },
      { protocol: 'https', hostname: 'cdn.skoda-auto.com' },
      { protocol: 'https', hostname: 'hips.hearstapps.com' },
      { protocol: 'https', hostname: 'images.timesdrive.in' },
      { protocol: 'https', hostname: 'stimg.cardekho.com' },
      { protocol: 'https', hostname: 'www.carandbike.com' }
    ],
  },
};

export default nextConfig;
