import {Hashing} from './hashing';

describe('Hash', () => {
  it('generates Keccak-256 SHA-3 hashes', () => {
    var hashing = new Hashing();
    expect(hashing.sha3('blockLAB')).toBe('0x5f5d10dc45ea6cc53bcfd14fb72c8bf6b33883fa8087de6d0f2da0ce80e16ed9');
  });
});
