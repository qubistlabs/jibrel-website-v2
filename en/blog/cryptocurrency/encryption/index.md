---
title: 'What are Private Key & Public Key Encryption?'
description: 'While there are many different ways to secure data, encryption allows for data to be decrypted and encrypted with one long "key" or password.'
date: 2020-01-23
heroImage:
  name: encryption.png
  alt: Private key public key encryption
  bgColor: '#E7E9EE'
---

[[toc]]

Private key and public key encryption of blockchain are some of the most secure aspects of blockchain technology. While there are many different ways to secure data, encryption allows for data to be decrypted and encrypted with one long "key" or password. While this method is very secure, private key management, particularly in cases of loss or theft, can be risky. Users that lose their private keys lose access to their funds and have no third party to blame or help them out. Millions of dollars worth of Bitcoin are locked in wallets that can never be accessed for this reason. There are many aspects and implications of private key and public key encryption for blockchain. We will discuss them here.

## What is Private Key Encryption?

A private key is issued to a user upon the inception of an encrypted account. This type of encryption is typically used to protect and access data storage, cryptocurrency wallets, etc. Encryption relies on ciphers (algorithms) that convert information into unreadable data that requires a unique key to put back together or decrypt. The decryption key functions like a password that unlocks the underlying information. While encryption is a term associated with new internet-based technologies like blockchain, it has been around for hundreds of years. In ancient times, paper-based forms of encryption were used to transfer undecipherable messages in times of war. Yet in the digital world of today, encryption is used to protect many different types of data such as Wifi passwords, websites, and blockchain wallets.

## What is Public Key Encryption?

A public key is available to multiple parties and is usually stored in a directory. Public key encryption utilizes a private key and a public key. A public key is distributed among permissioned users, while the originator keeps the private key. Public key encryption outside of blockchain and cryptocurrency can easily be seen in industries such as eCommerce. For example, online purchases are made using an SSL (Secure Socket Layer), which encrypts the shopping cart to check out web session between the customer and an online retailer.

## What are Digital Signatures?

Digital signatures, also known as digital certificates, verify the origination of a transaction or message. Signatures are created using a type of hash (a one-way hash) that a private key will then encrypt. If the data is altered in any way, it will return a different hash value. Thus, this allows for greater data integrity as the signer's public key is the only thing that can unlock the hash. If a match is established, the data has not been altered. Consequently, this also protects from bad actors stealing one's identity and falsely signing documents on another's behalf. A victim of such an event could more easily prove that it wasn't them that signed a contract or message.

## How to Send and Receive?

When sending a message or transaction between two parties, a digital signature ensures privacy and identity protection. To do so, the sender uses a private key to encrypt their signature. To send encrypted messages or transactions, the sender needs to use the receiver's public key as well as their private key for encryption of the digital signature. The receiver then decrypts the sender's message using a public key. Once the signature is verified, the transaction is processed, and the balance is recorded.

## What is Asymmetric Cryptography?

Asymmetric cryptography utilizes, both, private and public keys for data encryption. The term "asymmetric" is used because although public and private keys are produced as a pair of passwords composed of large numbers, they are not the same. They complement one another as one key locks and sends a message, while the other unlocks and reads it. Protocols like [S/MIME](https://whatis.techtarget.com/definition/S-MIME-Secure-Multi-Purpose-Internet-Mail-Extensions) and [OpenPGP](https://whatis.techtarget.com/definition/OpenPGP), along with software such as web browsers, rely on asymmetric cryptography.

### RSA (Rivest-Shamir-Adleman):

This is the most widespread asymmetric algorithm. It is most commonly used by web browsers utilizing [SSL](https://searchsecurity.techtarget.com/definition/Secure-Sockets-Layer-SSL)/[TLS](https://searchsecurity.techtarget.com/definition/Transport-Layer-Security-TLS) protocols. The security of RSA comes from factoring large prime numbers, which creates a complicated problem to compute. While the multiplication of such a number is not difficult in itself, finding the original numbers embedded in the private key is. While the usual 1024 / 2048 bit encryption is most common, that may soon need to change. Advancements in quantum computing are leading the way for the creation of systems that command enough computing power to hack this type of encryption.

### ECC (Elliptic Curve Cryptography)

ECC (Elliptic Curve Cryptography): </h3> An alternative to RSA, ECC utilizes a public key system to generate cryptographic keys according to the properties of elliptic curve theory. This method attempts to create mini cryptographic keys that are faster than those in the RSA model. Hacking this algorithm would require the solution to the elliptic curve logarithm, which seems to be a feat far harder than what is used by RSA. Thus, ECC keys can be shorter than RSA keys, while being as (if not more) secure.
