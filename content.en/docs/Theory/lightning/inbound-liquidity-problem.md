---
title: "Solutions to inbound liquidity problem"
h1: "Solutions to inbound liquidity problem in Lightning Network"
cover: /img/inb-847.jpeg
description: "If you want to accept payments through lightning network or to properly balance your channels — your node needs to have sufficient inbound capacity. This article describes what that is and practical ways to get it."
url: inbound-liquidity-problem
date: 2021-01-30
bookFlatSection: false
weight: 7
---

{{< hint btc >}}
This article by Dmitry Laptev was published in his [Medium blog](https://medium.com/lightningto-me/practical-solutions-to-inbound-capacity-problem-in-lightning-network-60224aa13393).

[Contribute](/contribute/).
{{< /hint>}}

If you want to accept payments through lightning network or to properly balance your channels — your node needs to have sufficient **_inbound capacity_**. This article describes what that is and practical ways to get it.

> Update(July 2021): three years after it was written, this post is still mostly accurate, but some ways of getting inbound liquidity are missing or outdated. The services I mostly recommend nowadays are: [lightning loop](https://lightning.engineering/loop/), [lightning pool](https://lightning.engineering/pool/), [lnbig.com](https://lnbig.com/#/), [lightningnetwork.plus](https://lightningnetwork.plus/), [t.me/theRingsOfFire](https://t.me/theRingsOfFire) and [ln2me.com](https://ln2me.com/).

# The problem

{{% image "/img/inb-848.png" %}}
_Toy network graph example. Left graph shows channels and its capacities — the information visible publicly. Right graph shows how the balances are actually distributed within each channel (unknown publicly) and directions funds can flow. From the picture on the left it may seem that node E has the best connectivity. But in practice all its balance is local, it has no inbound capacity, and can not receive or route payments._
{{% /image %}}

Payments over _Lightning Network (LN)_ work differently from how _on-chain_ bitcoin transactions work. [My previous post](https://medium.com/lightningto-me/lightning-network-45b4b2119d97) describes beautiful cryptographical magic behind LN, below are just few practical points.

- Lightning network consist of _two-sided channels_, and all the coins are locked in these channels.
- The total amount of bitcoins locked in a channel is called _channel capacity_.
- The amount on your side of the channel is called _local balance_. The amount on the side of the peer is called _remote balance_.
- When you open a new channel — all your balance is local (here we omit _dual-funded channels_ and _pushed amount_ for simplicity).
- The capacity of a channel always stays the same (here we omit _splicing_ for simplicity) and roughly equals to your local balance plus the remote balance (roughly because of _commit fees_).
- When you pay — the balance flows from your side of the channel to the remote side. When you receive payments — the other way around.

Which brings us to one of the biggest culprits:

> *In order to receive payments, your node needs to have sufficient **inbound capacity**: sufficient number of open channels with sufficient remote balance (otherwise the balance cannot flow to your side).*

To increase _inbound capacity_ means to somehow get channels with large remote balance. And for small new nodes it can be very-very tricky. And if that is not enough, there is one more aspect to this:

> *Not all inbound capacity is the same. It can be more useful or less useful. A channel from a well-connected and balanced node will connect your node to hundreds of other nodes. A channel from a new non-public node will not.*

Confused about how to get it right? Fear not, there are ways!

# Solution 1: Spend

This is the obvious one, but it needs to be said. When you use a channel to spend coins, they are written off the local balance and added to the remote balance. The more you spend — the larger your remote balance, the more inbound capacity you have.

Of course this approach does not solve all the problems for everyone. But if you have a choice to pay via LN — use it and you will have less troubles with incoming payments in the future.

# Solution 2: Ask for incoming channels

{{% image "/img/inb-849.png" /%}}

This is probably the best option for most nodes: if you need inbound capacity — ask for incoming channels. If you are a merchant — ask your clients, if you know someone running a node — ask them.

But by far the easiest way is to use _channel opening services_. To the best of my knowledge — there are currently only three out there.

1. [Thor](https://medium.com/@bitrefill/2d6ffbad3906) — a service by a lightning-enabled merchant [Bitrefill](https://www.bitrefill.com/). They can rent you a _private_ channel with capacities from 0.003 and up to 0.16 BTC, which they promise to keep open for 30 days. Depending on the capacity it will cost you anywhere from a dollar and up to more than 20 bucks (update: the price is much higher nowadays).
2. [Y’alls](https://yalls.org/about/) — a service by [Alex Bosworth](https://twitter.com/alexbosworth), which allows you to pay less than a dollar for a 0.02 BTC channel (update: the price is much higher nowadays). And while this may seem cheaper than Bitrefill, beware that Y’alls sets higher than usual routing fees (which your clients will have to pay).
3. [LNBig.com](http://lnbig.com) — a large liquidity provider that will sell a channel to your node for a reasonable fee.
4. [ln2me.com](https://ln2me.com) ([LightningTo.Me](https://lightningto.me/)) — my personal and non-profit hobby project that will establish a balanced channel of up to 0.1 BTC for free. And yes, it also sets very low routing fees.

There are also nodes such as [Lightning Power Users](https://lightningpowerusers.com/home/) that promise to open a channel to your node if you first open a channel to their node. Beware that this will not always work with nodes running _c-lightning_, which allows only one channel between two nodes.

(no longer working as of November 2020) Another interesting idea is a market place for channels. Two examples you can check are [glowsat.com](http://www.glowsat.com/#/) and [jolt.market](https://jolt.market). These services allow owners of LN nodes to buy and sell channels.

# Solution 3: Custodial exchange lightning bitcoins to on-chain bitcoins

This may seem ridiculous to some, but that is actually a thing: you can exchange bitcoins for bitcoins. In a way, this is also a form of spending: you spend lightning bitcoins and buy on-chain bitcoins.

I hope that soon enough many large exchanges will enable lightning deposits, but for the moment there are not so many options. I will just mention some links: [bitfinex.com](https://ln.bitfinex.com), [zigzag.io](https://zigzag.io/), [fixedfloat.com](https://fixedfloat.com/), [sideshift.ai](https://sideshift.ai/), [hodlhodl.com](https://hodlhodl.com/), [southxchange.com](https://www.southxchange.com/), [btcduke.com](https://www.btcduke.com/?lang=en), [coinplaza.it](https://www.coinplaza.it/), [ln.zone](https://ln.zone/), [lightningconductor.net](https://lightningconductor.net/invoice).

Please beware that exchange services are not always very reliable. Do your own research and immediately withdraw your coins once exchanged.

# Solution 4: LOOP and POOL

**Loop by Lightning Labs.** Similarly to the previous solution, _inverse submarine swaps_ implement an exchange from lightning (off-chain) bitcoin to on-chain bitcoin. But this solution is better than the previous one, because it is non-custodial (does not require trust). It is currently not very user-friendly and more oriented towards developers, so I will just mention it briefly here. Please refer to [the intro blog post](https://blog.lightning.engineering/posts/2019/03/20/loop.html) or go directly to [the github repository](https://github.com/lightninglabs/loop).

**Pool by Lightning Labs.** This is a non-castodial marketplace for users willing to sell and buy liquidity. Also not very user-friendly for the moment, but please refer to [the intro blog post](https://lightning.engineering/posts/2020-11-02-lightning-pool/) and [the github repository](https://github.com/lightninglabs/pool).

# Solution 5: Use custodial storage

This is an even more dangerous way, because it requires you to trust a service for a long period of time. Doing your own research here is even more important than in the previous case. Essentially, these services allow you to deposit your money into their custody and promise to give it back when you need it.

Examples include various custodial wallets: [BlueWallet](https://bluewallet.io/), [Wallet of Satoshi](https://www.walletofsatoshi.com/) or [Bitlum](https://bitlum.io). For these everything is quite clear: you deposit lightning bitcoins from your node to theirs, freeing up local balance of your node.

But if you are creative enough, you can also make use of other services. For example, you can send yourself a large tip via [tippin.me](https://tippin.me/). This way you will store some portion of your funds on their node.

# Solution 6: Keep your node online

If you simply keep your node always online— you will most probably get some incoming capacity. Open channels to random well-maintained nodes (I would appreciate if [my node](https://1ml.com/node/03bb88ccc444534da7b5b64b4f7b15e1eccb18e102db0e400d4b9cfe93763aa26d) will be one of them), make sure that your node is publicly advertising its IP address, check that the ports are open, and setup monitoring to ensure that LN software is running 24/7.

First, people like nodes with at least some connectivity that are always online, because these nodes are more likely to root their payments. Second, some nodes are running on _autopilot_, and if you are online — you may get a channel from these nodes just by pure chance.

# Conclusion

Accepting Lightning payments is trickier than accepting on-chain payments, but do not be discouraged, use some of the tips above. When your node matures — it will not be a problem at all.

Do you have any comments? Did I forget something? Please do not hesitate to share your thoughts! Let’s keep improving this post and help Lightning grow. Oh, and follow LightningTo.Me updates on [twitter](https://twitter.com/LightningTo_Me)!