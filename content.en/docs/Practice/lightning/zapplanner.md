---
title: "Recurring Lightning Payments"
h1: "Recurring Lightning Payments"
cover: /img/zapp-687-en.png
description: "This guide covers the process of setting up recurring Lightning payments - both custodial and non-custodial."
url: zapplanner
date: 2023-05-11
bookFlatSection: false
weight: 4
---

This guide covers the process of setting up recurring Lightning payments - both custodial and non-custodial.

{{< hint btc >}}
The guide written by [Tony⚡️](https://snort.social/p/npub10awzknjg5r5lajnr53438ndcyjylgqsrnrtq5grs495v42qc6awsj45ys7).

[Contribute](/contribute/).
{{< /hint >}}

## Value 4 Value

V4V is a concept that has potential to flip the way content is created on its head. Plus, it's not only about content, but rather about any kind of value creation - be it physical or digital. And while V4V still has numerous battles to win, it is already finding its advocates and reaching new heights.

The first group of people to benefit form V4V were intuitively software developers and content creators. We see numerous examples of Value 4 Value florishing: 

- [Fountain FM](https://www.fountain.fm)
- [Geyser Fund](https://geyser.fund)
- [Twentyuno](https://widgets.twentyuno.net)
- [Nostr Zaps](https://nostr.how/en/zaps)

While many discussions have already taken place about the V4V concept, we won't rehash its definition or debate its efficiency here. Instead, I suggest we take a look at the practical side of the question and see how we can take advantage of the tools present today to automate our lightning payments and, as a result, support our favorite developers, content creators, athletes, musicians, and anyone else we want, really.

## Manual vs Automatic

One of the primary advantages of Bitcoin (and Lightning) over traditional financial systems is that you have complete control over your funds. Ironically, this becomes a disadvantage in context of recurring payments. See, Bitcoin employs a so-called "push system" to send funds (or, rather adjust the state of the distributed ledger) from user A to user B. In contrast, with credit cards and bank transfers, you don't truly control "your money." Instead, you provide all the information a service provider needs to potentially empty your account using a "pull system" and then disappear. While this doesn't usually happen, there are instances where it does, and the consequences can be dire.

> *"The root problem with conventional currency is all the trust that’s required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust. Banks must be trusted to hold our money and transfer it electronically, but they lend it out in waves of credit bubbles with barely a fraction in reserve. We have to trust them with our privacy, trust them not to let identity thieves drain our accounts. Their massive overhead costs make micropayments impossible."*
> 
> — Satoshi Nakamoto, "[Bitcoin open source implementation of P2P currency](http://p2pfoundation.ning.com/forum/topics/bitcoin-open-source)"


Bottom line: traditional services have full control of your funds and whenever your recurring payment is due, they simply take "your money" and send them to a specified receiver. As Bitcoin does not allow anyone to mess with your funds (feature, not a bug), finding the solution took some time. Until relatively recently people had no choice, but send payments manually regardless of wether they wanted to support the person or a service on a regular basis, or wanted to make a one-time payment.

{{% image "/img/zapp-694-en.jpg" /%}}

**The downsides of executing transactions manually**

1. People forget stuff. No matter how much you value someone's work, and even if you've decided to regularly support a fellow bitcoiner, you're human. Every now and then, you'll forget to send a few sats 
2. People do not always have access to their bitcoin/lightning wallet. Here's an example: your favorite writer shares another article, but your tablet that you always use to read Habla is not with you. You read the article from your iPhone, but your Lightning extension is not installed there. No worries, you can send a few sats when you get back home, right? Wrong! People forget stuff.

**The benefits of automation**

1. Save time and focus. Getting distracted from your daily tasks to send a few sats messes with your focus. Even if you do not forget to send planned sats to each one of your favorite nostriches today, be sure that doing so manually will consume lots of your time and attention. 
2. A consistent inflow of sats motivates creators. This stability is why many writers place their articles behind paywalls or require monthly subscriptions. 
3. Supporting creators today can prevent their future work from being paywalled, allowing you to share it freely with others. 

**The dangers of automation**

Automating financial interactions may result in unwanted outcomes. Nothing major most often, but there are a couple of things to keep in mind:

1. Avoid holding excessive funds in custodial accounts used for recurring Lightning payments.
2. Ensure you back up all essential information and monitor your subscriptions. You should always have the option to cancel a subscription.

If you share our enthusiasm for V4V, this guide is for you. It offers ways to consistently support your favorite creators, no matter who or where they are, while maintaining control over your funds.

{{< hint info >}}
Supporting Bitcoin creators ensures they don't need to paywall their content. This promotes an abundance of high-quality materials, which in turn boosts awareness and Bitcoin adoption.
{{< /hint >}}

I want to clarify something important. Readers who engage with content, whether by liking or commenting, bring value to creators. Their feedback indicates the value of the content and helps it reach a broader audience. However, this guide will focus specifically on recurring payments as the ultimate form of support.

## Zapplanner

**Level:** Newbie  
**Website:** https://zapplanner.albylabs.com  
**Prerequisites:** Alby account  
**Method:** custodial  

Zapplanner does exactly what you would expect: allows you to set budgets for numerous receivers and send sats regularly according to the set preferences. It integrates with the Alby browser extension to automate all payments for you.

To enable recurring payments Zapplanner utilizes what is called a Nostr Wallet Connect. You can find more about this technology [here](https://nwc.getalby.com/about). While this section of the guide focuses on a straightforward custodial approach, it's worth noting that NWC is an [open-source project and can be self-hosted](https://github.com/getAlby/nostr-wallet-connect/).

That said, let's dive in.

1. Visit https://zapplanner.albylabs.com.

2. Hit the "New Periodic Payment" button (feel free to click the "How does it work" to know more).

{{% image "/img/zapp-688.png" /%}}

3. Fill up required fields and hit "Continue"

{{% image "/img/zapp-689-en.png" /%}}

4. Check if everything is in order and hit "Connect with Alby"

{{% image "/img/zapp-690-en.png" /%}}

5. Log in with your Alby account. If you don’t have one, you can follow [this simple step-by-step guide](https://worldtravelambitions.notion.site/worldtravelambitions/How-to-Set-Up-Nostr-Using-GetAlby-and-Snort-social-c3fabb2ecc8d465dba0e73a3f1c2558a) by [melissa](https://njump.me/npub1cly0v30agkcfq40mdsndzjrn0tt76ykaan0q6ny80wy034qedpjsqwamhz).

{{% image "/img/zapp-695-en.png" /%}}

6. You'll be redirected to the NWC interface, where you should specify the remaining details.

{{% image "/img/zapp-696-en.png" /%}}

{{< hint info >}}
Setting an expiry date lets you support the address owner for a limited time, e.g. weekly for a year. Setting a budget is an important feature that will ensure that no more than a certain amount can be withdrawn from your wallet over a set period of time.
{{< /hint >}}

Alternatively, you can directly visit NWC dashboard at https://nwc.getalby.com, log in with Alby and create a connection. This will create a NWC string you can paste into the corresponding field. Here's what you've gotta do if you wanna follow this path:

1. Visit https://nwc.getalby.com and log in with your Alby account.

{{< hint info >}}
NWC is a way for applications like Nostr clients to access a remote Lightning wallet through a standardized protocol. For instance, you can link your Alby account with any other application using this feature. You can find out more about it [here](https://nwc.getalby.com/about).
{{< /hint >}}

2. After logging in you will be welcomed by a simple page, offering you to create a new connection. 
   
{{% image "/img/zapp-697-en.jpg" /%}}

3. Tap "+ New connection" button.
4. Fill up required info:  
   * Name the connection  
   * Set an expiry date if you'd like
   * Set a budget.  

{{< hint info >}}
It's highly advisable to set a budget. By doing so, you'll limit the app's access to a specified amount of sats over a defined time period. This ensures that even in a worst-case scenario, not all the sats in your wallet will be at risk.
{{< /hint >}}

  5. Hit "Confirm"

{{% image "/img/zapp-698-en.jpg" /%}}

6. You'll be redirected to the next page, which will offer you to reveal the pairing secret. 

{{% image "/img/zapp-699-en.jpg" /%}}

{{< hint info >}}
Please note that the term 'pairing secret' has the word 'secret' for a reason. It's critical that you keep it confidential. Disclosing it to others could grant them access to your wallet.
{{< /hint >}}

7. Paste the pairing secret into the corresponding field.

{{% image "/img/zapp-700-en.png" /%}}

These were the custodial ways of setting up recurring payments. Let's now explore the setup, where you do not have to trust anyone with your funds. This approach requires specific equpment and expertise, but hey, not your keys - not your coins, right?

## Oak Node

**Level:** Node runner  
**Website:** https://oak-node.net/doc/trunk/README.md  
**Prerequisites:** Lightning node, decent LN connectivity, sufficient outbound liquidity  
**Method:** non-custodial  

Oak Node lets you schedule LN payments, send and receive LN payments as PGP-secured emails and even do it over Nostr, all on your own Lightning Node. It is supported by the most popular Bitcoin and Lightning node software and allows you to compile it yourself:

- Available in the [Umbrel appstore](https://apps.umbrel.com/app/oak-node)
- Available as Podman or Docker containers (see [How to run](https://oak-node.net/doc/trunk/doc/how-to-run.md))
- Available on [myNode (experimental)](https://oak-node.net/doc/trunk/doc/how-to-run.md#mynode)

A step-by-step guide on setting up recurring payments with Oak Node is available [here](https://oak-node.net/wiki?name=demo-recurring-payments). There is [extensive documentation](https://oak-node.net/doc/trunk/README.md), dedicated to all the tool's features as well.

## Future

Of course, there's a lot of room to grow. We are yet to see some kind of a subscription service to allow writers to collect recurring lightning payments and distribute content accordingly. A service to remind subscribers that their funds are about to run out is also due. 

At the moment we can see some services, like [Nostr Wine](https://nostr.wine/invoices) relay operator, utilize Nostr DMs to remind users whenever it's time to refill their balance. While this works for many, it is not yet a perfect solution.

Nevertheless, we see huge developments in this field. Heck, a year ago I wouldn't believe that simple recurring payments on lightning will be available today. So stay tuned and educate yourselves. 

This wraps up today's guide. Subscribe to favorite content creators and developers to ensure there are new things coming your way no matter what.

_FOSS FTW_

_Tony_