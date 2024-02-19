---
title: "Bitcoin Privacy: Best Practices"
h1: "Bitcoin Privacy: Best Practices"
cover: /img/187.jpeg
description: "There is a sacred realm of privacy where essential rights and liberties into which the law, generally speaking, must not intrude."
url: privacy/best-practices
date: 2021-02-18
bookFlatSection: false
weight: 1
---

There is a sacred realm of privacy where essential rights and liberties into which the law, generally speaking, must not intrude.

{{< hint btc >}}
This article by Gigi was published on [swanbitcoin.com](https://www.swanbitcoin.com/bitcoin-privacy-best-practices/) website.

[Contribute](/contribute/).
{{< /hint >}}

>  *“There is a sacred realm of privacy for every man and woman where he makes his choices and decisions — a realm of his own essen­tial rights and liber­ties into which the law, gener­ally speaking, must not intrude.”*
>  
>  — Geoffrey Fisher, Archbishop of Canter­bury (1959)

Not too long ago the default mode of the internet was unencrypted plain text. Everyone was able to spy on everyone else and not too many people thought much about it. The [global surveil­lance disclo­sures of 2013](https://en.wikipedia.org/wiki/Global_surveillance_disclosures_(2013%E2%80%93present)) changed that and today secure commu­ni­ca­tion proto­cols and end-to-end encryp­tion are becoming the norm.

Although Bitcoin is entering its teenage years, we are — metaphor­i­cally speaking — still in the plain text era of the orange coin. Bitcoin is radically trans­parent by default, but there are meaningful ways to protect your privacy. In this article we want to highlight some of these ways, discuss best practices, and give action­able advice for newcomers and bitcoiners alike.

## Why Privacy Is Important

“Privacy is neces­sary for an open society in the electronic age. Privacy is not secrecy. A private matter is something one doesn’t want the whole world to know, but a secret matter is something one doesn’t want anybody to know. Privacy is the power to selec­tively reveal oneself to the world.”

With these powerful words Eric Hughes opened his [Cypher­punk’s Manifesto](https://nakamotoinstitute.org/static/docs/cypherpunk-manifesto.txt) in 1993. The differ­ence between privacy and secrecy is subtle, but impor­tant. Choosing to remain private does not imply that one has secrets or has something to hide. To illus­trate this just realize that what you do on the toilet or in the bedroom is neither illegal nor a secret (in most cases), yet you close the door and pull the curtains.

Similarly, how much money you have and where you spend it is not neces­sarily a secret matter. It should, however, be a private one. Most would agree that your boss should not know how you choose to spend your salary.

The impor­tance of privacy is recog­nized by many inter­na­tional bodies. From the _American Decla­ra­tion of the Rights and Duties of Man_ to the United Nations, it is recog­nized that privacy is a funda­mental human right worldwide.

>  *“No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.”*
>  
>  — Article 12, United Nations Decla­ra­tion of Human Rights

## Bitcoin and Privacy

Although Bitcoin was often described as an anony­mous method of payment by early propo­nents and by the media, it is anything but. Bitcoin is pseudo­ny­mous at best and as of today making sure that your pseudo­ny­mous bitcoin identi­ties cannot be linked to your real-world identity proves diffi­cult for most people. 

Bitcoin is an open system. Its public ledger can be inspected and studied by everyone. Thus every trans­ac­tion that is embedded in its proof-of-work chain will be exposed for as long as Bitcoin exists: eternity. Failing to follow privacy best practices now can poten­tially have negative reper­cus­sions in the future.

Privacy, like security, is a process and it is diffi­cult, but not impos­sible. Tools continue to be devel­oped to help preserve privacy while using Bitcoin and fortu­nately most of these tools become easier to use over time. Unfor­tu­nately no panacea exists. One has to remain aware of the trade­offs and follow best practices as they evolve.

## Privacy Best Practices

As with every­thing in Bitcoin, taking control of your privacy is a gradual, step-by-step process. Learning about and imple­menting these best practices takes patience and respon­si­bility, so do not be discour­aged if it seems overwhelming at first. Every step, no matter how small, is a step in the right direction.

The following are action­able steps you can take to increase your privacy:

- Self-custody your coins
- Do not reuse addresses
- Minimize exposure to KYC (Know Your Customer)
- Minimize exposure to third parties
- Run your own node
- Use the Light­ning Network for small transactions
- Do not use public block explorers
- CoinJoin early and often

**Self-custody your coins:** Not your keys, not your bitcoin. If someone else is holding your bitcoin for you, they know every­thing there is to know about these coins: amounts, trans­ac­tion histo­ries, future trans­ac­tions, etc. Taking self-custody of your coins is the first and most essen­tial step.

**Do not reuse addresses:** Reusing addresses destroys the privacy of both the sender and the receiver. It should be avoided at all costs.

**Minimize exposure to KYC:** Linking your real-world identity to your bitcoin addresses is a neces­sary evil in most juris­dic­tions. While the effec­tive­ness of these regula­tions is question­able, the impli­ca­tions for regular users are mostly negative as a multi­tude of data leaks have shown. If you choose to use KYC on- or off-ramps, make sure that you under­stand the relation­ship between yourself and the service in question. You are trusting this service with your personal data, including the future safety of this data. If you still earn fiat-denom­i­nated income, we recom­mend using one bitcoin-only service that allows you to execute automatic recur­ring buys on your behalf. Swan Bitcoin is such a service. If you want to skip KYC entirely, have a look at [no-KYC only](https://bitcoinqna.github.io/noKYConly/).

**Minimize exposure to third parties:** [Trusted third parties are security holes](https://nakamotoinstitute.org/trusted-third-parties/). If you can rely on yourself instead of trusted third parties, you should.

**Run your own node:** Not your node, not your rules. Running your own node is essen­tial to use Bitcoin in a private manner. Every inter­ac­tion with the Bitcoin network is facil­i­tated by a node. If you are not in control of this node, whatever you are doing is seen by the node you are inter­acting with. This means whoever is in control of the node is able to see what you are doing. This [node guide](https://bitcoiner.guide/node/) is a great resource to get you started.

**Use the Light­ning Network for small trans­ac­tions:** The off-chain nature of the light­ning network increases the trans­ac­tional privacy of its users without having to jump through too many hoops. While it is still early, the absolutely reckless days of the light­ning network are likely behind us. Using it for small- and medium-sized trans­ac­tions can help improve both your privacy as well as your fee footprint.

**Do not use public block explorers:** Looking up addresses in public block explorers will link those addresses with your IP, which, in turn, can be linked to your real identity. Software packages like [Umbrel](https://getumbrel.com/) and [myNode](https://mynodebtc.com/) make it easy to run your own block explorer. If you have to use a public block explorer, make sure to mask your IP by connecting to them via [Tor](https://www.torproject.org/download/), or at least use a [VPN](https://mullvad.net/).

**CoinJoin early and often:** Because Bitcoin is forever, using trans­ac­tional best practices such as collab­o­ra­tive CoinJoin trans­ac­tions will ensure that your privacy is protected going forward. While CoinJoin trans­ac­tions are nuanced, user-friendly software exists to help you create and automate these kinds of trans­ac­tions. Samourai’s [Whirlpool](https://samouraiwallet.com/whirlpool) is a great solution for Android users, for example. There is also JoinMarket, which, thanks to projects like [JoininBox](https://github.com/openoms/joininbox), can be set up quite easily on your own node. Note that Swan offers the ability to [auto-withdraw your bitcoin](https://help.swanbitcoin.com/hc/en-us/articles/360046166054-Why-should-I-withdraw-my-Bitcoin-when-it-reaches-a-certain-threshold-), allowing you to automate this process almost completely.

## Conclusion

Everyone should strive to use bitcoin in a more private manner. Privacy is not secrecy. Privacy is a human right and we should all protect and exercise this right. It is hard to remove infor­ma­tion from the internet; it is impos­sible to remove infor­ma­tion from Bitcoin’s public ledger.

While far from perfect, tools exist today that make following privacy best practices easier. We have highlighted some of these tools and — as new improve­ments such as Taproot and Schnorr get activated — these tools, as well as the privacy guaran­tees of Bitcoin, will undoubt­edly improve.

Bitcoin’s opera­tion does not map nicely on to tradi­tional concepts. Questions such as “who owns this money” or “[where is it from](https://en.bitcoin.it/wiki/From_address)” become hard to answer in most circum­stances and absolutely meaning­less in others. 

Satoshi designed Bitcoin with privacy in mind. On the protocol level every bitcoin trans­ac­tion is a “smelting” process leaving only heuris­tical bread­crumbs behind. The protocol does not care where the sats came from. Neither does it care about real-world identi­ties or owner­ship. It only cares about the validity of signatures. 

And as long as speech is free, signing a message — privately or not — must not be a crime.

## Further Resources

- [15 Methods to Acquire Non-KYC Bitcoin](https://sovrnbitcoiner.com/15-methods-to-aquire-non-kyc-bitcoin/) by Sovrnbitcoiner
- [This Month in Bitcoin Privacy](https://enegnei.github.io/This-Month-In-Bitcoin-Privacy/) by Janine
- [Hodl Privacy FAQ](https://6102bitcoin.com/faq-hodl-privacy/) by 6102
- [Digital Privacy](https://6102bitcoin.com/blog/digital-privacy/) by 6102
- [UseWhirlpool.com](http://usewhirlpool.com) by Bitcoin Q+A
- [Bitcoin Privacy Guide](https://bitcoiner.guide/privacy/) by Bitcoin Q+A

---

This article was co-authored by [Matt Odell](http://mattodell.com), an independent bitcoin and privacy advocate. Find his recommendations in regards to best practices on [werunbitcoin.com](http://werunbitcoin.com/).

