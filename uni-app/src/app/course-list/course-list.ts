import { Component } from '@angular/core';
import { Course, CourseStatus } from '../course';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {

  courses: Course[] = [];

  statusNames = {
    [CourseStatus.Active]: 'Active',
    [CourseStatus.Disabled]: 'Disabled',
    [CourseStatus.Archived]: 'Archived'
  }

  onDelete(course: Course){
    this.courses = this.courses.filter(c => c.id != course.id);
  }

  getStatus(course: Course){
    return this.statusNames[course.status];
  }

  constructor(){
    this.courses = [
      {
        id: 1,
        code: 'CS134',
        name: 'Angular',
        credits: 5,
        status: CourseStatus.Active,
        type: 'required'
      },
      {
        id: 2,
        code: 'CS135',
        name: 'React',
        credits: 3,
        status: CourseStatus.Active,
        type: 'elective'
      },
      {
        id: 3,
        code: 'CS136',
        name: 'Vue',
        credits: 7,
        status: CourseStatus.Disabled,
        type: 'elective'
      },
      {
        id: 4,
        code: 'CS137',
        name: 'AngularJS',
        credits: 0,
        status: CourseStatus.Archived,
        type: 'elective'
      }
    ];
  }
}
