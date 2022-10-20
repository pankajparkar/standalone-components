import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entity } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'sc-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class RoleDetailsComponent {
  roleDetails = inject(ApiService).getRoles().find(
    (role: Entity) => role.id === +inject(ActivatedRoute).snapshot.params['id']
  );
}
