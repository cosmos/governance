# Cosmos Stargate Hub Upgrade Proposal 2: Chevrons Locked. Time to Upgrade

![Stargate Upgrade banner graphic](https://siasky.net/AADU5rg0GvapbrICLUk7SxZeMDrKo5Q8oLrpOwl71wXhnQ)

## by Iqlusion

Jan 11, 2021

## Key Results

------------
If passed, this governance proposal would commit the Cosmos Hub to halting the `cosmoshub-3` at 06:00 UTC on Jan 28th exporting the state and starting `cosmoshub-4` based on gaia 3.0.

## Context

------------

In proposal 27, Iqlusion proposed a comprehensive process to translate the unprecented surface area of this upgrade. We called this process Stargate.

Iqlusion is pleased to report that the Stargate Process has been successfully executed. We believe the chevrons are unlocked and that Hub can safely step through the Stargate.

After the success of the community approval of the first Stargate Upgrade proposal, we now follow-up with the second Stargate proposal for the Cosmos Hub that will outline the results of the first proposal and the process for upgrading the Hub.

## The Stargate Plan

------------
The purpose of the Stargate effort was to ensure that Cosmos can fulfill the vision of an Internet of Blockchains in 2020 while mitigating the risks outlined above. It was also an attempt to create a process for complex future on-chain upgrades on the Cosmos Hub. That included the following steps:

1. Run the Stargate Testnet and use this as an integration testing target with widest possible ecosystem participation to help confirm the readiness of the release software.

2. Engage and support critical partners during the integration process so that partners are able to actively participate in the testing process and provide insights into their success with the upgrade.

3. Dedicate significant resources in terms of full time human resources and documentation efforts to ensure that everyone integrated into the Cosmos Hub can self-certify as Stargate-ready.

4. Report back to the Hub on the success of the integration process.

   - We expect that the primary responsibility of the Cosmos Hub is to assess whether we have mitigated the above risks sufficiently.

   - Provide a written report of the entire Stargate effort to enable Hub governance to make an informed decision.

5. At conclusion, we will indicate why we have confidence that an upgrade won't be disruptive to the Hub’s ecosystem.

## Stargate Plan Results

------------

### 1. Ecoystem Participation

The results of ecosystem participation and engagement are available in our [Stargate Ecosystem Readiness Report](https://github.com/cosmosdevs/stargate/blob/master/ecosystem_readiness.md). We list on this page ecosystem partners such as Validators that provided their validator public keys as well as infrastructure partners that confirmed their integration testing the Stargate testnet tags. Validators, exchanges, and wallets have made up the most responsive of their results completing integration testing of the stargate releases. We anticpate that all actors in the ecosystem are aware and ready to respond to the new Cosmos Hub features. Integration partners have helped find regression in the legacy amino compatibility layer and those have been resolved.

The Cosmos SDK, Tendermint, AiB, and IBC teams worked tirelessly to deliver the most robust software feature set that would make up the Cosmos Stargate release. Their review of their efforts are documented in their post ["How Seven Teams Collaborated To Deliver The Biggest Software Upgrade In The Cosmos Universe"](https://blog.cosmos.network/how-seven-teams-collaborated-to-deliver-the-biggest-software-upgrade-in-the-cosmos-universe-2288f4f9afe8).

Integration testing continued through the release of the Cosmos SDK v0.40.0-rc2 that makes up the Cosmos-hub Stargate testnet tag for a simulated upgrade of the CosmosHub-3 to CosmosHub-4. Also, the AiB team continues to deliver simulation testing of Cosmos Stargate to ensure that any possible chain bug issues can be detected and documented.

We are confident that we have and continue to achieve increased ecosystem engagement with the Stargate testnet.

### 2. Critical Partner Support

We delivered critical partner support to leading ATOM exchanges. Out of the exchange support efforts, we documented the [IBC Readiness Matrix](https://github.com/cosmosdevs/stargate/blob/master/ibc_readiness_matrix.md) that outlines the levels of readiness that exchanges may select as they upgrade to Cosmos Stargate.

We also completed and delivered a completed legacy Amino Audit, [AminoRest & You](https://github.com/cosmosdevs/stargate/blob/master/audit.md). The core finding of this audit was that changes to the underlying structs result in an interface that is close to the prior version allowing legacy queries to return valid data.

### 3. Documentation and Self-Certification

Documentation was a success for the Cosmos Stargate effort. The upgrades with the most breaking changes such as legacy Amino have a complete audit with documentation on exceptions for blockchain API interfaces.

Most exchanges and wallets have taken self-certification on directly. Our team continues to provide real-time support on multiple partner slack channels and on the Cosmos [#stargate Discord](https://discord.gg/W8trcGV) channel.

### Cosmos Stargate Integration Success

Cosmos Stargate integration success with exchanges and wallet providers reflects the quality of the code developed by the various Cosmos teams.

## Prop 29

This upgrade also implements the fund recovery procedure defined in proposal 29. The code is [here](https://github.com/cosmos/gaia/blob/main/app/prop29.go). As requested during the discussion of the governance proposal, the migration and fund recovery procedure verifies all signatures. This code was tested during the cosmoshub-3 simulated upgrade testnet.ƒ

## Stargate Upgrade Steps

------------
The upgrade steps for the simulated upgrade of the current Cosmoshub mainnet to Cosmos Stargate includes the following steps:

This section is with the current `gaia 2.0.*` implementation.

  1. Validators should set their `gaia` with a halt time of `1611813600`ie. 06:00 UTC on Jan 28th in Unix time.

  2. Validators should then export the current cosmos state with `gaiad export > cosmoshub-3-export.json`

  3. Validators should determine the height of the last block.

  4. Validators should back up their `.gaiad` directory.

This section is with the upgrade `gaia 3.0.*` implemenataion.

  1. Validators should then migrate the exported genesis state. `gaiad migrate cosmoshub-3-export.json --chain-id=cosmoshub-4 --initial-height [last_cosmoshub-3_block+1] > genesis.json`
  2. Validators should delete their `~/.gaiad` directory and create a new one with `gaiad init [name]` and then edit their configuration files.
  3. Validators should then start `cosmoshub-4` with `gaiad start`. Automated audits of the genesis state can take 30-120 min using the crisis module. This can be disabled by `gaiad start --x-crisis-skip-assert-invariants`.

Validators should expect that at least 16GB of RAM needs to be provisioned to process block 1 on cosmoshub-4.

## Time of the Upgrade

------------
We propose scheduling the Cosmoshub-3 to Cosmoshub-4 simulated upgrade for Thursday Jan 28th, 2021 at 0600 UTC

- West Coast USA: 10 PM on Jan 27
- East Coast USA: 1 AM on Jan 28
- Central Europe: 7 AM on Jan 28
- Seoul: 5 PM on Jan 28

## The git commit of Gaia that we are upgrading to

------------
`d974b27a8caf8cad3b06fbe4678871e4b0b69a51`

## What we're doing while voting is happening

------------

We expect that integration partners will be motivated to finish their preperations for the upgrade during the period when the governance proposal is running.

A testnet with the final version of Gaia 3.0 will be running to assist with integrations.

[Stargate Ecosystem Readiness Report](https://github.com/cosmosdevs/stargate/blob/master/ecosystem_readiness.md) is living document. We will be updating this document as we get reports of competed end to end testing. We expect a hard deadline to be movtivating.

## What is the upgrade abort process

------------

There are multiple circumstances where the proposal should be abandoned even if it passes:

1. A critical vulnerability may be found in the software. If the developement teams change their reccomended version of gaia, the validator set should implicitly abandon this upgrade procedure. A future proposal will be made to the Hub to upgrade to the new target commit.

2. The migration process fails could fail to produce a valid cosmoshub-4 genesis file. In this case, the validator set should restart cosmoshub-3 and a future governance proposal will be done to initiate another upgrade.