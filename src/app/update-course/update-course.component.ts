import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  course = {
    "id":  0,
    "title": ''
  }
  submitted = false;
  constructor(private courseservice: CourseService) { }

  ngOnInit(): void {
  }
  upCourse(): void {
   
    const data = {
      "id": this.course.id,
      "title": this.course.title
    };

    this.courseservice. updateCourse(data.id,data).subscribe(
      response => {
      console.log(response);
      this.submitted = true;
    },
      error => {
        console.log(error);
        this.submitted = false;
      }
    );

  }

}


