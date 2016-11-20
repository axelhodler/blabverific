import {Component} from '@angular/core';
import {EthereumGateway} from './boundaries/ethereumgateway';

@Component({
  moduleId: module.id,
  selector: 'blab-verification',
  template: '<submit-report></submit-report><br><br><div><verify-report></verify-report></div>'
})
export class AppComponent {
  constructor (private ethereumGateway: EthereumGateway) {
    ethereumGateway.connectToContract();
  }
}
