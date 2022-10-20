import { Injectable } from "@angular/core";

import { Entity } from "../models";

export const products: Entity[] = [
  { position: 1, name: 'Hydrogen' },
  { position: 2, name: 'Helium' },
  { position: 3, name: 'Lithium' },
  { position: 4, name: 'Beryllium' },
  { position: 5, name: 'Boron' },
  { position: 6, name: 'Carbon' },
  { position: 7, name: 'Nitrogen' },
  { position: 8, name: 'Oxygen' },
  { position: 9, name: 'Fluorine' },
  { position: 10, name: 'Neon' },
];

export const roles: Entity[] = [
  { position: 1, name: 'Admin' },
  { position: 2, name: 'Tester' },
  { position: 3, name: 'Report' },
  { position: 4, name: 'Viewer' },
  { position: 5, name: 'Analyst' },
  { position: 6, name: 'Author' },
  { position: 7, name: 'Accountant' },
  { position: 8, name: 'QA' },
  { position: 9, name: 'Servant' },
  { position: 10, name: 'SuperUser' },
];

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getRoles() {
    return roles;
  }
  getProducts() {
    return products;
  }
}