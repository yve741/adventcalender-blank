/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'

import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(Particles, {
      init: async engine => {
        await loadSlim(engine);
      },
    });

}
