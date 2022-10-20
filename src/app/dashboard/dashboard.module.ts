import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';


const matModules = [
  MatGridListModule,
  MatCardModule,
];

@NgModule({
  imports: [
    ...matModules,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent },
    ]),
    SharedModule,
  ],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule { }
