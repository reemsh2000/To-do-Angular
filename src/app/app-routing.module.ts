import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuotesComponent} from './quotes/quotes.component';
import  {TodoComponent} from './todo/todo.component';
import { NotFoundComponent} from './not-found/not-found.component';
const routes: Routes = [ 
  {path:"todo",component:TodoComponent},
  {path:"quotes",component:QuotesComponent},
  {path:"",redirectTo:"todo" , pathMatch:"full"},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
