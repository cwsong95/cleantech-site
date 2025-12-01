import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service router;

  constructor() {
    super(...arguments);
    this.router.on('routeDidChange', this.handleRouteChange);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.router.off('routeDidChange', this.handleRouteChange);
  }

  @action
  handleRouteChange() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }
}
