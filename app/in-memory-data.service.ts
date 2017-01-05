import {InMemoryDbService} from "angular-in-memory-web-api";
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let reports = [{
      id: 'hashedreport',
      content: 'report contents',
      submitter: 'Sally the Submitter'
    }, {
      id: 'reporthash',
      content: 'report content',
      submitter: 'Sven the Submitter'
    }];
    return {reports};
  }
}
