import { Component, ChangeDetectorRef, ViewEncapsulation, ChangeDetectionStrategy, Injector } from '@angular/core';
import { AbstractComponent } from '@formbird/angular-shared'; 
import { ComponentDefinition } from '@formbird/types'; 
import * as moment from 'moment';

interface ScUpdatedInfoComponentDefinition extends ComponentDefinition {
}

@Component({
  templateUrl: './sc-updated-info.component.html',
  styleUrls: ['./sc-updated-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScUpdatedInfoComponent extends AbstractComponent<ScUpdatedInfoComponentDefinition> {

  doc: any;

  constructor(injector: Injector) {
    super(injector);
  }

  override ngOnInit(): void {
    this.doc = this.document;

    this.doc.lastUpdatedDate = moment(this.doc.lastUpdatedDate).format('DD/MM/YY h:mm');
  }

}
