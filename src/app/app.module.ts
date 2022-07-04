import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from "@angular/material/divider";
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import {MatListModule} from "@angular/material/list";
import { UsersComponent } from './pages/users/users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { PaginatorComponent } from './components/paginator/paginator.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { AddUserButtonComponent } from './components/add-user-button/add-user-button.component';
import {HttpClientModule} from "@angular/common/http";
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';
import {MatIconModule} from "@angular/material/icon";
import { FootComponent } from './components/foot/foot.component';
import { CoursComponent } from './pages/cours/cours.component';
import {AuthService} from "./services/auth/auth.service";
import {MatMenuModule} from "@angular/material/menu";
import { TeacherMenuComponent } from './components/teacher-menu/teacher-menu.component';
import { StudentMenuComponent } from './components/student-menu/student-menu.component';
import {FormsModule} from "@angular/forms";
import {SwiperModule} from "swiper/angular";
import {MatGridListModule} from "@angular/material/grid-list";
import { ProfilComponent } from './pages/profil/profil.component';
import { ChangeInfoComponent } from './components/change-info/change-info.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavbarComponent,
    AdminHomeComponent,
    SidenavContentComponent,
    UsersComponent,
    UsersListComponent,
    PaginatorComponent,
    UserSearchComponent,
    AddUserButtonComponent,
    NavbarComponent,
    HomepageComponent,
    TeacherCardComponent,
    FootComponent,
    CoursComponent,
    TeacherMenuComponent,
    StudentMenuComponent,
    ProfilComponent,
    ChangeInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    SwiperModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AuthService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
