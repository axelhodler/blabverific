declare var Web3: any;

export class Hashing {
  sha3(toHash: string) {
    var web3 = new Web3();
    return web3.sha3(toHash);
  }
}
