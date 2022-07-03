import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {CoursComponent} from './pages/cours/cours.component';

import {AdminHomeComponent} from "./pages/admin-home/admin-home.component";
import {UsersComponent} from "./pages/users/users.component";
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
  },
  {
    path: 'admin/users',
    component: UsersComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path:'cours',
    component: CoursComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
