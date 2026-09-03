import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DownloadsRoute extends Route {
  // Downloads have been merged into the Resources (기술자료) page.
  @service router;

  redirect() {
    this.router.replaceWith('certifications');
  }
}
