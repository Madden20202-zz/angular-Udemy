import { Component } from '@angular/core';

@Component({
  // This is the name of the tag
  selector: 'app-root',
  // This is the route to a tag that 
  // gives a structure to the file via HTML
  templateUrl: './app.component.html',
  // This is the route 
  // to the style sheet
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // This is a basic use of a variable! 

  // Variables are ways to store data 
  // that can be shown another time,

  // The title now is called and shows as such!
  title = 'Angular Course from Udemy';
}
