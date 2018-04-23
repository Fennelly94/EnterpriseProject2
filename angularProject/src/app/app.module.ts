import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Case0Component } from './case0/case0.component';
import { Case1Component } from './case1/case1.component';
import { Case3Component } from './case3/case3.component';
import { Case4Component } from './case4/case4.component';
import { Case5Component } from './case5/case5.component';
import { NavigationBarComponent } from './navigationBar/navigationBar.component';

import { StockCurrencyService } from './services/stockCurrency.service';

import { AppRoutingModule } from './app.routing.module';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Case0Component,
    Case1Component,
    Case3Component,
    Case4Component,
    Case5Component,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
   StockCurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
