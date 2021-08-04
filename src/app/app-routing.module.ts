import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

const routes: Routes = [
  {
path:"AddComponent",
component:AddCourseComponent
  },
  {
path:"UpdateComponent",
component:UpdateCourseComponent
  },
{
  path:"CourseList",
  component: CourseListComponent
},
{
  path:"DeleteCourse",
  component: DeleteCourseComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
