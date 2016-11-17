import {Contract} from "./contract";

describe('Contract', () => {
  it('is constructible', () => {
    let contract = new Contract();
    expect(contract).toBeDefined();
  });
});
