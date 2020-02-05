# Submitting a Community-Spend Proposal 
# [under active development]

## Begin with a well-considered proposal
1. Ensure that you have considered your proposal and anticipated questions that the community will likely ask. Once your proposal is on-chain, you will not be able to change it.
2. Post a draft of your proposal on the Cosmos forum, then directly engage key members of the community for feedback. These could be large contributors and high-ranked validators.
3. Target members of the community in a semi-public way before bringing the draft to a full public audience. It's not a matter of hiding the proposal, so much as maintaining a high signal-to-noise ratio. For example, there is a private Telegram group called Cosmos Network VIP. Ask for an invite if you would like to be a contributor to Cosmos.
4. Alert the community to the draft proposals via Twitter, Telegram, and Discord.

## Submission formatting
In practice, the Cosmos Hub community tends to submit a new proposal in these ways:
1. In long form, also known as the "full proposal," which is often a PDF (portable document format) that is hosted and "pinned" with IPFS (InterPlanetary File System).
2. 

### Example: on-chain community-spend proposal
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
