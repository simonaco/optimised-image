import { NgOptimizedImage, NgFor, provideImgixLoader } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, NgFor],
  providers: [provideImgixLoader('https://simona.imgix.net')],
  template: `
    <article class="post">
      <h2>Lorem Ipsum</h2>
      <figure>
        <img
          ngSrc="/verona_sunset.jpg"
          alt="Verona skyline"
          priority
          width="800"
          height="400"
          [ngSrcset]="ngSrcset"
        />
        <figcaption>Sun setting over Verona</figcaption>
      </figure>
      <p>What is Lorem Ipsum?</p>

      <div *ngFor="let image of images">
        <p>
          Cras et sem non ex condimentum finibus et id ante. Integer venenatis,
          risus eget dapibus varius, lectus nibh elementum ligula, at rutrum
          arcu lacus non nibh. Pellentesque vehicula eros a congue efficitur.
          Nullam vitae nulla in ligula lobortis dictum non in nunc. In vitae
          diam non nunc auctor pellentesque ut et risus. Sed vel diam turpis.
          Integer bibendum suscipit purus, id finibus dolor. Curabitur sed lacus
          placerat, volutpat sapien et, fringilla est. Etiam at ipsum elementum,
          vulputate massa quis, fermentum odio.
        </p>
        <img
          [ngSrc]="image.src"
          [alt]="image.alt"
          width="800"
          height="400"
          [ngSrcset]="ngSrcset"
        />
      </div>
    </article>
  `,
})
export class AppComponent {
  images = [
    {
      src: '/verona_sunset_2.jpg',
      alt: 'Verona skyline',
    },
    {
      src: '/castelsanpietro.jpeg',
      alt: 'Two ducks looking over Catel San Pietro',
    },
    {
      src: '/teatro_romano.jpeg',
      alt: 'Teatro romano ruins',
    },
    {
      src: '/arena_0.jpeg',
      alt: 'Arena di Verona with Italian flag projection',
    },
    {
      src: '/dolomites.jpg',
      alt: 'Dolomiti mountains covered in snow',
    },
  ];
  ngSrcset = '640w, 750w, 828w, 1080w, 1200w, 1920w, 2048w, 3840w';
}
