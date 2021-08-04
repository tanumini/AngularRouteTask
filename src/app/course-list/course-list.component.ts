import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses:any;
  currentCourse=null;
  currentIndex=-1;
  title="";
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.retreiveCourse();
  }
  retreiveCourse():void{
    this.courseService.getAllCourses().subscribe(
      data=>{this.courses=data;
      console.log(data);},
      error=>{console.log(error);}
    )
  }
  removeCourse(id:number):void{
    this.courseService.deleteCourseById(id).subscribe(
    response=>{console.log(response)},
    error=>{console.log(error)}
    );

}
}