The `Auth` module is active on Cosmos Hub 3. 
It currently has five parameters:

1. MaxMemoCharacters -
2. TxSigLimit - 
3. TxSizeCostPerByte - 
4. SigVerifyCostED25519 - 
5. SigVerifyCostSecp256k1 - 

# Technical Specifications

The `Auth` module is responsible for specifying the base transaction and account types for an application, since the SDK itself is agnostic to these particulars. It contains the ante handler, where all basic transaction validity checks (signatures, nonces, auxiliary fields) are performed, and exposes the account keeper, which allows other modules to read, write, and modify accounts.
The `Auth` module contains the following parameters:

| Key                    | Type            | cosmoshub-3 genesis setting|
|------------------------|-----------------|---------|
| MaxMemoCharacters      | string (uint64) | "256"   |
| TxSigLimit             | string (uint64) | "7"     |
| TxSizeCostPerByte      | string (uint64) | "10"    |
| SigVerifyCostED25519   | string (uint64) | "590"   |
| SigVerifyCostSecp256k1 | string (uint64) | "1000"  |
