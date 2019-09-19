---
title: What is Sharding? A Complete Guide
description: Sharding is the division of a hard disk that is treated as a separate unit by operating a system. This partitioning allows the drive to operate as several smaller sections to improve efficiency.
date: 2019-08-30
category: blockchain
heroImage: 
  name: sharding.jpg
  alt: Sharding blockchain database
  bgColor: '#083dc6'
wordCount: 962
---

[[toc]]

## What is Sharding?

Sharding is the division of a [hard disk](https://searchstorage.techtarget.com/definition/hard-disk) that is treated as a separate unit by an operating system. This partitioning allows the drive to operate as several smaller sections to improve efficiency. A disk partition manager enables system administrators to create, resize, delete, and manipulate partitions, while a partition [table](https://whatis.techtarget.com/definition/table) logs its location and size. Each partition appears to the operating system as a distinct logical disk, and the operating system reads the partition table before any other part of the disk. These partitions create "shards" that break up a big database into many, much smaller databases that share nothing and can be spread across multiple servers.

## What Are the Benefits of Sharding?

There are many benefits associated with sharding that are critical to systems, such as blockchain, that need to process millions of bytes of data. Some benefits are:

### Processing Speed Improvements

As the size of a database and volume of transactions increases linearly, the response time for querying the database increases exponentially. This is an extremely relevant problem in blockchain and is the root cause of [scalability issues](https://applicature.com/blog/blockchain-technology/blockchain-scalability) holding it back. Sharding can potentially solve the issue by allowing the number of transactions per second to increase dramatically.

### Lower Costs

The costs of creating and maintaining an extensive database in one place can increase significantly because the database will require high-end computers. In contrast, data shards can be distributed across several servers, making the process much cheaper. Data shards have  comparatively little restrictions as far as hardware and software requirements are concerned.

### Increased Security

A database can have several parts with access limitations to particular parts of the data for specific users. That way, the security and confidentiality of data will be guaranteed and secured.

## How is Sharding Used?

There are many real-world implementations and use cases of sharding. By segmenting a customer database by location, customers of a business, in various parts of a country, would be placed on different servers. This can be very useful to companies, like Netflix, that run billions of gigabytes of data across the world. Cryptocurrencies, such as Zilliqa, are optimizing their blockchains for the scalability issues that have greatly limited the potential of many prominent blockchains like [Ethereum](https://www.ethereum.org/). In [Zilliqa's case](https://www.ethnews.com/zilliqas-sharding-methods-briefly-explained), they are performing two types of sharding:

### 1. Network Sharding

Their network sharding protocol uses Proof-of-Work (PoW) to divide up the task of validating transactions across the network. It does this by choosing and continually updating a directory service committee (DS committee). A DS committee is a group of randomly selected nodes that assign transactions to specific shards and validate blocks of transactions proposed by these shards. Using network sharding, Zilliqa aims to match the transaction processing speeds of Mastercard and Visa. If successful, this will result in lower fees from a system that won't rely on a centralized authority to manage the network. 

### 2. Computational Sharding

This refers to the ability of the network to run DApps at scale. To achieve this, multiple instructions would need to be able to run across the network simultaneously. Computational sharding is done by coordinating the data dependencies between operations and allowing independent operations to be executed by a shard, or even a portion of the nodes in a shard, as soon as the operations have everything they need to run.

## Challenges of Sharding

While data sharding is meant to make things simpler and reduce space on a disk, some highly complicated challenges need to be overcome. Sharding a database can be very complicated, and the resulting shards may be difficult to maintain. Some challenges are:

### Shard Creation

A mechanism needs to be developed to determine which nodes reside in which shard, in a secure way, in order to avoid possible attacks from someone who gains a lot of control over a particular shard.

### Data Availability

If at any given point, a shard goes offline, the state of the system will not be replicated across all shards. Therefore, the network can no longer validate transactions that have a dependency on the offline shard. As a result, the blockchain may become unusable. A solution to this problem is to maintain backup nodes that can help the network troubleshoot and recover from data unavailability. However, those nodes will then have to store the entire state of the system. While this may solve the problem, it would introduce the centralization risks blockchain seeks to eliminate.

### Resiliency of Shards

It is crucial to ensure that shards are not static in their resilience against attacks and failures. The network must accept new nodes and randomly assign them to different shards. In other words, the network must get reshuffled once in a while.

### Transactional Validation

Sharding allows for the potential of bad actors to create double-spend transactions by making additional transactions with the same two inputs, but different output. In such cases, the second transaction would have a different hash and the two transactions may end up in different shards. Each shard will then separately validate the received transaction while being oblivious that the double-spend transaction was validated in the other shard.

### Cross Shard Communication

When a merchant creates a transaction, it is validated on an individual shard. Information about the remaining customer balance then must be shared with his or her shard. If different shards handle two accounts, frequent cross-shard communication and state exchange may be required. Ensuring that cross-shard communication will not outweigh the performance gains from state sharding is still an open problem.