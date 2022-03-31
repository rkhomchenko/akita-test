import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundModule} from './shared/components/not-found/not-found.module';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {WrapperComponent} from './shared/components/wrapper/wrapper.component';
import {AuthGuard} from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 't',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':index',
        component: WrapperComponent,
        children: [
          {
            path: 'details',
            loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
          },
          {
            path: 'users',
            loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
          },
          {
            path: 'posts',
            loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
          },
          {
            path: '**',
            redirectTo: 'details'
          }
        ]
      }
    ]
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NotFoundModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
