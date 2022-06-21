import { Component, OnInit } from '@angular/core';

/*
  This is created from ng generate component ______
  This is especially strong, since the code can 
  be set out to multiple templates, all with their own
  code that can be ran at any time, and updated 
  independently from each other. Most of all this can 
  be done quickly, speeding up the development cycle
*/

@Component({
  // Notice that the name can be changed, but shouldn't be done
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
