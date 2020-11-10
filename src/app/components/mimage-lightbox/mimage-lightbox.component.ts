import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mimage-lightbox',
  templateUrl: './mimage-lightbox.component.html',
  styleUrls: ['./mimage-lightbox.component.scss'],
})
export class MimageLightboxComponent implements OnInit {
  @Input() mimages: [];

  slideIndex = 0;

  constructor() {}

  ngOnInit(): void {
  }


  public openModal(): void {
    document.getElementById('mimgModal').style.display = 'flex';
  }

  public closeModal(): void {
    document.getElementById('mimgModal').style.display = 'none';
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
      'mimg-slides'
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
