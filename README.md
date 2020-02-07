# Cosmos Parameters Wiki
This Cosmos Hub educational wiki aims to outline the Hub's parameters, describe their functions, and describe the potential implications of modifying each parameter. **This wiki is in active development, so please do not rely upon this information yet.** [Discuss its development here](https://forum.cosmos.network/t/gwg-cosmos-hub-parameters-wiki/3170).

There are currently 9 modules active in the Cosmos Hub, each with parameters that may be altered via governance proposal.

# Modules
1. [Auth](/Auth.md) - Authentication of accounts and transactions for Cosmos SDK application
2. [Bank](/Bank.md) - Token transfer functionalities
3. [Governance](/Governance.md) - On-chain proposals and voting
4. [Staking](/Staking.md) - Proof-of-stake layer for public blockchains **to do**
5. [Slashing](/Slashing.md) - Validator punishment mechanisms **to do**
6. [Distribution](/Distribution.md) - Fee distribution, and staking token provision distribution **to do**
7. [Crisis](/Crisis.md) - Halting the blockchain under certain circumstances (e.g. if an invariant is broken) **to do**
8. [Mint](/Mint.md) - Creation of new units of staking token **to do**
9. [Supply](/Supply.md) - Total token supply of the chain **to do**

You can query the current parameter(s) of each module with the command line program [`gaiacli`](/gaiacli). Use the command `gaia q [module] -h` to get help about the subcommands for the module you want to query. For example, `gaiacli q staking` --> to do <--

## Note
- You cannot currently query the `Bank` module's parameter, which is `sendenabled`. You also cannot query the `Crisis` module's parameters.
- You will need to compile [`gaiacli`](/gaiacli) from source into a binary file executable by your operating system eg. MacOS, Windows, Linux
- You will need to indicate which chain you are querying, and currently this is `--chain-id cosmoshub-3`
- You will need to connect to a full node. If gaiacli isn't already configured for this, you can use this tag in your command `--node [address]:26657`.

### Full nodes  **to do**
Running a full node can be difficult for those not technically-inclined, so you may choose to use a third-party's full node. In this case, the primary security risk is that of censorship: it's the single place where you have a single gateway to the network, and any messages submitted through an untrusted node could be censored.
- cosmos-node-1.figment.network:26657 ([Figment Networks](https://figment.network/networks/cosmos/))
- 63.35.133.166:26657 ([Chorus One](cosmos.chorus.one))
- 18.217.97.195:26657 ([Melea Trust](https://meleatrust.com))

### Contributors
Special thanks to the following for helping to provide credible information that contributed to this wiki's development:
- Aleks (Fission Labs)
- Joe (Chorus One)
