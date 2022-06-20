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

  // This set up allows the Model (the magician)
  // and the View (the magician's stage) is where it is 
  // shown. This is done so that the logic can be clearly 
  // defined and set up, with as little hassle as possible.
  // Stream lining and allowing the dev cycle to be consistent

  title = 'Angular Course from Udemy';
}
