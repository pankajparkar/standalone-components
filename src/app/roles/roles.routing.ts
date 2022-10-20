import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RolesComponent } from './roles.component';
import { RoleDetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: RolesComponent },
      { path: 'details/:id', component: RoleDetailsComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class RolesRoutingModule { }
