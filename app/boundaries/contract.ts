import {Injectable} from "@angular/core";
import {EthereumGateway} from "./ethereumgateway";

@Injectable()
export class Contract {
  constructor(private ethereumGateway: EthereumGateway) {
  }

  submitReport(hash: string) {
    this.verify(hash);
  }

  verifyReport(hash: string) {
    this.verify(hash);
  }

  isReportValid(hash: string) {
    return this.ethereumGateway.contract.isValid.call(hash);
  }

  fetchVerifierAmount(hash: string) {
    return this.ethereumGateway.contract.verifiersFor.call(hash);
  }

  private verify(hash: string) {
    this.ethereumGateway.contract.verify(hash, {
      from: this.ethereumGateway.currentUserAddress()
    }, () => {});
  }
}
