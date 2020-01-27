# Cosmos Hub 3 and the Community Pool
The Cosmos Hub 3 launched with community-spend capabilities on December 11, 2019, effectively unlocking the potential for token-holders to vote to approve spending from the Community Pool.

### What is the balance of the Community Pool?
You may directly query the Cosmos Hub 3 for the balance of the Community Pool:

```gaiacli q distribution community-pool --chain-id cosmoshub-3 --node cosmos-node-1.figment.network:26657```

Alternatively, popular Cosmos explorers such as [Big Dipper](https://cosmos.bigdipper.live) and [Hubble](https://hubble.figment.network/cosmos/chains/cosmoshub-3) display the ongoing Community Pool balance.

### How is the Community Pool funded?
2% of all staking rewards generated (via block rewards & transaction fees) are continually transferred to and accrue within the Community Pool.
For example, from Dec 19, 2019 until Jan 20, 2020 (32 days), 28,726 ATOM were generated and added to the pool. Though the rate of funding is currently fixed at 2% of staking rewards, the effective rate is dependent upon the Cosmos Hub's staking rewards, which can change with inflation.

### How is the Community Pool spent?
Funds from the Cosmos Community Pool may be spent via successful governance proposal. 

Currently, these proposals operate the same way signaling proposals and parameter change proposals operate: a minimum
deposit of 512 ATOM is required for the proposal to enter the voting period, and the proposal has a 14-day lifespan. A proposal requires a minimum of 40% voting power in order to meet quorum, followed by a simple majority of the participating voting power backing the 'yes' option 
ie. the 'yes' vote must exceed 50%.

### How are funds disbursed?
If a community-spend proposal passes successfully, the number of ATOM encoded in the proposal will be transferred from the community pool to the address encoded in the proposal, and this will happen immediately after the voting period ends.
