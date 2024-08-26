import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: 'listado',
  //       component: ListadoComponent,
  //     },
  //     {
  //       path: 'agregar',
  //       component: AgregarComponent,
  //     },
  //     {
  //       path: 'editar/:id',
  //       component: AgregarComponent,
  //     },
  //     {
  //       path: 'buscar',
  //       component: BuscarComponent,
  //     },
  //     {
  //       path: ':id',
  //       component: HeroeComponent,
  //     },
  //     {
  //       path: '**',
  //       redirectTo: 'listado',
  //     },
  //   ],
  // },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
