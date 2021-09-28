import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'steps-wizard',
    pathMatch: 'full'
  },
  {
    path: 'steps-wizard',
    loadChildren: () => import("./stepper-widget/stepper-widget.module").then(module => module.StepperWidgetModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
