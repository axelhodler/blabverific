import {Injectable} from "@angular/core";
import {EthereumGateway} from "./ethereumgateway";

@Injectable()
export class Contract {
  constructor(private ethereumGateway: EthereumGateway) {
  }

  submitReport(hash: string) {
    return this.submit(hash);
  }

  verifyReport(hash: string) {
    this.verify(hash);
  }

  isReportValid(hash: string) {
    return new Promise((resolve) => {
      this.ethereumGateway.contract.isValid
        .call(hash, (err: any, data: number) => resolve(data));
    })
  }

  fetchVerifiers(hash: string) {
    return new Promise((resolve) => {
      this.ethereumGateway.contract.verifiersFor
        .call(hash, (err: any, data: Array<string>) => resolve(data));
    })
  }

  private submit(hash: string) {
    return new Promise((resolve) => {
      this.ethereumGateway.contract.submit(hash, {
        from: this.ethereumGateway.currentUserAddress()
      }, () => resolve())
    })
  }

  private verify(hash: string) {
    return new Promise((resolve) => {
      this.ethereumGateway.contract.verify(hash, {
        from: this.ethereumGateway.currentUserAddress()
      }, () => resolve())
    })
  }
}
