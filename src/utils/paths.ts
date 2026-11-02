// Helper to resolve internal paths with Astro's base URL
const rawBase = import.meta.env.BASE_URL || '/';
const base = rawBase.replace(/\/$/, '');

export function resolvePath(path: string): string {
  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

