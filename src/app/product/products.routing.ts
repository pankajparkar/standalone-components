import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: ProductComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
