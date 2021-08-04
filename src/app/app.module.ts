import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    DeleteCourseComponent,
    UpdateCourseComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
