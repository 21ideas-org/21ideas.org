---
title: "Digital Contracts"
h1: "Discovering Bitcoin Part 6: Digital Contracts"
cover: /img/sb-346.jpg
description: "In the sixth installment of Giacomo Zucco’s “Discovering Bitcoin” series, he explores concepts of proving ownership, smart contracts and CoinJoins."
url: discovering-bitcoin/digital-contracts
date: 2019-09-21
bookFlatSection: false
weight: 7
---

{{< details "Contents" "..." >}}
1. [Introduction](/en/discovering-bitcoin/intro)
2. [Part 1: About Time](/en/discovering-bitcoin/about-time)
3. [Part 2: About People](/en/discovering-bitcoin/about-people)
4. [Part 3: Introducing Money](/en/discovering-bitcoin/introducing-money)
5. [Part 4: A Wrong Turn (New Plan Needed)!](/en/discovering-bitcoin/a-wrong-turn-new-plan-needed)
6. [Part 5: Digital Scarcity](/en/discovering-bitcoin/digital-scarcity)
7. [Part 6: Digital Contracts](/en/discovering-bitcoin/digital-contracts)
8. [Part 7: The Missing Pieces](/en/discovering-bitcoin/the-missing-pieces)
{{< /details >}}

In the sixth installment of Giacomo Zucco’s “Discovering Bitcoin” series, he explores concepts of proving ownership, smart contracts and CoinJoins.

{{< hint btc >}}
This article by [Giacomo Zucco](https://twitter.com/giacomozucco) was first published in [Bitcoin Magazine](https://bitcoinmagazine.com/culture/discovering-bitcoin-part-6-digital-contracts).

[Contribute](/contribute/).
{{< /hint>}}

In Part 6 of this “Discovering Bitcoin” series, we will build on the idea of using digital puzzles as a way to reproduce scarcity, and on the importance of a supply-control mechanism to grant some hardness to digital money, to explore concepts of proving ownership through signatures and scripts, and the technique known as CoinJoin.

## Proving Ownership: Signatures

Our [Plan ₿](/en/discovering-bitcoin/intro) for money brings us, [for the second time](/en/discovering-bitcoin/about-people), to focus on the topic of people and the question “Who?”

You established [the conditions for the issuance of new sats](/en/discovering-bitcoin/digital-scarcity), but what about their transfer? Who is authorized to change the data in the shared balance sheet, transferring ownership?

If there was a central authority in charge of reassigning sats, following instructions by current owners (maybe logged in to the system with the classical username-and-password approach, like in [your previous e-gold experiment](/en/discovering-bitcoin/a-wrong-turn-new-plan-needed)), there would be a Mallory-vulnerable single point of failure again: Why then even bother moving from physical gold to PoW-based “digital scarcity”? If, on the other hand, each user had an equal right to reassign ownership, then your system could not work at all: Everybody would be encouraged to continuously assign other people’s sats to themselves. You need some kind of consistent authority-defining protocol, which everybody could independently check.

The solution is a cryptographic technique called a “digital signature.” It works like this: First, Alice chooses a random number called a “private key,” which she will keep absolutely secret. Then, she passes this number through a special mathematical function, easy to apply in one direction but practically impossible to reverse. The result is another number called a “public key,” which Alice doesn’t keep secret at all: Instead, she makes sure that Bob gets to know it. Finally, she passes the private key and the message through a second function, again difficult to reverse, which results in a very big number called a “signature.” A third and last mathematical function can be applied by Bob to the message, the signature and Alice’s public key, resulting in a positive or negative verification. If the result is positive, he can be sure that Alice authorized that message (“authentication”), that she will not be able to later deny that authorization (“non-repudiation”) and that the message was not altered in transit (“integrity”).

{{% image "/img/sb-347-en.webp" /%}}

In a way, it’s similar to handwritten signatures (thus the name), which are easy for everybody to check against some public sample, but difficult to reproduce without being the owner of the “correct hand.” Or to wax seals: easy for everybody to check against a public seal registry, but difficult to reproduce without the correct wax stencil.

So, you change your protocol in order to [make fractions of proofs of work independently reusable](https://nakamotoinstitute.org/finney/rpow/) via digital signatures. The first model you implement is trivial: Each user independently generates a private key and creates a public “account,” labeled with the corresponding public key. When users want to transfer ownership, they create a message including their account, the receiving account and the amount of sats they want to transfer. Then, they digitally sign and broadcast the message, which everybody can verify.

Interestingly enough, a similar scheme can be used by many renowned (yet possibly pseudonymous) developers to sign different versions of your software so that they can freely change, improve, fix, update, audit and review it, and any final user of your system can independently verify said signatures before running their preferred version, leveraging a network of minimized and fragmented trust, without a need for a single authority to centrally distribute the software. This process enables a true decentralization of code.

{{% image "/img/sb-348-en.webp" /%}}

## Script and “Smart Contracts”

You don’t want to limit the conditions that every peer has to check, before accepting any change in the shared balance sheet, to mere digital-signature validity, though. 

You decide that each message can also include a “script”: a list of instructions describing additional conditions that the receiving account (or accounts) will have to satisfy in order to spend again. For example, the sender could require a combination of several secret keys (in conjunction or disjunction) or a specific waiting time before spending. Starting from these very simple (and easy to audit) primitives, complex “smart contracts” can be built, making money effectively “programmable,” even in the absence of central parties.

## Darkness (and Scaleness) Problems

Unlike an encrypted messaging system (where if Alice sends Bob some messages, only Bob can read them), your scheme isn’t really optimized for darkness (if Alice sends Bob sats, her message will have to be revealed beyond Bob — at the very least to those who will receive those same sats later on).

Money circulates. Payees cannot trust any money transfer, even if properly signed, if they cannot verify that the transferred sats have actually been transferred themselves to that specific payer, and so on, upstream, back to the very first PoW-based issuance. With enough circulation of sats, active peers would get to know a huge number of past transactions, and forensic analysis techniques could be employed to statistically correlate amounts, timings, metadata and accounts, thereby deanonymizing many users and stripping them of their deniability. 

This is problematic: As discussed in [Part 2](/en/discovering-bitcoin/about-people), darkness is a fundamental quality for money, both for economical and sociological reasons.

Smart contracts make this problem even worse, since particular spending conditions may be used to identify particular software implementations or specific organization policies.

This lack of darkness is more serious than the one that affected your previous e-gold experiment: It’s true that, back then, you stored most transaction metadata on your central servers, but at least it was only you, as opposed to quite literally anybody (including many of Mallory’s agents), who had access! Furthermore, you could implement some particularly advanced cryptographic strategy to make yourself at least partially “blind” to what was actually going on between your users.

There’s also a minor scaleness problem connected with this design: Digital signatures are quite big, and the chain of transfers that a payee needs to receive in order to validate everything would include many signatures, making validation potentially more expensive. Furthermore, account changes are quite difficult to validate in parallel.

## A New Paradigm: “CoinJoin”

To mitigate such problems, you decide to change the fundamental entities of your model from bank-like “accounts” to “Unspent Transaction Outputs” (UTXOs). 

Instead of instructions to move sats from one account to another, each message now includes a list of old UTXOs, coming from past transactions and “consumed” as ingredients, and a list of new UTXOs, “generated” as products and ready for future transactions. Instead of publishing a single, static public key to be used as general account reference (like a bank IBAN or an email address), Bob must provide new, single-use public keys for each payment he wants to receive. When Alice pays him, she signs a message that “unlocks” some sats from some previously created UTXO, and “locks” them again into some new UTXO.

{{% image "/img/sb-349-en.webp" /%}}

Just like with physical cash, spendable bills don’t always match payment requests — change is often required. If, for example, Alice wants to pay 1,000 sats to Bob, but she only controls several UTXOs locking 700 sats each, she will sign a transaction consuming two of those 700-sats UTXOs (unlocking a total amount of 1,400 sats) and generating two new UTXOs: one associated with Bob’s keys, locking the payment (1,000 sats), and the other associated with Alice’s keys, locking the change (400 sats).

Provided that people don’t reuse keys for different payments, this design increases darkness in and of itself. But even more so when your users start to realize that UTXOs consumed and generated by a single transaction don’t have to come from just two entities! Alice can create a message spending old UTXOs she controls and generating new UTXOs (associated with Bob), then she can pass said message to Carol, who can simply add her old UTXOs she wants to consume and the new UTXOs (associated with Daniel) she wants to create. Finally, Alice and Carol both sign and broadcast the composite message (paying both Bob and Daniel). 

This special use of the UTXO model is called “CoinJoin.” (Trigger warning: Within the actual Bitcoin history, this use wasn’t Satoshi’s design rationale for the UTXO model itself, but was discovered as a potential twist on said design by other developers, many years after the launch.) It breaks the statistical linkability between outputs, while preserving what is called “atomicity”: Transactions are either entirely valid or invalid, thus Alice and Carol don’t have to trust each other. (If one of them tries to alter a partially signed message before adding their own signature, the existent signature becomes invalid.)

{{% image "/img/sb-350-en.webp" /%}}

There is a possible change to your system that may actually improve the situation even more: a different digital-signature scheme, alternative to the one you’re using now, which is “linear in the signatures.” That means: In taking two private keys (which are nothing but two numbers), signing the same message with each and adding together the resulting signatures (which also are nothing but two very big numbers), the result happens to be the correct signature corresponding to the sum of the two public keys associated with the two initial private keys! 

This sounds convoluted, but the implication is simple: Alice and Carol, when CoinJoining, could add up their individual signatures and broadcast just the sum, which everybody could verify against the sum of their public keys! Since, as we said, signatures are the “heaviest” part of transactions, the possibility of broadcasting just one instead of many would save up a lot of resources. External observers would end up suspecting every transaction of being a CoinJoin, since many users could be after efficiency gains. This assumption would break most of the forensic heuristics.

{{% image "/img/sb-351.jpg" %}}
*Image courtesy of [BitcoinMemeHub](https://twitter.com/BitcoinMemeHub?lang=en)*
{{% /image %}}

Even without this further improvement, the UTXO model already somehow increases scaleness: Unlike state changes in the account model, it allows validation to be efficiently batched and parallelized.

{{% image "/img/sb-352-en.webp" /%}}

So far, you’ve learned:

- that you can decentralize ownership using digital signatures for transfer;
- that you can turn transactions into programmable “contracts” with a script system; and
- that a more complex paradigm called CoinJoin can further increase darkness and scaleness.

But now that your users can issue sats and transfer them in a completely decentralized way, how can they all be sure that a single chronology is followed, preventing double-spending attacks or attempts to tinker with the inflation schedule? We will answer that in our final installment, “[Discovering Bitcoin Part 7: The Missing Pieces](/en/discovering-bitcoin/the-missing-pieces).”

{{< details "Contents" "..." >}}
1. [Introduction](/en/discovering-bitcoin/intro)
2. [Part 1: About Time](/en/discovering-bitcoin/about-time)
3. [Part 2: About People](/en/discovering-bitcoin/about-people)
4. [Part 3: Introducing Money](/en/discovering-bitcoin/introducing-money)
5. [Part 4: A Wrong Turn (New Plan Needed)!](/en/discovering-bitcoin/a-wrong-turn-new-plan-needed)
6. [Part 5: Digital Scarcity](/en/discovering-bitcoin/digital-scarcity)
7. [Part 6: Digital Contracts](/en/discovering-bitcoin/digital-contracts)
8. [Part 7: The Missing Pieces](/en/discovering-bitcoin/the-missing-pieces)
{{< /details >}}
