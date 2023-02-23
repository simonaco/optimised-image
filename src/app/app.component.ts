import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgOptimizedImage],
  template: `
    <article class="post">
      <h2>Angular Image Directive</h2>
      <figure>
        <img
          ngSrc="/johannes-hofmann-PM5a_R83-YQ-unsplash.jpg"
          alt="Bernina train in Swiss Alps"
        />
        <figcaption>Bernina train in Switzerland</figcaption>
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
        <img [ngSrc]="image.src" [alt]="image.alt" width="800" height="400" />
      </div>
    </article>
  `,
})
export class AppComponent {
  images = [
    {
      src: '/aleksandr-popov-I0_UBfHbnkI-unsplash.jpg',
      alt: 'Train station at sunset',
    },
    {
      src: '/boris-stromar-qoCZmnwmwe0-unsplash.jpg',
      alt: 'Train signals at sunset',
    },
    {
      src: '/dayso-7o4Du7K6wII-unsplash.jpg',
      alt: 'Train signal',
    },
    {
      src: '/johannes-hofmann-PM5a_R83-YQ-unsplash.jpg',
      alt: 'Bernina train in Swiss Alps',
    },
    {
      src: '/roland-losslein-DmDYX_ltI48-unsplash.jpg',
      alt: 'Train in Scotland',
    },
  ];
}
