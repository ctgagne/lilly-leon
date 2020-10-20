import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { KcollectionComponent } from './components/kcollection/kcollection.component';
import { LocationComponent } from './components/location/location.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'location', component: LocationComponent },
  { path: 'store', component: StoreComponent},
  { path: 'kcollection', component: KcollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
