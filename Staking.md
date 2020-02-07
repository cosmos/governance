# The `Staking` Module
The `Staking` module is responsible for the proof of stake (PoS) layer of the Cosmos Hub blockchain. `Staking` is active on Cosmos Hub 3 and currently has four parameters that may be modified by governance proposal:
1. [`UnbondingTime`](#1-UnbondingTime) - 1814400000000000 (nanoseconds)
2. [`MaxValidators`](#2-MaxValidators) - 125
3. [`KeyMaxEntries`](#3-KeyMaxEntries) - 7
4. [`BondDenom`](#4-BondDenom) - uatom (micro-ATOM)

The launch values for each parameter are outlined above, but you can [verify them yourself](#verify-parameter-values).

The next upgrade will include the [`HistoricalEntries` parameter](https://github.com/cosmos/cosmos-sdk/blob/master/x/staking/spec/01_state.md#historicalinfo). `HistoricalInfo` objects will be stored and pruned at each block such that the staking keeper persists only the `n` most recent historical info entries, defined by this staking module parameter. You can learn more about the [implementation here](https://github.com/cosmos/cosmos-sdk/pull/5380/) and the [reasoning here](https://github.com/cosmos/cosmos-sdk/issues/4647).

If you're technically-inclined, [these are the technical specifications](#technical-specifications).

## 1. `UnbondingTime`
### The time duration required for bonded ATOMs to unbond and become transferrable, in nanoseconds.
#### `cosmoshub-3` default: `1814400000000000`

In order to participate as a Cosmos Hub validator or delegator, ATOMs must be bonded (also known as staking). Once bonded, ATOMs are locked by the protocol and are no longer transferrable. When ATOM unbonding is initiated, the `UnbondingTime` of 1814400000000000 nanoseconds (21 days) duration must pass before the ATOMs will be unlocked and transferrable.

ATOMs are used as a bond when staking. A bond may be slashed (ie. partially destroyed) when a validator has been proven to have broken protocol rules. Why? Primarily as a solution to the "[nothing-at-stake](https://medium.com/coinmonks/understanding-proof-of-stake-the-nothing-at-stake-theory-1f0d71bc027)" problem. In the scenario of an accidental or malicious attempt to rewrite history and reverse a transaction, a new chain ("fork") may be created in parallel with the primary chain. Without the risk of losing this bond, the optimal strategy for any validator is to validate blocks on both chains so that the validator gets their reward no matter which fork wins. A bond makes it more likely that the optimal strategy for validators will be to only validate blocks for the true ("canonical") chain.

Why is `UnbondingTime` so long? It can take time to discover that a validator has committed equivocation ie. signed two blocks at the same block height. If a validator commits equivocation and then unbonds before being caught, the protocol can no longer slash (ie. partially destroy) the validator's bond.

### Potential implications
#### Decreasing the value of `UnbondingTime`
Decreasing the value of the `UnbondingTime` parameter will reduce the time it takes to unbond ATOMs. This will make it less likely for a validator's bond to be slashed after committing equivocation (aka double-signing).

#### Increasing the value of `UnbondingTime`
Increasing the value of the `UnbondingTime` parameter will increase the time it takes to unbond ATOMs. This will make it more likely for a validator's bond to be slashed after committing equivocation (aka double-signing).

#### Notes
The ability to punish a validator for committing equivocation is associated with the strength of the protocol's security guarantees.

1 second is equal to 1,000,000,000 nanoseconds.

## 2. `MaxValidators`
### The maximum number of validators that may participate in validating blocks, earning rewards, and governance voting.
#### `cosmoshub-3` default: `125`

Validators are ranked by stake-backing based upon the sum of their delegations, and only the top 125 are designated to be active (aka "the active set"). The active set may change any time delegation amounts change. Only active validators may participate in validating blocks, earning rewards, and governance voting. ATOM-holders may participate in staking by delegating their bonded ATOMs to one or more validators in the active set. Delegators may only earn rewards and have their governance votes count if they are delegating to an active validator, the set of which is capped by `MaxValidators`.

### Potential implications
#### Decreasing the value of `MaxValidators`
Decreasing the value of the `MaxValidators` parameter will likely reduce the number of validators actively participating in validating blocks, earning rewards, and governance voting for the Cosmos Hub. This may decrease the time it takes to produce each new Cosmos Hub block.

#### Increasing the value of `MaxValidators`
Increasing the value of the `MaxValidators` parameter will likely increase the number of validators actively participating in validating blocks, earning rewards, and governance voting for the Cosmos Hub. This may increase the time it takes to produce each new Cosmos Hub block.

#### Notes
Prior to `cosmoshub-3`, the Cosmos Hub had a maximum set of 100 active validators. Text-based governance proposal [Prop10](https://hubble.figment.network/cosmos/chains/cosmoshub-2/governance/proposals/10) signalled agreement that the active set be increased to 125 validators. Block times were ~6.94 seconds/block with 100 validators, and are now ~7.08 seconds/block with 125 validators.

It may be argued that after the Cosmos creators, the validator cohort may be the largest group of contributors to the Cosmos Hub community. Changes to the number of active validator participants may also affect the non-validator contributions to the Cosmos Hub.

## 3. `KeyMaxEntries`
### The maximum number of unbondings between a delegator and validator within the [unbonding period](#1-UnbondingTime).
### A delegator's maximum number of simultaneous redelegations from one validator to another validator within the [unbonding period](#1-UnbondingTime).
#### `cosmoshub-3` default: `7`

Each delegator has a limited number of times that they may unbond ATOM amounts from a unique validator within the [unbonding period](#1-UnbondingTime). Each delegator also has a limited number of times that they may redelegate from one unique validator to another unique validator within the unbonding period. This limit is set by the parameter `KeyMaxEntries`, which is currently `7`. To be clear, this limit does not apply to a delegator that is redelegating from one validator to different validators.

### Potential implications
#### Decreasing the value of `KeyMaxEntries`
Decreasing the value of the `KeyMaxEntries` parameter will, within the unbonding period, decrease the number of times that a delegator may unbond ATOM amounts from a single, unique validator. It will also decrease the number of redelegations a delegator may initiate between two unique validators. Since this activity across many accounts can affect the performance of the Cosmos Hub, decreasing this parameter's value decreases the likelihood of a performance reduction in the network. 

#### Increasing the value of `KeyMaxEntries`
Increasing the value of the `KeyMaxEntries` parameter will, within the unbonding period, increase the number of times that a delegator may unbond ATOM amounts from a single, unique validator. It will also increase the number of redelegations a delegator may initiate between two unique validators. Since this activity across many accounts can affect the performance of the Cosmos Hub, increasing this parameter's value may increase the likelihood of a performance reduction in the network.

## 4. `BondDenom`
### The unit and denomination for the asset bonded in the system.
#### `cosmoshub-3` default: `uatom`

When using an asset as a bond on the Cosmos Hub, the unit and denomination of the asset is denoted as the `uatom`, or micro-ATOM, where 1 ATOM is considered 1000000uatom. The protocol doesn't use ATOM for bonds, only uatom.

#### Changing the value of `BondDenom`
Changing the `BondDenom` parameter will make any bond transactions with `uatom` fail and will require the new `BondDenom` parameter string in order for bond transactions to be successful. Changing this parameter is likely to have breaking changes for applications that offer staking and delegation functionality.

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
| BondDenom         | string           | "uatom"           |
| HistoricalEntries | uint16           | **not yet applicable**                 |
