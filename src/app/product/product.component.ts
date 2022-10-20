import { Component, inject } from '@angular/core';
import { Entity } from '../models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  private apiService = inject(ApiService);
  displayedColumns: string[] = ['position', 'name'];
  dataSource: Entity[] = this.apiService.getProducts();
}
