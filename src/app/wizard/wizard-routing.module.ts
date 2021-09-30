import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WizardTabsComponent } from './wizard-tabs/wizard-tabs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wizard',
    pathMatch: 'full'
  },
  {
    path: 'wizard',
    component: WizardTabsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
