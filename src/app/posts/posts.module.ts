import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {PostsComponent} from './components/posts/posts.component';
import {PostsRoutingModule} from './posts-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {PostsStore} from './services/posts.store';
import {PostsQuery} from './services/posts.query';
import {ListModule} from '../shared/components/list/list.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule, HttpClientModule, PostsRoutingModule,
    ListModule.forStore<any, any, any>(PostsStore, PostsQuery)
  ]
})
export class PostsModule {
}
