# The `slashing` Module

The `slashing` module is responsible for enabling the Cosmos Hub to penalize any validator for an attributable violation of protocol rules by slashing (ie. partially destroying) the bonded ATOMs of their stake-backing. Penalties may include a) burning some amount of a staked bond and b) removing the ability to vote on future blocks and governance proposals for a period of time.

`slashing` is active on Cosmos Hub 3 and currently has five parameters that may be modified by governance proposal:
1. [`SignedBlocksWindow`](#1-SignedBlocksWindow) - 10000 (blocks)
2. [`MinSignedPerWindow`](#2-MinSignedPerWindow) - 0.050000000000000000 (proportion)
3. [`DowntimeJailDuration`](#3-DowntimeJailDuration) - 600000000000 (nanoseconds)
4. [`SlashFractionDoubleSign`](#4-SlashFractionDoubleSign) - 0.050000000000000000 (proportion)
5. [`SlashFractionDowntime`](#5-SlashFractionDowntime) - 0.000100000000000000 (proportion)

The launch values for each parameter are outlined above, but you can [verify them yourself](#verify-parameter-values).

If you're technically-inclined, [these are the technical specifications](#technical-specifications).

## 1. `SignedBlocksWindow`
### Window for being offline without being slashed, in blocks.
#### `cosmoshub-3` default: `10000`

If a validator in the active set is offline for too long, the validator will be slashed by [`SlashFractionDowntime`](#5-SlashFractionDowntime) and temporarily removed from the active set for at least the [`DowntimeJailDuration`](#3-DowntimeJailDuration), which is 10 minutes.

How long is being offline for too long? There are two components: `SignedBlocksWindow` and [`MinSignedPerWindow`](#2-MinSignedPerWindow). Since `MinSignedPerWindow` is 5% and `SignedBlocksWindow` is 10,000, a validator must have signed at least 5% of 10,000 blocks (500 out of 10,000) at any given time to comply with protocol rules. That means a validator that misses 9,500 consecutive blocks will be considered by the system to have committed a liveness violation. The time window for being offline without breaking system rules is proportional to this parameter.

All in Bits has published more about liveness [here](https://docs.cosmos.network/master/modules/slashing/04_begin_block.html).

### Potential implications
#### Decreasing the value of `SignedBlocksWindow`
Decreasing the value of the `SignedBlocksWindow` parameter will decrease the window for complying with the system's liveness rules. This will make it more likely that offline validators will be slashed by [`SlashFractionDowntime`](#5-SlashFractionDowntime) and temporarily removed from the active set for at least [`DowntimeJailDuration`](#3-DowntimeJailDuration). While out of the active set, the votes of the validator and its delegators do not count toward governance proposals.

**Example:**

If we pass a proposal to cut `SignedBlocksWindow` in half from 10,000 to 5,000 blocks, what happens?

Validators must now sign at least 5% of 5,000 blocks, which is 250 blocks. That means that a validator that misses 4,750 consecutive blocks will be considered by the system to have committed a liveness violation, where previously 9,500 consecutive blocks would need to have been missed to violate these system rules.

That's ~9.25 hours instead of ~18.5 hours, assuming 7s block times.

#### Increasing the value of `SignedBlocksWindow`
Increasing the value of the `SignedBlocksWindow` parameter will increase the window for complying with the system's liveness rules. This will make it less likely that offline validators will be slashed by [`SlashFractionDowntime`](#5-SlashFractionDowntime) and temporarily removed from the active set for at least [`DowntimeJailDuration`](#3-DowntimeJailDuration).

**Example:**

If we pass a proposal to double `SignedBlocksWindow` from 10,000 to 20,000 blocks, what happens?

Validators must now sign at least 5% of 20,000 blocks, which is 1000 blocks. That means that a validator that misses 19,000 consecutive blocks will be considered by the system to have committed a liveness violation, where previously 9,500 consecutive blocks would need to have been missed to violate these system rules.

That's ~37 hours instead of ~18.5 hours, assuming 7s block times.

## 2. `MinSignedPerWindow`
### Minimum proportion of blocks signed per window without being slashed.
#### `cosmoshub-3` default: `0.050000000000000000`

If a validator in the active set is offline for too long, the validator will be slashed by [`SlashFractionDowntime`](#5-SlashFractionDowntime) and temporarily removed from the active set for at least the [`DowntimeJailDuration`](#3-DowntimeJailDuration), which is 10 minutes.

How long is being offline for too long? There are two components: [`SignedBlocksWindow`](#1-SignedBlocksWindow) and `MinSignedPerWindow`. Since `MinSignedPerWindow` is 5% and `SignedBlocksWindow` is 10,000, a validator must have signed at least 5% of 10,000 blocks (500 out of 10,000) at any given time to comply with protocol rules. That means a validator that misses 9,500 consecutive blocks will be considered by the system to have committed a liveness violation. The threshold-proportion of blocks is determined by this parameter, so the greater that `MinSignedPerWindow` is, the lower the tolerance for missed blocks by the system.

All in Bits has published more about liveness [here](https://docs.cosmos.network/master/modules/slashing/04_begin_block.html).

### Potential implications
#### Decreasing the value of `MinSignedPerWindow`
Decreasing the value of the `MinSignedPerWindow` parameter will increase the threshold for complying with the system's liveness rules. This will make it less likely that offline validators will be slashed by [`SlashFractionDowntime`](#5-SlashFractionDowntime) and temporarily removed from the active set for at least [`DowntimeJailDuration`](#3-DowntimeJailDuration). While out of the active set, the votes of the validator and its delegators do not count toward governance proposals.

**Example:**

If we pass a proposal to cut `MinSignedPerWindow` in half from `0.050000000000000000` (5%) to `0.025000000000000000` (2.5%), what happens?

Validators must now sign at least 2.5% of 10,000 blocks, which is 250 blocks. That means that a validator that misses 9,750 consecutive blocks will be considered by the system to have committed a liveness violation, where previously 9,500 consecutive blocks would need to have been missed to violate these system rules.

That's ~19 hours instead of ~18.5 hours, assuming 7s block times.

#### Increasing the value of `MinSignedPerWindow`
Increasing the value of the `MinSignedPerWindow` parameter will decrease the threshold for complying with the system's liveness rules. This will make it more likely that offline validators will be slashed by [`SlashFractionDowntime`](#5-SlashFractionDowntime) and temporarily removed from the active set for at least [`DowntimeJailDuration`](#3-DowntimeJailDuration). While out of the active set, the votes of the validator and its delegators do not count toward governance proposals.

**Example:**

If we pass a proposal to double the `MinSignedPerWindow` from `0.050000000000000000` (5%) to `0.100000000000000000` (10%), what happens?

Validators must now sign at least 10% of 10,000 blocks, which is 1000 blocks. That means that a validator that misses 9,000 consecutive blocks will be considered by the system to have committed a liveness violation, where previously 9,500 consecutive blocks would need to have been missed to violate these system rules.

That's ~17.5 hours instead of ~18.5 hours, assuming 7s block times.

## 3. `DowntimeJailDuration`
### The suspension time (aka jail time) for a validator that is offline too long, in nanoseconds.
#### `cosmoshub-3` default: `600000000000`

A validator in the active set that's offline for too long, besides being slashed, will be temporarily removed from the active set (aka "[jailed](https://docs.cosmos.network/master/modules/slashing/03_messages.html#unjail)") for at least [`DowntimeJailDuration`](#3-DowntimeJailDuration), which is 10 minutes (`600000000000` nanoseconds). During this time, a validator is not able to sign blocks and its delegators will not earn staking rewards. After the `DowntimeJailDuration` period has passed, the validator operator may send an "[unjail](https://docs.cosmos.network/master/modules/slashing/03_messages.html#unjail)" transaction to resume validator operations.

All in Bits has published more about liveness [here](https://docs.cosmos.network/master/modules/slashing/04_begin_block.html).

### Potential implications
#### Decreasing the value of `DowntimeJailDuration`
Decreasing the value of the `DowntimeJailDuration` parameter will require a validator to wait less time before resuming validator operations. During this time, a validator is not able to sign blocks and its delegators will not earn staking rewards.

#### Increasing the value of `DowntimeJailDuration`
Increasing the value of the `DowntimeJailDuration` parameter will require a validator to wait more time before resuming validator operations. During this time, a validator is not able to sign blocks and its delegators will not earn staking rewards.


## 4. `SlashFractionDoubleSign`
### Proportion of stake-backing that is bruned for equivocation (aka double-signing).
#### `cosmoshub-3` default: `0.050000000000000000`

A validator proven to have signed two blocks at the same height is considered to have committed equivocation, and the system will then permanently burn ("slash") that validator's total delegations (aka stake-backing) by `0.050000000000000000` (5%). All delegators to an offending validator will lose 5% of all ATOMs delegated to this validator. At this point the validator will be "[tombstoned](https://docs.cosmos.network/master/modules/slashing/01_concepts.html)," which means the validator will be permanently removed from the active set of validators, and the validator's stake-backing will only be slashed one time (regardless of how many equivocations).

### Potential implications
#### Decreasing the value of `SlashFractionDoubleSign`
Decreasing the value of the `SlashFractionDoubleSign` parameter will lessen the penalty for equivocation, and offending validators will have a smaller proportion of their stake-backing burned. This may reduce the motivation for operators to ensure that their validators are secure.

#### Increasing the value of `SlashFractionDoubleSign`
Increasing the value of the `SlashFractionDoubleSign` parameter will heighten the penalty for equivocation, and offending validators will have a larger proportion of their stake-backing burned. This may increase the motivation for operators to ensure that their validators are secure.

## 5. `SlashFractionDowntime`
### Proportion of stake that is slashed for being offline too long.
#### `cosmoshub-3` default: `0.000100000000000000`

If a validator in the active set is offline for too long, the system will permanently burn ("slash") that validator's total delegations (aka stake-backing) by a `SlashFractionDowntime` of `0.000100000000000000` (0.01%). All delegators to an offending validator will lose 0.01% of all ATOMs delegated to this validator. At this point the validator will be "[jailed](https://docs.cosmos.network/master/modules/slashing/03_messages.html#unjail)," which means the validator will be temporarily removed from the active set of validators so the validator's stake-backing will only be slashed one time.

### Potential implications
#### Decreasing the value of `SlashFractionDowntime`
Decreasing the value of the `SlashFractionDowntime` parameter will lessen the penalty for liveness violations, and offending validators will have a smaller proportion of their stake-backing burned. This may reduce the motivation for operators to ensure that their validators are online.

#### Increasing the value of `SlashFractionDowntime`
Increasing the value of the `SlashFractionDowntime` parameter will heighten the penalty for liveness violations, and offending validators will have a larger proportion of their stake-backing burned. This may increase the motivation for operators to ensure that their validators are online.


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

The `slashing` module enables Cosmos SDK-based blockchains to disincentivize any attributable action
by a protocol-recognized actor with value at stake by penalizing them ("slashing").

Penalties may include, but are not limited to:

- Burning some amount of their stake
- Removing their ability to vote on future blocks and governance proposals for a period of time.

The `slashing` module contains the following parameters:

| Key           | Type   | cosmoshub-3 genesis setting                |
| ----------------------- | ---------------- | ---------------------- |
| SignedBlocksWindow      | string (int64)   | "10000"                |
| MinSignedPerWindow      | string (dec)     | "0.050000000000000000" |
| DowntimeJailDuration    | string (time ns) | "600000000000"         |
| SlashFractionDoubleSign | string (dec)     | "0.050000000000000000" |
| SlashFractionDowntime   | string (dec)     | "0.000100000000000000" |
