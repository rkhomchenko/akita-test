import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WrapperComponent} from './wrapper.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [WrapperComponent]
})
export class WrapperModule {
}
