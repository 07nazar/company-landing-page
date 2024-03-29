import { path } from '../config/path.js';
import { plugins } from '../config/plugins.js';

export const server = () => {
  plugins.browserSync.init({
    server: {
      baseDir: path.build.html,
    },
    port: 3000,
    notify: false,
  });
};
