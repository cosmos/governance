# Cosmos Parameters Wiki
This Cosmos Hub educational wiki aims to outline the Hub's parameters, describe their functions, and describe the potential implications of modifying each parameter.

There are currently 9 modules active in the Cosmos Hub, each with parameters that may be altered via governance proposal.

# Modules
1. [Auth](/Auth.md) - Authentication of accounts and transactions for Cosmos SDK application
2. [Bank](/Bank.md) - Token transfer functionalities
3. [Governance](/Governance.md) - On-chain proposals and voting
4. [Staking](/Staking.md) - Proof-of-stake layer for public blockchains
5. [Slashing](/Slashing.md) - Validator punishment mechanisms
6. [Distribution](/Distribution.md) - Fee distribution, and staking token provision distribution
7. [Crisis](/Crisis.md) - Halting the blockchain under certain circumstances (e.g. if an invariant is broken)
8. [Mint](/Mint.md) - Creation of new units of staking token
9. [Supply](/Supply.md) - Total token supply of the chain

You can query the current parameter(s) of each module with the command line program [`gaiacli`](/gaiacli). Use the command `gaia q [module] -h` to get help about the subcommands for the module you want to query. For example, `gaiacli q staking` --> to do <--

## Note
- You cannot currently query the `Bank` module's parameter, which is `sendenabled`. You also cannot query the `Crisis` module's parameters.
- You will need to compile [`gaiacli`](/gaiacli) from source into a binary file executable by your operating system eg. MacOS, Windows, Linux
- You will need to indicate which chain you are querying, and currently this is `--chain-id cosmoshub-3`
- You will need to connect to a full node. If gaiacli isn't already configured for this, you can use this tag in your command `--node [address]:26657`.

### Full nodes
You may use a third-party full node so that you don't have to run your own, which can be difficult for those not technically-inclined. The primary security risk is that of censorship: it's the single place where you have a single gateway to the network, and any messages submitted through an untrusted node could be censored. (Thanks to Joe from Chorus One!)
- cosmos-node-1.figment.network:26657 ([Figment Networks](https://figment.network/networks/cosmos/))
- 63.35.133.166:26657 ([Chorus One](cosmos.chorus.one))
- 18.217.97.195:26657 ([Melea Trust](https://meleatrust.com))

