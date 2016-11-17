import {Injectable} from "@angular/core";
import {EthereumGateway} from "./ethereumgateway";

@Injectable()
export class Contract {
  constructor(private ethereumGatway: EthereumGateway) {
  }

  submitReport(hash: string) {
  }

  verifyReport() {

  }

  findReport(hash: string) {
    return this.ethereumGatway.contract.isValid.call(hash);
  }
}
