# The `Mint` Module

The `Mint` module is responsible for enabling the Cosmos Hub to have a flexible inflation rate that depends upon a [bonded stake ratio target](#5-GoalBonded).

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
### Type of asset/coin that the Cosmos Hub mints.
#### `cosmoshub-3` default: `uatom`

This is the type of asset (aka coin) that is being minted. The Cosmos Hub produces `uatom`, or micro-ATOM, where 1,000,000 uatom is equivalent to 1 ATOM.

### Potential implications
#### Changing the `MintDenom` parameter
Changing the `MintDenom` will change the asset that the Cosmos Hub mints from the ATOM. This is likely to disrupt the functionality of applications and the expectations of staking participants.


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
### The maximum rate that the Cosmos Hub can mint new ATOMs, proportional to the supply.
#### `cosmoshub-3` default: `0.200000000000000000`

The maximum rate that the Cosmos Hub can be set to mint new ATOMs is determined by `InflationMax`, which is 20% (`0.200000000000000000`) of the ATOM supply per year and based on the assumption that there are 4,855,015 blocks produced per year (see [`BlocksPerYear`](#6-BlocksPerYear)). If the Cosmos Hub's staking ratio (ie. the number of ATOMs staked vs total supply) remains below [`GoalBonded`](#5-GoalBonded)(67%) for long enough, its inflation setting will eventually reach this maximum.

### Potential implications
#### Decreasing the value of `InflationMax`
Decreasing the value of the `InflationMax` parameter will lower the maximum rate that the Cosmos Hub produces new ATOMs and reduce the rate at which the ATOM supply expands. This will reduce the rate at which token-holders' assets are diluted and may reduce the incentive for staking participation. 

#### Increasing the value of `InflationMax`
Increasing the value of the `InflationMax` parameter will raise the maximum rate that the Cosmos Hub produces new ATOMs and raise the rate at which the ATOM supply expands. This will increase the rate at which token-holders' assets are diluted and may increase the incentive for staking participation. 

### Notes
The effective rate of inflation tends to be different than the set rate of inflation because inflation is dependent upon the number of blocks produced per year. If blocks are produced more slowly than 6.50 seconds per block, then fewer than the assumed 4,855,015 will be produced per year, and effectively inflation will be lower than the set rate. If blocks are produced more quickly than 6.50 seconds per block, then more than the assumed 4,855,015 will be produced per year, and effectively inflation will be higher than the set rate.

## 4. `InflationMin`
### The minimum rate that the Cosmos Hub can mint new ATOMs, proportional to the supply.
#### `cosmoshub-3` default: `0.070000000000000000`

The minimum rate that the Cosmos Hub can be set to mint new ATOMs is determined by `InflationMin`, which is 7% (`0.070000000000000000`) of the ATOM supply per year and based on the assumption that there are 4,855,015 blocks produced per year (see [`BlocksPerYear`](#6-BlocksPerYear)). If the Cosmos Hub's staking ratio (ie. the number of ATOMs staked vs total supply) remains above [`GoalBonded`](#5-GoalBonded)(67%) for long enough, its inflation setting will eventually reach this minimum.

### Potential implications
#### Decreasing the value of `InflationMin`
Decreasing the value of the `InflationMin` parameter will lower the minimum rate that the Cosmos Hub produces new ATOMs and reduce the rate at which the ATOM supply expands. This will reduce the rate at which token-holders' assets are diluted and may reduce the incentive for staking participation.

#### Increasing the value of `InflationMin`
Increasing the value of the `InflationMin` parameter will raise the minimum rate that the Cosmos Hub produces new ATOMs and raise the rate at which the ATOM supply expands. This will increase the rate at which token-holders' assets are diluted and may increase the incentive for staking participation.  

### Notes
The effective rate of inflation tends to be different than the set rate of inflation because inflation is dependent upon the number of blocks produced per year. If blocks are produced more slowly than 6.50 seconds per block, then fewer than the assumed 4,855,015 will be produced per year, and effectively inflation will be lower than the set rate. If blocks are produced more quickly than 6.50 seconds per block, then more than the assumed 4,855,015 will be produced per year, and effectively inflation will be higher than the set rate.


## 5. `GoalBonded`
### The target proportion of staking participation, relative to the ATOM supply.
#### `cosmoshub-3` default: `0.670000000000000000`

`GoalBonded` is the target proportion of staking participation, relative to the ATOM supply. Currently the goal of the system's design is to have 67% (`0.670000000000000000`) of the total ATOM supply bonded and participating in staking. When under 67% of the supply is staked, the inflation set rate begins decreasing at a maximum yearly rate of [`InflationRateChange`](#2-InflationRateChange) until it reaches and remains at the [`InflationMin`](#4-InflationMin) of 7%. When over 67% of the supply is staked, the inflation set rate begins increasing at a maximum yearly rate of [`InflationRateChange`](#2-InflationRateChange) until it reaches and remains at the [`InflationMax`](#3-InflationMax) of 20%.

### Potential implications
#### Decreasing the value of `GoalBonded`
Decreasing the value of the `GoalBonded` parameter will cause the Cosmos Hub's inflation setting to begin decreasing at a lower participation rate, and this may reduce the incentive for staking participation.

#### Increasing the value of `GoalBonded`
Increasing the value of the `GoalBonded` parameter will cause the Cosmos Hub's inflation setting to begin increasing at a lower participation rate, and this may increase the incentive for staking participation.


## 6. `BlocksPerYear`
### The system's assumed number of blocks that the Cosmos Hub will produce in one year.
#### `cosmoshub-3` default: `4855015`

`BlocksPerYear` is the setting for the system's assumed number of blocks that the Cosmos Hub will produce in one year. `BlocksPerYear` is currently `4855015` and the network's inflationary behaviour will be aligned with its settings when the average block time is 6.50 seconds over one year. `BlocksPerYear` is most notably used in by the system to determine the rate that new ATOMs are minted, which can vary if block times vary from 6.50 seconds per block, since effectively a different number of blocks will be produced in one year and ATOMs are minted each block.

### Potential implications
#### Changing the `BlocksPerYear` parameter
Changing the `BlocksPerYear` parameter will change the assumption that system makes about how many Cosmos Hub blocks will be produced per year. If block times are greater than 6.50 seconds, then this parameter should be decreased to make the Cosmos Hub's inflationary behaviour more aligned with its settings. If block times are less than 6.50 seconds, then this parameter should be increased to make the Cosmos Hub's behaviour more aligned with its settings.

### Notes
The calculation for seconds in one year:

365.24 (days) * 24 (hours) * 60 (minutes) * 60 (seconds) = 31556736 seconds

**Example:** If block times are 7.12 seconds per block and 31556736 seconds per year:

31556736 / 7.12 = ~4432126 blocks per year


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
