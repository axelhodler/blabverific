import {Component} from '@angular/core';
import {EthereumGateway} from './boundaries/ethereumgateway';

@Component({
  moduleId: module.id,
  selector: 'blab-verification',
  template: `<h1>blockLAB Verify</h1>
             <submit-report></submit-report>
             <br>
             <br>
             <div>
               <verify-report></verify-report>
             </div><div id="error">{{ error }}</div>`
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
