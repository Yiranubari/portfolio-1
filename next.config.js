/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export -> produces an `out/` directory that any static host
  // (Netlify, etc.) can serve directly. No server runtime needed.
  output: 'export',

  // next/image optimization requires a server; disable it for static export
  // so images are emitted as-is.
  images: { unoptimized: true },
};

module.exports = nextConfig;
