import {EthereumGateway} from "../boundaries/ethereumgateway";
import {Injectable} from "@angular/core";

@Injectable()
export class MockContract {
  constructor(private ethereumGateway: EthereumGateway) {
  }

  submitReport(hash: string) {
    return this.verify(hash);
  }

  verifyReport(hash: string) {
    this.verify(hash);
  }

  isReportValid(hash: string) {
    return false;
  }

  fetchVerifierAmount(hash: string) {
    return 0;
  }

  private verify(hash: string) {
    return Promise.resolve();
  }
}
