import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Member} from "../members/member";

@Injectable()
export class MembersGateway {
  readonly MEMBERS_URL = 'toBeDefined/members';  // URL to web api

  constructor(private http: Http) {
  }

  members(): Promise<Member[]> {
    return this.http.get(this.MEMBERS_URL)
      .toPromise()
      .then((response) => response.json().data as Member[]);
  }
}
