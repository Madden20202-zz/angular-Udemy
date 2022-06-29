import { Component } from '@angular/core';
import { Notes } from 'src/environments/db-data';
import { Note } from './note-card/note-card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  /*
    Let's talk about refactoring. Refactoring
    is the name given to when code - usually old 
    and/or does not perform its job as efficiently 
    as it should - is then rewritten to follow a new
    design philosophy, or just streamlined

    This code needs to be streamlined badly, so let's 
    do so using ngIf and the model file we made awhile ago

    This starts with passing the whole of it over, so that 
    all of the information can be filtered rather than needing
    to be hard coded in, already a much bigger improvement
  */

  notes = Notes

  onNoteClicked(noteCard: Note) {
    console.log(noteCard)
  }

}
