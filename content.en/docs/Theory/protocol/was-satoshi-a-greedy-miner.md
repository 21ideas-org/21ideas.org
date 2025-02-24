---
title: "Was Satoshi a Greedy Miner?"
h1: "Was Satoshi a Greedy Miner?"
cover: /img/00000001.png
tags: ["bitcoin", "satoshi", "proof-of-work"]
description: "Technical analysis of mining behavior exhibited by an entity that is plausibly Satoshi Nakamoto."
url: was-satoshi-a-greedy-miner
date: 2022-09-16
bookToc: true
bookFlatSection: false
weight: 60
---

Technical analysis of mining behavior exhibited by an entity that is plausibly Satoshi Nakamoto.

{{< hint btc >}}
This article by [Jameson Lopp](https://twitter.com/lopp) was published in his [blog](https://blog.lopp.net/was-satoshi-a-greedy-miner).

[Contribute](/contribute/).
{{< /hint >}}

If you spend enough time in the crypto ecosystem then you'll no doubt come across arguments that some projects have unfair token distributions because they were "premined" / "instamined" / "fast mined" by the project founders, effectively enriching themselves from the initial launch of the project.

Aggrieved parties who wish to push back against token distribution criticism will inevitably point out that [Satoshi appears to own around 1,100,000 bitcoin](https://bitslog.com/2013/04/24/satoshi-s-fortune-a-more-accurate-figure/) - nearly 5% of the entire supply that will ever exist.


## Patoshi Pattern Preamble

**DISCLAIMER**: For the purposes of the following article I'll be operating under the assumption that the so-called "[Patoshi Pattern](https://bitslog.com/2019/04/16/the-return-of-the-deniers-and-the-revenge-of-patoshi/)" is, in fact, a single miner entity and that this entity was Satoshi. As such, I shall use "Satoshi" and "Patoshi" interchangeably. While it is not possible to prove this claim beyond a reasonable doubt, the behaviors exhibited by this miner suggest someone with an extremely deep knowledge of Bitcoin very early in its existence - a Satoshi-level understanding. But that's a topic for another post.

What is the Patoshi Pattern? If you're familiar with the basics of Bitcoin mining then you know that miners increment nonces in an attempt to create a valid block with a hash value that meets a given difficulty target. The ExtraNonce field, located in the coinbase transaction, increments every time the nonce field overflows, meaning the search space is exhausted. As the nonce field is 32 bits in length, and the initial Bitcoin difficulty target required scanning 32 bits on average, the nonce would sometimes, but not always, overflow.

1. The ExtraNonce works as a “free running counter”, without resetting to zero between blocks mined.
2. The rate a certain miner increments the ExtraNonce is much faster than its actual hashrate would indicate, based on the original Bitcoin source code.
3. Every few seconds during mining, the best block is checked. If the best block changes, the ExtraNonce is additionally incremented. Normally every external block received will increment the ExtraNonce, except for the exceptional miner Patoshi, which doesn’t seem to follow this rule.

When graphed, these ExtraNonces allowed the visualization of the **Patoshi Pattern** for which we can observe contiguous slopes of ExtraNonces.

{{% image src="/img/00000002.png" /%}}

Additionally, the Patoshi miner exhibits an odd restriction in the nonce values they found for blocks. There are several theories as to why this might be the case, but I believe the most plausible is that Patoshi had developed multi-threaded mining software and these ranges were allocated to different CPU cores, so that each core would scan a reduced nonce space in parallel.

{{% image src="/img/00000003.png" %}}
_Source: http://organofcorti.blogspot.com/2014/08/168-little-more-on-satoshis-blocks_15.html_
{{% /image %}}

**Note**: the techniques used to identify Patoshi blocks involve some uncertainty and there are collisions with non-Patoshi blocks where ExtraNonce patterns from other miners intersect. However, misattributed blocks are likely limited to an error rate that is well under 1%.


## Patoshi's Pecularities

If we read through the [dozen+ technical articles](http://satoshiblocks.info/about.html) that analyze the blocks that appear to be mined by Satoshi, we can draw several conclusions about this miner:

1. They used a custom coded multi-threaded Bitcoin client to mine that did not follow the same behavior as the publicly available Bitcoin client. In layman's terms, modern CPUs have multiple cores - multiple processors inside of one physical unit. But unless you write your software in a way that it can distribute its computations in parallel across multiple cores, it will only be able to make use of one core. The early public Bitcoin client was not written with multithreading capability; it only mined on one CPU core.
2. Their hashrate was constant for months at a time and then underwent systematic decreases.
3. Fewer than 20 of the 22,000+ blocks (0.09%) were spent.
4. Satoshi appears to have turned their miner on and off programmatically.


## Sleeping Satoshi

There's an odd aspect to the timing distribution of blocks mined by Satoshi: they don't follow the distribution that we would expect from a miner that spends 100% of their time mining. In fact, they practically NEVER mined back-to-back blocks that were less than 5 minutes apart! A simple explanation is that they paused their miner for 5 minutes after mining a block.

{{< x user="lopp" id="1566035352946724865" >}}

As Sergio explains in his research, it's _possible_ that Patoshi's miner kept mining right after finding a block, but that their custom mining software would artificially increment the following block's timestamp by no less than 300 seconds.

In any case, this is an interesting phenomenon that is clearly a deliberate decision by the miner. Can we dig deeper? I analyzed the distribution of Patoshi's blocks in several different ways. First, if we observe the timestamp differences between only Patoshi and Patoshi-mined blocks, we can see it's quite clear that they rarely mined blocks less than 5 minutes apart. The expected timestamp delta distribution trend line for a miner with 4.35 megahashes per second (Mhps) at difficulty target of 1 is shown in blue. For the purposes of this chart I'm only using Patoshi block data during the period they appeared to be mining at 4.35 Mhps.

{{% image src="/img/00000004.png" %}}
_Timestamp differences between 2 blocks where both were mined by Patoshi during first 6 months_
{{% /image %}}

So we can see there's an obviously massive gap of missing "fast" blocks. What if we look at ALL of the Patoshi block deltas, including blocks that were mined after non-Patoshi blocks?

{{% image src="/img/00000005.png" %}}
_Timestamp differences between each block mined by Patoshi and its parent block_
{{% /image %}}

This is looking a little better - it's clear that Patoshi did not turn their miner off (or adjust their block template timestamps) for 5 minutes (300 seconds) after receiving a block mined by _someone else_. But we can also see that the number of blocks mined that took over 10 minutes is a lot higher than expected! While this is partially due to Satoshi decreasing their hashrate over time, it may be exacerbated due to one of those types of mining manipulation occurring.

Next I took the data set from the previous chart and whenever there was a block that was mined more than 5 minutes after the previous block, I subtracted 5 minutes from the time delta. We can see that this gives us a resulting data set that fits the expected distribution much better.

{{% image src="/img/00000006.png" /%}}

If you haven't read my [prior research into block time variance](https://blog.lopp.net/bitcoin-block-time-variance/) then you might be asking yourself if these graphs are actually meaningful - that is, can we compare them to a control group? For comparison, here is the chart of ALL blocks mined during Bitcoin's "CPU era" before GPU mining took off:

{{% image src="/img/00000007.png" /%}}

So the question remains: is this unique phenomenon due to Satoshi turning their miner off for 5 minutes or is it due to them manipulating their timestamps by 5 minutes? **I strongly believe that Satoshi's machine slept**. Why?

A thought experiment: if Patoshi simply set their block timestamp 5 minutes in the future after finding a block then we would expect an _abnormally high percentage_ of the child non-Patoshi blocks to have timestamps that were **before** the second Patoshi block, because miners set timestamps based upon their local machine's clock. Let's search for:

1. A sequence of Patoshi block -> Patoshi block -> non-Patoshi block
2. The second Patoshi block must be mined less than 10 minutes after the first
3. Find timestamp delta between 2nd Patoshi block and the non-Patoshi block

So I wrote [this script](https://github.com/jlopp/bitcoin-utils/blob/master/findNonPatoshiDeltasAfterFastPatoshiBlocks.php) to search for blocks with those characteristics. The script found 1,881 blocks that matched. Of those blocks:

- Only 1 had a negative timestamp delta from a parent Patoshi block
- Only 5 (0.3%) were minted less than 5 minutes after a parent Patoshi block

Also, if Patoshi had only been manipulating the timestamps of the blocks they mined, they would NOT have been able to hide the total distribution of the blocks they mined over a long period of time and thus would NOT be able to hide their effective hashrate. Keep the following numbers in the back of your head for the rest of this article: **4.35 Mhps** and **6 Mhps**.


## Satoshi's Hashrate Dominance

We can observe that Satoshi's miner had 4 distinct hashing epochs. They initially followed a plan of reducing their hashrate by 1.7 Mhps every five months, but a month after the second such drop they abandoned this method in favor of a continuously decreasing hashrate.

{{% image src="/img/00000008.png" %}}
_Source: http://organofcorti.blogspot.com/2014/08/167-satoshis-hashrate.html_
{{% /image %}}

When we compare Satoshi's hashrate to the rest of the network, we can more clearly observe that the bootstrapping of hashpower by other miners started taking off in October 2009 as Satoshi stepped back further.

{{% image src="/img/00000009.png" %}}
_Source: http://organofcorti.blogspot.com/2014/08/167-satoshis-hashrate.html_
{{% /image %}}

In fact, Satoshi was in a dangerously dominant position with over half of the network hashrate up until October 2009.

{{% image src="/img/000000010.png" %}}
_Source: http://organofcorti.blogspot.com/2014/08/167-satoshis-hashrate.html_
{{% /image %}}

Even more interestingly, Satoshi only became a minority hashrate miner _after voluntarily decreasing their hashrate multiple times_.

This suggests several things:

- Satoshi planned to decrease their hashrate all along.
- Satoshi initially had a rough control of their hashrate.
- Satoshi later developed a very fine grained control of their hashrate.


## The Double Helix

You may have noted that the first timestamp distribution chart in the "Sleeping Satoshi" section excluded blocks 1400-1916 from its data set. Why? Because a unique phenomenon occurred during this time frame that screws up the Patoshi block timestamp delta calculations. There are 2 Patoshi miners running simultaneously!

{{% image src="/img/000000011.png" %}}
_Double helix Patoshi pattern (blocks 1400-1916)_
{{% /image %}}

You can explore this pattern on the [SatoshiBlocks](http://satoshiblocks.info/?bn=1600) website. The double helix pattern was probably caused by two instances of the Patoshi software running in parallel. We don’t know if this was a mistake made by Patoshi or if they were testing something. What can we infer from this phenomenon?

During this period of 4 days and 3 hours, Satoshi mined 458 blocks. From this we can estimate that their total aggregate hashrate during this time was about **5.5 Mhps**. This is noteworthy because Satoshi's hashrate during the first 5 months of 2009 averages out to **4.3 Mhps**. This also explains the highlighted discrepancy from the earlier hashrate chart.

{{% image src="/img/000000012.png" /%}}

Why is this interesting? If Satoshi had set up a separate machine for mining that was similar to the first, we'd expect their overall hashrate would be closer to 8.6 Mhps during the double helix period. Yet their hashrate was **only 28% higher** rather than 100% higher. We can see that the performance of each mining instance is reduced, resulting in a uniformly decreased slope of ExtraNonces for both instances when compared to _every other Patoshi slope_. Why? The simplest explanation is because the threads in both mining instances are competing for the same CPU cores!

{{% image src="/img/000000013.png" %}}
_Note that when a single instance is running, it has a higher hashrate and thus steeper ExtraNonce slope_
{{% /image %}}

Sergio Lerner [believes we can infer](https://bitslog.com/2014/04/03/chain-archeology/) from this that Satoshi’s computer was probably a quad-core. I think that's in line with expectations because it looks like the average single-threaded miner back in those days was achieving a hashrate of a little over 1 Mhps. In any case, I think it's a safe bet to guess that Satoshi's double helix pattern was from 2 instances of their custom software running on the same hardware.

Several years ago I [compiled all of Satoshi's public activity timestamps](https://docs.google.com/spreadsheets/d/19hZc0XOdasHshAnNsYLscTVftOfY-_e3VwjGTpmGDM8/edit?usp=sharing) from emails, forum posts, and code commits to generate the following chart. My conclusion is that Satoshi maintained a sleep schedule consistent with someone staying in the Pacific time zone.

{{% image src="/img/000000014.png" /%}}

Why do I bring this up? To support my theory to explain the double helix phenomenon! Here's what I believe happened:

- Satoshi mined block 1386 at 4 PM Pacific on January 22, 2009
- Satoshi's mining hardware / software crashed shortly thereafter
- Satoshi woke up and checked on their miner shortly before 8 AM Pacific the next day, only to find it had malfunctioned
- They started the miner back up and found a block at 8 AM Pacific
- Unbeknownst to Satoshi, they accidentally started 2 mining instances
- The miner ran for the next 3 days, over a weekend, without Satoshi noticing
- Shortly after mining block 1916 at 10:30 PM Pacific on January 25, the miner crashed again
- Satoshi woke up and checked on their miner shortly before 7 AM Pacific January 26, found it had crashed, and resumed it normally

## Satoshi's Streak

We know that Satoshi had the majority of hashrate for the first 9 months of 2009; can we learn anything from their longest period of back-to-back blocks? I wrote a [streak finder script](https://github.com/jlopp/bitcoin-utils/blob/master/findPatoshiMiningStreaks.php) and determined that Satoshi had a 47 block streak from height 80 to 127.

{{% image src="/img/000000015.png" /%}}

This should certainly be taken with a grain of salt given that it's an ~8 hour window and hashrate estimates become less accurate as the time range you are observing shortens, but we can see that the average block time was 720 seconds which leads us to estimate their hashrate at **5.97 Mhps** during this period.

## Did Satoshi Mine Slower to Keep the Difficulty Low?

Recall that we have multiple data points that suggest Satoshi's machine, while generally observed hashing at a rate of **4.35 Mhps**, was likely only capable of a maximum potential hashrate of **6 Mhps**. At a hashrate of 6 Mhps, this results in an expected average block time of 708 seconds. Remember that the [difficulty target does not adjust](https://en.bitcoin.it/wiki/Difficulty#What_network_hash_rate_results_in_a_given_difficulty.3F) until the past 2016 blocks have been mined at an average rate that's under 600 seconds. Thus the global network hashrate _for each unit of difficulty_ can be expressed as:

> hashes per second = 2^32 / 600 = 7,158,278 hashes per second

As such, in order to push the average block minting time to be fast enough that Bitcoin adjusts the difficulty target from **1** to **2** there would need to be over 7,158,278 * 1.5  = 10737417 hashes per second = **10.7 Mhps** on the network.

This means there would need to be over 4.7 Mhps of other miners on the network in order to bump the difficulty target if Satoshi was mining as fast as possible. It's hard to say exactly how many machines that would equal, though based upon some of the [CPU benchmarks available here](https://en.bitcoin.it/wiki/Non-specialized_hardware_comparison#Intel) I'd guess that the average common desktop processor using the early, unoptimized, single threaded Bitcoin miner likely produced a little over 1 Mhps. There's also anecdotal evidence of early miners [posting their hashrates on BitcoinTalk](https://bitcointalk.org/index.php?topic=43.msg1111#msg1111). We can also eyeball this and show it to be likely by comparing the ExtraNonce slopes of non-Patoshi miners with the Patoshi-mined ExtraNonce slopes - Patoshi's is _3 times steeper_ than other miners. Thus we'd only need 4 or 5 other miners on the network to bump the difficulty.

I [wrote another script](https://github.com/jlopp/bitcoin-utils/blob/master/generateDifficultyHistoryCSV.php) to extract the difficulty history from the blockchain.

{{% image src="/img/000000016.png" /%}}

Here's a chart of the total network hashrate during the period in question:

{{% image src="/img/000000017.png" %}}
_Source: https://www.coinwarz.com/mining/bitcoin/hashrate-chart_
{{% /image %}}

To understand how the difficulty retargets would have changed we must ask at what point the global network hashrate would have exceeded 10.7 Mhps if Satoshi had been mining at their maximum 6 Mhps.

{{% image src="/img/000000018.png" /%}}

From looking at the chart and adding the missing potential extra hashrate from Satoshi, it looks like the network would have exceeded 10.7 Mhps in mid-December 2009 and that the difficulty would have adjusted to 2 at block 32256, about 2.5 months earlier.

So no, the claim that Satoshi mined slower in order to keep the difficulty low is ridiculous. They could have mined FAR MORE blocks and thus earned FAR MORE BTC by operating at their maximum potential hashrate without increasing the difficulty. By the time the difficulty actually increased, Satoshi had already decreased their hashrate significantly.


## What Would a Greedy Satoshi Have Done Differently?

Sergio's Patoshi Pattern analysis has identified ~22,000 blocks as Patoshi candidates. Some of these are surely false positives, but there's good reason to believe (due to the multiple fingerprints used to identify blocks) that the false positive rate is under 1%. As such, this would estimate **Satoshi's total mined amount to be roughly 1,100,000 BTC**.

Had Satoshi NOT decided to decrease their hashrate multiple times in late 2009, how much more BTC would they have earned? This is straightforward to calculate if we assume a constant difficulty target of 1. We know from observing Satoshi's block minting rate and the difficulty target of 1 that their initial hashrate was approximately 4,350,000 hashes per second (**4.35 Mhps**.) The final block attributed to Satoshi was 54,316; exactly 14 months after the genesis block was mined. How many blocks could Satoshi have mined if they expended 4.35 Mhps for 14 months at a difficulty target of 1?

> expected seconds to find a block = difficulty * 2^32 / hashes per second

1 * 2³² / 4,350,000 = 987.35 seconds per block for Satoshi

36817200 seconds (14 months) / 987.35 blocks = 37302 blocks = **1,865,100 BTC**

Unfortunately it's a bit more complicated, as the mining difficulty started increasing at block 40320 on February 14, 2010 and Satoshi kept mining until at least May 3, 2010. The complications increase even further if we consider that Satoshi mining at their maximum potential hashpower would have resulted in pulling the first difficulty target change forward in time by ~2.5 months.

As such, we can use the historic difficulty change table posted earlier and move the timeframes forward by that much. If we assume that Satoshi still mined for 479 days but at a sustained 4.35 Mhps then this would result in roughly the following:

{{% image src="/img/000000019.png" /%}}

Which comes out to 31,783 blocks or a total of **1,589,150 BTC**.

However, we must also remember that Satoshi was regularly turning their miner off when they found blocks less than 5 minutes apart. The is **effectively an additional deliberate limitation of their hashrate**. So how much hashrate was Satoshi actually leaving on the table? We can get a pretty good estimate based upon our knowledge of the Poisson distribution of blocks. _Side note_: if you want to go down that rabbit hole you can check out [my earlier article on block time variance.](https://blog.lopp.net/bitcoin-block-time-variance/)

What % of blocks are expected to be mined less than 5 minutes after the previous block? 1 - exp(−5/10) = 39.35%. As such, Satoshi's maximum potential hashrate was actually more like 6.06 Mhps. This is an interesting result because it's also **quite close to the observed hashrate of 5.5 Mhps** during the double helix era and **extremely close to the observed hashrate of 5.97 Mhps** during their early streak of 47 blocks.

As such, let's re-run the previous calculation but with Satoshi running their hardware at their theoretical maximum hashrate of 6 Mhps.

{{% image src="/img/000000020.png" /%}}

For a total of 43,829 blocks or **2,191,450 BTC**.


## Why Didn't Satoshi Burn their Bitcoin?

The first transaction that made a deposit to a provably unspendable address was to [1111111111111111111114oLvT2](https://blockstream.info/address/1111111111111111111114oLvT2) on [August 10, 2010](https://blockstream.info/tx/2c637592a4b4a95cf4b19260730c66de540d7d3b14d8d352de591c5ee6eac0fc) and the first post I can find referencing it was 1 month later, noting it was the "[smallest possible bitcoin address](https://bitcointalk.org/index.php?topic=1019.msg12683#msg12683)" while other posts have called it "[the zero address](https://bitcointalk.org/index.php?topic=3635.msg53755#msg53755)" because it's created from a hash of all zeroes. These discussions tended to focus around edge cases for bitcoin address validity and not around use cases for purposely burning coins.

As far as I can tell the first conscious use of a burn address was on June 20, 2011 with [this transaction](https://blockstream.info/tx/369d241af595fc253479abe394e2f21fda05820a0416942f63266dd793035cf1) to 1BitcoinEaterAddressDontSendf59kuE. The oldest discussion of burn addresses I can find occurred on June 23, 2011 on [this BitcoinTalk thread](https://bitcointalk.org/index.php?topic=21552.0) about "The Bitcoin Black Hole."

Satoshi's [last activity on BitcoinTalk](https://bitcointalk.org/index.php?action=profile%3Bu%3D3) was December 13, 2010. The last time anyone heard from them was [on April 26, 2011](https://www.forbes.com/sites/peterizzo/2021/04/26/10-years-ago-today-bitcoin-creator-satoshi-nakamoto-sent-his-final-message/). It's quite plausible that Satoshi never considered provably burning their coins as an option.


## Conclusions

Did Satoshi stop mining with the Patoshi miner after block 54,316? It is impossible to know whether the mining software was changed and became undetectable as a result or if Satoshi continued mining using the publicly available mining software.

What am I sure of with regard to Satoshi?

- Their goal was to keep the "heartbeat" of the network alive while it was being bootstrapped.
- They mined on a single machine with a maximum hashrate of 6 Mhps.
- They could have easily earned more than twice as much BTC if they had mined at full power.
- They did not want to be in a position of dominating the network hashrate, but may have felt it was necessary during the earliest days when the network was far more fragile due to having fewer than five miners.
- They cared a great deal about difficulty adjustments. The adjustment algorithm was one of Satoshi's greatest innovations and [they opined upon the topic](https://bitcointalk.org/index.php?topic=43.0) more than almost any other.
- They wanted as many people to be able to mine on home PCs as possible ([Satoshi decried the FGPA / GPU mining race](https://bitcointalk.org/index.php?topic=12.msg54#msg54))

> We should have a gentleman's agreement to postpone the GPU arms race as long as we can for the good of the network.  It's much easier to get new users up to speed if they don't have to worry about GPU drivers and compatibility.  It's nice how anyone with just a CPU can compete fairly equally right now.

Anyone who claims that Satoshi was greedy simply hasn't done the math.
