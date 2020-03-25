import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectComponent } from './subject/subject.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SubjectListComponent, SubjectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
