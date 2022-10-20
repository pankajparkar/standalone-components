import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing';

const matModules = [
  MatGridListModule,
  MatCardModule,
];

@NgModule({
  imports: [
    ...matModules,
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule { }
