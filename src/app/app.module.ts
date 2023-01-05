import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FooterComponent } from './footer/footer.component';
// import { HomeComponent } from './home/home.component'; 
// import { NavbarComponent } from './navbar/navbar.component'; 
import { PublicModule } from './modules/public/public.module';

import { PublicComponent } from './public/public.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { ScreenshotComponent } from './screenshot/screenshot.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    FeaturesComponent,
    ScreenshotComponent,
    
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    BrowserAnimationsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
