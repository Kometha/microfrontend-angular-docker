import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MenubarModule, ButtonModule, DrawerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  /** Menubar sin ítems horizontales: la navegación vive en el drawer. */
  readonly items = [];

  readonly isDark = signal(false);

  toggleDarkMode(): void {
    this.isDark.update((value) => !value);
    document.documentElement.classList.toggle('app-dark', this.isDark());
  }
}
