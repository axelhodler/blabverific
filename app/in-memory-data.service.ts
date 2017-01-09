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
    return {reports};
  }
}
