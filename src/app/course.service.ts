import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseurl="http://localhost:3000/course";
  constructor(private http:HttpClient) { }
  getAllCourses():Observable<any>
  {
    return this.http.get(this.baseurl);
  }
  getCourseById(id:number):Observable<any>
  {
    return this.http.get( `${this.baseurl}/${id}`);
  }
  createCourse(data:any):Observable<any>{
    return this.http.post(this.baseurl,data);
  }
  updateCourse(id:number,data:any):Observable<any>
  {
    return this.http.put(`${this.baseurl}/${id}`,data);
  }
  deleteCourseById(id:number):Observable<any>
  {
    return this.http.delete( `${this.baseurl}/${id}`);
  }
}
