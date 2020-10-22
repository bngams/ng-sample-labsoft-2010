import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GetStartedComponent } from './components/get-started/get-started.component';

const routes: Routes = [
  // lazy loading (chargement différé => loadChildren => import)
  // /products => '' => /products => ProductDashboardComponent
  { path: 'products', loadChildren: () => import('src/app/modules/product/product.module').then(m => m.ProductModule) },
  { path: 'home', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
