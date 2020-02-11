# Submitting a Community-Spend Proposal
## WARNING: under active development. 
## Do not use this information to submit a proposal.

If you have a final draft of your proposal ready to submit, these are the three primary steps to getting your community-spend proposal live on-chain. Note that you can push your proposal live on the testnet first.

1. [Hosting the final draft](#hosting-the-full-community-spend-proposal) of your community-spend proposal with IPFS (InterPlanetary File System)
2. [Formatting the governance proposal](#formatting-the-governance-proposal) that will be on-chain
3. [Sending the transaction](#sending-the-transaction-that-submits-your-governance-proposal) that submits your governance proposal on-chain

## Hosting the full community-spend proposal

## Formatting the governance proposal

## Sending the transaction that submits your governance proposal

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

# Final step: transaction command for submitting the proposal on-chain
```gaiacli tx gov submit-proposal community-pool-spend <proposal.json> --from [key/address]```
