import {InMemoryDbService} from "angular-in-memory-web-api";
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let reports = [{
      id: 'hashedreport',
      content: 'report contents',
      submitter: 'Sally the Submitter',
      verifierCount: 3
    }, {
      id: 'reporthash',
      content: 'report content',
      submitter: 'Sven the Submitter',
      verifierCount: 2
    }];
    let members = [{
      id: '0x38588822bea476d5e1d56cfc9ce9781fe5262196',
      name: 'Alice'
    }, {
      id: '0xdf700fd0413ca5772cbf5a588d3080469f2edda2',
      name: 'Bob'
    }, {
      id: '0x354990de9386772900c6b257ec0b8dcc5af8bfba',
      name: 'Carol'
    }, {
      id: '0xa091b68b607622a281d7d0864217ea348957b574',
      name: 'Dave'
    }];
    return {members, reports};
  }
}
