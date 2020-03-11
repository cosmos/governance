# The `Crisis` Module
The `Crisis` module is responsible for halting the Cosmos Hub if an invariant is broken. `Crisis` is active on Cosmos Hub 3 and currently has one parameter that may be modified by governance proposal:
1. [`ConstantFee`](#1-ConstantFee) - 1333000000uatom (micro-ATOM)

The launch value for this parameter is outlined above, but you can [verify them yourself](#verify-parameter-values).

If you're technically-inclined, [these are the technical specifications](#technical-specifications).

## 1. `ConstantFee`
### The amount required to send a message to halt the Cosmos Hub chain if an invariant is broken, in micro-ATOM.
#### `cosmoshub-3` default: `1333000000` `uatom`

A Cosmos account (address) can send a transaction message that will halt the Cosmos Hub chain if an invariant is broken. This kind of transaction could consume excessive amounts of gas to compute, beyond the maximum allowable block gas limit. `ConstantFee` makes it possible to bypass the block gas limit in order to process this transaction, while setting a cost to disincentivize using the function to attack the network. The cost of the transaction is `1333000000` `uatom` (1,333 ATOM) and will not be paid if the chain halts (similar to being refunded). If the invariant is not broken, then `ConstantFee` will be paid. All in Bits has published more information about the [Crisis module here](https://docs.cosmos.network/master/modules/crisis/).

### Potential implications
#### Decreasing the value of `ConstantFee`
Decreasing the value of the `ConstantFee` parameter will ---. This may ---. --> **to do** <--

#### Increasing the value of `ConstantFee`
Increasing the value of the `ConstantFee` parameter will ---. This may ---. --> **to do** <--

#### Notes
Only [registered invariants](https://github.com/cosmos/cosmos-sdk/blob/master/x/supply/keeper/invariants.go) may be checked with this transaction message.

# Verify Parameter Values
## Genesis (aka launch) Parameters
This is useful if you don't have `gaiacli` installed and don't have a reason to believe that the parameter has changed since the chain launched.

Each parameter may be verified in the chain's genesis file, [found here](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json). These are the parameters that the latest Cosmos Hub chain launched with, and will remain so, unless a governance proposal changes them. I've outlined those original values in the [Technical Specifications section](#technical-specifications).

The genesis file is text-based and large. The genesis parameter naming scheme isn't identical to those listed above, so when I search, I put one underscore between upper and lowercase characters, then convert all characters to lowercase.

For example, if I want to search for `ConstantFee`, I'll search the [genesis file](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json) for `constant_fee`.

## Current Parameters
You may verify the current `ConstantFee` parameter value (in case they were modified via governance proposal post-launch) with the [gaiacli command-line application](/gaiacli). Here is the command:

 `gaiacli q ..` --> **to do** <--

# Technical Specifications

The `Crisis` module is responsible for halting the blockchain under the circumstance that a blockchain invariant is broken. Invariants can be registered with the application during the application initialization process.

The `Crisis` module contains the following parameter:

| Key           | Type   | cosmoshub-3 genesis setting                                                                     |
|---------------|--------|:----------------------------------------------------------------------------------------------------|
| ConstantFee | object (coin) | {"denom":"uatom","amount":"1333000000"} |
