# The `Staking` Module
The `Staking` module is responsible for on-chain proposals and voting functionality. `Staking` is active on Cosmos Hub 3 and currently has four parameters that may be modified by governance proposal:
1. [`UnbondingTime`](#1-UnbondingTime) - (nanoseconds)
2. [`MaxValidators`](#2-MaxValidators) - 125
3. [`KeyMaxEntries`](#3-KeyMaxEntries)
4. [`BondDenom`](#4-BondDenom) - uatom (micro-ATOM)

The launch values for each parameter are outlined above, but you can [verify them yourself](#verify-parameter-values).

The next upgrade will include the `HistoricalEntries` parameter. You can learn more about the [implementation here](https://github.com/cosmos/cosmos-sdk/pull/5380/) and the [reasoning here](https://github.com/cosmos/cosmos-sdk/issues/4647).

If you're technically-inclined, [these are the technical specifications](#technical-specifications).

## 1. `UnbondingTime`
### The time required for bonded ATOMs to unbond and become transferrable, in nanoseconds.
#### `cosmoshub-3` default: `512000000`

Prior to a governance proposal entering the [voting period](#voting_period) (ie. for the proposal to be voted upon), there must be at least a minimum number of ATOMs deposited. Anyone may contribute to this deposit. Deposits of passed and failed proposals are returned to the contributors. Deposits are burned when proposals 1) [expire](#max_deposit_period), 2) fail to reach [quorum](#quorum), or 3) are [vetoed](#veto). This parameter subkey value represents the minimum deposit required for a proposal to enter the [voting period](#voting_period) in micro-ATOMs, where `512000000uatom` is equivalent to 512 ATOM.

### Potential implications
#### Decreasing the value of `UnbondingTime`
Decreasing the value of the `UnbondingTime` subkey will enable governance proposals to enter the [voting period](#voting_period) with fewer ATOMs at risk. This will likely increase the volume of new governance proposals.

#### Increasing the value of `UnbondingTime`
Increasing the value of the `UnbondingTime` subkey will require risking a greater number of ATOMs before governance proposals may enter the [voting period](#voting_period). This will likely decrease the volume of new governance proposals.

## 2. `MaxValidators`
### The maximum number of validators that may .
#### `cosmoshub-3` default: `125`

Prior to a governance proposal entering the [voting period](#voting_period), there must be at least a minimum number of ATOMs deposited. This parameter subkey value represents the maximum amount of time that the proposal has to reach the minimum deposit amount before expiring. The maximum amount of time that a proposal can accept deposit contributions before expiring is currently `1209600000000000` nanoseconds or 14 days. If the proposal expires, any deposit amounts will be burned.

### Potential implications
#### Decreasing the value of `MaxValidators`
Decreasing the value of the `max_deposit_period` subkey will decrease the time for deposit contributions to governance proposals. This will likely decrease the time that some proposals remain visible and potentially decrease the likelihood that they will enter the [voting period](#voting_period). This may increase the likelihood that proposals will expire and have their deposits burned.

#### Increasing the value of `MaxValidators`
Increasing the value of the `max_deposit_period` subkey will extend the time for deposit contributions to governance proposals. This will likely increase the time that some proposals remain visible and potentially increase the likelihood that they will enter the [voting period](#voting_period). This may decrease the likelihood that proposals will expire and have their deposits burned.

#### Notes
Currently most network explorers (eg. Hubble, Big Dipper, Mintscan) give the same visibility to proposals in the deposit period as those in the [voting period](#voting_period). This means that a proposal with a small deposit (eg. 0.001 ATOM) will have the same visibility as those with a full 512 ATOM deposit in the voting period.

## 3. `KeyMaxEntries`
### The maximum.
#### `cosmoshub-3` default: `1209600000000000`

Once a governance proposal enters the voting period, there is a maximum period of time that may elapse before the voting period concludes. This parameter subkey value represents the maximum amount of time that the proposal has to accept votes, which is currently `1209600000000000` nanoseconds or 14 days. If the proposal vote does not reach quorum ((ie. 40% of the network's voting power is participating) before this time, any deposit amounts will be burned and the proposal's outcome will not be considered to be valid. Voters may change their vote any number of times before the voting period ends. This voting period is currently the same for any kind of governance proposal.

### Potential implications
#### Decreasing the value of `KeyMaxEntries`
Decreasing the value of the `KeyMaxEntries` subkey will decrease the time for voting on governance proposals. This will likely:
1. decrease the proportion of the network that participates in voting, and
2. decrease the likelihood that quorum will be reached. 

#### Increasing the value of `KeyMaxEntries`
Increasing the value of the `KeyMaxEntries` subkey will increase the time for voting on governance proposals. This may:
1. increase the proportion of the network that participates in voting, and
2. increase the likelihood that quorum will be reached. 

## 4. `BondDenom`
### The unit denomination for the asset bonded in the system.
#### `cosmoshub-3` default: `uatom`

A simple majority 'yes' vote (ie. 50% of participating voting power) is required for a governance proposal vote to pass. Though necessary, a simple majority 'yes' vote may not be sufficient to pass a proposal in two scenarios:
1. Failure to reach [quorum](#quorum) of 40% network power or
2. A 'no-with-veto' vote of 33.4% of participating voting power or greater.

If a governance proposal passes, deposit amounts are returned to contributors. If a text-based proposal passes, nothing is enacted automatically, but there is a social expectation that participants will co-ordinate to enact the commitments signalled in the proposal. If a parameter change proposal passes, the protocol parameter will automatically change immediately after the [voting period](#voting_period) ends, and without the need to run new software. If a community-spend proposal passes, the Community Pool balance will decrease by the number of ATOMs indicated in the proposal and the recipient's address will increase by this same number of ATOMs immediately after the voting period ends.

# Verify Parameter Values
## Genesis (aka launch) Parameters
This is useful if you don't have `gaiacli` installed and don't have a reason to believe that the parameter has changed since the chain launched.

Each parameter may be verified in the chain's genesis file, [found here](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json). These are the parameters that the latest Cosmos Hub chain launched with, and will remain so, unless a governance proposal changes them. I've outlined those original values in the [Technical Specifications section](#technical-specifications).

The genesis file is text-based and large. The genesis parameter naming scheme isn't identical to those listed above, so when I search, I put one underscore between upper and lowercase characters, then convert all characters to lowercase.

For example, if I want to search for `UnbondingTime`, I'll search the [genesis file](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json) for `unbonding_time`.

## Current Parameters
You may verify the current parameter values (in case they were modified via governance proposal post-launch) with the [gaiacli command-line application](/gaiacli). Here are the commands for each:
1. `UnbondingTime` - `gaiacli q ..` --> **to do** <--

# Technical Specifications

The `Staking` module is responsible for supporting an advanced Proof of Stake (PoS) system. In this system, holders of the native staking token of the chain can become validators and can delegate tokens to validators, ultimately determining the effective validator set for the system.

The `Staking` module contains the following parameters:

| Key           | Type   | cosmoshub-3 genesis setting                                                                     |
|---------------|--------|:----------------------------------------------------------------------------------------------------|
| UnbondingTime     | string (time ns) | "1814400000000000" |
| MaxValidators     | uint16           | 125               |
| KeyMaxEntries     | uint16           | 7                 |
| HistoricalEntries | uint16           | **not yet applicable**                 |
| BondDenom         | string           | "uatom"           |
