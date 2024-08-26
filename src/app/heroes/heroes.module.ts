import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
// import { MaterialModule } from '../material/material.module';

import { ImagenPipe } from './pipes/imagen.pipe';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

@NgModule({
  declarations: [
    HeroPageComponent,
    SearchPageComponent,
    LayoutPageComponent,
    ListPageComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
  ],
})
export class HeroesModule {}
