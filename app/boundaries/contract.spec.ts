import {Contract} from "./contract";
import {EthereumGateway} from "./ethereumgateway";


// SMELL, these tests should not exist but rather be covered by an integration test
describe('Contract', () => {
  it('delegates find report to contract', () => {
    const ethereumGatewayStub = {
      contract: {
        isValid: {
          call: function () {
            return false;
          }
        }
      }
    };

    let contract = new Contract(ethereumGatewayStub as EthereumGateway);

    expect(contract.isReportValid('reportId')).toBe(false);
  });

  it('delegates to find verifiers for report to contract', () => {
    const ethereumGatewayStub = {
      contract: {
        verifiersFor: {
          call: function () {
            return 3;
          }
        }
      }
    };

    let contract = new Contract(ethereumGatewayStub as EthereumGateway);

    expect(contract.fetchVerifierAmount('reportId')).toBe(3);
  });
});
