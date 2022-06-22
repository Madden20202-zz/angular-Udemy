import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/environments/db-data';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  /*
    In order for any information to be used, 
    it has to be passed down all layers. Let's 
    explore it with a note taking app

    First, a variable has to be made that will 
    contain the information. but with the current
    lesson we will make one fo reach note

    Now all these will match up in the HTML file
    but will be hard coded in and what is not 
    added will just not be shown

    What if we wanna pass it as an input?
  */

    groceryList = Notes[0]
    phoneCard = Notes[1]

  constructor() { }

  ngOnInit(): void {
  }

}
