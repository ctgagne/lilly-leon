import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CollectionAComponent } from './collection-a/collection-a.component';



@NgModule({
  declarations: [
    CollectionAComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
})
export class StoreModule { }
