import {Injectable} from "@angular/core";
import {EthereumGateway} from "./ethereumgateway";

@Injectable()
export class Contract {
  constructor(private ethereumGatway: EthereumGateway) {
  }

  submitReport(hash: string) {
    this.verify(hash);
  }

  verifyReport(hash: string) {
    this.verify(hash);
  }

  isReportValid(hash: string) {
    return this.ethereumGatway.contract.isValid.call(hash);
  }

  fetchVerifierAmount(hash: string) {
    return this.ethereumGatway.contract.verifiersFor.call(hash);
  }

  private verify(hash: string) {
    this.ethereumGatway.contract.verify(hash, {
      from: this.ethereumGatway.currentUserAddress()
    });
  }
}
