import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-image-lightbox',
  templateUrl: './image-lightbox.component.html',
  styleUrls: ['./image-lightbox.component.scss'],
})
export class ImageLightboxComponent implements OnInit {

  @Input() images: [];

  slideIndex = 0;

  constructor(){}

  ngOnInit(): void{}


  public openModal(): void {
    document.getElementById('imgModal').style.display = 'flex';
  }

  public closeModal(): void {
    document.getElementById('imgModal').style.display = 'none';
  }

  public plusSlides(n): void {
    this.showSlides((this.slideIndex += n));
  }

  public currentSlide(n): void {
    this.showSlides((this.slideIndex = n));
  }

  public showSlides(slideIndex): void {
    const n = slideIndex;
    let i;
    const slides = document.getElementsByClassName(
      'img-slides'
    ) as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName('images') as HTMLCollectionOf<
      HTMLElement
    >;
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    if (dots && dots.length > 0) {
      dots[this.slideIndex - 1].className += ' active';
    }
  }
}
