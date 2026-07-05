import { Component, HostListener, effect, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drawer',
  imports: [RouterLink],
  templateUrl: './drawer.component.html',
})
export class DrawerComponent {
  /** Visibilidad del drawer. */
  readonly visible = signal(false);

  /** Estado abierto/cerrado del grupo "Ventas". */
  readonly ventasOpen = signal(false);

  constructor() {
    // Bloquea el scroll del body mientras el drawer está abierto.
    effect(() => {
      document.body.classList.toggle('overflow-hidden', this.visible());
    });
  }

  open(): void {
    this.visible.set(true);
  }

  close(): void {
    this.visible.set(false);
  }

  toggleVentas(): void {
    this.ventasOpen.update((open) => !open);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.visible()) {
      this.close();
    }
  }
}
