import {Injectable} from "@angular/core";
import {Config} from "./config";
declare var Web3: any;

@Injectable()
export class EthereumGateway {
  contract: any;

  constructor(private config: Config) {
    // SMELL logic in ctor
    let web3 = new Web3();
    web3.setProvider(this.config.CONTRACT_PROVIDER);
    this.contract = web3.eth.contract(this.config.CONTRACT_ABI).at(this.config.CONTRACT_ADDRESS);
  }
}
