import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {UsersComponent} from './components/users/users.component';
import {UsersRoutingModule} from './users-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {UsersStore} from './services/users.store';
import {UsersQuery} from './services/users.query';
import {ListModule} from '../shared/components/list/list.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule, HttpClientModule, UsersRoutingModule,
    ListModule.forStore<any, any, any>(UsersStore, UsersQuery)
  ]
})
export class UsersModule {
}
