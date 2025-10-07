/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        cacheInclude: [/.*\.(css|hbs|js|ts|html)$/],
        plugins: [
          require('postcss-import'),            // ← @import 처리 (custom.css 포함)
          require('tailwindcss')({              // ← Tailwind 전개
            content: [
              './app/**/*.{hbs,js,ts}',
              './app/index.html'
            ],
            theme: { extend: {} },
            plugins: [],
          }),
          require('autoprefixer')(),            // ← 브라우저 접두사
        ],
      },
    },
  });

  return app.toTree();
};