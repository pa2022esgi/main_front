import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CoursComponent } from './pages/cours/cours.component';

import { UsersComponent } from './pages/users/users.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ErrorComponent } from './pages/error/error.component';
import { CreateLessonComponent } from './pages/create-lesson/create-lesson.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SlotsComponent } from './pages/slots/slots.component';
import { VisioComponent } from './pages/visio/visio.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
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
    path: 'admin/users',
    component: UsersComponent,
  },
  {
    path: 'admin/comments',
    component: CommentsPageComponent,
  },
  {
    path: 'admin/transactions',
    component: TransactionsComponent,
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
  {
    path: 'slots',
    component: SlotsComponent,
  },
  {
    path: 'visio/:id',
    component: VisioComponent,
  },
  { 
    path: '**', 
    component: ErrorComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
