import {Component} from '@angular/core';
import {EthereumGateway} from './boundaries/ethereumgateway';

@Component({
  moduleId: module.id,
  selector: 'blab-verification',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  error: string;
  constructor(private ethereumGateway: EthereumGateway) {
    try {
      ethereumGateway.connectToContract();
    } catch (e) {
      this.error = 'Please Install MetaMask';
    }
  }
}
