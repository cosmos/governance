# Submitting a Community-Spend Proposal 
# [under active development]

## Begin with a well-considered proposal
1. Ensure that you have considered your proposal and anticipated questions that the community will likely ask. Once your proposal is on-chain, you will not be able to change it.
2. Post a draft of your proposal as a topic the 'governance' category of the [Cosmos forum](https://forum.cosmos.network/c/governance), then directly engage key members of the community for feedback. These could be large contributors, those likely to be most impacted by the proposal, and entities with high stake-backing (eg. high-ranked validators; large stakers).
3. Target members of the community in a semi-public way before bringing the draft to a full public audience. The burden of public scrutiny in a semi-anonymized environment (eg. Twitter) can be stressful and overwhelming. Solicit opinions in places with people who established reputations first. For example, there is a private Telegram group called Cosmos Network VIP (ask for an invite if you are or would like to be a Cosmos contributor). Let people in [Discord community](https://discord.gg/cVwYX9u) know about your draft proposal.
4. Alert the community to the draft proposal via [Twitter](https://twitter.com/CosmosGov) and [Telegram](https://t.me/cosmosproject).

## Elements of a Community-Spend Proposal
1. Summary - the key details 
   - who is submitting the proposal
   - the amount of the proposal
   - the items being delivered deliverable
   - the date for which the deliverables will be met
   - a short summary of the history (what compelled this proposal), solution that's being presented, and future expectations
2. Applicant(s) - the profile of the person(s)/entity making the proposal
   - who you are and your involvement in Cosmos and/or blockchain
   - your organization/business (if applicable)
   - past work you've done
   - some sort of proof of who you are eg. Keybase
3. Problem - generally what you're solving and/or opportunity you're addressing
   - past, present (and possibly a prediction of the future without this work being done)
4. Solution - generally how you're proposing to deliver the solution and/or value
   - your plan to fix the problem or deliver the value
   - the beneficiaries of this plan (ie. who will your plan impact and how?)
   - your reasons for selecting this plan
   - your motivation for delivering this solution/value
5. Deliverables and timeline - the specifics of what you're delivering and how, and what to expect
   - what are the specific deliverables? (be detailed)
   - when will each of these be delivered?
   - will there be a date at which the project will be considered failed if the deliverables have not been met?
   - how will each of these be delivered?
   - what will happen if you do not deliver on time?
     - what is the deadline for the project to be considered failed?
     - do you have a plan to return the funds?
   - how will you be accountable to the Cosmos Hub stakeholders?
     - how will you communicate updates and how often?
     - how can the community observe your progress?
     - how can the community provide feedback?
   - how should the quality of deliverables be assessed? eg. metrics
6. Relationships and disclosures
   - have you received or applied for grants or funding? for similar work? eg. from the Interchain Foundation
   - how will you and/or your organization benefit?
   - do you see this work continuing in the future and is there a plan?
   - what are the risks involved with this work?
   - do you have conflicts of interest to declare?


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
