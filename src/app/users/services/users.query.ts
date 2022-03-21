import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {UsersStore} from './users.store';

@Injectable({ providedIn: 'any' })
export class UsersQuery extends QueryEntity<any> {
    constructor(protected override store: UsersStore) {
        super(store);
    }
}
