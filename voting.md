#The Voting Process & Governance Mechanism

## What determines whether or not a governance proposal passes?
There are four criteria:

1. A minimum deposit of 512 ATOM is required for the proposal to enter the voting period
   - anyone may contribute to this deposit
   - the deposit must be reached within 14 days
2. A minimum of 40% of the network's voting power (quorum) is required to participate to make the proposal valid
3. A simple majority (greater than 50%) of the participating voting power must back the 'yes' vote 
4. Less than 33.4% of participating voting power votes 'no-with-veto'

Currently, the criteria for a community-spend proposals is the same as those of signaling and parameter-change proposals.

The voting period lasts for 14 days, and participants may change their vote at any time before the voting period ends. The votes of validators (and their delegators) of inactive validators will not count. That means that if I delegate to validator that is jailed, tombstoned, or ranks lower than 125 in stake-backing at the time that the voting period ends, my stake-weight will not count in the vote.
