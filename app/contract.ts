import {Injectable} from "@angular/core";

@Injectable()
export class Contract {
  contract: any;

  // swallows errors!
  submitReport(hash: string) {
    return new Promise((resolve) => {
      this.contract.verify(hash, () => {
        resolve();
      });
    });
  }

  verifyReport() {

  }

  findReport(hash: string) {
  }
}
