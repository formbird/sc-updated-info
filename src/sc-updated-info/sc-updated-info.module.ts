
import {Injector, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUpdatedInfoComponent } from './sc-updated-info.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [ScUpdatedInfoComponent],
  declarations: [
    ScUpdatedInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScUpdatedInfoComponent
  ]
})
export class ScUpdatedInfoModule {

    constructor(
      private injector: Injector
    ) {
      this.convertToCustomElement(
        ScUpdatedInfoComponent, 'sc-updated-info', this.injector
      );
      this.convertToCustomElement(
        ScUpdatedInfoComponent, 'sc-updated-info-web-component', this.injector
      );
      console.log('Installed sc-updated-info-web-component');
    }

    convertToCustomElement = (component: any, selector: string, injector: any) => {
      if (!customElements.get(selector)) {
        const scComponent = createCustomElement(component, { injector });
        customElements.define(selector, scComponent);
      }
    }

 }
