# Cosmos Parameters Wiki
An Cosmos Hub educational wiki that aims to outline the Hub's parameters, describe their functions, and describe the potential implications of modifying each parameter.

There are currently 9 modules active in the Cosmos Hub, each with parameters that may be altered via governance proposal.

# Modules:
1. [Auth](/auth.md) - Authentication of accounts and transactions for Cosmos SDK application
2. Bank - Token transfer functionalities
3. Governance - On-chain proposals and voting
4. Staking - Proof-of-stake layer for public blockchains
5. Slashing - Validator punishment mechanisms
6. Distribution - Fee distribution, and staking token provision distribution
7. Crisis - Halting the blockchain under certain circumstances (e.g. if an invariant is broken)
8. Mint - Creation of new units of staking token
9. Supply - Total token supply of the chain

You can query the current parameter(s) of each module with the command line program `gaiacli`. Use the command `gaia q [module] -h` to get help about the subcommands for the module you want to query. For example, `gaiacli q staking `

**Note**:
- You will need to compile gaiacli from source into a binary file executable by your operating system eg. MacOS, Windows, Linux
- You will need to connect to a full node. If gaiacli isn't already configured for this, you can use this tag in your command `--node cosmos-node-1.figment.network:26657` (where Figment Networks is providing the full node). -> link to full node list here <-
- You will need to indicate which chain you are querying, and currently this is `--chain-id cosmoshub-3`
- You cannot query the `Bank` module's parameter, which is `sendenabled`. You also cannot query the `Crisis` module's parameters.
