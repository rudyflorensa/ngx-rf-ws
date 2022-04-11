import { NgModule } from '@angular/core';
import { MyDashboardComponent } from './my-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: MyDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDashboardRoutingModule { }
