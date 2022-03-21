import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {PostsStore} from './posts.store';

@Injectable({ providedIn: 'any' })
export class PostsQuery extends QueryEntity<any> {
    constructor(protected override store: PostsStore) {
        super(store);
    }
}
