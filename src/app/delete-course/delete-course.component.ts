import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {
  course = {
    "id":  0
  }
  submitted = false;
  constructor(private courseservice: CourseService) { }

  ngOnInit(): void {
  }
  delCourse(): void {
   
    const data = {
      "id": this.course.id
    };

    this.courseservice. deleteCourseById(data.id).subscribe(
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
