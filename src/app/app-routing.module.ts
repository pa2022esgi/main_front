import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import {AdminHomeComponent} from "./pages/admin-home/admin-home.component";
import {UsersComponent} from "./pages/users/users.component";
import {UserModifyComponent} from "./pages/user-modify/user-modify.component";
import {UserCreateComponent} from "./pages/user-create/user-create.component";

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
    path: 'admin/users/modify_id',
    component: UserModifyComponent,
  },
  {
    path: 'admin/users/create',
    component: UserCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
