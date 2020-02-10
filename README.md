# Cosmos Hub 3 and the Community Pool
The Cosmos Hub 3 launched with community-spend capabilities on December 11, 2019, effectively unlocking the potential for token-holders to vote to approve spending from the Community Pool. **This wiki is in active development, so please do not rely upon this information yet.** [Discuss its development here](https://forum.cosmos.network/t/gwg-community-spend-best-practices/3240).

### How is the Community Pool funded?
2% of all staking rewards generated (via block rewards & transaction fees) are continually transferred to and accrue within the Community Pool. For example, from Dec 19, 2019 until Jan 20, 2020 (32 days), 28,726 ATOM were generated and added to the pool.

### How can funding for the Community Pool change?
Though the rate of funding is currently fixed at 2% of staking rewards, the effective rate is dependent upon the Cosmos Hub's staking rewards, which can change with inflation and block times.

The current 2% tax rate of funding may be modified with a governance proposal and enacted immediately after the proposal passes.

Currently, funds cannot be sent to the Community Pool, but we should expect this to change with the next upgrade. Read more about this new functionality [here](https://github.com/cosmos/cosmos-sdk/pull/5249). What makes this functionality important?
1. Funded projects that fail to deliver may return funding to Community Pool;
2. Entities may help fund the Community Pool by depositing funds directly to the account.

### What is the balance of the Community Pool?
You may directly query the Cosmos Hub 3 for the balance of the Community Pool:

```gaiacli q distribution community-pool --chain-id cosmoshub-3 --node cosmos-node-1.figment.network:26657```

Alternatively, popular Cosmos explorers such as [Big Dipper](https://cosmos.bigdipper.live) and [Hubble](https://hubble.figment.network/cosmos/chains/cosmoshub-3) display the ongoing Community Pool balance.

### How can funds from the Community Pool be spent?
Funds from the Cosmos Community Pool may be spent via successful governance proposal.

### How should funds from the Community Pool be spent?
We don't know 🤷

The prevailing assumption is that funds should be spent in a way that brings value to the Cosmos Hub. However, there is debate about how to keep the fund sustainable. There is also some debate about who should receive funding. For example, part of the community believes that the funds should only be used for those who need funding most. Other topics of concern include:
- retroactive grants
- price negotiation
- fund disbursal (eg. payments in stages; payments pegged to reduce volitiliy)
- radical overhaul of how the community-spend mechanism functions

We can expect this to take shape as proposals are discussed, accepted, and rejected by the Cosmos Hub community.

### What determines whether or not a community-spend governance proposal passes?
There are four criteria Currently, community-spend proposals operate the same way that signaling proposals and parameter-change proposals operate.

1. A minimum deposit of 512 ATOM is required for the proposal to enter the voting period
   - anyone may contribute to this deposit
   - the deposit must be reached within 14 days
2. A minimum of 40% of the network's voting power (quorum) is required to participate to make the proposal valid
3. A simple majority (greater than 50%) of the participating voting power must back the 'yes' vote 
4. Less than 33.4% of participating voting power votes 'no-with-veto'

The voting period lasts for 14 days, and participants may change their vote at any time before the voting period ends. The votes of validators (and their delegators) of inactive validators will not count. That means that if I delegate to validator that is jailed, tombstoned, or ranks lower than 125 in stake-backing at the time that the voting period ends, I my stake-weight will not count in the vote.

Currently, the criteria for a community-spend proposals is the same as those of signaling and parameter-change proposals.

### How are funds disbursed after a community-spend proposal is passed?
If a community-spend proposal passes successfully, the number of ATOM encoded in the proposal will be transferred from the community pool to the address encoded in the proposal, and this will happen immediately after the voting period ends.
