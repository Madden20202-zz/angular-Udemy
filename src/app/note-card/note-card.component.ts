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
    contain the information
  */

    dataCard = Notes[0]; 

  constructor() { }

  ngOnInit(): void {
  }

}
