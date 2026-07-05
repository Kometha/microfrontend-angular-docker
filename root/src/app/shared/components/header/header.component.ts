import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MenubarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly items: MenuItem[] = [
    { label: 'Inicio', icon: 'pi pi-home', routerLink: '/', routerLinkActiveOptions: { exact: true } },
    { label: 'Ventas', icon: 'pi pi-shopping-cart', routerLink: '/ventas' },
    { label: 'Compras', icon: 'pi pi-shopping-bag', routerLink: '/compras' },
  ];

  readonly isDark = signal(false);

  toggleDarkMode(): void {
    this.isDark.update((value) => !value);
    document.documentElement.classList.toggle('app-dark', this.isDark());
  }
}
