import { env } from '../../config/env';

export function getAdminCredentials() {
  if (!env.adminUsername || !env.adminPassword) {
    throw new Error('Missing admin credentials');
  }

  return {
    username: env.adminUsername,
    password: env.adminPassword,
  };
}
