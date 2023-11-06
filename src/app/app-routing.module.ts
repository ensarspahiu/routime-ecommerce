import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {ProductsComponent} from "./components/products/products.component";
import { ImpressumComponent } from './components/impressum/impressum.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'about-us', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'impressum', component: ImpressumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
