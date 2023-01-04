import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { HomeComponent } from 'src/app/home/home.component'; 
import { FooterComponent } from 'src/app/footer/footer.component'; 
import { PricingComponent } from 'src/app/pricing/pricing.component';
import { ContactComponent } from 'src/app/contact/contact.component';



@NgModule({
  declarations: [
   NavbarComponent, HomeComponent, FooterComponent, PricingComponent, ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [NavbarComponent, HomeComponent, FooterComponent, PricingComponent, ContactComponent]
})
export class PublicModule { }
