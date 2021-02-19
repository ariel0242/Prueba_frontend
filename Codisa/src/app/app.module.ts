import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorService } from './core/helper/http-interceptor.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule, CoreModule, MatCardModule, MatTabsModule, MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLnXVYSHvqRDrx21LitMaxnTNjwxYoFMU'
    }),
  ],
  providers: [
    {

      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
