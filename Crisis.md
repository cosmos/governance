# The `Crisis` Module
The `Crisis` module is responsible for halting the Cosmos Hub if an invariant is broken. `Crisis` is active on Cosmos Hub 3 and currently has one parameter that may be modified by governance proposal:
1. [`ConstantFee`](#1-ConstantFee) - 1333000000uatom (micro-atom)

The launch value for this parameter is outlined above, but you can [verify them yourself](#verify-parameter-values).

If you're technically-inclined, [these are the technical specifications](#technical-specifications).

## 1. `ConstantFee`
### Short desc.
#### `cosmoshub-3` default: `1333000000` `uatom`

Long desc

### Potential implications
#### Decreasing the value of `ConstantFee`
Decreasing the value of the `ConstantFee` parameter will ---. This may ---.

#### Increasing the value of `ConstantFee`
Increasing the value of the `ConstantFee` parameter will ---. This may ---.

#### Notes

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
