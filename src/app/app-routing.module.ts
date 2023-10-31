import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'about-us', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
