# Cosmos Hub - Index of Governable Parameters
## The `auth` Module
The [`auth` module](https://github.com/gavinly/CosmosParametersWiki/blob/master/Auth.md) is responsible for authenticating accounts and transactions.
1. [`MaxMemoCharacters`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Auth.md#1-maxmemocharacters) - 512
2. [`TxSigLimit`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Auth.md#2-txsiglimit) - 7
3. [`TxSizeCostPerByte`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Auth.md#3-txsizecostperbyte) - 10
4. [`SigVerifyCostED25519`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Auth.md#4-sigverifycosted25519) - 590
5. [`SigVerifyCostSecp256k1`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Auth.md#5-sigverifycostsecp256k1) - 1000
## The `bank` Module
The [`bank` module](https://github.com/gavinly/CosmosParametersWiki/blob/master/Bank.md) is responsible for token transfer functionalities.
1. [`sendenabled`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Bank.md#1-sendenabled) - true
## The `gov` Module
The [`gov` module](https://github.com/gavinly/CosmosParametersWiki/blob/master/Governance.md) is responsible for on-chain governance proposals and voting functionality. **Note** [that this module requires a unique way to change its parameters](https://github.com/cosmos/cosmos-sdk/issues/5800).
1. [`depositparams`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Governance.md#1-depositparams)
   - [`mindeposit`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Governance.md#mindeposit) - `512000000` `uatom` (micro-ATOMs)
   - [`maxdepositperiod`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Governance.md#maxdepositperiod) - `1209600000000000` (nanoseconds)
2. [`votingparams`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Governance.md#2-votingparams)
   - [`votingperiod`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Governance.md#votingperiod) - `1209600000000000` (nanoseconds)
3. [`tallyparams`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Governance.md#3-tallyparams)
   - [`quorum`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Governance.md#quorum) - `0.400000000000000000` (proportion of network)
   - [`threshold`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Governance.md#threshold) - `0.500000000000000000` (proportion of voting power)
   - [`veto`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Governance.md#veto) - `0.334000000000000000` (proportion of voting power)
## The `staking` Module
The [`staking` module](https://github.com/gavinly/CosmosParametersWiki/blob/master/Staking.md) is responsible for the proof of stake (PoS) layer of the Cosmos Hub blockchain.
1. [`UnbondingTime`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Staking.md#1-UnbondingTime) - 1814400000000000 (nanoseconds)
2. [`MaxValidators`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Staking.md#2-MaxValidators) - 125
3. [`KeyMaxEntries`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Staking.md#3-KeyMaxEntries) - 7
4. [`BondDenom`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Staking.md#4-BondDenom) - uatom (micro-ATOM)
## The `slashing` Module
The [`slashing` module](https://github.com/gavinly/CosmosParametersWiki/blob/master/Slashing.md) is responsible for enabling the Cosmos Hub to penalize any validator for an attributable violation of protocol rules by slashing (ie. partially destroying) the bonded ATOMs of their stake-backing. Penalties may include a) burning some amount of a staked bond and b) removing the ability to vote on future blocks and governance proposals for a period of time.
1. [`SignedBlocksWindow`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Slashing.md#1-SignedBlocksWindow) - 10000 (blocks)
2. [`MinSignedPerWindow`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Slashing.md#2-MinSignedPerWindow) - 0.050000000000000000 (proportion)
3. [`DowntimeJailDuration`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Slashing.md#3-DowntimeJailDuration) - 600000000000 (nanoseconds)
4. [`SlashFractionDoubleSign`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Slashing.md#4-SlashFractionDoubleSign) - 0.050000000000000000 (proportion)
5. [`SlashFractionDowntime`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Slashing.md#5-SlashFractionDowntime) - 0.000100000000000000 (proportion)
## The `distribution` Module
The [`distribution` module](https://github.com/gavinly/CosmosParametersWiki/blob/master/Distribution.md) is responsible for distributing staking rewards between validators, delegators, and the Community Pool.
1. [`communitytax`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Distribution.md#1-communitytax) - 0.020000000000000000 (proportion)
2. [`baseproposerreward`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Distribution.md#2-baseproposerreward) - 0.010000000000000000 (proportion)
3. [`bonusproposerreward`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Distribution.md#3-bonusproposerreward) - 0.040000000000000000 (proportion)
4. [`withdrawaddrenabled`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Distribution.md#4-withdrawaddrenabled) - true
## The `crisis` Module
The [`crisis` module](https://github.com/gavinly/CosmosParametersWiki/blob/master/Crisis.md) is responsible for halting the Cosmos Hub if an invariant is broken.
1. [`ConstantFee`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Crisis.md#1-ConstantFee) - 1333000000uatom (micro-ATOM)
## The `mint` Module
The [`mint` module](https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md) is responsible for enabling the Cosmos Hub to have a flexible inflation rate that depends upon a bonded stake ratio target (`GoalBonded`).
1. [`MintDenom`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md#1-MintDenom) - uatom (micro-ATOM)
2. [`InflationRateChange`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md#2-InflationRateChange) - 0.130000000000000000 (proportion)
3. [`InflationMax`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md#3-InflationMax) - 0.200000000000000000 (proportion)
4. [`InflationMin`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md#4-InflationMin) - 0.070000000000000000 (proportion)
5. [`GoalBonded`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md#5-GoalBonded) - 0.670000000000000000 (proportion)
6. [`BlocksPerYear`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md#6-BlocksPerYear) - 4855015 (blocks)
