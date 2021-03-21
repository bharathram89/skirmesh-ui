import { Component } from '@angular/core';
import { NodeConfigService } from '../service/node-status.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skirmesh-ui';
  constructor(private nodeConfigSvc : NodeConfigService){ }
 
  ngOnInit() {
    this.nodeConfigSvc.getMessages().subscribe(msg => {
      console.log(msg);
    })
  }
 
  sendMessage() {
    this.nodeConfigSvc.sendMessage("Test Message");
  }

}
