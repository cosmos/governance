# The `Bank` Module
The `Bank` module is responsible for token transfer functionalities. `Bank` is active on Cosmos Hub 3 and currently has one parameter that may be modified by governance proposal:
1. [`sendenabled`](#1-sendenabled)

The value of the launch parameter is outlined here, but you can [verify it yourself](#verify-parameter-values). 

If you're technically-inclined, [this is the technical specification](#technical-specifications).

## 1. `sendenabled`
### Token transfer functionality.
#### `cosmoshub-3` default: `true`

The Cosmos Hub (cosmoshub-1) launched without transfer functionality enabled. Users were able to stake and earn rewards, but were unable to transfer ATOMs between accounts until the cosmoshub-2 chain launched. Transfer functionality may be disabled and enabled via governance proposal.

### Potential implications
#### Enabling `sendenabled`
Setting the `sendenabled` parameter to `true` will enable ATOMs to be transferred between accounts. This capability was first enabled when the cosmoshub-2 chain launched.

#### Disabling `sendenabled`
Setting the `sendenabled` parameter to `false` will prevent ATOMs from being transferred between accounts. ATOMs may still be staked and earn rewards. This is how the cosmoshub-1 chain launched.

# Verify Parameter Values
## Genesis (aka launch) Parameters
This is useful if you don't have `gaiacli` installed and don't have a reason to believe that the parameter has changed since the chain launched.

Each parameter may be verified in the chain's genesis file, [found here](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json). These are the parameters that the latest Cosmos Hub chain launched with, and will remain so, unless a governance proposal changes them. I've outlined those original values in the [Technical Specifications section](#technical-specifications).

The genesis file is text-based and large. The genesis parameter naming scheme isn't identical to those listed above, so when I search, I put one underscore between upper and lowercase characters, then convert all characters to lowercase.

For example, if I want to search for `sendenabled`, I'll search the [genesis file](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json) for `send_enabled`.

## Current Parameters
You may verify the current parameter values (in case they were modified via governance proposal post-launch) with the [gaiacli command-line application](/gaiacli). Here are the commands for each:
1. `sendenabled` - `gaiacli q ..` --> **to do** <--

# Technical Specifications

The `Bank` module is responsible for handling multi-asset coin transfers between accounts and tracking special-case pseudo-transfers, which must work differently with particular kinds of accounts (notably delegating/undelegating for vesting accounts). It exposes several interfaces with varying capabilities for secure interaction with other modules, which must alter user balances.

The `Bank` module contains the following parameter:

| Key                    | Type            | cosmoshub-3 genesis setting|
|------------------------|-----------------|---------|
| sendenabled            | bool            | true    |
