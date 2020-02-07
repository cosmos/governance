# The `Slashing` Module

The `Slashing` module is responsible for enabling the Cosmos Hub to penalize any validator for an attributable violation of protocol rules by slashing (ie. partially destroying) the bonded ATOMs of their stake-backing. Penalties may include a) burning some amount of a staked bond and b) removing the ability to vote on future blocks and proposals for a period of time.

`Slashing` is active on Cosmos Hub 3 and currently has five parameters that may be modified by governance proposal:
1. [`SignedBlocksWindow`](#1-SignedBlocksWindow) - 10000 (blocks)
2. [`MinSignedPerWindow`](#2-MinSignedPerWindow) - 0.500000000000000000 (proportion)
3. [`DowntimeJailDuration`](#3-DowntimeJailDuration) - 600000000000 (nanoseconds)
4. [`SlashFractionDoubleSign`](#4-SlashFractionDoubleSign) - 0.050000000000000000 (proportion)
5. [`SlashFractionDowntime`](#5-SlashFractionDowntime) - 0.000100000000000000 (proportion)

The launch values for each parameter are outlined above, but you can [verify them yourself](#verify-parameter-values).

If you're technically-inclined, [these are the technical specifications](#technical-specifications).

## 1. `SignedBlocksWindow`
### Short desc, in blocks.
#### `cosmoshub-3` default: `10000`

Long Desc

### Potential implications
#### Decreasing the value of `SignedBlocksWindow`
Decreasing the value of the `SignedBlocksWindow` parameter will ---. This will make it less likely ---.

#### Increasing the value of `SignedBlocksWindow`
Increasing the value of the `SignedBlocksWindow` parameter will ---. This will make it more likely ---.

#### Notes


## 2. `MinSignedPerWindow`
### Short desc.
#### `cosmoshub-3` default: `0.500000000000000000`

Long Desc

### Potential implications
#### Decreasing the value of `MinSignedPerWindow`
Decreasing the value of the `MinSignedPerWindow` parameter will ---. This may ---.

#### Increasing the value of `MinSignedPerWindow`
Increasing the value of the `MinSignedPerWindow` parameter will ---. This may ---.

#### Notes


## 3. `DowntimeJailDuration`
### Short desc, in nanoseconds.
#### `cosmoshub-3` default: `7`

Long Desc

### Potential implications
#### Decreasing the value of `DowntimeJailDuration`
Decreasing the value of the `DowntimeJailDuration` parameter will ---. This may ---. 

#### Increasing the value of `DowntimeJailDuration`
Increasing the value of the `DowntimeJailDuration` parameter will ---. This may ---. 

### Notes


## 4. `SlashFractionDoubleSign`
### Short desc.
#### `cosmoshub-3` default: `0.050000000000000000`

Long Desc

### Potential implications
#### Decreasing the value of `SlashFractionDoubleSign`
Decreasing the value of the `SlashFractionDoubleSign` parameter will ---. This may ---. 

#### Increasing the value of `SlashFractionDoubleSign`
Increasing the value of the `SlashFractionDoubleSign` parameter will ---. This may ---. 

### Notes

## 5. `SlashFractionDowntime`
### Short desc.
#### `cosmoshub-3` default: `0.000100000000000000`

Long Desc

### Potential implications
#### Decreasing the value of `SlashFractionDowntime`
Decreasing the value of the `SlashFractionDowntime` parameter will ---. This may ---. 

#### Increasing the value of `SlashFractionDowntime`
Increasing the value of the `SlashFractionDowntime` parameter will ---. This may ---. 

### Notes

# Verify Parameter Values
## Genesis (aka launch) Parameters
This is useful if you don't have `gaiacli` installed and don't have a reason to believe that the parameter has changed since the chain launched.

Each parameter may be verified in the chain's genesis file, [found here](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json). These are the parameters that the latest Cosmos Hub chain launched with, and will remain so, unless a governance proposal changes them. I've outlined those original values in the [Technical Specifications section](#technical-specifications).

The genesis file is text-based and large. The genesis parameter naming scheme isn't identical to those listed above, so when I search, I put one underscore between upper and lowercase characters, then convert all characters to lowercase.

For example, if I want to search for `SignedBlocksWindow`, I'll search the [genesis file](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json) for `signed_blocks_window`.

## Current Parameters
You may verify the current parameter values (in case they were modified via governance proposal post-launch) with the [gaiacli command-line application](/gaiacli). Here are the commands for each:
1. `SignedBlocksWindow` - `gaiacli q ..` --> **to do** <--

# Technical Specifications

The `Slashing` module is responsible for supporting an advanced Proof of Stake (PoS) system. In this system, holders of the native staking token of the chain can become validators and can delegate tokens to validators, ultimately determining the effective validator set for the system.

The `Slashing` module contains the following parameters:

| Key           | Type   | cosmoshub-3 genesis setting                |
| ----------------------- | ---------------- | ---------------------- |
| SignedBlocksWindow      | string (int64)   | "10000"                |
| MinSignedPerWindow      | string (dec)     | "0.500000000000000000" |
| DowntimeJailDuration    | string (time ns) | "600000000000"         |
| SlashFractionDoubleSign | string (dec)     | "0.050000000000000000" |
| SlashFractionDowntime   | string (dec)     | "0.000100000000000000" |
