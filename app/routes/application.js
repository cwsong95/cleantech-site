import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service router;

  constructor() {
    super(...arguments);
    if (
      typeof window !== 'undefined' &&
      'scrollRestoration' in window.history
    ) {
      // Prevent browser from restoring the previous scroll position on SPA navigations.
      window.history.scrollRestoration = 'manual';
    }
    this.router.on('routeDidChange', this.handleRouteChange);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.router.off('routeDidChange', this.handleRouteChange);
  }

  @action
  handleRouteChange() {
    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        // Reset any scrollable main container just in case.
        document
          .querySelector('main')
          ?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    }
  }
}
