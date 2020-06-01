import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

import dotenvPlugin from 'rollup-plugin-dotenv';

export const config:Config = {
  plugins: [
    sass(),
    dotenvPlugin()
  ],
  globalStyle: 'src/global/style.scss',
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://capacitorjs.com/',
      serviceWorker: {
        unregister: true,
      },
      /*
      serviceWorker: {
        skipWaiting: false,
        clientsClaim: true
      }
      */
    }
  ],
  enableCache: false,
  copy: [
    { src: 'robots.txt' }
  ]
  /*
  plugins: [{
    name: 'version-replace',
    transform(sourceText, importee) {
      if (importee.indexOf('.tsx') >= 0) {
        console.log('TRANSFORMING', importee);
        if (sourceText.indexOf('CAPACITOR_VERSION') >= 0) {
          console.log('\t found version!', sourceText);
        }
        const replaced = sourceText.replace('CAPACITOR_VERSION', sourceText);
        return Promise.resolve({
          code: replaced
        });
      }
      return Promise.resolve({
        code: sourceText
      });
    }
  }]
  */
};
