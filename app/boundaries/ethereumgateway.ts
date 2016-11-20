import {Injectable} from "@angular/core";
import {Config} from "../config";
declare var Web3: any;

@Injectable()
export class EthereumGateway {
  web3: any;
  contract: any;

  constructor(private config: Config) {}

  connectToContract() {
    this.web3 = new Web3();
    this.web3.setProvider(new this.web3.providers.HttpProvider(this.config.CONTRACT_PROVIDER));
    this.contract = this.web3.eth.contract(JSON.parse(this.config.CONTRACT_ABI)).at(this.config.CONTRACT_ADDRESS);
  }

  currentUserAddress() {
    return this.web3.eth.coinbase;
  }
}
