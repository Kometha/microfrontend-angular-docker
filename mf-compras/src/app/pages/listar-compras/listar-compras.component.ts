import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

interface Curso {
  titulo: string;
  descripcion: string;
  imagen: string;
  alt: string;
}

@Component({
  selector: 'app-listar-compras',
  imports: [CardModule],
  templateUrl: './listar-compras.component.html',
  styleUrl: './listar-compras.component.scss',
})
export class ListarComprasComponent {
  readonly cursos: Curso[] = [
    {
      titulo: 'Curso Angular Avanzado',
      descripcion:
        'Aprende a desarrollar aplicaciones SPA modernas con Angular 21, incluyendo rutas, servicios, componentes reutilizables y arquitectura basada en microfrontends. Ideal para desarrolladores frontend que quieren subir de nivel.',
      imagen: '/mf-compras/images/angular.svg',
      alt: 'Angular',
    },
    {
      titulo: 'Curso Kotlin para Android',
      descripcion:
        'Domina Kotlin y crea apps modernas para Android con Jetpack Compose, corrutinas y arquitectura MVVM. Este curso es perfecto si deseas desarrollar apps móviles profesionales.',
      imagen: '/mf-compras/images/Kotlin_Icon.png',
      alt: 'Kotlin',
    },
    {
      titulo: 'Curso C# con .NET 8',
      descripcion:
        'Aprende a construir aplicaciones robustas con C# y .NET 8: desde APIs RESTful hasta aplicaciones de escritorio. Este curso es ideal para backend developers o desarrolladores que migran desde otras plataformas.',
      imagen: '/mf-compras/images/Csharp_Logo.png',
      alt: 'C#',
    },
    {
      titulo: 'Curso Python para Data Science',
      descripcion:
        'Aprende Python desde cero orientado a análisis de datos, visualización y machine learning. Usarás herramientas como Pandas, NumPy y Matplotlib. Perfecto para quienes buscan entrar al mundo de la ciencia de datos.',
      imagen: '/mf-compras/images/Python-logo-notext.svg',
      alt: 'Python',
    },
  ];
}
