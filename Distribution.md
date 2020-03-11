# The `Distribution` Module

The `Distribution` module is responsible for distributing staking rewards between validators, delegators, and the Community Pool. `Distribution` is active on Cosmos Hub 3 and currently has four parameters that may be modified by governance proposal:

| communitytax        | string (dec) | "0.020000000000000000" |
| baseproposerreward  | string (dec) | "0.010000000000000000" |
| bonusproposerreward | string (dec) | "0.040000000000000000" |
| withdrawaddrenabled | bool         | true                   |

1. [`communitytax`](#1-communitytax) - 0.020000000000000000 (proportion)
2. [`baseproposerreward`](#2-baseproposerreward) - 0.010000000000000000 (proportion)
3. [`bonusproposerreward`](#3-bonusproposerreward) - 0.040000000000000000 (proportion)
4. [`withdrawaddrenabled`](#4-withdrawaddrenabled) - true

The launch values for each parameter are outlined above, but you can [verify them yourself](#verify-parameter-values).

If you're technically-inclined, [these are the technical specifications](#technical-specifications).

## 1. `communitytax`
### The proportion of staking rewards diverted to the community pool.
#### `cosmoshub-3` default: `0.020000000000000000`

Staking on the Cosmos Hub entitles participants to inflationary (aka "block") rewards and transaction fees. A portion of these staking rewards is diverted to the community pool, which can be spent with a successful community-spend governance proposal. `communitytax` is the parameter that determines the proportion of staking rewards diverted to the community pool, which is currently `0.020000000000000000` (2%) of all staking rewards.

### Potential implications
#### Decreasing the value of `communitytax`
Decreasing the value of the `communitytax` parameter will decrease the rate that the community pool is funded and will increase the staking rewards captured by staking participants. This will make it more likely for the community pool to be exhausted and could potentially increase the motivation for participants to stake.

#### Increasing the value of `communitytax`
Increasing the value of the `communitytax` parameter will increase the rate that the community pool is funded and will decrease the staking rewards captured by staking participants. This will make it more less for the community pool to be exhausted and could potentially decrease the motivation for participants to stake.


## 2. `baseproposerreward`
### The fixed base reward bonus for the validator proposing a block, as a proportion of transaction fees.
#### `cosmoshub-3` default: `0.010000000000000000`

All validators in the active set share the rewards for producing a block equally, except for the proposer of a valid block: that validator receives a bonus of `0.010000000000000000` (1%) more in transaction fees. The proposer must include a minimum of 2/3 of precommit signatures from the other validators in the active set in order for the block to be valid and to receive the `baseproposerreward` bonus. All in Bits has published more in-depth information [here](https://hub.cosmos.network/master/validators/validator-faq.html#how-are-fees-distributed).

### Potential implications
#### Decreasing the value of `baseproposerreward`
Decreasing the value of the `baseproposerreward` parameter will decrease the advantage that the proposer has over other validators. This may decrease an operator's motivation to ensure that its validator is reliably online and includes at least 2/3 precommit signatures of the other validators in its proposed block.

#### Increasing the value of `baseproposerreward`
Increasing the value of the `baseproposerreward` parameter will increase the advantage that the proposer has over other validators. This may increase an operator's motivation to ensure that its validator is reliably online and includes at least 2/3 precommit signatures of the other validators in its proposed block.

#### Notes
The Cosmos Hub transaction fee volume is proportionally very low in value compared to the inflationary block rewards, and until that changes, this parameter will likely have very little impact on validator behaviours. As fee volumes increase, the `baseproposerreward` bonus may incentivize delegations to the validator(s) with the greatest stake-backing. There are some detailed discussions about the proposer bonus [here](https://github.com/cosmos/cosmos-sdk/issues/3529).

## 3. `bonusproposerreward`
### The maximum additional reward bonus for the validator proposing a block, as a proportion of transaction fees. 
#### `cosmoshub-3` default: `0.040000000000000000`

All validators in the active set share the rewards for producing a block equally, except for the proposer of a valid block. If that validator includes more than a minimum of 2/3 of precommit signatures from the other validators in the active set, they are eligible to receive the `bonusproposerreward` of up to 4% (`0.040000000000000000`), beyond the 1% `baseproposerreward`. The bonus proposer reward amount that a validator receives depends upon how many precommit signatures are included in the proposed block (additional to the requisite 2/3). All in Bits has published more in-depth information [here](https://hub.cosmos.network/master/validators/validator-faq.html#how-are-fees-distributed).

### Potential implications
#### Decreasing the value of `bonusproposerreward`
Decreasing the value of the `bonusproposerreward` parameter will decrease the advantage that the proposer has over other validators. This may decrease an operator's motivation to ensure that its validator is reliably online and includes more than 2/3 precommit signatures from the other validators in its proposed block.

#### Increasing the value of `bonusproposerreward`
Increasing the value of the `bonusproposerreward` parameter will increase the advantage that the proposer has over other validators. This may increase an operator's motivation to ensure that its validator is reliably online and includes more than 2/3 precommit signatures from the other validators in its proposed block. 

### Notes
The Cosmos Hub transaction fee volume is proportionally very low in value compared to the inflationary block rewards, and until that changes, this parameter will likely have very little impact on validator behaviours. As fee volumes increase, the `bonusproposerreward` bonus may incentivize delegations to the validator(s) with the greatest stake-backing. There are some detailed discussions about the proposer bonus [here](https://github.com/cosmos/cosmos-sdk/issues/3529).

### Example
In this example from the [All in Bits website](https://hub.cosmos.network/master/validators/validator-faq.html#how-are-fees-distributed), there are 10 validators with equal stake. Each of them applies a 1% commission rate and has 20% of self-delegated Atoms. Now comes a successful block that collects a total of 1025.51020408 Atoms in fees.

First, a 2% tax is applied. The corresponding Atoms go to the reserve pool. Reserve pool's funds can be allocated through governance to fund bounties and upgrades.

2% * 1025.51020408 = 20.51020408 Atoms go to the reserve pool.
1005 Atoms now remain. Let's assume that the proposer included 100% of the signatures in its block. It thus obtains the full bonus of 5%.

We have to solve this simple equation to find the reward R for each validator:

9*R + R + R*5% = 1005 ⇔ R = 1005/10.05 = 100

For the proposer validator:

The pool obtains R + R * 5%: 105 Atoms

Commission: 105 * 80% * 1% = 0.84 Atoms

Validator's reward: 105 * 20% + Commission = 21.84 Atoms

Delegators' rewards: 105 * 80% - Commission = 83.16 Atoms (each delegator will be able to claim its portion of these rewards in proportion to their stake)

For each non-proposer validator:

The pool obtains R: 100 Atoms

Commission: 100 * 80% * 1% = 0.8 Atoms

Validator's reward: 100 * 20% + Commission = 20.8 Atoms

Delegators' rewards: 100 * 80% - Commission = 79.2 Atoms (each delegator will be able to claim their portion of these rewards in proportion to their stake)


## 4. `withdrawaddrenabled`
### Determines whether or not delegators may set a separate address for receiving staking rewards.
#### `cosmoshub-3` default: `true`

Delegators can designate a separate withdrawal address (account) that receives staking rewards when `withdrawaddrenabled` is set to `true`. When `withdrawaddrenabled` is set to `false`, the delegator can no longer designate a separate address for withdrawals.

### Potential implications
#### Changing the `withdrawaddrenabled` parameter
Changing the `withdrawaddrenabled` to false will prevent delegators from changing or setting a separate withdrawal address (account) that receives the staking rewards. This may disrupt the functionality of applications and the expectations of staking participants.

### Notes
This parameter was set to `false` before transfers were enabled in order to prevent stakers from diverting their rewards to other addresses ie. to avoid a loophole that would enable ATOM transfer via diverting staking rewards to a designated address. This parameter likely is only useful if [`sendenabled`](https://github.com/gavinly/CosmosParametersWiki/blob/master/Bank.md#1-sendenabled) is set to `false`.

# Verify Parameter Values
## Genesis (aka launch) Parameters
This is useful if you don't have `gaiacli` installed and don't have a reason to believe that the parameter has changed since the chain launched.

Each parameter may be verified in the chain's genesis file, [found here](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json). These are the parameters that the latest Cosmos Hub chain launched with, and will remain so, unless a governance proposal changes them. I've outlined those original values in the [Technical Specifications section](#technical-specifications).

The genesis file is text-based and large. The genesis parameter naming scheme isn't identical to those listed above, so when I search, I put one underscore between upper and lowercase characters, then convert all characters to lowercase.

For example, if I want to search for `communitytax`, I'll search the [genesis file](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json) for `community_tax`.

## Current Parameters
You may verify the current parameter values (in case they were modified via governance proposal post-launch) with the [gaiacli command-line application](/gaiacli). Here are the commands for each:
1. `communitytax` - `gaiacli q ..` --> **to do** <--

# Technical Specifications

The `Distribution` module enables a simple distribution mechanism that passively distributes rewards between validators and delegators. Collected rewards are pooled globally and divided out passively to validators and delegators. Each validator has the opportunity to charge commission to the delegators on the rewards collected on behalf of the delegators. Fees are collected directly into a global reward pool and validator proposer-reward pool.

The `Distribution` module contains the following parameters:

| Key           | Type   | cosmoshub-3 genesis setting        |
|---------------------|--------------|------------------------|
| communitytax        | string (dec) | "0.020000000000000000" |
| baseproposerreward  | string (dec) | "0.010000000000000000" |
| bonusproposerreward | string (dec) | "0.040000000000000000" |
| withdrawaddrenabled | bool         | true                   |
