const buildFolder = './build';
const srcFolder = './src';

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/images/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    js: `${srcFolder}/js/index.js`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/images/**/*.svg`,
    fonts: `${srcFolder}/fonts/*.{ttf,woff,woff2}`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
};
