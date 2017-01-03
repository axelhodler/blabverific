#!/bin/sh

cd contract
CONFIG_CONTENTS=`./bin/prepare_contract.sh`
CONFIG_CONTENTS_ARRAY=($CONFIG_CONTENTS)
cd ..

ADDRESS=${CONFIG_CONTENTS_ARRAY[0]}
sed -i '' 's#_CONTRACT_ADDRESS_#'$ADDRESS'#g' app/config.ts

ABI=${CONFIG_CONTENTS_ARRAY[1]}
sed -i '' 's#_CONTRACT_ABI_#'$ABI'#g' app/config.ts

trap "git checkout app/config.ts" SIGINT

if [ "$1" == "e2e" ]; then
  tsc && concurrently "http-server -s" "./node_modules/protractor/bin/protractor protractor.config.js" --kill-others --success first && git checkout app/config.ts
else
  npm run run
fi
