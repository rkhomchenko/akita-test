import {Injectable} from '@angular/core';
import {EntityStore, StoreConfig} from '@datorama/akita';

@Injectable({providedIn: 'any'})
@StoreConfig({name: 'posts'})
export class PostsStore extends EntityStore<any> {
  constructor() {
    super({});
  }
}
