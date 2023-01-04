import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component'; 
import { PublicModule } from './modules/public/public.module';
import { PricingComponent } from './pricing/pricing.component';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},

  // {
  //   path: '',
  //   component: PublicComponent,
  //   loadChildren: () =>
  //     import('./modules/public/public.module').then(
  //       (m) => m.PublicModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PublicModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
