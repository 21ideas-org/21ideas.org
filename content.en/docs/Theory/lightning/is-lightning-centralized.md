---
title: "Is Lightning centralized?"
h1: "OMG, LN nodes are running on Amazon!"
cover: /img/csl-716-en.jpg
description: ""
url: is-lightning-centralized
date: 2022-12-26
bookFlatSection: false
weight: 5
---

Hold your horses, Darth will explain you how to "read" those charts.

{{< hint btc >}}
This article by DarthCoin was published in his [blog](https://darthcoin.substack.com/p/omg-ln-nodes-are-running-on-amazon).

[Contribute](/contribute/).
{{< /hint>}}

OK plebs, by another request from my readers, they asked me to interpret / read this chart, being scared that the chart is showing that many LN nodes are “running” on Amazon, Google etc and LN is “cEnTrAlIzEd”.

I think originally this FUD was launched on internet by the XRP/ETH guys, trying to diminish the normies “trust” in Bitcoin and create panic.

You can see for yourself these charts on [Mempool.space](https://mempool.space/lightning)

I am just laughing when people get scared so easily without know how Internet network works and how to “read” these charts.

Calm down guys, here is the simple explanation.

First of all, I will not enter in technical details here, I will just try to explain in layman terms, so any non-tech user could understand how to read those charts.

I think also the Mempool.space guys, should put an explanatory note on that chart and the term “ISPs hosting LN nodes” is not correct and that was confusing for many people.

There are some main aspects here to point out:

- cloud nodes, hosted in datacenters
- VPS nodes, private servers, hosted in datacenters, running nodes
- VPS that are used as VPN gateways
- VPN services, user get an IP from another geographical location
- Tor network, a separate, almost invisible network
- clearnet nodes, simply nodes with real regular IPs

**Glossary for those not familiar:**

- VPS = virtual private server
- VPN = virtual private network
- Tor = a private, encrypted network that uses a separate protocol over the Internet
- clearnet = your regular internet IP / domain
- ISP = internet service provider, those who gives you internet at home/business

## Cloud nodes

Yes, there are a good amount of LN nodes that run in datacenters, businesses, developers, testers etc could run some LN nodes for a better reliability and redundancy. In the end their main goal is to protect their systems and running a RPi node is NO RELIABLE for a medium / big business ([as I explained in one of my previous guides](https://darthcoin.substack.com/p/recommendations-for-ln-users)). But I am not here to debate about which hardware should be run for a node. All nodes are good!

Let’s not forget that Voltage (nodes cloud provider) is having a boom right now, many users want to run a node in 5 minutes and they do not have a machine available. So it’s easy to just make some few clicks and done. Yes, is not ideal, but is OK if you know what are you doing. So all those Voltage cloud nodes are in datacenters (Amazon, Google, etc owned).

All these cloud nodes, will use and announce an IP from THAT datacenter, that is allocated to each machine. That IP could be owned / broadcasted by Amazon, Google etc. [Learn more how public IPs are allocated to ISPs](https://www.youtube.com/watch?v=fja1OWBq7fY).

So is obvious that in that chart will appear x number of “Amazon nodes”… OMG :)

Are these “cloud nodes” a threat to Bitcoin LN?

Maybe, but not so much. The user / node owner, will be ALWAYS in control of his keys. Anytime, with your node seed + latest channels backup, you can spin it up another node at home or whatever you can, if your cloud node is shut down by the datacenters. And your node is back, up and running in minutes.

A good example is this cloud node that Sphinx is managing with keys located at home. So even that the cloud machine is compromised, still cannot be used without the keys.

{{< tweet user="sphinx_chat" id="1571974701098074112" >}}

There is no way that these cloud nodes could affect the regular traffic on LN.

## VPS nodes

These are more or less the same as cloud nodes, only that the user is managing itself the whole operating system, node software, apps, access etc. The Datacenter is only managing the hardware.

Same situation as previous, the user can anytime spin up his VPS node in any other machine, NOBODY have his keys.

Same as for cloud nodes happen with the IPs displayed. It can be owned by various big internet companies, but that means almost nothing. Is just a reference.

## VPS used as VPN gateways

Here start the funny part!

So user have rented a hardware in a datacenter, but is NOT running a node on that machine ! Is just using it, with a simple Linux to be a proxy VPN, and connecting his own home LN node to it, using a VPN tunnel.

So all LN node traffic will be redirected through that public IP assigned to that remote VPS by the renter and also bought from various big backbones of internet.

So this node even if is using that IP, that doesn’t mean is located at that IP location or is from that country or “owned” by Amazon or Google. Is just a reference.

Usually these VPS LN nodes are running on Tor also, in hybrid mode, on both networks. So imagine that is even more confusion in those charts :)

Example of VPS services like this is [TunnelSats.com](https://tunnelsats.com/)

Is this a threat to LN? No way! The user can anytime switch from one to another VPS provider or simply run on Tor.

## VPN services

The user is renting a dedicated service that provide him a private network for all his home traffic, using a tunnel and assigning a dedicated or more IPs.

User is configuring his LN node to run through this network, but using his home internet connection, encrypted and private.

So his node will show up in charts as using an IP from Amazon for example, but Amazon have nothing to do with his node. Again just a reference.

Is this a threat to LN? No way! The user can anytime switch from one to another VPN provider or simply run on Tor or even with his own home IP.

## Tor network

The user is running in total privacy his node, using ONLY the Tor network.

I will not enter into too much details to explain Tor network, but Jameson Lopp have [a great article explaining how these Tor nodes works here](https://blog.lopp.net/tor-only-bitcoin-lightning-guide/).

Are these a threat to LN nodes network? Hell no!

Yes, Tor network could be slow and clunky in some parts of the world, but mostly works just fine.

## Clearnet nodes

These are just regular nodes from plebs, running at home or in any other location.

Their IPs shows mostly their ISP.

But I will not rely 100% on the accuracy of these, in the charts. These IPs can change various times or if are fix public IPs, are few.

Are a threat to LN nodes network. No fucking way. Those users can anytime take their nodes and plug them into another network or even a 4G mobile network and their node is online. I have seen many plebs running nodes in a van, driving around.

## Conclusion

THERE’S NO THREAT THAT LIGHTNING NETWORK IS CENTRALIZED OR CAN / WOULD BE TAKEN DOWN.

Those charts are mostly a bait for Bitcoin haters, those that don’t know how to read them and have no idea how networks works.

As Jestopher from [Amboss](https://amboss.space/) explained in this Simply Bitcoin episode 581,

{{< youtube b7fvoBsMUGw />}}

> _“The LN can adapt very easily and the broad distribution of nodes and channels, will not be affected too much if a datacenter will close access to some cloud nodes. Plebs could redistribute immediately all the traffic through many other peers.”_

So, all this crazy news about Lightning centralization is a TOTAL USELESS FUD.
