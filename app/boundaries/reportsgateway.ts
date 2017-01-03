import {Injectable} from "@angular/core";
import {Report} from "../reports/report";

@Injectable()
export class ReportsGateway {
  saveReport(hash: string) {
  }
  reports(): Promise<Report[]> {
    return;
  }
}
