import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TunhienComponent } from './tunhien/tunhien.component';
import { XahoiComponent } from './xahoi/xahoi.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AskComponent } from './ask/ask.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path: 'subject/tunhien',component:TunhienComponent},
  {path: 'subject/xahoi',component:XahoiComponent},
  {path: 'manage-student',component:ManageStudentComponent},
  {path: 'introduction',component:IntroductionComponent},
  {path: 'feedback',component:FeedbackComponent},
  {path: 'ask',component:AskComponent},
  {path: 'login',component:LoginComponent},
  {path: 'create-account',component:CreateAccountComponent},
  {path: 'change-account-info',component:ChangeInfoComponent},
  {path: 'forgot-password',component:ForgotPasswordComponent},
  {path: 'change-password',component:ChangePasswordComponent},
  {path: '404',component:NotFoundComponent},
  {path: '**',redirectTo:'404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
