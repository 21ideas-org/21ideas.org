---
title: "What is a Bitcoin UTXO"
h1: "What is a Bitcoin UTXO and why do they matter?"
description: ""
cover: /img/utxo/piggy-cover.png
url: protocol/utxo-1
date: 2022-06-17
bookFlatSection: false
bookToc: true
weight: 1
---

{{< details "Contents" "..." >}}

## What Is UTXO And How To Manage Them

1. [What is a Bitcoin UTXO and why do they matter?](/en/protocol/utxo-1)

2. [More UTXOs, more problems: High fees, signing failures, and how to avoid them](/en/protocol/utxo-2)

3. [UTXOs, addresses, and CoinJoins: Preserving privacy in a Bitcoin economy](/en/protocol/utxo-3)

{{< /details >}}

{{< hint btc>}}
This article by Tom Honzik was published in [Unchained blog](https://unchained.com/blog/what-is-a-utxo-bitcoin)

[Contribute](/contribute/)
{{< /hint >}}

Although many users may not realize it, all bitcoin wallets need some level of maintenance to be properly managed. If you’re using a custodian, they take care of these things. However, when you hold your bitcoin in self-custody, no one is responsible for managing your wallet but you. To maintain your wallet properly, you’ll need to know what UTXOs are and how to manage them.

As the old adage goes: with great power comes great responsibility. It’s a mistake to think that you can just deposit bitcoin into a self-custody wallet and forget about it. Understanding a little bit more about how bitcoin UTXOs work can help you preserve your privacy and reduce the amount of bitcoin you spend on transaction fees.

## What is a UTXO?

You’re not alone if you’re tempted to shy away from learning about something called a “UTXO”—it can sound a bit daunting. It probably doesn’t help to learn that UTXO is an abbreviation for “unspent transaction output.” If you’re concerned that you might need to be a computer scientist to continue reading, rest assured that in just a few more paragraphs, it will all make sense.

### A bank account vs. a piggy bank

The world of traditional finance can provide us with great analogies for understanding how bitcoin operates. To help explain the role that UTXOs play, let’s start with two different mental models for storing cash: a bank account and a piggy bank.

If you open a bank account and deposit cash into it, your cash is immediately mixed with all the other cash the bank holds. There might be thousands of bank customers, so it makes no sense for them to keep each person’s cash in a separate pile. They combine it all and make a note of how much is yours. It makes no difference if you deposit a $100 bill or three $20 bills and four $10 bills. All that matters is that the total amount deposited is $100. When you try to withdraw your $100, they’re not necessarily going to give you the same denominations of bills you deposited.

There’s an important difference if you use a piggy bank to store your cash. If you put five $20 bills into your piggy bank, the $100 worth of contents remains in that form: five $20 bills. If you take the $100 back out, you won’t magically receive a single $100 bill, you will still have five $20 bills. Also, if you wanted to pay someone $10 out of the $100 in your piggy bank, there’s a problem: Your smallest bill is worth $20, so you would need to break it up into change somehow.

{{< image src="/img/utxo/custody-en.png" />}}

The bank account model is a custodial service holding your cash for you, which is analogous to an exchange that holds people’s bitcoin—everyone’s bitcoin is mixed together.

The piggy bank model is cash in self-custody, which is the correct mental model to use when imagining bitcoin in self-custody wallets.

There is a fundamental difference between depositing 0.9 BTC into your wallet in one transaction and depositing 0.1 BTC into your wallet nine times. Even though the total is 0.9 BTC in either case, each deposit remains a separate entity within your bitcoin wallet. **Each one of these entities is a UTXO**.

### Bitcoin UTXOs are not limited by denomination

When you make a single deposit of 0.9 BTC into a wallet, the result is that you now have a single UTXO of 0.9 BTC sitting there. If you instead make nine separate deposits of 0.1 BTC each, then you have nine UTXOs totaling 0.9 BTC. It’s similar to putting nine $10 bills into a piggy bank, versus a single $90 bill.

Wait, what? A $90 bill? That’s right. The cash and piggy bank analogy doesn’t quite work perfectly, because bills of cash typically exist in fixed denominations that are common multiples of 5s and 10s. Bitcoin UTXOs can exist in any amount. You can make a deposit to a bitcoin wallet for 3.0610477 BTC, and upon doing so you would have a single UTXO existing in that denomination.

So why does it matter if you have one UTXO of 0.9 BTC or nine UTXOs of 0.1 BTC? We’ll get to that in a moment.

### The unspent transaction output

First, let’s look at where the name “unspent transaction output” comes from. For any bitcoin transaction (or any transaction at all, for that matter) there are inputs and outputs. There are senders and receivers. The inputs are the previous owners of the money, and the amount of money they are sending. The outputs are the new owners of the money, and the amount they are receiving. There could be just a single input or multiple inputs to any transaction, as well as just a single output or multiple outputs.

With that in mind, the “transaction output” language should make a bit more sense; when you deposit bitcoin to your wallet, your wallet is a receiver of the transaction, and therefore it receives an output. The word “unspent” simply means you haven’t moved the bitcoin again since, and the bill remains in your “piggy bank.”

## Why do UTXOs matter?

If you leave your bitcoin in the hands of a custodian, you don’t have to think about UTXOs. Just like cash in a bank account, the actual bill denominations could be anything, because your cash is mixed with everyone else’s. UTXOs still need to be considered by the custodian, of course, for the reasons we’ll cover below. But you, as the end user, don’t need to think about that—all you have is an IOU.

However, the UTXOs in your self-custody wallet are very relevant to you—for similar reasons as the denominations of bills in your piggy bank might be relevant to you. When paying someone from the cash in your piggy bank, you have the extra step of deciding which bills you are going to use, and if you will require change. When sending bitcoin to someone from a wallet you control, you have the extra step of selecting UTXOs, even if you don’t know it.

If you’ve spent bitcoin out of self-custody wallets before and are wondering why you’ve never had to select UTXOs, that’s because many wallet interfaces try to make things simple and user-friendly. They will automate selecting your UTXOs for you, because they don’t want new users to be overwhelmed with complexity. However, to take true ownership of your bitcoin and have complete control over the decisions being made, many wallet interfaces will have an “advanced” feature for UTXO selection, often called coin control. If the wallet app you use doesn’t offer coin control, you should be able to open the wallet in a different wallet app that does.

Manually selecting the UTXOs you use for each transaction can make a big difference in two main ways:

- **Privacy**: The UTXOs you select can determine the information you share with others (e.g., the recipient) about your wallet’s balance and transaction history.
- **Transaction fees**: The number of UTXOs you select can also affect the amount you’ll pay in transaction fees.

Let’s take a look at both of these.

### Privacy

In an earlier example, we discussed either having nine UTXOs of 0.1 BTC or one UTXO of 0.9 BTC. What if you wanted to send someone 0.2 BTC? What would the process look like for each case?

In the first case, with nine UTXOs of 0.1 BTC, you can grab a couple of those UTXOs to act as two inputs for the transaction and send them over to the recipient. That person would obtain a single UTXO of 0.2 BTC. That’s fairly straightforward:

{{< image src="/img/utxo/2-in-1-out-en.png" />}}

In the second case, you only have the single UTXO of 0.9 BTC, so you will require change back. If you send 0.2 BTC to the recipient, you will also want to send the other 0.7 BTC back to your wallet (as a new UTXO on a new wallet address):

{{< image src="/img/utxo/1-in-2-out-en.png" />}}

This method comes with the drawback of revealing more information about your wallet. Remember that bitcoin’s blockchain is a public ledger, so all transactions are viewable. **The person who received the 0.2 BTC can search for the transaction and discover that you sent 0.7 BTC somewhere as an additional output.** They can reasonably assume that the 0.7 BTC is probably your change from a larger UTXO of 0.9 BTC, so you have essentially revealed to this person that you have at least another 0.7 BTC sitting in your wallet. Furthermore, they might be able to track this new UTXO of 0.7 BTC and monitor future transactions that it becomes a part of.

Change is often unavoidable because it’s rare that you will have UTXOs that add up to exactly the amount you want to send. Even in the situation with nine UTXOs of 0.1 BTC each, if you were trying to send someone an alternative amount of 0.05 or 0.25 BTC, change would be required. However, the change you would be sending back to yourself would be smaller, so less is revealed about your wallet balance. Generally speaking, choosing smaller UTXOs rather than larger ones when sending bitcoin helps preserve your privacy. However, having a bunch of smaller-sized UTXOs in your wallet comes at a cost, which we will discuss next.

If you are interested in exploring privacy concepts in greater detail, be sure to [check out our other article focused on the subject](/en/protocol/utxo-3).

### Transaction fees

How are bitcoin transaction fees calculated? If you missed [Buck Perley’s article](https://unchained.com/blog/what-the-fees-understanding-the-costs-of-bitcoin-transactions/), it is a fantastic way to dive deep into this subject. The short version is that there are two factors that decide the fees you will pay to process your transaction:

1. Your chosen fee rate (cost per byte of data)
2. The amount of data your transaction requires

While most bitcoin wallets enable you to select the fee rate you’re willing to pay, what you have less control over is the amount of data your transaction will use.

The data required for your transaction depends on several factors, particularly the number of inputs and outputs. For most regular transactions, the number of outputs is just one or two (if there is change), but the number of inputs depends entirely on how many UTXOs you are selecting from your wallet.

If you have one UTXO of 0.9 BTC, and you want to send 0.6 BTC of it to a friend, you will have only one input:

{{< image src="/img/utxo/light-en.png" />}}

One input will mean a significantly lower fee than if you have to use six inputs in the form of 0.1 BTC UTXOs:

{{< image src="/img/utxo/heavy-en.png" />}}

In fact, since fees are determined by the amount of data involved rather than the amount of bitcoin, you would typically pay a higher fee to send those six UTXOs of 0.1 BTC, than you would pay to send one UTXO of 100 whole bitcoin!

The more UTXOs you hold in your wallet, the more fees you will pay when it comes time to move them. If the fee market happens to be heated for a period of time while you are needing to send your bitcoin somewhere, having lots of smaller UTXOs can get expensive.

How much so? If you’re interested in learning more about fee environments and how to avoid exorbitant transaction costs in the future, [check out the sequel to this article](/en/protocol/utxo-2).

## So how do I manage my UTXOs?

There are trade-offs to deciding how many UTXOs you wish to keep in your wallet, and what UTXOs you will choose from when sending bitcoin to a new address. As explained above, bitcoin that is condensed into larger UTXOs can help you save on fees, but may also reduce your privacy. Meanwhile, bitcoin in smaller UTXO chunks can help obfuscate your wallet balance, but may also lead to higher transaction fees in the future.

Deciding what your priority is can help you choose a strategy for how you might want to deal with UTXOs, which is an essential part of responsible self-custody.

There are several methods to managing UTXOs, and we will cover them in full detail in dedicated articles. At a high level, there are three primary techniques you can use:

- Controlling the frequency of your deposits
- Performing UTXO consolidations
- Performing CoinJoins

### Control deposit frequency

The first technique at your disposal is the most straightforward: You can control the frequency of your deposits into your self-custody wallet. Every unique deposit to your wallet creates a new UTXO, so if you buy bitcoin every day on an exchange and then send it straight to self-custody, you may end up dealing with far more UTXOs than you’d like to. Instead, you could buy bitcoin on the exchange every day, but only move it to your wallet once a week, or twice a month. That way you’d have UTXOs building up at a much slower rate.

### Perform a UTXO consolidation

The second technique is [performing a UTXO consolidation](https://help.unchained.com/how-do-i-make-a-consolidation-transaction). If you have nine UTXOs of 0.1 BTC each, you can consolidate them. Simply send all nine UTXOs back to a new address on your wallet. The end result will be a single UTXO of 0.9 BTC sitting in your wallet (minus the transaction fees), without any bitcoin ever leaving your custody. If you perform a consolidation when the fee environment is low, then you might save yourself substantial costs if you ever have to move the bitcoin again at a higher fee rate down the road! To learn more about this technique, take a look at [our other article](/en/protocol/utxo-2) explaining all you need to know about fee environments and consolidations. However, keep in mind that consolidating these UTXOs together will now expose them as being linked to the same user (to anyone monitoring the blockchain).

{{< image src="/img/utxo/consolidate-en.png" />}}

### Perform a CoinJoin

The third technique, called a CoinJoin, is a more advanced procedure that increases your privacy by coordinating a mixed spend together with other parties. The resulting UTXOs make it much harder for your bitcoin to be tracked. Head over to [our article on CoinJoins](https://unchained.com/blog/what-is-coinjoin/) to learn how they work, and why they are important.

{{< details "Contents" "..." >}}

## What Is UTXO And How To Manage Them

1. [What is a Bitcoin UTXO and why do they matter?](/en/protocol/utxo-1)

2. [More UTXOs, more problems: High fees, signing failures, and how to avoid them](/en/protocol/utxo-2)

3. [UTXOs, addresses, and CoinJoins: Preserving privacy in a Bitcoin economy](/en/protocol/utxo-3)

{{< /details >}}