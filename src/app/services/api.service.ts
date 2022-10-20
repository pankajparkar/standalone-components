import { Injectable } from "@angular/core";

import { Entity } from "../models";

export const products: Entity[] = [
  { id: 1, name: 'Hydrogen' },
  { id: 2, name: 'Helium' },
  { id: 3, name: 'Lithium' },
  { id: 4, name: 'Beryllium' },
  { id: 5, name: 'Boron' },
  { id: 6, name: 'Carbon' },
  { id: 7, name: 'Nitrogen' },
  { id: 8, name: 'Oxygen' },
  { id: 9, name: 'Fluorine' },
  { id: 10, name: 'Neon' },
];

export const roles: Entity[] = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'Tester' },
  { id: 3, name: 'Report' },
  { id: 4, name: 'Viewer' },
  { id: 5, name: 'Analyst' },
  { id: 6, name: 'Author' },
  { id: 7, name: 'Accountant' },
  { id: 8, name: 'QA' },
  { id: 9, name: 'Servant' },
  { id: 10, name: 'SuperUser' },
];

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getRoles(): Entity[] {
    return roles;
  }
  getProducts() {
    return products;
  }
}