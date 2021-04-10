import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductComponent } from '@landingPageComponent/product/product.component';
import { ModalDetailProductComponent } from '@landingPageComponent/product/component/modal-detail-product/modal-detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProductComponent,
    ModalDetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
