# Cosmos Hub Parameter-Change Best Practices & Wiki
This Cosmos Hub educational documentation aims to outline the [Hub's parameters](#modules-wiki), describe their functions, and describe the potential implications of modifying each parameter. This documentation also aims to provide [guidelines for creating and assessing parameter-change proposals](#best-practices).

**This documentation has not had adequate review from experts or testing from participants, so please be cautious when using it.** [Discuss its development here](https://forum.cosmos.network/t/gwg-cosmos-hub-parameters-wiki/3170) and please provide feedback either in the forum or by opening a Github issue. If you are technically inclined, this is the full [list of modules](https://github.com/cosmos/cosmos-sdk/tree/master/x) in the Cosmos SDK.

# Best Practices
Drafting and submitting a parameter-change governance proposal involves two kinds risk: losing proposal deposit amounts and the potential to alter the function of the Cosmos Hub network in an undesirable way. The objective of this documentation is to reduce these risks by preparing participants for what to pay attention to and for what information to consider in a proposal. Ideally, a proposal should only fail to pass because the voters 1) are aware and engaged and 2) are able to make an informed decision to vote down the proposal.

If you are considering drafting a proposal, you should know:
1. [How the voting process and governance mechanism works](voting.md)
2. [What the community will likely want to know about the proposed change(s)](bestpractices.md#elements-of-a-community-spend-proposal)
3. [Where and how to engage with the Cosmos community about your proposed change(s)](bestpractices.md)
4. [How to prepare your final proposal draft for submission](submitting.md)
5. [How to submit your proposal to the Cosmos Hub testnet & mainnet](#sending-the-transaction-that-submits-your-governance-proposal)

# Modules Wiki
There are currently 8 modules active in the Cosmos Hub with parameters that may be altered via governance proposal:
1. [auth](/Auth.md) - Authentication of accounts and transactions
2. [bank](/Bank.md) - Token transfer functionalities
3. [gov](/Governance.md) - On-chain governance proposals and voting
4. [staking](/Staking.md) - Proof-of-stake layer
5. [slashing](/Slashing.md) - Validator punishment mechanisms
6. [distribution](/Distribution.md) - Fee distribution, and staking token provision distribution
7. [crisis](/Crisis.md) - Halting the blockchain under certain circumstances (ie. if an invariant is broken)
8. [mint](/Mint.md) - Creation of new units of staking token

The value or setting of each parameter may be verified in the chain's genesis file, [found here](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json). These are the parameter settings that the latest Cosmos Hub chain launched with, and will remain so unless a governance proposal or software upgrade changes them.

There are also ways to query the current settings for each module's parameter(s). Some can be queried with the command line program [`gaiacli`](/gaiacli), but I'm still exploring the ways that these setting can be queried. Want to help? I've opened this up as an issue [here](https://github.com/gavinly/CosmosParametersWiki/issues/1). You can begin by using the command `gaia q [module] -h` to get help about the subcommands for the module you want to query. For example, `gaiacli q staking params --chain-id cosmoshub-3 --node cosmos-node-1.figment.network:26657` returns the settings of four parameters:
```
unbonding_time: 504h0m0s
max_validators: 125
max_entries: 7
bond_denom: uatom
```

## Note
- You cannot currently query the `Bank` module's parameter, which is `sendenabled`. You also cannot query the `Crisis` module's parameters.
- You will need to compile [`gaiacli`](/gaiacli) from source into a binary file executable by your operating system eg. MacOS, Windows, Linux
- You will need to indicate which chain you are querying, and currently this is `--chain-id cosmoshub-3`
- You will need to connect to a full node. If gaiacli isn't already configured for this, you can use this tag in your command `--node [address]:26657`.

## Full nodes
Running a full node can be difficult for those not technically-inclined, so you may choose to use a third-party's full node. In this case, the primary security risk is that of censorship: it's the single place where you have a single gateway to the network, and any messages submitted through an untrusted node could be censored.
- cosmos-node-1.figment.network:26657 ([Figment Networks](https://figment.network/networks/cosmos/))
- 63.35.133.166:26657 ([Chorus One](cosmos.chorus.one))
- 18.217.97.195:26657 ([Melea Trust](https://meleatrust.com))

# Contributors
This documentation was created by Gavin Birch ([Figment Networks](https://figment.network)). Its development was supported by community funding that was approved on January 29, 2020 by the Cosmos Hub via community-spend proposal [Prop23](https://hubble.figment.network/cosmos/chains/cosmoshub-3/governance/proposals/23). You can read the [full proposal PDF here](https://ipfs.io/ipfs/QmSMGEoY2dfxADPfgoAsJxjjC6hwpSNx1dXAqePiCEMCbY). You can also create an issue or pull request to participate in its development at any time!

**Special thanks** to the following for helping to provide credible information that contributed to this wiki's development:
- Aleks (All in Bits; Fission Labs) for answering countless questions about these parameters
- Alessio (All in Bits) for explaining how [`SigVerifyCostED25519`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Auth.md#4-sigverifycosted25519) & [`SigVerifyCostSecp256k1`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Auth.md#5-sigverifycostsecp256k1) work, and detailed answers to my many questions
- Vidor for volunteering to explain [`ConstantFee`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Crisis.md#1-constantfee) and answering my many questions in detail
- Hyung (B-Harvest) for volunteering how [`InflationRateChange`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md#2-inflationratechange) works
- Joe (Chorus One) for explaining the security details involved with [using full nodes for transactions](https://github.com/gavinly/CosmosParametersWiki/blob/master/README.md#full-nodes)
- Sunny (All in Bits; Sikka) for volunteering an explanation of the purpose of [`withdrawaddrenabled`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Distribution.md#4-withdrawaddrenabled)
