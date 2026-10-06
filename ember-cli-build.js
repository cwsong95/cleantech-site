// ember-cli-build.js
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

/**
 * Routes that get a static, fully rendered HTML file at build time (prember).
 * Search-engine crawlers (Naver's in particular) do not execute JavaScript
 * reliably, so these are what they actually index.
 *
 * Keep in sync with the non-noindex entries in app/utils/seo.js and public/sitemap.xml.
 */
const PRERENDER_URLS = [
  '/',
  '/company',
  '/product/aqua-crete',
  '/product/aqua-crete-eifs',
  '/product/sky-floor',
  '/product/polyaspartic-waterproof',
  '/certifications',
  '/contact',
];

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Tailwind v3 + PostCSS 설정
    postcssOptions: {
      compile: {
        plugins: [
          require('tailwindcss')('./tailwind.config.js'),
          require('autoprefixer'),
        ],
      },
    },

    // Static prerender (production builds only — see prember's `enabled` default).
    // Output: dist/index.html, dist/company/index.html, … and dist/_empty.html
    // (the original SPA shell, used as the fallback for non-prerendered URLs).
    prember: {
      urls: PRERENDER_URLS,
    },
  });

  return app.toTree();
};
