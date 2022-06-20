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

  // Let's turn the title into an object and see what happens

  data = {
    // This did not work because this has to be called in the HTML file
    title: "Angular Course from Udemy"
  }
}
