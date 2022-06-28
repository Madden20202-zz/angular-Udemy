import { Component, EventEmitter } from '@angular/core';
import { Notes } from 'src/environments/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courseSelected = new EventEmitter()
  
  groceryList = Notes[0]
  phoneCard = Notes[1]

  /*
    Now the method will go under everything
    in order to keep the code organized
    But importantly, the view is now requesting
    soemthing for the model to do

    Can it modify things in real time though? 
    Yes! Let's change the data.title value 

    This is called using (keyup) in the tag and a
    template reference using # 

    When the data is modified, the model updates, 
    which is then reflected into the view. Notice 
    that the whole process did not require any logic
    to be implimented to start it off. This just is done
    on its own if done right!!

    Now let's add the custom event, and keep life 
    interesting for the user
  */

    onNoteClicked() {
      alert("A note was clicked!")
    }

  soundAlarm() {
    alert("Why did you click this? I thought I hid it well!")
  }
}
