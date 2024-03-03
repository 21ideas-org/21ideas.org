---
title: "Lightning Network Privacy"
h1: "Current State of Lightning Network Privacy"
cover: /img/pln-216.jpeg
description: ""
url: lightning-network-privacy
date: 2021-05-10
bookToc: true
bookFlatSection: false
weight: 3
---

{{< hint btc >}}
This article by Tony was published on [abytesjourney.com](https://abytesjourney.com/lightning-privacy) website.

[Contribute](/contribute/).
{{< /hint>}}

The Lightning Network has been growing recently, with around [11,000 active public nodes out of around 20,000 total](https://1ml.com/statistics). Besides the advantage of near-instant payments, there can be privacy improvements to Lightning as well. Unfortunately, there are scenarios where Lightning is not great for privacy.

I’d like to unearth some of these. Not as FUD about the network, but to keep people as informed as possible so they may privately use Lightning. Everything in this article is public knowledge and known to the industry to some degree. This is my attempt at aggregating the topic of Lightning privacy from a higher level.

Everyone has a right to financial privacy and deserves to be aware of these things.

## Overview of Lightning

{{% image "/img/pln-217-en.png" %}}
_Alice paying Carol via the existing channel she has with Bob._
{{% /image %}}

As a quick overview, a Lightning node will lock up a Bitcoin Unspent Transaction Output (UTXO) into a channel with another node. The two nodes can instantly transact with each other without broadcasting onto the blockchain. This is often extended such that you can transact in the same way to nodes your peer is connected to, and so on.

In a multi-hop scenario, the final destination is receiving part of a different UTXO. It’s like if I gave you a $10 bill to give to your friend, and you instead give your friend 2 $5 bills instead of my exact $10 bill. Except in Lightning, this happens cryptographically without having to trust your friend.

### Privacy improvements in Lightning

Each peer in a multi-hop transaction is requesting to pay the next peer in the hop. All they know is who asked them to route a payment and who is the next peer to hand the funds off to. Due to the [onion routing](https://wiki.ion.radar.tech/tech/lightning/onion-routing) properties of payments, the router does not know who the rest of the peers are down the path nor who came before them. This includes the original sender or final destination.

Senders in the Lightning Network end up having great privacy because of this. The sender knows who the destination node is, crafts the onion routed payment and sends it off. Even the first peer can not know for certain if that was the original sender (some caveats in the sender section).

Receivers do not have the same privacy. They need to give certain information to the sender so that they can send the payment. The information they give out can be pretty revealing.

## Outline

I’ll begin with some basics on Lightning Node privacy from the initial setup. Then the on-chain properties that are revealed in Lightning channels. From there, I’ll get into sender and receiver privacy and the information revealed as funds flow through the network.

Finally, I will discuss some future lightning features and properties, both recently developed and soon to be released.

Throughout this article, I will recommend solutions you can use. In the end, I will suggest an ideal and realistic setup you can do today.

## Node Setup

### IP vs Tor

One of the most important things you can do first is to set up your node to be Tor only.

Most, if not all, home node implementations like [Raspiblitz](https://github.com/rootzoll/raspiblitz) or [Umbrel](https://getumbrel.com/) will set up your node this way. For one, it’s easier on the setup and there’s no port forwarding required which would be a pain for most users.

While it is possible to change your network, this information could be archived by others. You can look at [1ml](https://1ml.com/) to see network changes they keep track of.

{{% image "/img/pln-218.png" %}}
_https://1ml.com/node/030c3f19d742ca294a55c00376b3b355c3c90d61c6b6b39554dbc7ac19b141c14f/history_
{{% /image %}}

Putting that info into an IP lookup site, I can see that this node is using an Ireland AWS server for their node.

{{% image "/img/pln-219.png" %}}
_https://whatismyipaddress.com/ip/52.50.244.44_
{{% /image %}}

If you were to put your IP address into a [lookup service](https://whatismyipaddress.com/ip-lookup), it will reveal your ISP and approximate location near you.

Whether you host on an AWS server or a home server, private info can be revealed about you through court order or from insiders. If you insist on an IP node, consider an always online, anonymous, static IP VPN in order to shield your home / server IP.

One disadvantage to using Tor only is that IP-based nodes can not start a connection to you. However, you can start a connection with them instead. According to [1ml](https://1ml.com/statistics), there are about 5239 tor nodes currently.

### Node Identity

#### Alias

{{% image "/img/pln-220.png" %}}
_https://1ml.com/_
{{% /image %}}

On your node you can set an alias, which is how we can see the names of these nodes in a peer-to-peer way. If you are running a service or store off of your node, you’d probably want your alias to be descriptive enough for others to make the association.

However, if not, I would suggest not picking a name that is tied to your real-life name. If you have a pseudonym anyway, then you may consider it. The warning I have is that it’s like sticking a name onto your bitcoin addresses and you don’t want to do that in most cases. It makes you a target since node public capacity, UTXO info, etc. is displayable to the rest of the network.

#### Apps

Node alias is announced when you open a public channel, but there are other ways your node can be associated with your identity.

Chat-based apps like [Sphinx Chat](https://sphinx.chat/) work by communicating from your node to other nodes through the Lightning Network. It’s very cool tech that I love and use. Yet, it relies on linking a node with Sphinx and when people chat with you, they are sending payments to your node. From there, they can see all the public info on your linked node. Raspiblitz has a [feature](https://github.com/rootzoll/raspiblitz/issues/2073) in the works to spin up a secondary node on your same device that may be used with Sphinx. I’d highly recommend using that or spinning up a second node that you keep for cool use cases in the network. Sphinx currently allows you to use one of their hosted nodes instead, but keep in mind that they can track and read every message.

Besides apps like Sphinx, be cautious of any service that sends you funds and knows your identity. You would not give your XPUB to a service, don’t give out your node identity to one either. More on why not in the “receiver privacy” section.

One notable exception though is [LNURL Auth](https://github.com/fiatjaf/lnurl-rfc/blob/master/lnurl-auth.md). Despite it being lightning-based, it does not tie a link to your Lightning node. Each website gets a different LNURL identifier so they don't correlate with another. This is a far better and more private way to log in to a service rather than using an email or phone number. An LNURL service might still want to send funds to your node, but by itself, it’s private and non-correlatable.

## UTXOs & their use in Lightning

Like I mentioned before, one must lock up a UTXO with another node in a payment channel. Open channel transactions look just like transferring funds into a multi-sig address. Nothing outright is revealed by this transaction or address. However, the information about the channel (if public) is distributed across the Lightning network. The channel information includes the transaction & output index (channel point).

{{% image "/img/pln-221.png" %}}
_https://1ml.com/node/03cde60a6323f7122d5178255766e38114b4722ede08f7c9e0c5df9b912cc201d6/channels_
{{% /image %}}

[Private channels](https://blog.bitmex.com/lightning-network-part-7-proportion-of-public-vs-private-channels/) are not published to the network. If a peer wanted to try to publish it across the network, it would be rejected per protocol requirements.

So let’s dissect the use of UTXOs in the Lightning Network.

### UTXOs used for public channels

A lot of privacy-aware Bitcoiners know that it is a healthy practice to generate a new bitcoin address for each use. Lightning nodes use the same practices when creating a new address for normal transactions and new channels. Given that you can’t tell what is an open channel transaction, you can’t normally link them to others. However, the information passed along the Lightning Network is where the link lies.

When you open a channel, transaction outputs are spent as the inputs, and you get a new UTXO locked. One can then tell the source of funds used to create the channel, via chain analysis. By looking at _just_ the channel info, it is not possible to detect _which_ node locked up the funds. We only know that it was one of the two (although your partner knows it wasn’t them and could share that info out of band). That said, it’s possible to deduce which node locked up the UTXO.

Note: With [dual-funded channels](https://bitcoinops.org/en/topics/dual-funding/), it could have been both. However, it’s possible to bait a node into revealing their UTXOs by initiating a dual-funded channel request and aborting midway. If that UTXO were used in a dual funded channel later, we’d now know which node it belonged to.

So we’ve figured out that, currently, one or the other node in a channel owned the UTXOs used. A 50/50 chance. But imagine a situation where Alice has a UTXO received from Coinbase and used it to open a channel. Coinbase would know Alice was the initiator since they track what their users do after leaving. It would either be Alice or a person Coinbase was paying on behalf of Alice. If Coinbase was concerned, they could ask Alice and lock her out of her account if they were suspicious enough.

In another case, if Alice had 1 UTXO and she opened a channel for a partial amount then used the change to open another, you could assume both were initiated by Alice. Alice used her change from one to open another so we know those UTXOs belonged to her. A node opening a channel for a partial amount sets the change address back to itself.

{{% image "/img/pln-222-en.png" %}}
_Alice using TX 1 to open two consecutive channels reveal her as the opener._
{{% /image %}}

When it comes to public channels, at best you have a 50% chance that a UTXO belongs to your node. At worse, a 100% chance that some or all your channel UTXOs belong to you.

Because the entire Lightning Network can see this, consider it public info. It is a possibility that chain analytics firms and regulated entities take advantage of it.

Solution: when opening public channels, use the full amount of a single UTXO not tied to your identity.

### Private channels are not private

This topic was a fun one to [rabbit hole into](https://twitter.com/cycryptr/status/1384355046381473792?s=20). Private channels are a term used to describe a channel that is not announced to the Lightning Network. The public cannot passively know that a channel exists between two nodes nor the UTXOs behind them. Only your channel partner knows this information by default. That said, let’s dive into how unannounced channels are not actually private.

For starters, there are several reasons to open an unannounced channel. You may not want other nodes to route payments down it because you are a mobile node and not always online. You may also want to conceal the true amount locked up in channels between your node and another. You do this by having a public channel with a peer but having much larger private channels with the same peer. You may route through private channels yourself without the public knowing. It’s possible to detect the use of this shadow routing via balance probing techniques, though channel info is concealed.

Another reason people assume they want unannounced channels is to conceal the UTXO. After all, it is standard privacy hygiene to not link your UTXOs to each other. This assumption breaks down for several reasons.

{{% image "/img/pln-223-en.png" %}}
_An invoice with private routing hints will include channel ID which breaks down into UTXO info._
{{% /image %}}

To receive funds via private channels, you have to encode the private channel info into the invoice that you give to the sender. Unfortunately, channel IDs are determined by the UTXO info. Senders can tell what UTXOs make up your private channels. Remember the 50% best case, 100% worse case spoken above, the same is applied here. If you did not send the invoice via a secured communication channel, consider it public info. Also, consider that the sender may use this info against you and could sell or publicize it.

{{% image "/img/pln-224-en.png" %}}
_https://arxiv.org/pdf/2004.00333.pdf_
{{% /image %}}

But it gets worse. Not only do you reveal this info to each sender you request funds from, but it could also be probed by an attacker. It is possible to spam payments through a node in an attempt to hit an actual private channel by guessing the UTXO. An attacker starts by analyzing all transactions on the Bitcoin network and creating a set of UTXOs that sent to a multi-sig looking address. Once the attacker detects that a UTXO is used in a victim's private channel, the attacker can then attempt to guess who the other node is. They do this by replacing the node pubkey with one of the 20,000 nodes known by the Lightning network. The only way it is not possible to guess the other node is if they never opened a public channel nor ever had an unannounced channel revealed.

If you opened an unannounced channel and never created an invoice, it’s still possible your channel partner revealed the channel and public key anyways. They could have included it in one of their invoices. They do not need your consent to do this.

Therefore, even if you are a “fully private” node, never opened a public channel, never shared an invoice with anyone, all it takes is one of your channel partners to reveal your private channel and public key via invoice. An attacker can then probe YOUR private channels, UTXOs, balances, and even channel partners. So assume any of your unannounced channels and the UTXOs backing them are public to the world. Further research will be required to determine the cost and time to execute this private channel probing attack.

Solution: to conceal one of your UTXOs, open a private channel behind one of your public channels. An alternative is that you get another node to open a channel to you, revealing only their UTXO.

### Closing channels

While it is possible to find active private channels, it is also possible to [find the existence of closed private channels](https://arxiv.org/pdf/2003.12470.pdf). Chain analytics could be used on closing channel transactions to figure out both channel peers.

{{% image "/img/pln-225-en.png" %}}
_It's reasonable to determine Alice's and Bob's private channel based on the following the closing channel tx change._
{{% /image %}}

The change from a private channel could be used in a new public channel or leaked in a private one. If both nodes used the change from a private channel to create another, then there is a probable link between them. You would be able to look back at the original transaction output and determine that was used for a private channel between the nodes.

It’s also possible to detect that a transaction output was part of a private channel if that private channel needed to force close. Force closed channels reveal unresolved outputs on-chain that are specific to Lightning. From there you could analyze the change outputs in the same way to detect channel peers.

Solution: after closing a channel, mix the change.

### Mixed UTXOs

Post mixed UTXO management is a hot topic amongst coinjoining Bitcoiners. Unless necessary, it is typically a bad idea to mix your UTXOs and then rejoin them back together. If you have multiple UTXOs from the same source, mix them into new ones, then send them to the same address, you reduce the anonymity set of those coins. This gets worse as you consolidate more UTXOs.

There is a lot of nuance and expert level on-chain analytics into de-anonymizing post-mixed UTXOs. My general advise is to not mix them back together, but there’s a lot of variables at play.

Based on that, I believe it’s also a bad idea to send more than 1 mixed UTXO to your Lightning node. For all the reasons described above, all your mixed UTXOs on your Lightning node have the potential to be linked together. It does not matter if they are for public or private channels. Unless you know what you are doing with your mixed UTXOs, I would avoid consolidating onto your node as much as possible.

Solution: Only use 1 mixed UTXO per node.

## Receiver Privacy

At this point, I’ve laid out a brain dump on UTXOs and channels making up your node. Now let’s dive into what information is revealed whenever you receive payments.

### Invoices

Typically, whenever you want to receive a payment, you create an invoice and give that to the sender. The invoice will consist of your node's public key, the amount, the description, private routing hints, and is signed by your node's private key. With your public key, the sender can look up your node to get channels, UTXOs, tor/IP address info, and much more. The private routing hints reveal your private channel UTXO info too.

{{% image "/img/pln-226.png" %}}
_An example lightning invoice_
{{% /image %}}

All that from a little invoice. Here’s where it can be quite careless. For one, be cautious of where you share the invoice in the first place. If you are trying to be a private/anon node, do not share invoices in public forums. Or even unencrypted messaging or to a person you might not trust with your node info. If you do, consider the whole world knowing that information about your node and linking it to you. If you are a merchant, there’s no way around this. Assume the public can create invoices off of your node by attempting to make a purchase at your store.

Memo’s can reveal even further information about you or the transaction in question. You wouldn’t say “For a drug deal” in a payment description on PayPal, the same is true here. Each invoice is signed, so any message you put in the invoice is essentially a signed statement by your node. The classic example is Matt Odell creating an invoice mentioning poker in the memo. He gave that invoice to his friend that paid via a KYC custodian. That custodian now knows more than Matt would have probably wanted them to know. It even puts his friend at risk with the custodian. If that custodian wanted to, they could censor payments to Matt's node due to a history of gambling-related activity.

Given that each invoice you give out reveals your node’s public key info, they are also correlatable. In an ideal world, invoices that you give out do not reveal information about your node and are not linkable. Each new invoice would show new public key information. This is technically possible today and in fact, the [Muun mobile wallet](https://muun.com/) does this!

Muun uses fake private channels with rotating key pairs attached to them. These create invoices that appear to route _through_ your node to a different destination each time giving you plausible deniability. Though it’s not perfect.

Eventually, one might assume that your node routing payments to these virtual private nodes is actually the end destination. But that assumption would not always be correct. It could include independent nodes that may have a single private channel to your node.

Solution: Create a new node public key for each invoice (in reality, only easy to do on Muun since that’s the default). I hear other projects are working on this in general.

## Sender privacy

Sender privacy is typically great on the Lightning Network. Senders will create an encrypted onion so no nodes can tell who else is in the route except for the next hop. As the funds flow through the network, the onion is unwrapped so previous hops are also unknown. Only the direct previous node is known, so this protects the original sender as well. Though, in some cases, the original sender can be assumed.

Why is it important to have sender privacy in the first place? If Alice is buying something from Bob, and Bob knows Alice, why is it a problem that Bob knows what _node_ Alice used to send the funds?

This goes back to why on-chain privacy is important and why we rotate bitcoin addresses after each use. Bob does NOT need to know all the information from a node that I’ve revealed in this article. Home IP address, channels & UTXO info, balances, and much more. All Bob needs to know is the minimum amount of info to fulfill Alice’s order and the fact that Bob received the funds specific to that order.

So let’s dive into some cases where the sender can be revealed.

### 1 hop

{{% image "/img/pln-227-en.png" %}}
_A small Lightning Network where Alice pays Bob. Who else could have paid Bob but Alice? Bob knows this._
{{% /image %}}

Imagine if Alice has a node with only one channel with Bob. She sends a payment to Bob through their direct channel. Bob would be able to assume Alice’s node was the original sender. What other node could have sent those funds through Alice? Alice may have a private channel with another node, but as we’ve figured out, the existence of private channels can be revealed.

The same can be true if Bob determines that Alice is not a routing node. Some nodes may reject routing requests. If Bob attempts a payment down Alice's node and it is rejected for this reason, then Bob has a reasonable assumption that she doesn't route. There could not have been another node that routed through Alice into Bob. It's possible Alice only denies routing requests one way but this would be very non-standard, if at all.

Solution: If you only have 1 channel, do not send funds directly to your channel partner as the destination.

### 2 hop

{{% image "/img/pln-228-en.png" %}}
_A small Lightning Network where Bob is an LSP. Bob can know payments are from one user to another when they have no other connections._
{{% /image %}}

Imagine a scenario where Alice is connected to Bob, and Bob is connected to Carol. Bob knows Alice is not connected to anybody else, and Bob knows Carol is not connected to anybody else either.

Alice sends a payment to Carol, passing through Bob. Bob knows Alice sent a payment to Carol and for what amount.

This is a common setup amongst mobile wallet [Lightning Service Providers](https://medium.com/breez-technology/introducing-lightning-service-providers-fe9fb1665d5f) (LSP). It is not common for mobile users to be connected to any other channel but the LSP itself. A mobile user sending to another mobile wallet user where they use the same LSP would mean the LSP knows when their users pay each other.

Solution: If you are using a mobile LSP, open other public channels as well, or don’t attempt to pay other users using the same LSP.

### Sending funds through the network

I have laid out a 1 & 2 hop scenario where a router or the destination might be able to tell the sender. There are more active ways to attempt to figure out this information across longer paths.

#### Balance probing

[Balance probing](https://s-tikhomirov.github.io/lightning-probing/) is where an attacker attempts to route many fake payments through nodes in an attempt to figure out how much funds sit on either side. In the Lightning Network, only the total public channel amount is known by the network. In a 1 bitcoin channel between Alice and Bob, at any given point, Alice could have .7 of the funds on her side while .3 on his. That could change as payments flow through their channel.

{{% image "/img/pln-229-en.png" %}}
_Carol attacking the channel between Alice and Bob to figure out the balance between them._
{{% /image %}}

An attacker can know balances by trying to route payments with different amounts through the channel between Alice and Bob. If a 1 bitcoin payment doesn't route through to Alice, the attacker lowers the amount until it does. The attacker uses a fake payment hash that will never fulfill. Once Alice responds with a payment hash error, the attacker knows the probe was successful. The balance on Bob’s side of the channel is approximately the amount on the highest successful probe.

If Alice’s channel with Bob changes to .1 on her side and .9 on his side while none of Bob’s other channel balances has changed, we know that Alice has paid Bob .6 Bitcoin. Either in 1 payment or many.

You could also extend balance probing to the entire network. If a large payment went through 2+ nodes, an attacker could follow the funds by taking snapshots of balances before and after the payment.

While this is possible, in practice it would take a lot of resources to do it quickly, especially as the network scales. It’s lengthy to snapshot the entire network. As more payments flow through the network, it becomes unreasonable to be able to do it quickly enough to determine individual senders and their destinations with exact amounts. There have been [papers](https://eprint.iacr.org/2021/384.pdf) and research into the cost and time needed for these attacks. It’s not reasonable for anyone to be able to do it at scale. However multi-billion-dollar analytic firms or triple letter agencies definitely can.

More reasonably, an attacker could target specific destinations. It would be possible to gauge their overall economic activity.

An attacker could target a competitor’s store node and snapshot all of their channels. They would be able to watch as the total inbound capacity of their node decreases. The attacker might see the prices of the store’s items and make some assumptions about the items purchased. A possible solution to help combat this is for a merchant node to continuously push out funds in proportion to what they receive. Ideally, as soon as payments are received in an attempt to not have attackers' snapshots capture individual purchases. They may push it to another node they own but uncorrelated with their store.

There are ways to determine if you are being balance-probed and you could attempt to cut it off. Though it might be indistinguishable from nodes having a hard time making a payment and trying different paths. I believe it’s a safe assumption to refuse to forward after a couple of attempts to protect privacy. Accidentally refusing to route an actual payment may result in missed routing income. Also, fewer payments would be sent your way due to the reputational nature of payment path algorithms. I do not know of any software to help combat balancing probing, so something custom would need to be written.

Solution: Until a better method of alleviating probing gets developed, periodically rebalance and send funds in & out of your node. Not the best solution, but it’s a hard problem to solve.

#### Timing attacks

[Timing attacks](https://arxiv.org/pdf/2006.12143.pdf) make reasonable assumptions based on how quickly something took. In the case of the Lightning Network, a router might be able to determine who the destination of a payment is. They do this based on how quickly the successful transaction was. There are basic network lag constraints as we go hop to hop through the network. For instance, imagine if the average network lag is 100ms per hop. A payment succeeding in 500ms could assume that the destination for the payment is 5 hops away. If the attacker scans the time between each node, they could get an even better calculation.

As the network grows and as destinations and latency increase, I believe this would be harder.

Solution: As a node, you may add a random amount of time to forward or accept payments. However, this may degrade the experience of instant payments by a few seconds. I don’t know of any software to currently do this, so I believe it would need to be custom (Edit: [a reddit user](https://www.reddit.com/r/TheLightningNetwork/comments/n99ksn/current_state_of_lightning_network_privacy/gxnfq2u?utm_source=share&utm_medium=web2x&context=3) shared their [c-lightning plugin](https://github.com/ajpwahqgbi/lightning-tools/tree/master/clightning-plugins/jitterbug) to accomplish this).

## Additional lightning protocol tech

While this is where we stand, there are a few additional lightning tech worth mentioning.

### MPP

{{% image "/img/pln-230-en.png" %}}
_A small Lightning Network where Alice pays an invoice through multiple paths. Bob nor Carol see the total payment amount._
{{% /image %}}

[(Base) Multipath Payments](https://lists.linuxfoundation.org/pipermail/lightning-dev/2018-November/001577.html) are something that is live today but may not be as common to use. Instead of a single payment going a single route, this allows a single payment to take multiple routes of smaller amounts. This helps improves the chance of a larger payment succeeding across the network. It does offer a bit of privacy as well.

Based on the Balance Probing section, instead of a large payment flowing through the network, smaller payments are made. This could do a better job of concealing a payment and the exact total amount. One con is that each MPP uses the same payment hash so a router (or colluding routers) could correlate them together.

### AMP

[Atomic Multipath Payments](https://lists.linuxfoundation.org/pipermail/lightning-dev/2018-February/000993.html) are an improvement on base MPP such that each split-up payment has a different payment hash. Therefore, they are not as correlatable across the network like MPP is.

### Rendezvous

[Rendezvous](https://bitcointechweekly.com/front/proposal-for-rendez-vous-routing/) routing is a great improvement on receiver privacy. Receivers conceal their public key and private channels by creating an invoice with encrypted onion information already filled in. They specify a random node that the sender should create a path to, and from there the rest of the payment is routed. The sender never knows who the final destination node is, and neither does any node along the route.

### Route blinding

[Route Blinding](https://github.com/lightningnetwork/lightning-rfc/pull/765) is an alternative proposal to Rendezvous. It is similar but would help prevent private channels from being revealed to attackers. Route Blinding allows for receiver privacy and for routes to be repeatable with different amounts. However, it may be less private overall and there may still be some probing possibilities.

Rendezvous and Route Blinding may still be prone to balance snapshot attacks as a way to reveal the sender and destination. All it would take is a snapshot before the payment was made and one afterward. With Route Blinding, it may be possible to enforce it such that private channels are not probable without the node giving out a route blinded invoice.

### Trampoline routing

[Trampoline routing](https://bitcoinops.org/en/topics/trampoline-payments/) is a method where a node wants to send to a certain destination but may not have enough routing information to do so. They pass the payment to a known trampoline router instead. That router will create the path to get it to the destination.

If the receiver has support for ([or at least understands](https://twitter.com/realtbast/status/1391832442575720455?s=20)) the trampoline protocol as well, then other trampoline routers continue to be unaware if the next trampoline is the final destination. Much like is the case today where normal routers are unaware if their next hop is the last. Receivers can even implement Rendezvous on top.

### Public Key Routing

A simple alternative to concealing the UTXO making up a channel is to implement [Public Key Routing](https://github.com/lightningnetwork/lightning-rfc/pull/814). While it would still be possible to detect a private channel between two peers that do not have a public channel between each other, it would eliminate knowing the UTXO behind it.

### Immortan

[Immortan](https://github.com/btcontract/immortan) is a “minimal, privacy-focused, opinionated LN protocol implementation aimed to specifically power lite LN nodes.” Its implementation addresses things like public key / invoice rotation and fake channel ID’s. It is currently in development.

### zkChannels

[zkChannels](https://medium.com/boltlabs/zkchannels-for-bitcoin-f1bbf6e3570e) offer strong anonymity and unlinkability properties for off-chain transactions by reducing the amount of information a receiver has about a sender beyond the amount being paid. It is a proposed update layer that features an asymmetric flow of information to preserve privacy through garbled circuits.

It mainly improves sender privacy. However, it only supports a merchant-customer type relationship where the customer only reveals the amount being paid to the merchant. zkChannels do not support forwarding payments, so hub-and-spoke scenarios are ideal for it.

### Taproot

There’s many improvements with [Taproot](https://bitcoinops.org/en/topics/taproot/), but from a Lightning standpoint, one advantage is to allow for concealed multi-sig spends. Each cooperative close without unresolved payments would look like a normal single-sig taproot spend. This would make it harder to guess what might be a transaction for a private channel.

### Channel factories

[Channel factories](https://wiki.ion.radar.tech/tech/research/channel-factory#overview-1) are where many peers can pool their funds to create a subnet of channels together. There are scalability benefits, but another potential end result is that they may end up looking like a coinjoined channel from the outside. Channel factories would require a few protocol enhancements to the base and Lightning layer. Alternatively, a multiparty batched channel creation application could achieve a similar result.

### Others

There are many, many possible improvements or proposals for Lightning that might help privacy. Some could be years away though, including the ones mentioned here. I have not looked too deeply at them yet as this article is a focus on what we have today.

## Final privacy suggestions

So if you’ve made it this far with me, we’ve determined several things about privacy in the Lightning Network.

1. Anyone can see anyone’s public node information if they’ve opened a public channel at all before.
2. Anyone can see the UTXOs making up a channel, private channels are exposable as well.
3. Chain analytics can target nodes, their active/past channels, UTXOs, etc.
4. Putting more than 1 mixed UTXO onto your node can undo the mix and reveal your true identity.
5. Receivers have very little privacy until something like Rendezvous is implemented.
6. Individual payments flowing through the network are snapshot-able. Though unlikely to get any guarantees unless a resource-intensive attacker. More realistically used for targeting specific nodes to gauge economic activity.

That said, here’s my suggestion if you want to be as private as possible on the Lightning Network.

### For senders

1. 1 UTXO per node on a private channel. Ideally mixed and for the complete amount.
2. Do not send directly to your 1 channel partner.
3. When done, deplete your channel completely and close it out.
4. Do not receive, create invoices, etc. which reveal channel/UTXO info.
5. Given enough time, this channel would be known to the network and probe-able, so do not keep these disposable nodes for long.
6. Send payments in small increments and for longer paths to conceal against snapshotting.

### For receivers

1. Never open a channel with a UTXO you own. Get others to open a channel with their UTXO or source a UTXO to open a channel with. Some sources could be [Bitrefill Thor](https://www.bitrefill.com/thor-lightning-network-channels/?hl=en), [Lightning Lab’s Loop Out](https://lightning.engineering/loop/), [LNBig](https://lnbig.com/#/open-channel), [Yalls](https://yalls.org/about/), etc.
2. If you want to send some funds on-chain, either use a service like Loop Out or close the channel and mix your funds first.
3. Use Tor only and do not use any sort of alias.
4. Do not share invoices publicly or receive from services you are KYC’d on without a disposable invoice system.
5. Do not tell others you own a particular node.
6. Do not create invoices with memos that have revealing information.

### Mixing on LN

If you care about mixing across the network, you can pay for a service like Bitrefill Thor to open a channel with a brand new node. You can then send the funds from your disposable node to your leased channel node. That way you no longer own the UTXO you started with when you close out the channels. You now own a new UTXO from a different node instead. Paying for a leased channel or UTXO via Lightning would also conceal you as the sender if following best practices here.

## Conclusion

The purpose of the Lightning Network is quick settlements. Bitcoin’s base layer does not have any privacy guarantees and neither does Lightning. There are ways to attempt to hide amongst the activity of the network, but it’s no guarantee. Sizable actors can attack and reveal private channels that are an extension of the main graph. From there, the flow of funds across the network should be considered public knowledge.

Underground Lightning Networks consisting of fully private nodes that trust each other with their privacy may very well exist now or in the future. But routing payments on the main public graph has its privacy risks. Consider whatever threat model you may have and use the information here accordingly.

There may be solutions that can help in the future but this is where we are at with the general use of the Lightning Network today.

## Acknowledgements

A huge thank you to all those that took the time to review and provide valuable suggestions on multiple drafts of this article! This includes [openoms](https://twitter.com/openoms?s=21), [Abubakar](https://twitter.com/ihate1999?s=21), [Evan](https://twitter.com/evankaloudis?s=21), [Andrew](https://twitter.com/ecurrencyhodler?s=21), and others.

Lightning Network researchers and devs also deserve an additional shoutout, as most of the information in this article is derived from their work throughout several years. I’ve supplied many of their links throughout, but notable highlights related to this article include [Rusty](https://twitter.com/rusty_twit?s=21), [Sergei](https://twitter.com/serg_tikhomirov?s=21), [Bastien](https://twitter.com/realtbast?s=21), [Joost](https://twitter.com/joostjgr?s=21), and many many others!

Consider funding bitcoin devs at [Bitcoin Dev List](https://bitcoindevlist.com)!
