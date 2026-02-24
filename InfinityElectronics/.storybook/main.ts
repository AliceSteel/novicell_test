import type { StorybookConfig } from '@storybook/vue3-vite';
import { mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    '../app/components/**/*.stories.@(js|ts|jsx|tsx)'
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
   framework: {
    name: '@storybook/vue3-vite',
    options: {
       "styles": ["../app/assets/css/main.css"]
    },
  },
   async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vue()],
    })
  },
};
export default config;