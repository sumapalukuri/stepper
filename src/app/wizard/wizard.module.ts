import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { WizardTabsComponent } from './wizard-tabs/wizard-tabs.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { StepsWizardDirective } from './directives/steps-wizard.directive';


@NgModule({
  declarations: [
    WizardTabsComponent,
    TabsComponent,
    TabComponent,
    StepsWizardDirective
  ],
  imports: [
    CommonModule,
    WizardRoutingModule
  ]
})
export class WizardModule { }
