---
title: "Too Many UTXOs: How To Avoid High Fees"
h1: "More UTXOs, more problems: High fees, signing failures, and how to avoid them"
description: ""
cover: /img/utxo/fat-piggy-cover.png
url: protocol/utxo-2
date: 2022-08-03
bookFlatSection: false
bookToc: true
weight: 2
---

{{< expand "Contents" "..." >}}

## What Is UTXO And How To Manage Them

1. [What is a Bitcoin UTXO and why do they matter?](/en/protocol/utxo-1)

2. [More UTXOs, more problems: High fees, signing failures, and how to avoid them](/en/protocol/utxo-2)

3. [UTXOs, addresses, and CoinJoins: Preserving privacy in a Bitcoin economy](/en/protocol/utxo-3)

{{< /expand >}}

{{< hint btc>}}
This article by Tom Honzik was published in [Unchained blog](https://unchained.com/blog/too-many-bitcoin-utxos)

[Contribute](/contribute/)
{{< /hint >}}

Building on our first article covering [what UTXOs are and why they matter](/en/protocol/utxo-1), we’ll now dive deeper into various situations where you may need to actively manage the UTXOs in your self-custody wallet. This installment will describe the problems that can arise from accumulating too many UTXOs in your bitcoin wallet, as well as strategies you can use to resolve these issues and prevent them from occurring in the future.

## Two ways that a large number of UTXOs can affect you

As discussed in [our prior article](/en/protocol/utxo-1), each UTXO in your wallet exists as an individual chunk of data, like a physical coin deposited into a piggy bank. If you are holding a large number of UTXOs, you are storing a lot of data that will need to be processed when you try to send the bitcoin to a new address, which you can think of as similar to shipping your full piggy bank to a recipient. This can affect you in two main ways.

#### 1. Signing failures due to hardware wallet limitations

Some hardware wallets are unable to sign transactions involving too much data due to their limited memory. If you have a device that’s unable to sign due to data constraints, additional tools and knowledge may be required to move your bitcoin. Understanding the limitations of your device will allow you to prevent such predicaments or confidently address them if they arise.

#### 2. High fees when being forced to spend bitcoin at inopportune times

Transaction fees are a huge consideration for people holding many UTXOs because the cost to move your bitcoin is dependent on the amount of data being processed. If your goal is to avoid exorbitant fees, strategically maintaining a relatively low number of UTXOs can make a big difference. In just the last couple of years, we’ve seen that the cost to move any particular amount of bitcoin can range from _a few cents_ to _thousands of dollars_!

Let’s explore both of these concepts in greater detail.

## Hardware wallet limitations

Although reducing transaction costs and preserving privacy may sound appealing, a sensible first priority is making sure your devices remain able to sign your transactions when you need to move your bitcoin quickly.

Luckily, as we head into the future, newer models of hardware wallets will likely be improved to handle more and more UTXOs. For example, the Coldcard Mk3 (released in 2019) is able to sign transactions with up to around 384 kB of data, while the newer Mk4 model (released in 2022) can handle up to around 2 MB, a limit that a typical user would seldom run into.

The current hardware wallet models from the two most popular manufacturers, Ledger and Trezor, can sign most transactions from typical users, but if you have a lot of UTXOs the process could take several minutes to complete or may end up being unsuccessful. The [signing mass](https://unchained.com/blog/bitcoin-signing-mass/) of your UTXOs can also be an important factor.

{{% hint info %}}
If you need to move your bitcoin and are running into such constraints, you can try moving your bitcoin in several smaller transactions. Rather than trying to sign off on sending all of your UTXOs at once, if you only send a portion of your UTXOs at a time, your device may have better luck handling the data and providing signatures.
{{% /hint %}}

To help prevent a large amount of UTXOs in your wallet in the first place, you can adjust the frequency with which you deposit bitcoin into the wallet, as well as perform UTXO consolidations. We will cover these concepts [in more detail below](https://unchained.com/blog/too-many-bitcoin-utxos/#strategies).

## Dealing with transaction fees

If you’re someone who constantly accumulates bitcoin—whether by mining or by repeatedly purchasing bitcoin using a DCA (dollar-cost averaging) strategy—you can end up holding a very large number of UTXOs if you aren’t careful. Having a lot of UTXOs can work against your accumulation, because when it comes time to move the bitcoin to a new address, you may discover that you will have to pay a hefty price in transaction fees.

How substantial can the fees be? Let’s revisit [how fees are calculated](https://unchained.com/blog/what-the-fees-understanding-the-costs-of-bitcoin-transactions/), take a look at some examples of different fee environments, and dive into some numbers.

#### How bitcoin transaction fees are calculated

Fees are determined by the chosen cost per byte of data, as well as how many bytes of data your transaction will require. If you have many UTXOs to move, your transaction will contain more bytes than a typical transaction involving just a few UTXOs. If you want to send all of your UTXOs to a new address, there is no way around paying a higher-than-normal fee.

However, most wallet interfaces will let you choose the cost per byte of data, which can make a huge difference. If you choose a low fee rate like 1 sat/vb (satoshi per byte) or 3 sat/vb, then you will be paying close to the minimum possible amount, whereas if you choose a fee rate of 10 sat/vb or 30 sat/vb, your expense will be about ten times as high!

So, why would anyone ever choose a higher fee rate? The answer is generally not generosity, but rather to ensure that the transaction is finalized in a timely manner.

Due to intentional protocol constraints that help keep bitcoin decentralized, only a certain amount of transaction data can be processed (added to the next block in the blockchain) in any given period of time. On average, around one to two megabytes of data can be processed every ten minutes, so if bitcoin users submit transactions in excess of two megabytes during that time frame, not all transactions will be able to be added to the next block. Some transactions will have to wait longer, and those transactions will typically be the ones paying miners the lowest fee rate. This is because when miners select which transactions to include in the block they are mining, they are incentivized to first include the ones paying them the highest fee rates.

Naturally, if the current demand from bitcoin users to send transactions is low, then choosing a low fee rate makes a lot of sense. However, if demand is high and remains elevated for a long period of time, then choosing a low fee rate could mean that your transaction won’t be processed until the demand subsides or you decide to increase the fee rate that you are willing to pay.

#### Examples of various fee environments

To visualize different fee environments, let’s start by looking at the first couple months of 2022, when the demand for transactions remained quite low:

{{% image src="/img/utxo/mempool-1.png" %}}
*Mempool transaction data: January 2022 through March 2022*
{{% /image %}}

The height of the colored area represents how much transaction data was backlogged, waiting to be processed. Although there were temporary spikes in demand, they subsided within days, and if a sender chose a low fee rate they could still expect their transaction to be processed relatively quickly. The different colors each represent different fee rates among the waiting transactions; the pink color closest to the bottom shows transactions with a rate of 1 sat/vb, which were processed regularly.

Next, let’s go back one year earlier to the first couple months of 2021, when users were excited by the bitcoin price exploding upwards:

{{% image src="/img/utxo/mempool-2.png" %}}
*Mempool transaction data: January 2021 through March 2021*
{{% /image %}}

This picture is quite different. With demand for transactions sustained at a high level, the backlog (also known as “the mempool”) continued to grow. Transactions with low fee rates, as shown in pink and purple, were not processed for many weeks. Users who wanted their transactions processed in the next block were bidding higher and higher prices; the transactions highlighted in green and yellow have fee rates ranging from 10 sat/vb to 50 sat/vb.

During this heated fee environment in early 2021, the mempool didn’t completely clear until June, when the price of bitcoin fell and excitement died down.

The backlog lasted around six entire months, so if you needed to transfer your bitcoin on short notice during this time, you were forced to use higher fee rates. In fact, there was a week in April 2021 when the only transactions being processed had a fee rate around 100 sat/vb or above, as shown in gray and dark red:

{{% image src="/img/utxo/mempool-3.png" %}}
*April 2021 saw exorbitant transaction fees*
{{% /image %}}

You can view graphs like these yourself at [mempool.space](https://mempool.space/). This website lets you monitor the current fee environment in real-time, as well as dig into a lot of other interesting data about mining and the blockchain!

#### Getting into the numbers

The most costly predicament to be in is if you have a lot of UTXOs that you need to move on short notice, while the fee environment is extremely high. To illustrate, let’s compare some _very rough conservative estimates_ of the costs to move different amounts of UTXOs quickly during various fee environments:

{{% image src="/img/utxo/cost.png" /%}}

As you can see, regardless of the amount of bitcoin you are moving, fees can vary by a staggering amount. If you have 0.9 BTC in the form of 100 UTXOs and are forced to send it using a fee rate of 100 sat/vb, it might cost you _2,000 times more_ than if you sent 0.9 BTC in the form of 5 UTXOs at a fee rate of 1 sat/vb.

To further demonstrate this point, consider a price of $50,000 per bitcoin. At that exchange rate, 1,000 satoshis would be worth the same as just $0.50, while 2,000,000 satoshis (0.02 BTC) would be worth the same as $1,000.00. During that brief period in April 2021, some people paid this price—or even higher—to process single transactions!

Clearly, moving your bitcoin during lower fee environments is preferable, but not everyone can control when they need to spend money. When life (or business) throws a curveball, you may need to transfer bitcoin unexpectedly. If the fee environment is high, it can be very hard to predict how long you might have to wait for fees to come back down, and in the meantime, fees could get even higher.

What you do have better control over is how many UTXOs you are holding. If cost reduction is important to you, there are a couple of different preemptive actions you can take.

## Strategies to prevent high UTXO counts

As briefly described in our [UTXO primer article](/en/protocol/utxo-1), there are two main ways to maintain your UTXO count at a reasonably low level. By controlling your deposit frequency, you can lessen the amount of UTXOs you are adding to your wallet over time. Additionally, if you are already holding more UTXOs than you’d like, you can perform a UTXO consolidation.

#### Controlling deposit frequency

If you are someone who accumulates bitcoin constantly and immediately sends the bitcoin to your wallet, then you may be rapidly piling up UTXOs. One transfer to self-custody per day will cause you to gain over 300 UTXOs in less than a year (and a potential price of thousands of dollars to move them in the future). Here are some alternatives:

- **DCAers**: If you routinely buy bitcoin on an exchange, perhaps multiple times per week, consider sending it to self-custody in bulk once or twice per month. This way, you will end up with less than 25 new UTXOs per year.
- **Miners**: If you belong to a mining pool, you should be able to adjust your payout thresholds, changing the frequency with which your earnings are sent to your wallet. If you raise the threshold, your earnings will be sent to self-custody less often, and you will accrue fewer UTXOs over time.

Of course, these alternatives involve keeping some of your bitcoin in the custody of someone else for a longer period of time, introducing additional custodial risk. However, if the vast majority of your bitcoin is already in self-custody, then the tradeoff might be worth it to you. In the event that something serious happens to the custodian, you only run the risk of losing the bitcoin that you had recently acquired.

#### Performing a strategic UTXO consolidation

If you already have a lot of UTXOs in your wallet, there is still a prudent move you can make to potentially reduce your future fees substantially. A UTXO consolidation can take some or all of your UTXOs and combine them so that you are left holding that amount of bitcoin in one UTXO.

Conducting a UTXO consolidation is easy; simply author a transaction containing the UTXOs you wish to consolidate, and send them back to yourself. For example, if you had nine UTXOs of 0.1 BTC, you could bundle them up and send them to a new address generated by your wallet:

{{< image src="/img/utxo/consolidate-en.png" />}}

The end result will be one UTXO in your wallet. However, you will no longer have exactly 0.9 BTC, because a UTXO consolidation is not seen by the network any differently than other transactions. You will have to use some of your bitcoin to pay the transaction fee.

Now, if you still have to pay a transaction fee, and potentially a hefty one due to the number of UTXOs you are moving, you might be wondering why a UTXO consolidation is useful at all! The answer involves fee rates; if you consolidate your UTXOs at a low fee rate (use tools like [txfees.watch](https://txfees.watch/) to find low-fee opportunities), such as 1 sat/vb or 3 sat/vb, then you will be much better prepared for a higher fee environment, should one occur. Having only one UTXO and being forced to move it at 50 sat/vb or 100 sat/vb will be a lot less painful than having to send many UTXOs at those rates.

At Unchained, we recommend that our clients consider a consolidation transaction if they have more than 20 UTXOs in their multisig vaults, [especially if the UTXOs are relatively small values](https://unchained.com/blog/small-utxo-bitcoin-dust/). This recommendation is likely to reduce future costs for our clients, while also ensuring that most hardware wallet models can handle the data burden of a maximum withdrawal at any time.

## A note on privacy

In the first article, we discussed the fact that performing UTXO consolidations and holding UTXOs of large denominations can negatively affect your privacy. This is certainly an important consideration. If you are interested in learning more about preserving privacy, make sure you [check out the third article in this series on UTXOs](/en/protocol/utxo-3), focused entirely on this subject.

{{< expand "Contents" "..." >}}

## What Is UTXO And How To Manage Them

1. [What is a Bitcoin UTXO and why do they matter?](/en/protocol/utxo-1)

2. [More UTXOs, more problems: High fees, signing failures, and how to avoid them](/en/protocol/utxo-2)

3. [UTXOs, addresses, and CoinJoins: Preserving privacy in a Bitcoin economy](/en/protocol/utxo-3)

{{< /expand >}}