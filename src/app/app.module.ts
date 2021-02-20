import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // InlineSVGModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    InlineSVGModule,
    SharedModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
