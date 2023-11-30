import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImageLayoutComponent } from './image-layout/image-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageLayoutFormComponent } from './components/image-layout-form/image-layout-form.component';
import { ImageLayoutPicsComponent } from './components/image-layout-pics/image-layout-pics.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageLayoutComponent,
    ImageLayoutPicsComponent,
    ImageLayoutFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
