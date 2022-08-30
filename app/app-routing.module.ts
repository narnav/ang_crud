import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path:'cart',component:CartComponent},
  {path:"about",component:AboutComponent},
  {path:"student",component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
