import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/location/location.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { KcollectionComponent} from './components/kcollection/kcollection.component';
import { LcollectionComponent } from './components/lcollection/lcollection.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LocationComponent,
    HomeComponent,
    StoreComponent,
    KcollectionComponent,
    LcollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
