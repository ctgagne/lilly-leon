import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/image.service';
import { MimageService } from 'src/app/mimage.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {

  images = [];
  mimages = [];

  constructor(private imageService: ImageService, private mimageService: MimageService) {}

  ngOnInit(): void {
    this.loadImages();
    this.loadMimages();
  }

  loadImages(): void {
    this.imageService
      .fetchImages()
      .subscribe((images) => (this.images = images));
  }

  loadMimages(): void{
    this.mimageService.fetchMimages().subscribe((mimages) => (this.mimages = mimages));
  }
}
