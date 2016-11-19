import {Injectable} from "@angular/core";
import {EthereumGateway} from "./boundaries/ethereumgateway";

@Injectable()
export class Contract {
  constructor(private ethereumGatway: EthereumGateway) {
  }

  submitReport(hash: string) {
  }

  verifyReport() {

  }

  isReportValid(hash: string) {
    return this.ethereumGatway.contract.isValid.call(hash);
  }
}
