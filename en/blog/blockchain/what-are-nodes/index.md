---
title: 'Blockchain Nodes: What You Need to Know'
description: 'Nodes are the supporting foundation of blockchains and cryptocurrencies like Bitcoin. They are what facilitates a functioning network and are operated by participants from all over the world.' 
date: 2019-11-12
heroImage: 
  name: what-are-nodes.png
  alt: blockchain node
  bgColor: '#e8e9ed'
---

[[toc]]

Nodes are the supporting foundation of blockchains and cryptocurrencies like Bitcoin. They facilitate a functioning network by participants from all over the world. Most nodes can be run on any internet-enabled device, such as a smartphone or laptop. Since nodes of a particular blockchain utilize the same consensus mechanism, they group transactions they validate into blocks— hence the name blockchain. Since nodes operate on a decentralized consensus mechanism, any nodes that go rogue and attempt to destabilize the blockchain are quickly removed from the network.

## How do Nodes Support a Network?

Nodes function like the cells of a network. Just like cells in a human body keeps a full copy of a person’s DNA, certain types of nodes maintain full copies of the entire ledger of a particular blockchain. The fact that various nodes in a network each keep a copy of all network activity is why blockchain is known as a distributed ledger technology.

In a **Proof-of-Stake (PoS)** system, nodes process and validate transactions. Owners of the nodes that support the network collect a portion of the transaction fees as a reward in the form of the particular cryptocurrency which network they support.

In a **Proof-of-Work (PoW)** system, electricity and expensive mining equipment are needed in order for miners to allocate the required computing power to support the network. Although all nodes on a network are equal, different nodes can perform various functions. While some are used to store copies of a blockchain’s ledger, others can be used to process transactions, etc.

## What Are the Different Types of Nodes

In any blockchain various types of nodes perform different functions. Since nodes run on computer networks, they can be decentralized, censorship-resistant, and work on a peer-to-peer basis. Just like a body has different cells for different functions, different nodes are required to carry out various functions in a network.

Full Nodes: These are essential in a cryptocurrency’s network. They add, process, validate, and verify blocks and transactions, ensuring that they comply with the protocol. Most importantly, they also place a full copy of a blockchain’s ledger into every new block. These nodes are common in protocols like that of Bitcoin and need special software and technical specifications to run. However, unlike mining nodes, they can be run by anyone and do not require expensive mining rigs or other overhead costs to run. However, they also do not reap mining rewards. Nevertheless, they are critical to network security and protection from attacks and network hacks. There are currently over 10,000 Bitcoin nodes.

### Authority Nodes

Like full nodes, authority nodes validate and create blocks while transmitting the data to all network participants. The amount and designation of these nodes are voted on by network developers. Those who do not get picked, end up running light nodes that rely on data from authority and full nodes to operate.

### Listening Nodes

A publicly seen node that can speak with all other nodes on the network. They tend to act as lines of community and data repositories as they can facilitate communication with any node on the network. Since they are the chief communication officers of a network, they need to be online twenty-four hours a day and are more demanding from an energy and computing power perspective.

### Miner Nodes

These are nodes that are typically spoken about when discussing the Proof-of-Work model of Bitcoin. They require the most specialized hardware and upfront cost and are charged with maintaining the supply of a cryptocurrency. Depending on the resources of a miner and mining difficulty, they may choose to mine on their own or join a mining pool, combining hash power for greater mining rewards.

### **Masternodes**

Unlike full nodes or staking nodes, masternodes are unable to add blocks to a chain. Masternodes primarily serve record keeping and validation functions in a Proof-of-Stake blockchain and have the power to reject a rogue block. Masternodes host and maintain the entire blockchain, thus while unable to create blocks, they have voting and governance power. They can also send transactions publicly or privately. While running a masternode requires some software on a VPS, a 24/7 internet connection a sizeable dollar amount of a stake, unlike mining nodes, they do not require expensive equipment.

### **Staking Nodes**

These nodes are common within coins that utilize the Proof-of-Stake (PoS) consensus mechanism. Each staking node is composed of a stake. A stake is a collateralized sum of a particular cryptocurrency that a network participant locks up to support the network. The node conducts all transaction processing, validation, and activities. It is important to note that since PoS coins do not have mining nodes, operators of staking nodes are rewarded transaction fees for supporting the network.

### Lightning Nodes

Falling somewhere in the middle between light nodes and full nodes, lightning nodes connect a blockchain to outside users. In the case of Bitcoin, lightning nodes are used to reduce transaction time for a fraction of the fee. By opening separate payment channels, called side chains, these nodes batch a certain amount of transactions before broadcasting them to the network. This lightens the burden on the original blockchain since it no longer has to confirm every single transaction and is the fundamental concept behind [Bitcoin’s lightning network.](https://cointelegraph.com/lightning-network-101/what-is-lightning-network-and-how-it-works)

### **Simplified Payment Verification Clients (SPV)**

These utilize a network, but do not keep copies of the distributed ledger, nor act as validators. They are readers of blockchains that one can use to find a particular network transaction without having to download the entire ledger. For this reason, SPVs are primarily used by crypto wallets.
