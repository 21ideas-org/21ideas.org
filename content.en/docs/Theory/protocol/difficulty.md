---
title: "Bitcoin Difficulty Adjustment"
h1: "Bitcoin Difficulty Adjustment"
cover: /img/diff-935-en.jpeg
description: "The Difficulty Adjustment is the great missing innovation that made Bitcoin work."
url: difficulty
date: 2022-09-13
bookFlatSection: false
weight: 63
---

The Difficulty Adjustment is the great missing innovation that made Bitcoin work.

{{< hint btc >}}
This article by [Alex Waltz](https://twitter.com/raw_avocado) was published in his [Twitter](https://twitter.com/raw_avocado/status/1569679607158435840).

[Contribute](/contribute/).
{{< /hint >}}

While it ensures that Bitcoin's supply is predictable it also is a:

- fundamental security mechanism
- self-regulating mechanism
- crucial consensus component

Since its inception Bitcoin adjusted its difficulty 373 times.

For the 1st year of its existence, the difficulty did not increase, the 1st "big" change taking place on 2010-01-01 ~ block 32,256.

The biggest changes are:

- upwards being 302%
- downwards 27%

The Bitcoin Difficulty tells us how hard it is to find a hash that will make for a valid block. At the current difficulty of 30,977,051,760,460 — 1 in every 13,315,579,227,696,403,823,071,581 SHA256 hash will be a valid block. Valid means below a certain target.

Mining is a random and unpredictable process. Even more so miners can leave and join the network at any time. Both factors can influence how fast blocks come. The difficulty regulates the speed at which new blocks are added on to the blockchain.

The adjustment:

1. Maintains a consistent issuance of new bitcoins.
2. Ensures further that the incentives of the miners are aligned with the users and keep them honest.

Point #2 explained further:

Miners hash all the block data with a random nonce until they find a block hash that is smaller than a certain Target. There is a direct relation between Target and Difficulty. The smaller the target, the harder it is to mine.

{{% image "/img/diff-936-en.jpeg" /%}}

The Target number is stored in a block in the field Bits in a compressed format. The fact that the Target itself is hashed with the rest of the block data makes the difficulty forgery-proof. The Difficulty is usually presented in decimal format.

{{% image "/img/diff-937.png" /%}}

Target = Max Target / Difficulty

Max Target: the target, if difficulty is 1 (lowest possible difficulty). This value was picked by Satoshi. Both Max Target and Difficulty 1 were hardcoded in the genesis block by him.

{{% image "/img/diff-938.png" /%}}

A difficulty of 420, means that it will take 420 more tries(on average) to find a valid hash than with the easiest difficulty of 1. As mentioned The Genesis Block started with difficulty 1. Ever since every 2016 blocks, the Difficulty is recalculated.

When a block is mined, the miner also needs to add a timestamp to the block. This Timestamp is used to recalculate the difficulty each time. We want a new block to be found ~10 minutes, so after 2016 blocks we check what was the time between blocks.

{{% image "/img/diff-939.png" /%}}

Expected time: 2016 blocks x 10 minutes = 20,160 minutes.

If the blocks were generated faster, let's say 8 minutes, then we get 2016 x 8 = 16,128. 20160 / 16128 = 1.25.

New Difficulty = 1.25 * Old Difficulty

The hashrate is NOT known! We just know how fast blocks are generated. We use the timestamps in blocks to estimate how much hash rate is working on the network. This is not really an exact science.

But the timestamps themselves are not exact science.

{{% image "/img/diff-940.png" /%}}

As mentioned we need some reference of time in order to make sure we adjust for a block to come every 10 minutes. When a block is mined the miner adds the time inside. But what if he has the wrong time or he is lying?

> Why would miners lie?
>
> To get more coins!

It is in the miner's interest to say that blocks took longer to produce. This will have the effect of lowering the next difficulty.

Lower difficulty -> easier to mine coins.

To mitigate this attack Bitcoin has 3 rules:

1. MedianPast Time Rule - a node will NOT accept a block unless it has a timestamp greater than the median of the previous 11 blocks.

This is a consensus rule. If not satisfied, blocks are rejected.

[https://github.com/bitcoin/bitcoin/blob/4daadce36cfe9baa63c4d7d70de027add03a00df/src/chain.h#L259](https://github.com/bitcoin/bitcoin/blob/4daadce36cfe9baa63c4d7d70de027add03a00df/src/chain.h#L259)

2. Future Block Time Rule - The time stamp can NOT be more than 2 hours relative to the median time from the node’s peers.

MAX_FUTURE_BLOCK_TIME - is used.

This is a policy rule. Blocks from the future can become valid in the future.

[https://github.com/bitcoin/bitcoin/blob/4daadce36cfe9baa63c4d7d70de027add03a00df/src/chain.h#L22](https://github.com/bitcoin/bitcoin/blob/4daadce36cfe9baa63c4d7d70de027add03a00df/src/chain.h#L22)

3. The maximum allowed gap between the time provided by the nodes and the local system clock is 90 minutes.

This is a local client rule.

[https://github.com/bitcoin/bitcoin/blob/4daadce36cfe9baa63c4d7d70de027add03a00df/src/chain.h#L38n](https://github.com/bitcoin/bitcoin/blob/4daadce36cfe9baa63c4d7d70de027add03a00df/src/chain.h#L38n)

- Rule 1 ensures that the blockchain advances forward.
- Rule 2 ensures that the chain does not move too forward.
- Rule 3 is an extra safeguard.

Most importantly these rules tell us that managing time in Bitcoin is very hard and imprecise.

Even though the difficulty adjusts every 2016 blocks, it only takes into account 2015 blocks.

This is because Satoshi introduced a off-by-1 [bug](https://sourceforge.net/p/bitcoin/code/1/tree//trunk/main.cpp#l689). This is still present in the code today, as fixing it could result in a hard-fork.

{{% image "/img/diff-941.png" /%}}

Instead of checking how much time has passed between the last blocks of each 2016 period, the code compares the time between the 1st and the 2016th block of each period. Between 2016 things there are 2015 gaps. As a consequence Blocks are NOT actually 10 minutes, but 10.005 minutes. The 0.03 seconds are not a big deal but bug allows for 2 very weird things to occur.

You may expect retargeting interval to be (2 weeks)/2015, but it is even weirder. If Bitcoin hashrate is perfectly constant, and blocks have exact timestamps the difficulty would adjust once every 2 w, 20 m, 1.191658s.

As [@pwuille](https://twitter.com/pwuille) points out:

{{< tweet user="pwuille" id="1098651788343955456" >}}

The 2nd effect is the Time Warp Attack.

Given the rules mentioned above:

- Block Timestamp > median of prev 11 blocks
- Block Timestamp < now + some buffer

Within these rules, a miner could lie that it took longer to generate blocks.

{{% image "/img/diff-942.png" /%}}

The off-by-1 one makes the last block of the current period to not overlap with the 1st block of new period. An attacker could do this indefinitely and bring the difficulty to 1. However this attack would be very visible and would require miner coordination from miners.

Besides the temporal restrictions, the difficulty can not change by more than a factor of 4 difficulty. This seems quite a peculiar restriction but it serves a good purpose.

[https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp#L54](https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp#L54)

This rule further protects against the attack mentioned. Also it is possible to isolate a node from the network and send it blocks with false time stamps. The node would be tricked in lowering its difficulty and the attacker will be able to create false blocks easier.

{{% image "/img/diff-943.png" /%}}

Why 2016 blocks?

2 weeks / 10 minutes = 2016

Why not less than 2016?

It would allow for similar isolating attacks as explained above. An attacker can isolate a node, and send it blocks with lower difficulty. Any similar attacks, to succeed needs to keep up for 2 weeks.

To give you an idea of how difficult current times are.

My Apple M1 Max computer does 5.8Mhashes/s. It would take me 727 million years to find a block at the current difficulty. Thymos in 2010 "generated 5 blocks" on a Pentium processor (1000 times slower than mine).

Having a Difficulty Adjustment and even more adding these restrictions in order to eliminate these attacks was visionary. Never mind the fact we never had something like this before. IF anything this shows us how untrustworthy/ineffective Bitcoin at time management.

Maybe why timechain was replaced with blockchain As we can see from this comment in the Bitcoin Client released by Satoshi, was hoping add NTP. NTP - is a networking protocol for clock synchronization between computer system This never happened.

https://sourceforge.net/p/bitcoin/code/1/tree//trunk/net.h#l491

Finally, I want to leave you with this Bitcointalk post from 2010 made by satoshi, when a 1.34x increase in difficulty from 1 to 1.82 was quite a braggadocious achievement.

{{% image "/img/diff-944.png" %}}
_[https://bitcointalk.org/index.php?topic=43.0](https://bitcointalk.org/index.php?topic=43.0)_
{{% /image %}}