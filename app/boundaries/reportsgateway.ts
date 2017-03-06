import {Injectable} from "@angular/core";
import {Report} from "../reports/report";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Hashing} from "./hashing";

@Injectable()
export class ReportsGateway {
  readonly REPORTS_URL = 'toBeDefined/reports';  // URL to web api
  readonly HEADERS = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private hashing: Hashing) {
  }

  saveReport(content: string, compensation: number): Promise<Report> {
    return this.http.post(this.REPORTS_URL, JSON.stringify({
      id: this.hashing.sha3(content),
      content: content,
      compensation: compensation,
      submitter: 'Carol the current user',
      verifierCount: 0
    }), {headers: this.HEADERS})
      .toPromise()
      .then(response => response.json().data);
  }

  reports(): Promise<Report[]> {
    return this.http.get(this.REPORTS_URL)
      .toPromise()
      .then((response) => response.json().data as Report[]);
  }
}
