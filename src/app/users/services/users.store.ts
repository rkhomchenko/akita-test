import {Injectable} from '@angular/core';
import {EntityStore, StoreConfig} from '@datorama/akita';

@Injectable({providedIn: 'any'})
@StoreConfig({name: 'users'})
export class UsersStore extends EntityStore<any> {
  constructor() {
    super({});
  }
}
