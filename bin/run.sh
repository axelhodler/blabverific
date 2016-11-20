#!/bin/sh

cd contract
CONFIG_CONTENTS=`./bin/prepare_contract.sh`
CONFIG_CONTENTS_ARRAY=($CONFIG_CONTENTS)
cd ..

PROVIDER=${CONFIG_CONTENTS_ARRAY[0]}
sed -i '' 's#_CONTRACT_PROVIDER_#'$PROVIDER'#g' app/config.ts

ADDRESS=${CONFIG_CONTENTS_ARRAY[1]}
sed -i '' 's#_CONTRACT_ADDRESS_#'$ADDRESS'#g' app/config.ts

ABI=${CONFIG_CONTENTS_ARRAY[2]}
sed -i '' 's#_CONTRACT_ABI_#'$ABI'#g' app/config.ts

trap "lsof -t -i:8545 | xargs kill && git checkout app/config.ts" SIGINT
npm run run
