import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SectiosComponent } from './sectios/sectios.component';
import { AppRoutingModule } from './app-routing.module';
import { SectionDetailsComponent } from './section-details/section-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiDataComponent } from './api-data/api-data.component';
import {FormsModule} from '@angular/forms';
import { ApiDetailsComponent } from './api-details/api-details.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    SectiosComponent,
    SectionDetailsComponent,
    ApiDataComponent,
    ApiDetailsComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
