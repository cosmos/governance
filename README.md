# Cosmos Parameters Wiki
This Cosmos Hub educational wiki aims to outline the Hub's parameters, describe their functions, and describe the potential implications of modifying each parameter. **This wiki is in active development, so please do not rely upon this information yet.** [Discuss its development here](https://forum.cosmos.network/t/gwg-cosmos-hub-parameters-wiki/3170).

There are currently 8 modules active in the Cosmos Hub with parameters that may be altered via governance proposal.

# Modules
1. [Auth](/Auth.md) - Authentication of accounts and transactions --> **to do** <--
2. [Bank](/Bank.md) - Token transfer functionalities
3. [Governance](/Governance.md) - On-chain proposals and voting
4. [Staking](/Staking.md) - Proof-of-stake layer
5. [Slashing](/Slashing.md) - Validator punishment mechanisms
6. [Distribution](/Distribution.md) - Fee distribution, and staking token provision distribution
7. [Crisis](/Crisis.md) - Halting the blockchain under certain circumstances (ie. if an invariant is broken)
8. [Mint](/Mint.md) - Creation of new units of staking token

You can query the current parameter(s) of each module with the command line program [`gaiacli`](/gaiacli). Use the command `gaia q [module] -h` to get help about the subcommands for the module you want to query. For example, `gaiacli q staking` --> to do <--

# Parameter-Change Best Practices
Drafting and submitting a parameter-change governance proposal involves two kinds risk: losing proposal deposit amounts and the potential to alter the function of the Cosmos Hub network in an undesirable way. The objective of this documentation is to reduce these risks by preparing participants for what to pay attention to and for what information to consider in a proposal. Ideally, a proposal should only fail to pass because the voters 1) are aware and engaged and 2) are able to make an informed decision to vote down the proposal.

If you are considering writing a proposal, you should know:
1. [How the voting process and governance mechanism works](voting.md)
3. [What the community will likely want to know from your proposal](bestpractices.md#elements-of-a-community-spend-proposal)
4. [Where and how to engage with the Cosmos community about your proposal](bestpractices.md)
5. [How to prepare your final proposal draft for submission](submitting.md)
6. [How to submit your proposal to the Cosmos Hub testnet & mainnet](submitting.md)

## Note
- You cannot currently query the `Bank` module's parameter, which is `sendenabled`. You also cannot query the `Crisis` module's parameters.
- You will need to compile [`gaiacli`](/gaiacli) from source into a binary file executable by your operating system eg. MacOS, Windows, Linux
- You will need to indicate which chain you are querying, and currently this is `--chain-id cosmoshub-3`
- You will need to connect to a full node. If gaiacli isn't already configured for this, you can use this tag in your command `--node [address]:26657`.

### Full nodes  -->**to do**<--
Running a full node can be difficult for those not technically-inclined, so you may choose to use a third-party's full node. In this case, the primary security risk is that of censorship: it's the single place where you have a single gateway to the network, and any messages submitted through an untrusted node could be censored.
- cosmos-node-1.figment.network:26657 ([Figment Networks](https://figment.network/networks/cosmos/))
- 63.35.133.166:26657 ([Chorus One](cosmos.chorus.one))
- 18.217.97.195:26657 ([Melea Trust](https://meleatrust.com))

### Contributors
Special thanks to the following for helping to provide credible information that contributed to this wiki's development:
- Aleks (All in Bits; Fission Labs)
- Joe (Chorus One)
- Sunny (All in Bits; Sikka)
- Vidor
