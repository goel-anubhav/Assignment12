import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    ContactComponent,
  
   
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }