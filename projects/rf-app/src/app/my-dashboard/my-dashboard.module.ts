import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDashboardComponent } from './my-dashboard.component';
import { MyDashboardRoutingModule } from './my-dashboard-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [MyDashboardComponent],
  imports: [
    CommonModule,
    MyDashboardRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [MyDashboardComponent],
})
export class MyDashboardModule {}
