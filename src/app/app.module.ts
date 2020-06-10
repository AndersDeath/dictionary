import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterial } from './shared/angular-material.model';
import { FrontComponent } from './components/front/front.component';
import { DataService } from './services/data.service';
import { HistoryService } from './services/history.service';
import { UtilsService } from './services/utils.service';

@NgModule({
  declarations: [AppComponent, FrontComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterial,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DataService, HistoryService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
