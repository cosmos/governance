# The `Governance` Module
The `Governance` module is responsible for on-chain proposals and voting functionality. `Governance` is active on Cosmos Hub 3 and currently has three parameters with six subkeys that may be modified by governance proposal:
1. [`depositparams`](#1-depositparams)
   - [`min_deposit`](#min_deposit) - `512000000` `uatom` (micro-ATOMs)
   - [`max_deposit_period`](#max_deposit_period) - `1209600000000000` (nanoseconds)

2. [`votingparams`](#2-votingparams)
   - [`voting_period`](#voting_period) - `1209600000000000` (nanoseconds)

3. [`tallyparams`](#3-tallyparams)
   - [`quorum`](#quorum) - `0.400000000000000000` (percent)
   - [`threshold`](#threshold) - `0.500000000000000000` (percent)
   - [`veto`](#veto) - `0.334000000000000000` (percent)

The launch values for each parameter's subkeys are outlined above, but you can [verify them yourself](#verify-parameter-values). 

If you're technically-inclined, [these are the technical specifications](#technical-specifications).

## 1. `depositparams`
## `min_deposit`
### The minimum deposit required for a proposal to enter the voting period. Denomination: micro-ATOMs.
#### `cosmoshub-3` default: `512000000` `uatom`

Prior to a governance proposal to entering the voting period (ie. for the proposal to be voted upon), there must be at least a minimum number of ATOMs deposited. Anyone may contribute to this deposit. 512000000uatom is equivalent to 512 ATOM.

### Potential implications
#### Decreasing the value of `min_deposit`
Decreasing the value of the `min_deposit` parameter will enable governance proposals to enter the voting period with fewer ATOMs at risk. This will likely increase the volume of new governance proposals.

#### Increasing the value of `min_deposit`
Increasing the value of the `min_deposit` parameter will require risking a greater number of ATOMs before governance proposals may enter the voting period. This will likely decrease the volume of new governance proposals.

## `max_deposit_period`
### The maximum amount of time that a proposal can accept deposit contributions before expiring. Denomination: nanoseconds.
#### `cosmoshub-3` default: `1209600000000000`

Prior to a governance proposal to entering the voting period (ie. for the proposal to be voted upon), there must be at least a minimum number of ATOMs deposited. Anyone may contribute to this deposit.

### Potential implications
#### Decreasing the value of `max_deposit_period`
Decreasing the value of the `max_deposit_period` parameter will enable governance proposals to enter the voting period with fewer ATOMs at risk. This will likely increase the volume of new governance proposals.

#### Increasing the value of `max_deposit_period`
Increasing the value of the `max_deposit_period` parameter will require risking a greater number of ATOMs before governance proposals may enter the voting period. This will likely decrease the volume of new governance proposals.

# Verify Parameter Values
## Genesis (aka launch) Parameters
This is useful if you don't have `gaiacli` installed and don't have a reason to believe that the parameter has changed since the chain launched.

Each parameter may be verified in the chain's genesis file, [found here](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json). These are the parameters that the latest Cosmos Hub chain launched with, and will remain so, unless a governance proposal changes them. I've outlined those original values in the [Technical Specifications section](#technical-specifications).

The genesis file is text-based and large. The genesis parameter naming scheme isn't identical to those listed above, so when I search, I put one underscore between upper and lowercase characters, then convert all characters to lowercase.

For example, if I want to search for `depositparams`, I'll search the [genesis file](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json) for `deposit_params`.

## Current Parameters
You may verify the current parameter values (in case they were modified via governance proposal post-launch) with the [gaiacli command-line application](/gaiacli). Here are the commands for each:
1. `depositparams` - `gaiacli q ..` --> **to do** <--

# Technical Specifications

The `Governance` module is responsible for 

The `Governance` module contains the following parameters:

| Key           | Type   | cosmoshub-3 genesis setting                                                                     |
|---------------|--------|----------------------------------------------------------------------------------------------------|
| depositparams | object | {"min_deposit":[{"denom":"uatom","amount":"10000000"}],"max_deposit_period":"172800000000000"}     |
| votingparams  | object | {"voting_period":"172800000000000"}                                                                |
| tallyparams   | object | {"quorum":"0.334000000000000000","threshold":"0.500000000000000000","veto":"0.334000000000000000"} |

## SubKeys

| Key                | Type             | cosmoshub-3 genesis setting             |
|--------------------|------------------|-----------------------------------------|
| min_deposit        | array (coins)    | [{"denom":"uatom","amount":"10000000"}] |
| max_deposit_period | string (time ns) | "172800000000000"                       |
| voting_period      | string (time ns) | "172800000000000"                       |
| quorum             | string (dec)     | "0.334000000000000000"                  |
| threshold          | string (dec)     | "0.500000000000000000"                  |
| veto               | string (dec)     | "0.334000000000000000"                  |

__NOTE__: The governance module contains parameters that are objects unlike other
modules. If only a subset of parameters are desired to be changed, only they need
to be included and not the entire parameter object structure. 
