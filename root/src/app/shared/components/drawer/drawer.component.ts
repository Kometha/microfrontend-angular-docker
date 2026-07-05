import { Component, HostListener, signal } from '@angular/core';
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

  /**
   * Cierre con Esc manejado aquí porque el `closeOnEscape` interno de PrimeNG
   * oculta el drawer sin emitir `visibleChange`, dejando el signal en `true` y
   * bloqueando la reapertura. Al cerrar por nuestro propio signal queda sincronizado.
   */
  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.visible()) {
      this.close();
    }
  }
}
