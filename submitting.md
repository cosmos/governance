# Submitting a Community-spend Proposal
## WARNING: under active development. 
## Do not use this information to submit a proposal.

## Submission formatting
In practice, the Cosmos Hub community tends to submit a new proposal in these ways:
1. In long form, also known as the "full proposal," which is often a PDF (portable document format) that is hosted and "pinned" with IPFS (InterPlanetary File System).
2. 

### Example
{

  "title": "Community Pool Spend",
  
  "description": "This is the summary of the key information about this proposal",
  
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
