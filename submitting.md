# Submitting a Community-Spend Proposal
## WARNING: under active development. 
## Do not use this information to submit a proposal.

If you have a final draft of your proposal ready to submit, these are the three primary steps to getting your community-spend proposal live on-chain. You may want to push your proposal live on the testnet first.

1. [Hosting the final draft](#hosting-the-full-community-spend-proposal) of your community-spend proposal with IPFS (InterPlanetary File System)
2. [Formatting the governance proposal](#formatting-the-governance-proposal) that will be on-chain
3. [Sending the transaction](#sending-the-transaction-that-submits-your-governance-proposal) that submits your governance proposal on-chain

## Hosting the full community-spend proposal
When you've finalized your community-spend proposal draft, convert it to a PDF file. Upload the PDF to the IPFS network:
1. either by [running an IPFS node and the IPFS software](https://ipfs.io), or
2. using a service such as [https://pinata.cloud](https://pinata.cloud)

Ensure that you "pin" the PDF file so that it continues to be available on the network. You should get a URL like this: https://ipfs.io/ipfs/QmSMGEoY2dfxADPfgoAsJxjjC6hwpSNx1dXAqePiCEMCbY 

Share the URL with others and verify that your file is publicly accessible. 

## Formatting the governance proposal
This is the information that will be stored on-chain as the governance proposal. Most people rely upon network explorers to read this information. There are five (5) components:
1. **Title** - the distinguishing name of the proposal, typically the way the that explorers list proposals
2. **Description** - the body of the proposal that further describes what is being proposed and details surrounding the proposal
3. **Recipient** - the Cosmos Hub (hex-based) address that will receive funding from the Community Pool
4. **Amount** - the amount of funding that the recipient will receive in micro-ATOMs (uatom)
5. **Deposit** - the amount that will be contributed to the deposit (in micro-ATOMs "uatom") from the account submitting the proposal

### Simple example
In this simple example (below), a network explorer will list the governance proposal as "Community Pool Spend." When an observer selects the proposal, they'll see the description. Not all explorers will show the recipient and amount, so ensure that you verify the description aligns with the what the governance proposal is programmed to enact.

The amount is 1000000 uatom. 1,000,000 micro-ATOM is equal to 1 ATOM, so recipient address "cosmos1qgfdn8h6fkh0ekt4n4d2c93c5gz3cv5gce783m" will receive 1 ATOM if this proposal passed.

The deposit 512000000 uatom results in 512 ATOM being used from the proposal submitter's account. There is a minimum deposit required for a proposal to enter the voting period, and anyone may contribute to this deposit within a 14-day period. If the minimum deposit isn't reach before this time, the deposit amounts will be burned. Deposit amounts will also be burned if quorum isn't met in the vote or if the proposal is vetoed.
___
{

  "title": "Community Pool Spend",
  
  "description": "This is the summary of the key information about this proposal. Include the URL to a PDF version of your full proposal.",
  
  "recipient": "cosmos1qgfdn8h6fkh0ekt4n4d2c93c5gz3cv5gce783m",
  
  "amount": [
  
    {
    
      "denom": "uatom",
      
      "amount": "1000000"
      
    }
    
  ],
  
  "deposit": [
  
    {
    
      "denom": "uatom",
      
      "amount": "512000000"
      
    }
    
  ]
  
}
___

## Sending the transaction that submits your governance proposal

```gaiacli tx gov submit-proposal community-pool-spend <proposal.json> --from [key/address]```
