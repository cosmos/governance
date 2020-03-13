# Submitting a Parameter-Change Proposal
## WARNING: This process is in active development and has not been thoroughly tested. Consider discussing this process with the [Cosmos governance working group (GWG)](https://t.me/hubgov) before using it to submit a proposal.

If you have a final draft of your proposal ready to submit, you may want to push your proposal live on the testnet first. These are the three primary steps to getting your parameter-change proposal live on-chain.

1. **Optional** [Hosting supplementary materials](#hosting-supplementary-materials) for your parameter-change proposal with IPFS (InterPlanetary File System)
2. [Formatting the JSON file](#formatting-the-json-file-for-the-governance-proposal) for the governance proposal transaction that will be on-chain
3. [Sending the transaction](#sending-the-transaction-that-submits-your-governance-proposal) that submits your governance proposal on-chain

## Hosting supplementary materials
If you think that the voting community will need more details (eg. modelling, research, etc) about the proposed parameter change(s), draft a document and convert it to a PDF file. Upload the PDF to the IPFS network:
1. either by [running an IPFS node and the IPFS software](https://ipfs.io), or
2. using a service such as [https://pinata.cloud](https://pinata.cloud)

Ensure that you "pin" the PDF file so that it continues to be available on the network. You should get a URL like this: https://ipfs.io/ipfs/QmSMGEoY2dfxADPfgoAsJxjjC6hwpSNx1dXAqePiCEMCbY 

Share the URL with others and verify that your file is publicly accessible.

The reason we use IPFS is that it is a decentralized means of storage, making it resistant to censorship or single points of failure. This increases the likelihood that the file will remain available in the future.

## Formatting the JSON file for the governance proposal
Prior to sending the transaction that submits your proposal on-chain, you must create a JSON file. This file will contain the information that will be stored on-chain as the governance proposal. Begin by creating a new text (.txt) file to enter this information. Use [these best practices](bestpractices.md) as a guide for the contents of your proposal. When you're done, save the file as a .json file. See the examples that follow to help format your proposal.

**Note:** Changes to the [`gov` module](/Governance.md) are different from the other kinds of parameter changes because `gov` has subkeys, [as discussed here](https://github.com/cosmos/cosmos-sdk/issues/5800). Only the `key` part of the JSON file is different for changes to `gov` parameters.

For parameter-change proposals, there are seven (7) components:
1. **Title** - the distinguishing name of the proposal, typically the way the that explorers list proposals
2. **Description** - the body of the proposal that further describes what is being proposed and details surrounding the proposal
3. **Subspace** - the Cosmos Hub module with the parameter that is being changed
4. **Key** - the parameter that will be changed
5. **Value** - the value of the parameter that will be changed by the governance mechanism
6. **Denom** - `uatom` (micro-ATOM) will be the type of asset used as the deposit
7. **Amount** - the amount that will be contributed to the deposit (in micro-ATOMs "uatom") from the account submitting the proposal

Once on-chain, most people will rely upon network explorers to interpret this information with a graphical user interface (GUI).

**Note**: The formatting [may be changed to be more standardized](https://github.com/cosmos/cosmos-sdk/issues/5783) with other types of governance proposals.

### Examples
In this simple example ([below](#testnet-example)), a network explorer will list the governance proposal as "Increase the minimum deposit amount for governance proposals." When a user selects the proposal, they'll see the description. Not all explorers will show the proposed parameter changes, so ensure that you verify that the description aligns with the what the governance proposal is programmed to enact. If the description says that a certain parameter will be increased, it should also be programmed to do that, but it's possible that that's not the case (accidentally or otherwise). A nearly identical proposal [can be found on the gaia-13007 testnet here](https://hubble.figment.network/cosmos/chains/gaia-13007/governance/proposals/30).

You can query the proposal details with the gaiacli command-line interface using this command: `gaiacli q gov proposal 30 --chain-id gaia-13007 --node 45.77.218.219:26657`

You use can also use [Hubble](https://hubble.figment.network/cosmos/chains/gaia-13007/transactions/B5AB56719ADB7117445F6E191E1FCE775135832AFE6C9922B8703AADBC4B13F3?format=json) or gaiacli to query the transaction that I sent to create a similar proposal on-chain in full detail: `gaiacli q tx B5AB56719ADB7117445F6E191E1FCE775135832AFE6C9922B8703AADBC4B13F3 --chain-id gaia-13007 --node 45.77.218.219:26657`

#### Testnet Example: changing a parameter from the `gov` module
```
{
  "title": "Increase the minimum deposit amount for governance proposals",
  "description": "If successful, this parameter-change governance proposal that will change the minimum deposit from 0.1 to 0.2 testnet ATOMs.",
  "changes": [
    {
      "subspace": "gov",
      "key": "depositparams",
      "value": {"mindeposit":"200000umuon"}
    }
  ],
  "deposit": [
    {
      "denom": "umuon",
      "amount": "100000"
    }
  ]
}
```
The deposit `denom` is `uatom` and `amount` is `100000`. Since 1,000,000 micro-ATOM is equal to 1 ATOM, a deposit of 0.1 ATOM will be included with this proposal. The gaia-13007 testnet currently has a 0.1 ATOM minimum deposit, so this will put the proposal directly into the voting period. There is a minimum deposit required for a proposal to enter the voting period, and anyone may contribute to this deposit within a 14-day period. If the minimum deposit isn't reach before this time, the deposit amounts will be burned. Deposit amounts will also be burned if quorum isn't met in the vote or if the proposal is vetoed.

### Mainnet example: 
To date, the Cosmos Hub's parameters have not been changed by a parameter-change governance proposal. This is a hypothetical example of the JSON file that would be used with a command line transaction to create a new proposal. This is an example of a proposal that changes two parameters, and both parameters are from the [`slashing` module](Slashing.md). A single parameter-change governance proposal can reportedly change any number of parameters.

```
{
  "title": "Parameter changes for validator downtime",
  "description": "If passed, this governance proposal will do two things:\n\n1. Increase the slashing penalty for downtime from 0.01% to 0.50%\n2. Decrease the window \n\nIf this proposal passes, validators must sign at least 5% of 5,000 blocks, which is 250 blocks. That means that a validator that misses 4,750 consecutive blocks will be considered by the system to have committed a liveness violation, where previously 9,500 consecutive blocks would need to have been missed to violate these system rules. Assuming 7s block times, validators offline for approximately 9.25 consecutive hours (instead of ~18.5 hours) will be slashed 0.5% (instead of 0.01%).",
  "changes": [
    {
      "subspace": "slashing",
      "key": "SlashFractionDowntime",
      "value": 0.005000000000000000
    }
{
      "subspace": "slashing",
      "key": "SignedBlocksWindow",
      "value": 5000
    }
  ],
  "deposit": [
    {
      "denom": "uatom",
      "amount": "512000000"
    }
  ]
}
```
**Note:** in the JSON file, `\n` creates a new line.

It's worth noting that this example proposal doesn't provide reasoning/justification for these changes. Consider consulting the [parameter-change best practices documentation](submitting.md) for guidance on the contents of a parameter-change proposal.

## Sending the transaction that submits your governance proposal
This is the basic command for using gaiacli (the command-line interface) to submit your proposal on-chain:
```gaiacli tx gov submit-proposal param-change <proposal.json> --from [key/address]```

This is the complete command that I could use to submit a **testnet** parameter-change proposal right now:
`gaiacli tx gov submit-proposal param-change param.json --from gavin --chain-id gaia-13007 --node 45.77.218.219:26657`

This is the complete command that I could use to submit a **mainnet** parameter-change proposal right now:
`gaiacli tx gov submit-proposal param-change param.json --from gavin --gas 500000 --fees 7500uatom --chain-id cosmoshub-3 --node cosmos-node-1.figment.network:26657`

1. `gaiacli` is the command-line interface client that is used to send transactions and query the Cosmos Hub
2. `tx gov submit-proposal param-change` indicates that the transaction is submitting a parameter-change proposal
3. `--from gavin` is the account key that pays the transaction fee and deposit amount
4. `--gas 500000` is the maximum amount of gas permitted to be used to process the transaction
   - the more content there is in the description of your proposal, the more gas your transaction will consume
   - if the number isn't high enough and there isn't enough gas to process your transaction, the transaction will fail
   - the transaction will only use the amount of gas needed to be processed
5. `--fees` is flat rate incentive for a validator to process your transaction
   - the network still accepts zero fees, but many nodes will not transmit your transaction to the network without a minimum fee
   - many nodes (including the Figment node) use a minimum fee to disincentivize transaction spamming
   - 7500uatom is equal to 0.0075 ATOM
6. `--chain-id cosmoshub-3` is Cosmos Hub 3
   - the testnet chain ID is [gaia-13007](https://hubble.figment.network/cosmos/chains/gaia-13007)
7. `--node cosmos-node-1.figment.network:26657` is using Figment Networks' node to send the transaction to the Cosmos Hub 3 network

**Note**: be careful what you use for `--fees`. A mistake here could result in spending hundreds or thousands of ATOMs accidentally, which cannot be recovered.

### Verifying your transaction
After posting your transaction, your command line interface will provide you with the transaction's hash, which you can either query using gaiacli or search the hash with [Hubble](https://hubble.figment.network/cosmos/chains/cosmoshub-3/transactions/B8E2662DE82413F03919712B18F7B23AF00B50DAEB499DAD8C436514640EFC79). The hash should look something like this: `B8E2662DE82413F03919712B18F7B23AF00B50DAEB499DAD8C436514640EFC79`

You can see whether or not your transaction was successful with Hubble:
![Verify tx with Hubble](https://github.com/gavinly/CosmosCommunitySpend/blob/master/verify%20tx.png?raw=true)

### Troubleshooting a failed transaction
There are a number of reasons why a transaction may fail.
1. Running out of gas - The more data there is in a transaction, the more gas it will need to be processed. If you don't specify enough gas, the transaction will fail.

2. Incorrect denomination - You may have specified an amount in 'utom' or 'atom' instead of 'uatom', causing the transaction to fail.

If you encounter a problem, try to troubleshoot it first, and then ask for help on All in Bits' Cosmos forum: [https://forum.cosmos.network/c/governance](https://forum.cosmos.network/c/governance). We can learn from failed attempts and use them to improve upon this guide.

### Submitting your proposal to the testnet
You may want to submit your proposal to the testnet chain before the mainnet for a number of reasons:
1. To see what the proposal description will look like
2. To signal that your proposal is about to go live on the mainnet
3. To share what the proposal will look like in advance with stakeholders
4. To test the functionality of the governance features

Submitting your proposal to the testnet increases the likelihood that you will discover a flaw before deploying your proposal on mainnet. A few things to keep in mind:
- you'll need testnet tokens for your proposal (ask around for a faucet)
- the parameters for testnet proposals are different (eg. voting period timing, deposit amount, deposit denomination)
- the deposit denomination is in 'muon' instead of 'uatom'
