
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map }from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NodeConfigService extends Socket {
 
  constructor() {
    super({ url: environment.ws_url, options: {} });
  }
 
  public sendMessage(message) {
    this.emit('new-message', message);
  }

  public getMessages = () => {
    return new Observable((observer) => {
            this.on('new-message', (message) => {
                observer.next(message);
            });
    });
  }


}