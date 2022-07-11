import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CoursComponent } from './pages/cours/cours.component';

import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ErrorComponent } from './pages/error/error.component';
import { CreateLessonComponent } from './pages/create-lesson/create-lesson.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { ChatComponent } from './pages/chat/chat.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
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
    path: 'my-lesson',
    component: CreateLessonComponent,
  },
  {
    path: 'lesson/:id',
    component: LessonComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'cours',
    component: CoursComponent,
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
