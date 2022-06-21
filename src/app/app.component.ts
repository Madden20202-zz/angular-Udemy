import { Component } from '@angular/core';

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

  data = {
    title: "Angular Course from Udemy"
  }

  // Now the method will go under everything
  // in order to keep the code organized
  // But importantly, the view is now requesting
  // soemthing for the model to do

  // Can it modify things in real time though? 
  // Yes! Let's change the data.title value 

  // This is called using (keyup) in the tag and a
  // template reference using # 

  onKeyUp(newTitle: string) {
    this.data.title = newTitle
  }

  soundAlarm() {
    alert("Why did you click this? I thought I hid it well!")
  }
}
