import { Component, OnInit, Input } from '@angular/core';
import { Note } from './note-card.model';

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

    Amended, a model file is better since it 
    cleans up the code and makes it more automated

    What if we wanna pass it as an input?
    All that has to be done is add a variable that 
    follows @Input(), which tells it to expect 
    input from somewhere and use it later
  */

    @Input() noteCard!: Note

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked() {
    alert("The button was clicked!")
  }

}
