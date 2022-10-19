import { Pipe, PipeTransform } from '@angular/core';

import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  public transform(heroe: Heroe): string {
    return heroe.alt_img
      ? 'assets/no-image.png'
      : `assets/heroes/${heroe.id}.jpg`;
  }
}
