# The `Bank` Module
The `Bank` module is active on Cosmos Hub 3. It's responsible for token transfer functionalities. `Bank` currently has one parameter that may be modified by governance proposal:
1. [`sendenabled`](#1-sendenabled)

The value for each launch parameter is outlined here, but you can [verify them yourself](#verify-parameter-values). 

If you're technically-inclined, [these are the technical specifications](#technical-specifications).

## 1. `sendenabled`
### The character limit for each transaction memo.
#### `cosmoshub-3` default: `true`

There is an option to include a "memo," or additional information (data) to Cosmos Hub transactions, whether sending funds, delegating, voting, or other transaction types. This parameter limits the number of characters that may be included in the memo line of each transaction.

### Potential implications
#### Enabling `sendenabled`
Setting the `sendenabled` parameter to `false` will enables ATOMs to be transferred between accounts. This capability was first enabled when the cosmoshub-2 chain launched.

#### Disabling `sendenabled`
Setting the `sendenabled` parameter to `false` will prevent ATOMs from being transferred between accounts. ATOMs may still be staked and earn rewards. This is how the cosmoshub-1 chain launched.

# Verify Parameter Values
## Genesis (ie. most recent launch) Parameters
This is useful if you don't have `gaiacli` installed and don't have a reason to believe that the parameter has changed since the chain launched.

Each parameter may be verified in the chain's genesis file, [found here](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json). These are the parameters that the latest Cosmos Hub chain launched with, and will remain so, unless a governance proposal changes them. I've outlined those original values in the [Technical Specifications section](#technical-specifications).

The genesis file is text-based and large. The genesis parameter naming scheme isn't identical to those listed above, so when I search, I put one underscore between upper and lowercase characters, then convert all characters to lowercase.

For example, if I want to search for `sendenabled`, I'll search the [genesis file](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json) for `send_enabled`.

## Current Parameters
You may verify the current parameter values (in case they were modified via governance proposal post-launch) with the [gaiacli command-line application](/gaiacli). Here are the commands for each:
1. `sendenabled` - `gaiacli q ..` --> **to do** <--

# Technical Specifications

The `Auth` module is responsible for specifying the base transaction and account types for an application, since the SDK itself is agnostic to these particulars. It contains the ante handler, where all basic transaction validity checks (signatures, nonces, auxiliary fields) are performed, and exposes the account keeper, which allows other modules to read, write, and modify accounts.

The `Bank` module contains the following parameters:

| Key                    | Type            | cosmoshub-3 genesis setting|
|------------------------|-----------------|---------|
| sendenabled            | bool            | true    |
