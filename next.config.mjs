/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Vercel'de image optimization otomatik olarak yapılır
    // Sadece Docker build'lerde unoptimized kullanılır
    unoptimized: process.env.DOCKER_BUILD === 'true',
  },
  // Vercel için standalone output'u kaldırıyoruz
  // Docker için gerekirse environment variable ile kontrol edilebilir
  ...(process.env.DOCKER_BUILD === 'true' && { output: 'standalone' }),
}

export default nextConfig
