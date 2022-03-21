import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {EntityStore, QueryEntity} from '@datorama/akita';
import {QUERY, STORE} from '../../utils/tokens';

@NgModule({
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListModule {
  static forStore<Entity, Store extends EntityStore<Entity>, Query extends QueryEntity<Entity>>(store: Store, query: Query): ModuleWithProviders<ListModule> {
    return {
      ngModule: ListModule,
      providers: [
        {provide: STORE, useExisting: store},
        {provide: QUERY, useExisting: query}
      ]
    };
  }
}
