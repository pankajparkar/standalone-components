import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RolesComponent } from './roles.component';
import { RoleDetailsComponent } from './details/details.component';

const routes = [{
  path: '',
  component: RolesComponent
}, {
  path: 'details/:id',
  component: RoleDetailsComponent
}];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class RolesRoutingModule { }
