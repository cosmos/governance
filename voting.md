# The Proposal Process & Governance Mechanism

## The Proposal Process: Two Periods
### 1. Deposit Period
The deposit period lasts either 14 days or until the proposal deposit totals 512 ATOMs, whichever happens first.

#### Deposits
Prior to a governance proposal entering the voting period (ie. for the proposal to be voted upon), there must be at least a minimum number of ATOMs deposited. Anyone may contribute to this deposit. Deposits of passed and failed proposals are returned to the contributors.

#### Burned deposits
Deposits are burned when proposals:
1. **Expire** - deposits will be burned if the deposit period ends before reaching the minimum deposit (512 ATOM)
2. **Fail** to reach quorum - deposits will be burned for proposals that do not reach quorum ie. 40% of all staked ATOM must vote
3. **Are vetoed** - deposits for proposals with 33.4% of voting power backing the 'no-with-veto' option are also burned

### 2. Voting Period
The voting period is a currently a fixed 14-day period. During the voting period, participants may vote 'yes', 'no', 'abstain', and 'no-with-veto'. Voters may change their vote at any time before the voting period ends.

## What determines whether or not a governance proposal passes?
There are four criteria:

1. A minimum deposit of 512 ATOM is required for the proposal to enter the voting period
   - anyone may contribute to this deposit
   - the deposit must be reached within 14 days (this is the deposit period)
2. A minimum of 40% of the network's voting power (quorum) is required to participate to make the proposal valid
3. A simple majority (greater than 50%) of the participating voting power must back the 'yes' vote during the 14-day voting period
4. Less than 33.4% of participating voting power votes 'no-with-veto'

Currently, the criteria for submitting and passing/failing a community-spend proposal is the same as the criteria for signaling (text-based) proposals and parameter-change proposals.

### How is voting tallied?
Voting power is determined by stake weight at the end of the 14-day voting period and is proportional to the number of total ATOMs participating in the vote. Only bonded ATOMs count towards the voting power for a governance proposal.

Liquid ATOMs will not count toward a vote or quorum. Inactive validators can cast a vote, but their voting power (including the backing of their delegators) will not count toward the vote if they are not in the active set when the voting period ends. That means that if I delegate to a validator that is either jailed, tombstoned, or ranked lower than 125 in stake-backing at the time that the voting period ends, my stake-weight will not count in the vote.

Though a simple majority 'yes' vote (ie. 50% of participating voting power) is required for a governance proposal vote to pass, a 'no-with-veto' vote of 33.4% of participating voting power or greater can override this outcome and cause the proposal to fail. This enables a minority group representing greater than 1/3 of voting power to fail a proposal that would otherwise pass.

### How is quorum determined?

Voting power, whether backing a vote of 'yes', 'abstain', 'no', or 'no-with-veto', counts toward quorum. Quorum is required for the outcome of a governance proposal vote to be considered valid and for deposit contributors to recover their deposit amounts. If the proposal vote does not reach quorum (ie. 40% of the network's voting power is participating) within 14 days, any deposit amounts will be burned and the proposal outcome will not be considered to be valid.
