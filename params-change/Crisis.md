# The `crisis` Module
The `crisis` module is responsible for halting the Cosmos Hub if an invariant is broken. `crisis` is active on Cosmos Hub 3 and currently has one parameter that may be modified by governance proposal:
1. [`ConstantFee`](#1-ConstantFee) - 1333000000uatom (micro-ATOM)

The launch value for this parameter is outlined above, but you can [verify them yourself](#verify-parameter-values).

If you're technically-inclined, [these are the technical specifications](#technical-specifications). If you're looking to create a proposal to change one or more of these parameters, [check out this section for formatting](params-change/submitting.md#formatting-the-json-file-for-the-governance-proposal).

## 1. `ConstantFee`
### The amount required to send a message to halt the Cosmos Hub chain if an invariant is broken, in micro-ATOM.
#### `cosmoshub-3` default: `1333000000` `uatom`

A Cosmos account (address) can send a transaction message that will halt the Cosmos Hub chain if an invariant is broken. An example of this would be if all of the account balances in total did not equal the total supply. This kind of transaction could consume excessive amounts of gas to compute, beyond the maximum allowable block gas limit. `ConstantFee` makes it possible to bypass the gas limit in order to process this transaction, while setting a cost to disincentivize using the function to attack the network. The cost of the transaction is `1333000000` `uatom` (1,333 ATOM) and will effectively not be paid if the chain halts due to a broken invariant (which similar to being refunded). If the invariant is not broken, then `ConstantFee` will be paid. All in Bits has published more information about the [crisis module here](https://docs.cosmos.network/master/modules/crisis/).

### Potential implications
#### Decreasing the value of `ConstantFee`
Decreasing the value of the `ConstantFee` parameter will reduce the cost of checking an invariant. This will likely make it easier to halt the chain if an invariant is actually broken, but it will lower the cost for an attacker to use this function to slow block production.

#### Increasing the value of `ConstantFee`
Increasing the value of the `ConstantFee` parameter will increase the cost of checking an invariant. This will likely make it more difficult to halt the chain if an invariant is actually broken, but it will increase the cost for an attacker to use this function to slow block production.

### Notes
Only [registered invariants](https://github.com/cosmos/cosmos-sdk/blob/master/x/supply/keeper/invariants.go) may be checked with this transaction message. Validators are reportedly performant enough to handle large computations like invariant checks, and the likely outcome of multiple invariant checks would be longer block times. In the code, there is a comment that indicates that the designers were targeting $5000 USD as the required amount of ATOMs to run an invariant check.

# Verify Parameter Values
## Genesis (aka launch) Parameters
This is useful if you don't have `gaiad` installed and don't have a reason to believe that the parameter has changed since the chain launched.

Each parameter may be verified in the chain's genesis file, [found here](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json). These are the parameters that the latest Cosmos Hub chain launched with, and will remain so, unless a governance proposal changes them. I've outlined those original values in the [Technical Specifications section](#technical-specifications).

The genesis file is text-based and large. The genesis parameter naming scheme isn't identical to those listed above, so when I search, I put one underscore between upper and lowercase characters, then convert all characters to lowercase.

For example, if I want to search for `ConstantFee`, I'll search the [genesis file](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json) for `constant_fee`.

## Current Parameters
You may verify the current `ConstantFee` parameter value (in case they were modified via governance proposal post-launch) with the [gaiad command-line application](/gaiad). Here is the command:

 `gaiad q ..` --> **to do** <--

# Technical Specifications

The `crisis` module is responsible for halting the blockchain under the circumstance that a blockchain invariant is broken. Invariants can be registered with the application during the application initialization process.

The `crisis` module contains the following parameter:

| Key           | Type   | cosmoshub-3 genesis setting                                                                     |
|---------------|--------|:----------------------------------------------------------------------------------------------------|
| ConstantFee | object (coin) | {"denom":"uatom","amount":"1333000000"} |
