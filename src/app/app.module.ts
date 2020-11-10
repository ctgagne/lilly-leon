import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/location/location.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { KcollectionComponent } from './components/kcollection/kcollection.component';
import { LcollectionComponent } from './components/lcollection/lcollection.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ImageLightboxComponent } from './components/image-lightbox/image-lightbox.component';
import { ImageService } from './image.service';
import { MimageLightboxComponent } from './components/mimage-lightbox/mimage-lightbox.component';
import { MimageService } from './mimage.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LocationComponent,
    HomeComponent,
    StoreComponent,
    KcollectionComponent,
    LcollectionComponent,
    ImageLightboxComponent,
    MimageLightboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ScrollToModule.forRoot(),
  ],
  providers: [ImageService, MimageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
