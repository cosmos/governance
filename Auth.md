The `Auth` module is active on Cosmos Hub 3. 
It currently has five parameters:

1. MaxMemoCharacters -
2. TxSigLimit - 
3. TxSizeCostPerByte - 
4. SigVerifyCostED25519 - 
5. SigVerifyCostSecp256k1 - 

Each parameter may be verified in the chain's genesis file, [found here](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json). These are the parameters that the latest Cosmos Hub chain launched with, and will remain unless a governance proposal changes them. I've outlined those values in the [Technical Specifications section](https://github.com/gavinly/CosmosParametersWiki/blob/master/Auth.md#technical-specifications).

The genesis file is text-based and large. The genesis parameter naming scheme isn't identical to those listed above, so when I search, I put one underscore between upper and lowercase characters, then convert all characters to lowercase.

For example, if I want to search for MaxMemoCharacters, I'll search the [genesis file](https://raw.githubusercontent.com/cosmos/launch/master/genesis.json) for `max_memo_characters`.

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
