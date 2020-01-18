# The `Auth` Module
The `Auth` module is active on Cosmos Hub 3. `Auth` currently has five parameters that may be modified by governance proposal:
1. [`MaxMemoCharacters`](#1-maxmemocharacters)
2. [`TxSigLimit`](#2-txsiglimit)
3. [`TxSizeCostPerByte`](#3-txsizecostperbyte)
4. [`SigVerifyCostED25519`](#4-sigverifycosted25519)
5. [`SigVerifyCostSecp256k1`](#5-sigverifycostsecp256k1)

The value for each launch parameter is outlined here, but you can [verify them yourself](#verify-parameter-values). 

If you're technically-inclined, [these are the technical specifications](#technical-specifications).

## 1. `MaxMemoCharacters`
### The character limit for each transaction memo.
#### `cosmoshub-3` default: `512`

There is an option to include a "memo," or additional information (data) to Cosmos Hub transactions, whether sending funds, delegating, voting, or other transaction types. This parameter limits the number of characters that may be included in the memo line of each transaction.

### Potential implications
#### Decreasing the value of `MaxMemoCharacters`
Decreasing the value of `MaxMemoCharacters` may break the functionality of applications that rely upon the data in the memo field to eg. sort transactions. For example, an exchange may use a common deposit address for all of its users, and then individualize account deposits using the memo field. If the memo field suddenly decreased, the exchange may no longer be able to sort transactions.
#### Increasing the value of `MaxMemoCharacters`
Increasing the value of `MaxMemoCharacters` may --> **to do** <--

## 2. `TxSigLimit`
### --> short description <--
#### `cosmoshub-3` default: `7`

--> long description <--

### Potential implications
#### Decreasing the value of `TxSigLimit`
Decreasing the value of `TxSigLimit` may --> **to do** <--
#### Increasing the value of `TxSigLimit`
Increasing the value of `TxSigLimit` may --> **to do** <--

## 3. `TxSizeCostPerByte`
### --> short description <--
#### `cosmoshub-3` default: `10`

--> long description <--

### Potential implications
#### Decreasing the value of `TxSizeCostPerByte`
Decreasing the value of `TxSizeCostPerByte` may --> **to do** <--
#### Increasing the value of `TxSizeCostPerByte`
Increasing the value of `TxSizeCostPerByte` may --> **to do** <--

## 4. `SigVerifyCostED25519`
### --> short description <--
#### `cosmoshub-3` default: `590`

--> long description <--

### Potential implications
#### Decreasing the value of `SigVerifyCostED25519`
Decreasing the value of `SigVerifyCostED25519` may --> **to do** <--
#### Increasing the value of `SigVerifyCostED25519`
Increasing the value of `SigVerifyCostED25519` may --> **to do** <--

## 5. `SigVerifyCostSecp256k1`
### --> short description <--
#### `cosmoshub-3` default: `1000`

--> long description <--

### Potential implications
#### Decreasing the value of `SigVerifyCostSecp256k1`
Decreasing the value of `SigVerifyCostSecp256k1` may --> **to do** <--
#### Increasing the value of `SigVerifyCostSecp256k1`
Increasing the value of `SigVerifyCostSecp256k1` may --> **to do** <--

# Verify Parameter Values
## Genesis (ie. most recent launch) Parameters
This is useful if you don't have `gaiacli` installed and don't have a reason to believe that the parameter has changed since the chain launched.

Each parameter may be verified in the chain's genesis file, [found here](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json). These are the parameters that the latest Cosmos Hub chain launched with, and will remain so, unless a governance proposal changes them. I've outlined those original values in the [Technical Specifications section](https://github.com/gavinly/CosmosParametersWiki/blob/master/Auth.md#technical-specifications).

The genesis file is text-based and large. The genesis parameter naming scheme isn't identical to those listed above, so when I search, I put one underscore between upper and lowercase characters, then convert all characters to lowercase.

For example, if I want to search for MaxMemoCharacters, I'll search the [genesis file](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json) for `max_memo_characters`.

## Current Parameters
You may verify the current parameter values (in case they were modified via governance proposal post-launch) with the [gaiacli command-line application](/gaiacli). Here are the commands for each:
1. `MaxMemoCharacters` - `gaiacli q 
2. `TxSigLimit` - 
3. `TxSizeCostPerByte` - 
4. `SigVerifyCostED25519` - 
5. `SigVerifyCostSecp256k1`

# Technical Specifications

The `Auth` module is responsible for specifying the base transaction and account types for an application, since the SDK itself is agnostic to these particulars. It contains the ante handler, where all basic transaction validity checks (signatures, nonces, auxiliary fields) are performed, and exposes the account keeper, which allows other modules to read, write, and modify accounts.

The `Auth` module contains the following parameters:

| Key                    | Type            | cosmoshub-3 genesis setting|
|------------------------|-----------------|---------|
| MaxMemoCharacters      | string (uint64) | "512"   |
| TxSigLimit             | string (uint64) | "7"     |
| TxSizeCostPerByte      | string (uint64) | "10"    |
| SigVerifyCostED25519   | string (uint64) | "590"   |
| SigVerifyCostSecp256k1 | string (uint64) | "1000"  |
