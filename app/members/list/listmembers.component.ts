import {Component, OnInit} from "@angular/core";
import {Member} from "../member";
import {MembersGateway} from "../../boundaries/membersgateway";

@Component({
  moduleId: module.id,
  templateUrl: 'listmembers.component.html'
})
export class ListMembersComponent implements OnInit {
  members: Member[];

  constructor(private membersGateway: MembersGateway) {
  }

  ngOnInit(): void {
    this.membersGateway.members().then(members => {
      this.members = members;
    });
  }
}
