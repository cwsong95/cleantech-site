import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service locale;
  @tracked productsOpen = false;

  @action toggleProductsDropdown() {
    this.productsOpen = !this.productsOpen;
  }

  @action openProductsDropdown() {
    this.productsOpen = true;
  }

  @action closeProductsDropdown() {
    this.productsOpen = false;
  }

  @action handleDropdownFocusOut(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      this.closeProductsDropdown();
    }
  }

  @action toggleLocale() {
    this.locale.toggle();
  }
}
