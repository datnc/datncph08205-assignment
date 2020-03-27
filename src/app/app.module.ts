simport { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, SubjectListComponent, SubjectComponent, TunhienComponent, XahoiComponent, CategoryComponent, HeaderComponent, HomeComponent, NotFoundComponent, ManageStudentComponent, IntroductionComponent, FeedbackComponent, AskComponent, CreateAccountComponent, ForgotPasswordComponent, ChangePasswordComponent, ChangeInfoComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
