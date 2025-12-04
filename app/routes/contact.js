import Route from '@ember/routing/route';

export default class ContactRoute extends Route {
  resetController(controller, isExiting) {
    if (!isExiting) {
      return;
    }

    controller.name = '';
    controller.email = '';
    controller.phone = '';
    controller.company = '';
    controller.message = '';
    controller.status = 'idle';
    controller.errorMessage = '';
  }
}
