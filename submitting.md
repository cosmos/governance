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
- **title** - the distinguishing name of the proposal, typically the way the that explorers list proposals
- **description** - the body of the proposal that further describes what is being proposed and details surrounding the proposal
- **recipient** - the Cosmos Hub (hex-based) address that will receive funding from the Community Pool
- **amount** - the amount of funding that the recipient will receive in micro-ATOMs (uatom)
- **deposit** - the amount that will be contributed to the deposit (in micro-ATOMs "uatom") from the account submitting the proposal

### Example
{

  "title": "Community Pool Spend",
  
  "description": "This is the summary of the key information about this proposal. Include the URL to a PDF version of your full proposal.",
  
  "recipient": "cosmos1_hex_address",
  
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

## Sending the transaction that submits your governance proposal

```gaiacli tx gov submit-proposal community-pool-spend <proposal.json> --from [key/address]```
