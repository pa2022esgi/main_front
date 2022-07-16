import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './pages/users/users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';
import { MatIconModule } from '@angular/material/icon';
import { FootComponent } from './components/foot/foot.component';
import { CoursComponent } from './pages/cours/cours.component';
import { AuthService } from './services/auth/auth.service';
import { MatMenuModule } from '@angular/material/menu';
import { TeacherMenuComponent } from './components/teacher-menu/teacher-menu.component';
import { StudentMenuComponent } from './components/student-menu/student-menu.component';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProfilComponent } from './pages/profil/profil.component';
import { ChangeInfoComponent } from './components/change-info/change-info.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RequestInterceptor } from './services/request.interceptor';
import { ErrorComponent } from './pages/error/error.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChangePwdComponent } from './components/change-pwd/change-pwd.component';
import { ChangeProfilPicComponent } from './components/change-profil-pic/change-profil-pic.component';
import { ChangeDocumentsComponent } from './components/change-documents/change-documents.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { UserInfoDialogComponent } from './components/user-info-dialog/user-info-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import { CreateLessonComponent } from './pages/create-lesson/create-lesson.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SlotsComponent } from './pages/slots/slots.component';
import { AddSlotDialogComponent } from './components/add-slot-dialog/add-slot-dialog.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { SlotCardComponent } from './components/slot-card/slot-card.component';
import { PayDialogComponent } from './components/pay-dialog/pay-dialog.component';
import { VisioComponent } from './pages/visio/visio.component';
import { CommentsComponent } from './components/comments/comments.component';
import { StarRatingModule } from 'angular-star-rating';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsComponent } from './components/charts/charts.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavbarComponent,
    SidenavContentComponent,
    UsersComponent,
    UsersListComponent,
    NavbarComponent,
    HomepageComponent,
    TeacherCardComponent,
    FootComponent,
    CoursComponent,
    TeacherMenuComponent,
    StudentMenuComponent,
    ProfilComponent,
    ChangeInfoComponent,
    ErrorComponent,
    ChangePwdComponent,
    ChangeProfilPicComponent,
    ChangeDocumentsComponent,
    UserInfoDialogComponent,
    CreateLessonComponent,
    TextEditorComponent,
    LessonComponent,
    ChatComponent,
    SlotsComponent,
    AddSlotDialogComponent,
    SlotCardComponent,
    PayDialogComponent,
    VisioComponent,
    CommentsComponent,
    CommentComponent,
    CommentsListComponent,
    CommentsPageComponent,
    TransactionsComponent,
    TransactionsListComponent,
    ChartsComponent,
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
        MatGridListModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatDialogModule,
        MatTooltipModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
        NgxMaterialTimepickerModule,
        StarRatingModule.forRoot(),
        NgApexchartsModule
    ],
  providers: [
    AuthService,
    MatDatepickerModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
