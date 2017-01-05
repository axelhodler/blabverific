import {Injectable} from "@angular/core";
import {Report} from "../reports/report";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ReportsGateway {
  constructor(private http: Http) {
  }

  saveReport(hash: string): Promise<Report> {
    return;
  }

  reports(): Promise<Report[]> {
    return this.http.get('unspecified/reports')
      .toPromise()
      .then((response) => response.json().data as Report[]);
  }
}
