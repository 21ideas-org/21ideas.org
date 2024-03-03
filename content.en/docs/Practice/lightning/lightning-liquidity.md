---
title: "Lightning Liquidity Management Guide"
h1: "Lightning Liquidity Management Guide"
cover: /img/lln-263.jpg
description: "Lessons learned from running a routing node on the Lightning Network."
url: lightning-liquidity-management-guide
date: 2021-08-07
bookToc: true
bookFlatSection: false
weight: 7
---

Lessons learned from running a routing node on the Lightning Network.

{{< hint btc >}}
This article by [Jameson Lopp](https://twitter.com/lopp) was published in his [blog](https://blog.lopp.net/lightning-network-liquidity-management-guide).

[Contribute](/contribute/).
{{< /hint >}}

Ever since people started running Lightning nodes on mainnet in early 2018, some have asked the question: what is a reasonable ROI to expect for placing my capital in a routing node? Nik Bhatia went in depth with his theory of how this may play out:

{{% image "/img/lln-264.jpeg" %}}
_[The Time Value of Bitcoin and LNRR](https://timevalueofbtc.medium.com/the-time-value-of-bitcoin-and-lnrr-e0c435931bd8)_
{{% /image %}}

But as we've learned over the years, there's far more to ROI than simply putting capital into Lightning channels.

{{< tweet user="alexbosworth" id="994603452310278144" >}}

In early 2021 I decided to set forth to try to determine how well I could do running a node with the goal of earning a profit by routing funds.

{{< tweet user="alexbosworth" id="1358807809631035395" >}}

I followed the process described in my earlier post to set up my tor-only node:

{{% image "/img/lln-265.png" %}}
_[Tor-Only Bitcoin & Lightning Guide](https://blog.lopp.net/tor-only-bitcoin-lightning-guide)_
{{% /image %}}

Getting the software running was the easy part. Next I had to figure out how to place my capital most effectively.

### Your Mileage May Vary

Unfortunately it's not possible to write a guide that simply says "connect to these nodes and start earning fees." You have to think of the Lightning Network as a competitive market for offering efficient flow of capital. Much like with a given trading strategy, if everyone started to use the same strategy, any advantages the strategy had will disappear and it would create opportunities for others to trade against it. If everyone builds the same bridges for capital flows, it would be a race to the bottom to compete over fees and it would be smarter for other operators to "counter trade" that strategy by building bridges elsewhere.

### A Plethora of Variables

You may have noticed that this is an extremely lengthy article. That's because there are many different issues one needs to consider when operating a Lightning Network node with the goal of maximizing routing. This includes:

- Capital Placement
- Routing Fees
- Minimizing on-chain fees
- Your Total Inbound / Outbound Capacity
- Maintaining Routing Capacity (Rebalancing / Submarine Swaps)
- Inbound / Outbound Capacity of Peers
- Peer Responsiveness / Uptime / Health
- Your Node's Responsiveness / Load / Network Connectivity

### Deciding What Channels to Open

Alex Bosworth has some detailed guidance [in this document](https://github.com/alexbosworth/run-lnd/blob/master/LIQUIDITY.md).

It's simple to open Lightning channels - the vast majority of nodes on the network will accept almost any value of incoming channel. As such, it's easy to lock up capital with a poorly performing peer who does not route many payments. And if your peer becomes unresponsive, an uncooperative channel close can put your capital in limbo for weeks.

In my initial experimentation I found that some peers were simply unroutable, perhaps because they didn't have enough liquidity going to other peers. It's pretty hard to tell what a peer's status will be without probing different routes through them, which requires opening a channel first. I do expect we will see services coming online to help address this issue and offer more insight regarding the liquidity status of a given node.

Whatever you do, **avoid using lnd's autopilot**; it just connects to large popular nodes. Similarly, it seems like a lot of folks are just going to Lightning Terminal or 1ML and connecting to the highest ranked nodes. It may be counterintuitive, but this is not a winning strategy if you want your node to route a lot of payments. Rather, you should **seek to create new bridges** by tying together peers that otherwise would have to take many hops to route to each other.

Another issue I've seen is folks using the BOS score to decide what nodes with which to open channels. Alex Bosworth, who wrote that scoring algorithm, has told me that it wasn’t designed as a routing node matching system / quality score.

I used the [node match tool](https://moneni.com/nodematch) to figure out which nodes would increase my connectivity the most. However, I'd once again caution against blindly opening channels to the ones ranked the highest. Before opening a channel with one of the recommended nodes, I check it on [Lightning Terminal](https://terminal.lightning.engineering/) to see if it's stable. Then I check it on [1ML](https://1ml.com/) to see if they are setting sane fee policies.

{{% image "/img/lln-266.png" /%}}

To get another perspective on how to increase my node's centrality, I used Gridflare's ["improve centrality" script](https://github.com/Gridflare/lndpytools/blob/main/improvecentrality.py) from [lndpytools](https://github.com/Gridflare/lndpytools). This is certainly not as user friendly as other web based tools as it requires getting a full network graph dump from your node, transferring it to your desktop / laptop, and then running the analysis on that json file.

{{% image "/img/lln-267.png" /%}}

In my experience, most of the "highly connected" nodes with 500+ channels tend to be unstable and thus don't route many payments. I suspect that they are putting too much strain on their hardware. However, others have reported a different experience - YMMV!

If you can afford it, don't create channels of < 10M sats. Keep in mind that the default max payment size is a little over 4M sats. So if you want to be able to maintain channels that can route the max payment size in either direction, you need at least double that - preferably more since it's pretty hard to have both enough inbound liquidity and enough outbound liquidity on both sides of the channel. If you're not trying to be a routing node, this doesn't matter as much. It's possible to be a high volume routing node for smaller payments with smaller channels - you'll likely need to do more rebalancing - but it's still desirable for your channel's capacity to be as high as possible.

If you can't afford 10M sats channels then I'd still suggest a **minimum of 1M sats**. My node has forwarded 400 payments over the past few months and the average amount forwarded was 420,000 sats - about $150. thus you'd need a nearly perfectly balanced 1M sat channel in order to be able to forward a single average payment. Hopefully the dynamics will change as more and more wallets start using multi-path payments.

In lnd you can prevent inbound channels below a certain size by setting this in lnd.conf:

```
minchansize=1000000
```

Not all nodes will allow you to open a channel with them, and they won't explain why they reject your channel request. For example, I tried to open a channel with a Zap node and got rejected even when I tried the max (default) channel size.

```bash
$ lncli openchannel --node_key 
03b428ba4b48b524f1fa929203ddc2f0971c2077c2b89bb5b22fd83ed82ac2f7e1 --local_amt 16000000 --sat_per_vbyte 1  
[lncli] rpc error: code = Unknown desc = received funding error from 03b428ba4b48b524f1fa929203ddc2f0971c2077c2b89bb5b22fd83ed82ac2f7e1: err=channel rejected
```

Before opening a channel you should try to determine what the routing policy of the counterparty will be. For example, LNBIG has pretty high fees of 175ppm - what's the point of paying for inbound liquidity to your node if folks will avoid using it due to high fees?

Some nodes have absurdly high routing fees; for example I noticed that both OKEX and OKCoin's nodes have their base fee set to 1M satoshis - $400! I actually spoke to OKCoin's CEO about this and they said it was done by design to discourage routing; I suggested they change their configs to simply reject inbound channel opens.

### Saving On-Chain Channel Open Fees via Batch Opens

If you're starting up a fresh node for which you need to open many channels, and you're comfortable on the command line, consider batching your channel opens with the following method.

*Batch open transaction with balanceofsatoshi and Electrum Desktop. Below is a quick description of the process, but this step involves an onchain transaction and therefore possible loss of funds if you make a mistake. There is a detailed tutorial on Jestopher's website: [http://satbase.org/bos-open/](http://satbase.org/bos-open/).*

1. In Electrum Desktop, go to Tools > Preferences, under the 'Transactions' tab, activate 'Advance preview'. Then in Tools, open the 'Pay to many' dialog box.
2. On your node, as a bos user, in the command line interface, enter this command:

    ```bash
   bos open <node pubkey 1> --amount <channel size in sats 1> <pubkey 2> --amount <channel size 2> <pubkey 3> --amount <channel size 3> <pubkey 4> --amount <channel size 4> <pubkey 5> --amount <channel size 5> <pubkey 6> --amount <channel size 6>
   ```
    
    After pressing enter, a 10 min counter will start, and you will need to do steps 3 to 5 within the 10 mins. Make sure to not use Ctrl+C once the timer has started! If you want to cancel the process and timer, just press Enter in the command line interface.
3. Do not enter any other command in the CLI, but just copy the output of the 'bos open' command, which will be a list of onchain addresses and amount in bitcoin separated by a comma. This is a format compatible with Electrum 'pay to many' option.
4. In Electrum, paste this list in the pay-to-many dialog box, save the transaction, click 'Pay', set a fixed fee as low as possible based upon the current conditions of the [mempool](https://mempool.space/). Make sure that RBF is NOT checked. Then click 'Finalize' and 'Sign' it using your hardware wallet (or Electrum wallet if not using a hardware wallet) but **DO NOT broadcast it!** This will be done by balanceofsatoshi.
5. Once finalized and signed, copy the signed raw transaction and paste it in the command line interface and press 'Enter'. After a few seconds or minutes, bos will display a transaction ID. You can then use your node's own block explorer to check the status of your batch transaction.

### Opening Dual Funded Channels

If you have a friend who will cooperate with you, you can save a bit on rebalancing / looping by initializing a channel that is already balanced. Here are the steps for Alice and Bob, using the bos CLI.

```bash
(NODE 1: Bob)

(0) Run: bos open-balanced-channel

(1) enter remote node public key

(2) enter full channel size

(3) enter fee rate

Open a new terminal window.

(4) Run: bos fund --fee-rate <fee> <address> <amount in sats>

Copy the signed_transaction and go back to 1st window and paste

(5) paste the signed_transaction to bos prompt in 1st window  
  

(NODE 2: Alice)

(0) Run: bos open-balanced-channel (it should see the request from node1 at this point)

(1) agree with funding rate (y/n)

Open a new terminal window.

(2) Run: bos fund --fee-rate <fee> <address> <amount>

Copy the signed_transaction and go back to 1st window and paste

(3) paste the signed_transaction to bos prompt in 1st window

(4) hit enter and this should work.  

check via: lncli pendingchannels
```

### Channel Rebalancing

In some cases I was never able to rebalance a channel due to insufficient liquidity. If you notice a channel can never be rebalanced and it never gets used to route funds, you may want to consider closing it and allocating that capital elsewhere.

You should make sure it makes economic sense before rebalancing channels. Otherwise you will just get caught in a loop of constantly rebalancing channels since they will rarely stay perfectly balanced. Blindly rebalancing in the hunt for maintaining perfect balance is almost assuredly going to end up costing you more in fees than you earn from routing payments. Thankfully 'bos' has a --dryrun option to see what the fee will be.

You can use bos to auto rebalance but in order to ensure that you don't perform uneconomical rebalances is that you'd want to set the max fee rate to your minimum fee rate / 2. You can achieve it by adding this line to /etc/crontab:

```
*/10 * * * *     jameson /path/to/bos rebalance --max-fee-rate 5
```

Eventually I stumbled across Carsten Otto's [rebalance-lnd tool](https://github.com/C-Otto/rebalance-lnd). I like this tool for rebalancing because it goes an extra step into determining if a given rebalance route makes economic sense. How is economic viability of a rebalance calculated?

Let's say your node has two channels for which to evaluate a rebalance; one to Bitfinex with 10M sats on your side and a 1,000 ppm fee rate. Your node also has a channel to LOOP and charges 5,000 ppm to forward funds. Sadly, your side of the channel is mostly empty.

It might be a good idea to push funds from the Bitfinex channel to the LOOP channel. If you do that for a 4M sat rebalance, this would mean:

1. After doing a rebalance there will be 6M sats left that can be pushed to Bitfinex. You won't be able to earn the 4M * 1,000 ppm = 4,000 sats for the funds you took out of the channel as part of the rebalance to LOOP. This is the opportunity cost you have paid.
2. You also have to pay whatever the rebalance transaction costs; this is your direct cost.
3. If you're lucky, you get to send those 4M sat to LOOP and earn 4M * 5,000 ppm = 20,000 sat. This is your potential future earnings.

The rebalance transaction only makes economic sense if Potential Earnings - Opportunity Cost - Direct Cost > 0.

The frustrating thing I quickly discovered was... rebalancing usually isn't worth it. It seems that < 5% of my attempted rebalances end up completing with this tool.

I set a cronjob to run a random rebalance every 5 minutes by adding this line to /etc/crontab:

```
*/5 * * * *     jameson /path/to/rebalance.py --to -1
```

My node has a couple dozen channels but at any given time only about 25% of them are in need of rebalancing according to the rebalance-lnd tool, which defaults to trying to keep at least 1M sats on each side of a channel. These defaults are unlikely to be optimal for your own situation. By running a random rebalance attempt every 5 minutes I expect that each channel in need of rebalancing will be attempted twice an hour.

**Warning**: _this can be costly if your channel fee rates are unrealistically high and you lower them in the future_! Make sure you understand the ramifications of automating actions that cost money.

**Pro Tip**: I learned after running rebalances every 5 minutes for a week that it filled up various dashboards with tons of unpaid expired invoices. In order to mitigate this issue, I suggest setting the following two lnd configs:

```
gc-canceled-invoices-on-startup=true  
gc-canceled-invoices-on-the-fly=true
```

### Channel Policy Management

Eventually I came across [charge-lnd](https://github.com/accumulator/charge-lnd) which is a tool to automatically dynamically change routing fees on my channels. It's worth noting that this is far from a perfect tool because unfortunately we can only set outbound fees for channels. This is a limitation of the Lightning protocol rather than the tool; you can read more about the debate over supporting inbound fees [on this github issue](https://github.com/lightningnetwork/lightning-rfc/issues/835).

Initially for the first few months of operation I set all of my channel fee policies to be:

```
base_fee_msat: 5000  
fee_ppm: 2000
```

These fees are an order of magnitude higher than the defaults; I just wanted to see if users on the network would bite. However, my node only sporadically routed funds with these fee levels. Presumably either my fees were too high and/or my node was not positioned well in the network graph.

Later on I set the following config for charge-lnd:

```
[proportional]  
chan.min_ratio = 0  
chan.max_ratio = 1  
strategy = proportional  
base_fee_msat = 1000  
min_fee_ppm = 10  
max_fee_ppm = 2000
```

And set a cronjob to run charge-lnd hourly by adding this line to /etc/crontab:

```
0 * * * *     jameson /path/to/charge-lnd -c /path/to/charge.config
```

Within 48 hours after enabling this dynamic policy management, I saw my node start routing more payments.

You shouldn't run this script more frequently than once an hour since these updates propagate relatively slowly (1 minute per hop) and if you change fees too often, the remote nodes that decide to route through you would often get `FEE_INSUFFICIENT` errors and probably blacklist your channels or node for hours. It's also desireable to reduce gossip traffic on the network.

After a couple months I still was only seeing sporadic routing so I changed my fee values to:

```
min_fee_ppm = 2  
max_fee_ppm = 200
```

One thing worth noting is that using dynamic channel policy manager somewhat conflicts with the logic used by the rebalance-lnd tool - it assumes that your channel fees will remain the same for the forseeable future when it calculates the opportunity cost you're paying by moving liquidity around. For example, if rebalance -lnd is using the current fee rate of your channel to decide when to rebalance, but charge lnd is changing the fee rates around, rebalance lnd would make a decision that makes sense to it at fee rate A but then charge lnd could come along later and change to fee rate B, invalidating the logic of rebalance lnd for fee rate A. It seems like rebalance-lnd would need to also know the charge lnd config and the historical flow of funds across the channel in order to better predict future fee revenue.

### Buying Inbound Liquidity

Gaining (and maintaining) inbound liquidity is one of the biggest challenges to running a routing node.

As of July 5, 2021 the cost to purchase a max amount of inbound liquidity (16.7M sats / $5,650) for a channel via certain services is:

- [Bitrefill](https://www.bitrefill.com/buy/lightning-channel/): 199,021 sats / $67
- [Y'alls](https://yalls.org/about/): 150,000 sats / $50.44
- [LNBIG](https://lnbig.com/#/open-channel): 24,101 sats / $8.30
- [Loop](https://github.com/lightninglabs/loop): 26,165 sats / $8.81
- [Pool](https://github.com/lightninglabs/pool): unknown (auctions are blind)

You can also use these services to open a channel and either have a reciprocated channel opened back to your or have funds returned on-chain:

- [https://lightningconductor.net/channels](https://lightningconductor.net/channels)
- [https://ln2me.com/](https://ln2me.com/)

Those methods require trusting the service to return funds. A solution that requires less trust is to use the bos dual-funded channel open functionality referenced earlier, though this requires you to find a channel counterparty who is savvy enough to use the balanceofsatoshis CLI.

If you happen to have an account on an exchange that supports Lightning deposits, you can send to the exchange and then perform an on-chain withdrawal, thus increasing your inbound capacity. [I gave a presentation](https://www.youtube.com/watch?v=HtU7ZlxvLL4&feature=youtu.be&t=273) years ago about the importance of onboarding exchanges to the Lightning Network to improve liquidity.

Finally, you can use a variety of communication channels to coordinate liquidity swaps.

- [https://lightningnetwork.plus/](https://lightningnetwork.plus/)
- [Reddit Lightning Triangles](https://www.reddit.com/r/TheLightningNetwork/search?sort=new&restrict_sr=on&q=flair%3ALiquidity%2BSwaps)
- [Rings of Fire](https://t.me/theRingsOfFire)
- [Plebnet](https://t.me/Plebnet)

If you're a balanceofsatoshis user, bos makes loop outs easy via

```bash
bos increase-inbound-liquidity --amount <sats> --with <pubkey>
```

Be aware that one of these swaps will generally take an hour to complete.

However, it's worth noting that there are no guarantees when it comes to inbound liquidity. Channel counterparties can always close the channel if they decide their capital is not well-allocated!

The one exception is [Lightning Pool](https://lightning.engineering/pool/) in which you are entering into a contract to purchase liquidity for a certain length of time and this duration is actually enforced at the blockchain level. Per the [whitepaper](https://github.com/lightninglabs/pool-paper/blob/main/liquidity.pdf):

{{% image "/img/lln-268.png" /%}}

Hopefully in the near future we'll also have native [liquidity advertisements](https://bitcoinops.org/en/newsletters/2021/07/28/#c-lightning-4639) available at the protocol level.

### Lightning Loop

I was hopeful that getting inbound liquidity via the [Lightning Loop](https://github.com/lightninglabs/loop) service would be easier and safer than trusting various third party services. It was incredibly easy to set up loopd and use loop on the command line.

```bash
$ ./loop quote out -v 16777215  
Send off-chain: 16777215 sat  
Receive on-chain: 16759995 sat  
Estimated on-chain fee: 338 sat  
Loop service fee: 16882 sat  
Estimated total fee: 17220 sat  
No show penalty (prepay): 30000 sat
```

It looks like [Autoloop](https://docs.lightning.engineering/lightning-network-tools/loop/autoloop) should also be fairly simple to set up, though I'm not sure if it's really necessary for a routing node. I'm hesitant to set up autolooping because most of the manual loops I attempt do not complete.

The tricky thing about doing loop outs to gain inbound liquidity is that

1. you want to do it for a fairly large value so that the on-chain fees make it worthwhile yet
2. the larger the value you try to loop out, the more difficult it is to find a path to route the funds off-chain.

The vast majority of my attempts to loop out larger amounts would fail due to lightning routing issues. For example, my node spun for 20 minutes trying to find a way to route 4M sats out of Blockstream's node. I suspect that they don't have much outbound liquidity; since it's a store most liquidity is probably pointed at it as a sink to receive payments.

### Lightning Loop's Node

As a test I opened a channel with the [LOOP](https://amboss.space/node/021c97a90a411ff2b10dc2a8e32de2f29d2fa49d41bfbb52bd416e460db0747d0d) node for which I paid 1 sat/b (154 sat).

Within a 5 hours, 11 payments had been forwarded through that channel and had consumed 98% of my outbound capacity to LOOP. I earned a bit over 3,000 satoshis in fees.

The LOOP node then closed my channel at 2.5 sat/b (244 sat) - presumably because it was so unbalanced it was unusable for the loop server to receive more funds. From what I've heard, they have an auto close when your local balance is at 20% or below. 2,600 sats worth of profit sounds pretty good, right?

LOOP appears to churn through a ton of channels; of the 48 channels open at time of writing, the average age is 16 days old and it seems to close 5% to 10% of its open channels every day.

Next I tried opening a large channel with LOOP for which I set a really high fee rate of 1% to see if anyone would bite.

```bash
lncli updatechanpolicy --base_fee_msat 5000 --fee_rate 0.01 --time_lock_delta 18 --chan_point <UTXO>
```

I also had to update my "charge" config so that it would ignore this channel and not automatically lower the fees back down.

```
[loop]  
node.id = 021c97a90a411ff2b10dc2a8e32de2f29d2fa49d41bfbb52bd416e460db0747d0d  
strategy = ignore
```

After several days and not routing any payments, I cut the fee in half and noticed a trickle of payments being routed. I may try this experiment again later on with a wumbo channel.

However, Alex Bosworth pointed out that it won't be a simple rinse-and-repeat cycle of opening high value channels with LOOP. Why not? Because every time you do so, it is consuming your total inbound liquidity to the rest of the network via all of your other channels. So imagine if your node has a total of 10M sats of inbound liquidity and you open 1M sat channels with the LOOP node. You'd only be able to repeat that ~10 times before you won't be able to route any more funds to the LOOP node with your latest channel.

After a fair amount of experimentation and failed loop outs, it appears that a winning strategy is to open a large channel with the LOOP node, set high routing fees on it so that it doesn't get drained, and then use the node to loop inbound liquidity cheaply because you won't have to pay routing fees.

### Freeing up Stranded Capital

Some peers never routed funds because they were unstable, so I'd close the channel to them because it seemed a waste of capital and route probing to keep them open. But if the peer was unresponsive when I went to close the channel, it would perform a force close that would keep the capital locked up for over a week.

There's not much point locking funds in channels if those funds don't get used. Thankfully bos also makes it fairly easy to figure out which peers to cull.

```bash
bos remove-peer --dryrun --idle-days 90 --fee-rate 5 --active
```

There's also the issue of peers that are offline too much in order for funds to be regularly routed.

```bash
bos remove-peer --dryrun --idle-days 30 --fee-rate 5 --offline
```

Since these operations require on-chain transactions I'm going to put them in a cron job to run on the weekend when fees are lower.

However, if you're going to close out a channel you might as well try to use that capital to rebalance some of your other channels before doing so.

You'll also want to close out channels that aren't earning you much in routing fees:

```bash
bos peers --fee-days 60 --sort fee_earnings
```

The output from this command will also show you which channels are probably more worthwhile to rebalance (the ones generating lots of routing fees.)

## Results

After I got my channels well balanced I waited a few weeks to see if I made much in fees.

```bash
$ bos forwards --complete --days 90
```

Across a dozen channels I had earned 17,025 satoshis in routing fees.

```bash
$ bos chart-fees-earned
```

{{% image "/img/lln-269.png" /%}}

However, I had spent 31,897 satoshis in on-chain fees.

```bash
$ bos chart-chain-fees
```

{{% image "/img/lln-270.png" /%}}

After another month or so of playing around with my node on the weekends, changing around dozens of channels, and adding automation:

{{% image "/img/lln-271.png" /%}}

It's worth nothing that nearly half of the 60,000 satoshis in on-chain fees that were paid were **due to a single force close of a channel**. This force close paid over 100 satoshis per virtual byte in fees when it could have been confirmed quickly with ~5 satoshis per virtual byte. In hindsight I believe this could have been avoided if I had been patient and waited for that peer to come back online before closing the channel. _If not for that unforced error, I'd likely have earned more in off-chain fees than I've paid in on-chain fees as of today_. This appears to be a common issue.

{{< tweet user="c_otto83" id="1417545255319134213" >}}

On the bright side, anchor channels should address this problem so that you don't have to rely on old and over-estimated fee rates. As of lnd 0.13.0 newly created channels use anchors by default; you just need to ensure you maintain ~100,000 sats in your on-chain wallet to use as a fee reserve.

In terms of off-chain fees, I am pleased to see that while my fees in ppm are lower now, I am routing transactions more consistently. My daily average for the past 90 days is 500 satoshis in fees collected while my average for the past 10 days is 1,000 satoshis collected.

While I'm not a profitable routing node at time of writing, I see a light at the end of the tunnel and will continue my efforts of analyzing and adjusting my node.

### Other Considerations / Random Thoughts

Prior to upgrading to lnd v0.13 my (tor-only) node was unable to connect to IPV4 nodes, which greatly limited my options for deploying capital. If you're running a tor-only node you should realize that you'll be at a disadvantage when it comes to getting inbound liquidity from nodes that aren't operating on tor.

{{< tweet user="wtogami" id="1405785148298338308" >}}

As an operator you should not focus only on individual channel balances but also on your node's overall inbound/outbound liquidity ratio. For example, if you have 100M sats in outbound liquidity but only 10M sats inbound, much of that outbound liquidity is useless. Getting inbound liquidity is one of the biggest challenges in my experience, even after performing a lot of loop outs.

Lightning Terminal Web's algorithm is proprietary; hard to say how much stock you should put into it. Also, it will consider your node unstable if it doesn't have 3 nines of uptime (99.9%) - from this standpoint, **running a routing node from a residential internet connection may not be a great idea without good backups**. Anecdotally, I noticed I had reliability problems with some random folks I peered with from telegram groups who were running their nodes on Raspberry Pis at home. From my own personal experience running Raspberry Pi nodes at home for years, I'd suggest buying a beefy UPS and connecting your modem, router, and node to it - and nothing else. Since those devices all have a pretty low power draw, you should be able to keep a node online for over an hour if not longer with a decent UPS.

If you want to try to improve your Lightning Terminal score, check out this tool that attempts to reverse engineer it: [https://lnrouter.app/scores/terminal](https://lnrouter.app/scores/terminal)

Running other services on your node can be problematic. Even though my node was overpowered (16 cores and 16 GB of RAM) I noticed that when I ran an electrum server on it and the machine load was averaging over 1.0, Lightning Terminal started reporting my node as "unstable"

Operating a routing node and seeking liquidity flows feels like of like deep sea fishing. You know that the fish are all around you but you can't actually see them. You have to keep throwing out lines and nets to infer where the flows of funds are that you can tap into.

{{< tweet user="alexbosworth" id="1412788505818931200" >}}

The max non-wumbo channel size is 16.7M sats. In my experience, trying to route payments of more than 4M sats tends to be problematic. Remember that the default max single payment value is slightly over 4M sats. Even if that payment value cap is lifted and all channels were perfectly balanced and were of the max capacity, that would make the max feasible payment 8.3M sats.

Dr. Carsten Otto has a ton of helpful notes on his web site at [https://c-otto.de/](https://c-otto.de/)

## Going Forward

The tooling for lightning nodes continues to evolve; while this guide is likely out-of-date in different ways, I'm maintaining updated lists of [node management tools](https://www.lopp.net/lightning-information.html#node_tools) and [liquidity tools](https://www.lopp.net/lightning-information.html#liquidity) on my web site.

There's still plenty of room for improvement with regard to tools that help Lightning Node operators better understand liquidity management and routing.

I'd like to see better visualizations around channels that forward payments. [Thunderhub](https://www.thunderhub.io/), for example, can create chord charts to show this activity; I hope that more lightning dashboard software will start doing that automatically.

{{% image "/img/lln-272.png" /%}}

It would be cool if you could easily send messages to the operators of your peer nodes to ask them what's up / determine their intentions. You can theoretically use keysend to send them a 1 satoshi payment with a message embedded, but there's no guarantee the node operator will ever see it. "bos send" will do just that.

```bash
bos send <key> --message="hey what's up?"
```

There's a bit of a bootstrapping issue with message sending. Node operators may not notice them because they aren't using Thunderhub or they haven't set up a Telegram channel for bos to send messages to, thus other node operators don't bother sending messages because they are likely to be missed.

Rene Pickhardt and Stefan Richter published a paper showing that finding optimal routes is vastly more complex unless the base fee is set to 0: [https://arxiv.org/abs/2107.05322](https://arxiv.org/abs/2107.05322)

I saw a ton of folks setting their node's base fee to 0 but I suspect this is misguided and won't **practically** improve anything at time of writing - this is a theoretical optimization for which nodes will only start reaping benefits if developers actually implement Rene and Stefan's path finding algorithm.

Also, the paper doesn't discuss other trade-offs to doing so such as the introduction of DoS vectors. Consider that when your node accepts a HTLC to route sats through it, the node must persist data related to that HTLC in its database. As such, if your base fee is 0 then someone could route millions of millisatoshi payments through your node without paying much in fees. However, in the grand scheme of potential attacks it may be trivial compared to other known issues such as [griefing](https://bitcoinmagazine.com/technical/good-griefing-a-lingering-vulnerability-on-lightning-network-that-still-needs-fixing) and [extortion](https://lists.linuxfoundation.org/pipermail/lightning-dev/2020-June/002735.html) that enable a malicious actor to lock up lots of funds for free.

It would also be cool if someone built a tool to visualize your node's inbound/outbound liquidity and all of your peer nodes' inbound/outbound liquidity. This is somewhat difficult to know (by design) but perhaps could be roughly estimated with carefully constructed route probing. Edit: shortly after publishing this article, a [service](https://lnrouter.app/lookups) came online to help better visualize the liquidity of other nodes on the network.

If you made it all the way to the end of this novel, congrats! Hopefully it's clear by now that the Lightning Network is a whole new world for us to explore and build.

Thanks to [Alex Bosworth](https://twitter.com/alexbosworth), [Erin Malone](https://twitter.com/ErinEMalone), and [Dr. Carsten Otto](https://twitter.com/c_otto83) for reviewing and providing feedback.
