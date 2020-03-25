import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectComponent } from './subject/subject.component';
import { TunhienComponent } from './tunhien/tunhien.component';
import { XahoiComponent } from './xahoi/xahoi.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AskComponent } from './ask/ask.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, SubjectListComponent, SubjectComponent, TunhienComponent, XahoiComponent, CategoryComponent, HeaderComponent, HomeComponent, NotFoundComponent, ManageStudentComponent, IntroductionComponent, FeedbackComponent, AskComponent, CreateAccountComponent, ForgotPasswordComponent, ChangePasswordComponent, ChangeInfoComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
