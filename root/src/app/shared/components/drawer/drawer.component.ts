import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-drawer',
  imports: [RouterLink, DrawerModule, ButtonModule, AvatarModule, RippleModule],
  templateUrl: './drawer.component.html',
})
export class DrawerComponent {
  /** Visibilidad del drawer. */
  readonly visible = signal(false);

  /** Estado abierto/cerrado del grupo "Ventas". */
  readonly ventasOpen = signal(false);

  open(): void {
    this.visible.set(true);
  }

  close(): void {
    this.visible.set(false);
  }

  toggleVentas(): void {
    this.ventasOpen.update((open) => !open);
  }

  /** Al navegar desde un enlace, cerramos el drawer. */
  onNavigate(): void {
    this.close();
  }
}
