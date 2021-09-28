import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperWidgetRoutingModule } from './stepper-widget-routing.module';
import { StepsComponent } from './components/steps/steps.component';
import { StepsTemplateComponent } from './components/steps-template/steps-template.component';
import { FormPageComponent } from './pages/form-page/form-page.component';


@NgModule({
  declarations: [
    StepsComponent,
    StepsTemplateComponent,
    FormPageComponent
  ],
  imports: [
    CommonModule,
    StepperWidgetRoutingModule
  ]
})
export class StepperWidgetModule { }
