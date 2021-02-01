import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';

setupRouting();
setupPrecaching(getFiles());

// Skip new SW waiting and activate directly
self.addEventListener('install', () => {
  self.skipWaiting();
});

