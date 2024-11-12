// src/createEmotionCache.js or src/createEmotionCache.ts
import createCache from '@emotion/cache';

// Client-side cache, shared for the whole session of the user in the browser.
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}
