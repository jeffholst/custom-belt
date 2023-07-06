// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // Used in .md files to track selected framework
    ctx.app.config.globalProperties.selectedFramework = '0';
  }
};
