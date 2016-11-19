import {Contract} from "./contract";
import {EthereumGateway} from "./boundaries/ethereumgateway";

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
  })
});
