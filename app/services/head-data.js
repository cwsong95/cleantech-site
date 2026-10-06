import HeadDataService from 'ember-cli-head/services/head-data';
import { service } from '@ember/service';
import { htmlSafe } from '@ember/template';
import {
  ROUTE_META,
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
} from 'cleantech-fresh/utils/seo';

/**
 * Backs `app/templates/head.hbs` (rendered by ember-cli-head's <HeadLayout />).
 *
 * Everything is a getter over two tracked sources — the current route and the
 * current locale — so the <head> stays in sync in the browser, and the
 * FastBoot/prember prerender emits the right tags for each URL.
 */
export default class SeoHeadDataService extends HeadDataService {
  @service router;
  @service locale;

  get lang() {
    return this.locale.isKorean ? 'ko' : 'en';
  }

  get routeName() {
    return this.router.currentRouteName ?? 'index';
  }

  get meta() {
    return ROUTE_META[this.routeName] ?? ROUTE_META.index;
  }

  get noindex() {
    return Boolean(this.meta.noindex);
  }

  get canonical() {
    const path = this.meta.path ?? '/';
    return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  }

  get title() {
    return (
      this.meta.ogTitle?.[this.lang] ?? ROUTE_META.index.ogTitle[this.lang]
    );
  }

  get description() {
    return (
      this.meta.description?.[this.lang] ??
      ROUTE_META.index.description[this.lang]
    );
  }

  get siteName() {
    return SITE_NAME[this.lang];
  }

  get ogLocale() {
    return this.locale.isKorean ? 'ko_KR' : 'en_US';
  }

  get ogImage() {
    return `${SITE_URL}${this.meta.image ?? DEFAULT_OG_IMAGE}`;
  }

  /**
   * JSON-LD for this page, already wrapped in its <script> tag.
   * Rendered with triple-stash in head.hbs so the JSON isn't HTML-escaped.
   */
  get jsonLd() {
    const graph = this.meta.jsonLd;
    if (!graph || graph.length === 0) return null;
    const json = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    })
      // Keep the payload safe inside a <script> element.
      .replace(/</g, '\\u003c');
    return htmlSafe(`<script type="application/ld+json">${json}</script>`);
  }
}
