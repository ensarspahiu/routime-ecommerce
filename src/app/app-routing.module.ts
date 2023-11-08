import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {ProductsComponent} from "./components/products/products.component";
import { ImpressumComponent } from './components/impressum/impressum.component';
import { ProductImagesComponent } from './components/product-images/product-images.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
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
  },
  {
    path: 'product-images', component: ProductImagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
