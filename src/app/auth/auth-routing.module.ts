import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'login',
  //       component: LoginComponent,
  //     },
  //     {
  //       path: 'registro',
  //       component: RegisterComponent,
  //     },
  //     {
  //       path: '**',
  //       redirectTo: 'login',
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AuthRoutingModule {}
