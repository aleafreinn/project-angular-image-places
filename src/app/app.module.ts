import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImageLayoutComponent } from './image-layout/image-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageLayoutPicsComponent } from './image-layout/image-layout-pics/image-layout-pics.component';
import { ImageLayoutFormComponent } from './image-layout/image-layout-form/image-layout-form.component';

@NgModule({
  declarations: [AppComponent, ImageLayoutComponent, ImageLayoutPicsComponent, ImageLayoutFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
