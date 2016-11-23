import {Injectable} from "@angular/core";
import {Config} from "../config";
declare var web3: any;

@Injectable()
export class EthereumGateway {
  contract: any;

  constructor(private config: Config) {}

  connectToContract() {
    this.contract = web3.eth.contract(JSON.parse(this.config.CONTRACT_ABI)).at(this.config.CONTRACT_ADDRESS);
  }

  currentUserAddress() {
    return web3.eth.coinbase;
  }
}
