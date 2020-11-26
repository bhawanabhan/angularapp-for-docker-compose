import { Component } from '@angular/core';
import {MessageService} from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'myangularapp';
  messages: any[];
  hostname = "";
  constructor(public svc: MessageService)
  {

  }
  ngOnInit()
  {
    this.hostname = window.location.hostname;
    // this.svc.GetMessages(this.hostname).subscribe(
    //   (data) => this.messages = data
    // );
    
  }
  GetMessages(): void
  {
    this.svc.GetMessages(this.hostname).subscribe(
      (data) => this.messages = data
    )
  }
}
