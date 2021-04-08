import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import 'rxjs/Rx';
 
import { MessageService } from './message.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnDestroy  {
  name = 'Angular';

  message: any;
    subscription: Subscription;
 
    constructor(private messageService: MessageService) {
        // subscribe to home component messages
        this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
    }
 
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    sendMessage(texto): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage(texto);
    }
 
    clearMessage(): void {
        // clear message
        this.messageService.clearMessage();
    }

}
