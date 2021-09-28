import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'steps',
    pathMatch: 'full'
  },
  {
    path: 'steps',
    component: FormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperWidgetRoutingModule { }
