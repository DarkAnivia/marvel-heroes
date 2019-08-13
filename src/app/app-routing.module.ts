import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailGuardService } from './shared/services/guard.service';


const routes: Routes = [
  {path: 'heroes', component: HeroListComponent},
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: 'hero-detail/:id', component: HeroDetailComponent},
  {path: '**', component: HeroListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
