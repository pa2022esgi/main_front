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
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';
import {MatIconModule} from "@angular/material/icon";
import { FootComponent } from './components/foot/foot.component';
import { CoursComponent } from './pages/cours/cours.component';
import {AuthService} from "./services/auth/auth.service";
import {MatMenuModule} from "@angular/material/menu";
import { TeacherMenuComponent } from './components/teacher-menu/teacher-menu.component';
import { StudentMenuComponent } from './components/student-menu/student-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavbarComponent,
    HomepageComponent,
    TeacherCardComponent,
    FootComponent,
    CoursComponent,
    TeacherMenuComponent,
    StudentMenuComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
