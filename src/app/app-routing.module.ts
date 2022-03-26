import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuotesComponent} from './quotes/quotes.component';
import  {TodoComponent} from './todo/todo.component';
import { NotFoundComponent} from './not-found/not-found.component';
const routes: Routes = [ 
  {path:"quotes",component:QuotesComponent},
  {path:"",component:TodoComponent},
  {path:"todo",redirectTo:"" , pathMatch:"full"},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
