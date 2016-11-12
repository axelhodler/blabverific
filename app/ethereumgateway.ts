declare var Web3: any;

export class EthereumGateway {
  hash(toHash: string) {
    var web3 = new Web3();
    return web3.sha3(toHash);
  }
}
