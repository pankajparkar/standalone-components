import { Component, inject } from '@angular/core';
import { Entity } from '../models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  private apiService = inject(ApiService);
  displayedColumns: string[] = ['id', 'name'];
  dataSource: Entity[] = this.apiService.getRoles();
}
