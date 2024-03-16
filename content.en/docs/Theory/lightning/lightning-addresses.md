---
title: "How Lightning Address Works"
h1: "How Lightning Address Works"
cover: /img/215.png
tags: ["bitcoin", "lightning", "scalability", "lightning network", "addresses", "payments"]
description: ""
url: how-lightning-address-works
date: 2022-09-03
bookToc: true
bookFlatSection: false
weight: 2
---

More experienced users know, that nowadays you can send satoshis directly to Lightning Address in user@domain format. But how exactly does this work?

In this short article I would like to explain it to those who do not know it. At the same time, I will describe the basics of Lightning invoices and LNURL-pay protocol.

{{< hint btc >}}
This article by @heisenberg was published on [stacker.news](https://stacker.news/items/65872) website.

[Contribute](/contribute/).
{{< /hint>}}

## Lightning invoices basics

Lightning Invoices are nowadays the standard for sending and receiving funds on the Lightning Network. If you want to receive some satoshis, you have to generate an invoice on your node/wallet. An invoice is nothing more than a text string (which starts with lnbc...) and contains, among other things, the recipient ID and the amount. There is actually more information but we won't go into that now. The invoice is most often shared using a QR code, which is nothing more than an image representation of the string described earlier.

Example:

{{% image "/img/lna-01.png" /%}}

Lightning wallet then builds up several paths in the network to the recipient, ranks them from most advantageous and tries one by one until the payment is successful (or sometimes not).

However, Lightning invoices have certain limitations. Imagine you're a YouTuber and you want to embed a static QR code in your videos so your fans can send you donations. Each invoice has a expiration limit (usually 1 hour) and cannot be paid more than once. This is because some nodes learn a random number called payment_preimage when routing a payment, so it is not safe to pay one invoice multiple times, as fraud could occur. What to do about it? Let's use LNURL-pay!

## LNURL-pay basics

LNURL-pay is a standard, that allows us to create a static QR code, that can be paid multiple times. How does it work?

At its core, it is nothing more than a URL link to a web service using the HTTPS protocol (alternatively Tor), which is encrypted using bech32 encoding. A huge advantage in terms of user-friendliness is the fact that QR codes are indistinguishable to the human eye and therefore the average user does not need to know whether they are paying a regular invoice or LNURL-pay.

Example:

{{% image "/img/lna-02.png" /%}}

### Payment procedure:

1. **User** scans the QR code (LNURL-pay) using his Lightning **wallet**.
2. **Wallet** decodes the QR code, then decodes the bech32 string, gets the URL and visits it using HTTPS.
3. **Service** responds to the wallet with a message asking for the amount (can be fixed).
4. **User** fills in the amount and sends this information to the **service**.
5. **Service** will return a classic Lightning invoice for the amount selected by the **user**.
6. **Wallet will pay the invoice**.

And that's it! So LNURL-pay is just a protocol that is used to negotiate (via the web server) what amount I want to generate an invoice for.

## Finally - Lightning Address

Now that we know the principles of invoices and LNURL-pay, understanding Lightning Address will be very easy. Remember, how we need to scan a QR code with LNURL-pay to get an initial HTTPS link?

With Lightning Address, you don't have to scan any QR code. For example, if your address is [heisenberg@stacker.news](mailto:heisenberg@stacker.news), your wallet will translate that into URL [https://stacker.news/.well-known/lnurlp/heisenberg](https://stacker.news/.well-known/lnurlp/heisenberg). In other words, the link is not obtained from the QR code but is "compiled" from the Lightning Address. Your wallet visits this URL and the answer is well known LNURL-pay request, how much do you want to pay (point 3 above). Then the procedure is identical. And that's it!

## How to use it?

Many custodial wallet/solution nowadays generates a Lightning Address for you automatically, for example every user has address in format [username@stacker.news](mailto:username@stacker.news). If you want to pay something to this address, just insert the address to the "invoice field" in your Lightning wallet. It's supported by majority of wallets. Another solution is to use tools hosted on your own Lightning node (like LNBits, LnMe or others) to be able to receive satoshis non-custodially.