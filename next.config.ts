import type { NextConfig } from 'next';
import { join } from 'path';

const nextConfig: NextConfig = {
  outputFileTracingRoot: join(__dirname),
  transpilePackages: ['@runwayml/avatars-react'],

  allowedDevOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://10.247.81.68:3000',
  ],
};

export default nextConfig;