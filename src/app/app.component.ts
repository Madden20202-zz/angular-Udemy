import { Component } from '@angular/core';
import { Notes } from 'src/environments/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // What is Angular Core?
  // Angular Core is the basic features that 
  // are provided, and come as a host of things. 

  // Why is it so good?
  // It gives a lot of strong, and easy to use tools 
  // without needed a large import pool
  
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
  */

    onNoteClicked() {
      alert("A note was clicked!")
    }

  soundAlarm() {
    alert("Why did you click this? I thought I hid it well!")
  }
}
