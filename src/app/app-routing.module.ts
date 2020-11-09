import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import {HomeComponent} from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { CrudGameComponent} from './components/crud-game/crud-game.component';
import { RecpassComponent} from './components/recpass/recpass.component';
import {JuegoComponent} from './components/juego/juego.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'game',component:GameComponent},
  {path:'juego/:id',component:JuegoComponent},
  {path:'nuevogame',component:CrudGameComponent},
  {path:'recuperarContrasenia',component:RecpassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
