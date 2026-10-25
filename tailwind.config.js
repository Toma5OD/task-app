import { join } from 'node:path';
import { createRequire } from 'node:module';
import { skeleton } from '@skeletonlabs/tw-plugin';
const require = createRequire(import.meta.url);
export default {
 darkMode: 'class',
 content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
 theme: { extend: {} },
 plugins: [skeleton({ themes: { preset: ['skeleton'] } })],
};
