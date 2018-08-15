import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HeaderComponent } from './header/header.component';
import{ RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import{ LoginComponent } from './login/login.component'

const routes: Routes = [
  
  {
    path:'',
    component:RightSidebarComponent
  },
  {
    path:'login',
    component:LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
