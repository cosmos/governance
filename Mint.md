# The `Mint` Module

The `Mint` module is responsible for enabling the Cosmos Hub to 

`Mint` is active on Cosmos Hub 3 and currently has six parameters that may be modified by governance proposal:
1. [`MintDenom`](#1-MintDenom) - uatom (micro-ATOM)
2. [`InflationRateChange`](#2-InflationRateChange) - 0.130000000000000000 (proportion)
3. [`InflationMax`](#3-InflationMax) - 0.200000000000000000 (proportion)
4. [`InflationMin`](#4-InflationMin) - 0.070000000000000000 (proportion)
5. [`GoalBonded`](#5-GoalBonded) - 0.670000000000000000 (proportion)
6. [`BlocksPerYear`](#6-BlocksPerYear) - 4855015 (blocks)

The launch values for each parameter are outlined above, but you can [verify them yourself](#verify-parameter-values).

If you're technically-inclined, [these are the technical specifications](#technical-specifications).

## 1. `MintDenom`
### Short desc.
#### `cosmoshub-3` default: `uatom`

Long Desc

### Potential implications
#### Decreasing the value of `MintDenom`
Decreasing the value of the `MintDenom` parameter will ---. This will make it less likely ---.

#### Increasing the value of `MintDenom`
Increasing the value of the `MintDenom` parameter will ---. This will make it more likely ---.

#### Notes


## 2. `InflationRateChange`
### Short desc.
#### `cosmoshub-3` default: `0.130000000000000000`

Long Desc

### Potential implications
#### Decreasing the value of `InflationRateChange`
Decreasing the value of the `InflationRateChange` parameter will ---. This may ---.

#### Increasing the value of `InflationRateChange`
Increasing the value of the `InflationRateChange` parameter will ---. This may ---.

#### Notes


## 3. `InflationMax`
### Short desc, in nanoseconds.
#### `cosmoshub-3` default: `0.200000000000000000`

Long Desc

### Potential implications
#### Decreasing the value of `InflationMax`
Decreasing the value of the `InflationMax` parameter will ---. This may ---. 

#### Increasing the value of `InflationMax`
Increasing the value of the `InflationMax` parameter will ---. This may ---. 

### Notes


## 4. `InflationMin`
### Short desc.
#### `cosmoshub-3` default: `0.070000000000000000`

Long Desc

### Potential implications
#### Decreasing the value of `InflationMin`
Decreasing the value of the `InflationMin` parameter will ---. This may ---. 

#### Increasing the value of `InflationMin`
Increasing the value of the `InflationMin` parameter will ---. This may ---. 

### Notes

## 5. `GoalBonded`
### Short desc.
#### `cosmoshub-3` default: `0.670000000000000000`

Long Desc

### Potential implications
#### Decreasing the value of `GoalBonded`
Decreasing the value of the `GoalBonded` parameter will ---. This may ---. 

#### Increasing the value of `GoalBonded`
Increasing the value of the `GoalBonded` parameter will ---. This may ---. 

### Notes

## 6. `BlocksPerYear`
### Short desc, in blocks.
#### `cosmoshub-3` default: `4855015`

Long Desc

### Potential implications
#### Decreasing the value of `BlocksPerYear`
Decreasing the value of the `BlocksPerYear` parameter will ---. This will make it less likely ---.

#### Increasing the value of `BlocksPerYear`
Increasing the value of the `BlocksPerYear` parameter will ---. This will make it more likely ---.

#### Notes


# Verify Parameter Values
## Genesis (aka launch) Parameters
This is useful if you don't have `gaiacli` installed and don't have a reason to believe that the parameter has changed since the chain launched.

Each parameter may be verified in the chain's genesis file, [found here](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json). These are the parameters that the latest Cosmos Hub chain launched with, and will remain so, unless a governance proposal changes them. I've outlined those original values in the [Technical Specifications section](#technical-specifications).

The genesis file is text-based and large. The genesis parameter naming scheme isn't identical to those listed above, so when I search, I put one underscore between upper and lowercase characters, then convert all characters to lowercase.

For example, if I want to search for `MintDenom`, I'll search the [genesis file](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json) for `mint_denom`.

## Current Parameters
You may verify the current parameter values (in case they were modified via governance proposal post-launch) with the [gaiacli command-line application](/gaiacli). Here are the commands for each:
1. `MintDenom` - `gaiacli q ..` --> **to do** <--

# Technical Specifications

The `Mint` module was designed to allow for a flexible inflation rate determined by market demand targeting a particular bonded-stake ratio, and effect a balance between market liquidity and staked supply.

In order to best determine the appropriate market rate for inflation rewards, a moving change rate is used. The moving change rate mechanism ensures that if the % bonded is either over or under the goal %-bonded, the inflation rate will adjust to further incentivize or disincentivize being bonded, respectively. Setting the goal %-bonded at less than 100% encourages the network to maintain some non-staked tokens in order to help provide some liquidity.

It can be broken down in the following way:

- If the inflation rate is below the goal %-bonded the inflation rate will increase until a maximum value is reached
- If the goal % bonded (67% in Cosmos-Hub) is maintained, then the inflation rate will stay constant
- If the inflation rate is above the goal %-bonded the inflation rate will decrease until a minimum value is reached

The `Mint` module contains the following parameters:

| Key           | Type   | cosmoshub-3 genesis setting                |
| ----------------------- | ---------------- | ---------------------- |
| MintDenom           | string          | "uatom"                |
| InflationRateChange | string (dec)    | "0.130000000000000000" |
| InflationMax        | string (dec)    | "0.200000000000000000" |
| InflationMin        | string (dec)    | "0.070000000000000000" |
| GoalBonded          | string (dec)    | "0.670000000000000000" |
| BlocksPerYear       | string (uint64) | "4855015"              |
