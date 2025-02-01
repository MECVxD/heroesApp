import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/user.interface';

@Component({
  selector: 'heroes-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
    `
      .container {
        margin: 10px;
      }
    `,
  ],
})
export class LayoutPageComponent implements OnInit {
  public sidebarItems = [
    {
      label: 'Listado',
      icon: 'label',
      url: './list'
    },
    {
      label: 'Añadir',
      icon: 'add',
      url: './new-hero'
    },
    {
      label: 'Buscar',
      icon: 'search',
      url: './search'
    }
  ]

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  get user(): User|undefined {
    return this.authService.currentUser;
  }

  ngOnInit(): void {}

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }
}
