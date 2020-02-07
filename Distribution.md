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
### Short desc.
#### `cosmoshub-3` default: `0.020000000000000000`

Long Desc

### Potential implications
#### Decreasing the value of `communitytax`
Decreasing the value of the `communitytax` parameter will ---. This will make it less likely ---.

#### Increasing the value of `communitytax`
Increasing the value of the `communitytax` parameter will ---. This will make it more likely ---.

#### Notes


## 2. `baseproposerreward`
### Short desc.
#### `cosmoshub-3` default: `0.010000000000000000`

Long Desc

### Potential implications
#### Decreasing the value of `baseproposerreward`
Decreasing the value of the `baseproposerreward` parameter will ---. This may ---.

#### Increasing the value of `baseproposerreward`
Increasing the value of the `baseproposerreward` parameter will ---. This may ---.

#### Notes


## 3. `bonusproposerreward`
### Short desc.
#### `cosmoshub-3` default: `0.040000000000000000`

Long Desc

### Potential implications
#### Decreasing the value of `bonusproposerreward`
Decreasing the value of the `bonusproposerreward` parameter will ---. This may ---. 

#### Increasing the value of `bonusproposerreward`
Increasing the value of the `bonusproposerreward` parameter will ---. This may ---. 

### Notes


## 4. `withdrawaddrenabled`
### Short desc.
#### `cosmoshub-3` default: `true`

Long Desc

### Potential implications
#### Changing the `withdrawaddrenabled` parameter
Changing the `withdrawaddrenabled` to false will ---. This may ---. 

### Notes

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
