---
title: "Bitcoin Fungibility"
h1: "Bitcoin Fungibility: The absolute state of it"
cover: /img/bitcoin-fungibility/01.png
description: "Presentation on the current state of the Bitcoin ecosystem in terms of fungibility and privacy issues"
url: bitcoin-fungibility
date: 2021-06-26
bookFlatSection: false
bookToc: false
weight: 9
---

{{% hint btc %}}
This presentation was introduced by [TDevD](https://twitter.com/SamouraiDev) on [Dirtcoin Diaries](https://twitter.com/i/broadcasts/1kvKpoogOMPxE) podcast.
{{% /hint %}}

Okay, so basically it's just my views as to the current state of Bitcoin fungibility. I'll try to avoid any stream of consciousness stuff and get right to the point.

{{% image "/img/bitcoin-fungibility/02.png" /%}}

I’ll start off with playing a devil’s advocate. Perhaps, all of our problems with fungibility is our fault, maybe we dropped the ball and allowed Bitcoin to be defined as "money" by the state. Now, it's true that we took a cue from Satoshi, who wrote a white paper about digital cash, but we took that ball and we ran with it. We could have early on fought to keep Bitcoin defined as text. Wallets, for example, are nothing more than keychains. And while all of that is highly technical for some and does not play well to mass adoption, keeping Bitcoin defined as a text-based solution would have been one way of keeping regulatory capture at bay, as long as this thing was not perceived to be money.

{{% image "/img/bitcoin-fungibility/03.png" /%}}

So as stated earlier, since late 2014, early 2015, regulatory capture has been ramping up. Of course, a lot of exchanges have almost all shifted towards KYC/AML. We have the FATF guidelines, which while are only guidelines and not regulations, they're not laws, are still being adopted and put into place by some actors in the space. And worst of all, we have preemptive compliance. We've seen outfits that would actually, without any request from the state, jump the gun, so to speak. Two examples being La Maison du Bitcoin in Paris and Bull Bitcoin in Canada. The head of Bull Bitcoin actually bragged about taking the lead and negotiating with the state to make sure that things were not worse, if you can believe that.

{{% image "/img/bitcoin-fungibility/04.png" /%}}

Another problem in the space, especially since GBTC has been financialization, in other words, basically Wall Street coming in and defining according to their own terms, what Bitcoin is. Talk of ETFs is a recurring theme. ETFs right now exist in Bermuda and Canada. They have not been launched yet in the United States, but this is something that keeps coming up ever since, I believe, since 2014. And I have no idea why we would want a Bitcoin ETF with all that entails as far as regulatory capture and just capture by financial Wall Street entities. I mean, it's not something that we should view as being favorable. And of course, we have the futures which were launched a while ago and definitely have an impact on the price overall.

{{% image "/img/bitcoin-fungibility/05.png" /%}}

The space itself is subject to a kind of Stockholm syndrome. NgU has pretty much taken over the mindset. And NgU - number goes up - is nothing more than enslavement to fiat. It means that Bitcoin is always thinking about USD, nothing else. We have these ridiculous notions about NgU tech, as if it's somehow ingrained into the software that's intellectually lazy. We have magical thinking about how this thing is designed to pump forever, as if we've discovered the perpetual motion machine. It's impossible. Nothing can pump forever. It's patently ridiculous. The new users that are coming in are, I wouldn't put a percentage number on it, but very, very largely [KYC](/en/privacy/no-kyc/)-[DCA](/en/dollar-cost-averaging). They're coming in via CashApp, RobinHood, Revolut, and what I call later on the de facto L2. LnStrike is another example. And this whole wave of KYC-DCA adoption has been pushed by almost all the podcast influencers as these services have been sponsoring their podcasts.

{{% image "/img/bitcoin-fungibility/06.png" /%}}

The focus has very much been on NgU and price. And on the privacy front we have stunted protocol growth at the software level. It's being given lip service, but basically it's always two years out or three years out. It's always, it used to be Taproot, now it's not Taproot anymore, it's something else. When we keep kicking the can down the road. We have problems with toxic elitism and "[not invented here](https://en.wikipedia.org/wiki/Not_invented_here)". This has affected us somewhat at Samourai, things like [BIP47/PayNyms](/en/bip47-the-ugly-duckling). Basically, it hasn't been anointed or approved by the powers that be. So basically, it gets shit on. Foot dragging by Core. I don't think anyone's talking about [Dandelion](https://github.com/bitcoin/bips/blob/master/bip-0156.mediawiki) anymore. It was set to release. [Onchain signature aggregation](https://bitcoinops.org/en/topics/cross-input-signature-aggregation) - the same deal. The whole [BIP repo](https://github.com/bitcoin/bips) is a mess. I don't know, something happened lately because things got out of hand with [Luke](https://twitter.com/lukedashjr) and someone came in to be a secretary or something like that because pull requests were not being merged and notes were not being updated because Luke takes exceptions to certain things. We get very scholarly and academic discussions about "ossification" of the protocol, which is nothing more than knee capping. It means that basically improvements will not be made because very often the excuse given for that is that you can not make changes to software that runs X number of billion dollar value. And appeals to authority, guys like [Maxwell](https://nt4tn.net). An argument will be made to not do something because GMax made a tweet, hello, midnight, or he, [nullc](https://www.reddit.com/user/nullc/), wrote a Reddit post or something like that.

{{% image "/img/bitcoin-fungibility/07.png" /%}}

{{% image "/img/bitcoin-fungibility/08.png" /%}}

So what's happening now? On the fungibility front, we have the good cop - bad cop approach by various actors. And on the good cop, well, basically it's just a mild construction of a walled garden. Withdrawal addresses are being controlled. [Chain analysis](/en/privacy/oxt) is being applied to deposits and withdrawals. And we have a rapid emergence of de facto L2. So it's not Lightning, it's not Liquid. It's very much something controlled by private sector entities, PayPal, CashApp, Revolut, RobinHood, and there are others. And they are basically taking a lot of activity offchain. So you can see the effects on the mempool. But also they are very much controlling what users can do with what they call Bitcoin. Basically, it's an account-based system where people believe they have Bitcoin, but basically they have Bitcoin value in an account. And of course, these entities will very much overlook the fungibility of that controller.

{{% image "/img/bitcoin-fungibility/09.png" /%}}

The bad cop side, well, of course we have blacklisting, we have OFAC, the American government blacklists. We have some creepy [newspeak](https://en.wikipedia.org/wiki/Newspeak) as of late, something, for example, "unhosted wallets". Basically an unhosted wallet is a wallet or anything that is not on an exchange and not custodial, meaning, Samourai and the Core wallet you might be using on your PC or whatever device you're using. These are all unhosted wallets. Now that unhosted wallets have been defined and labeled, you can be sure that there will be some kind of regulation sooner rather than later about unhosted wallets and the addresses that they control. [Wokeness creep](/en/privacy/no-kyc). Well, we recently went through a couple of episodes with this with compliant miners and also investment funds saying that they will only trade or invest in companies that use Bitcoin generated using green energy and all these kinds of things. And of course, flagging of CoinJoins, which has been ongoing for the last two years, I'd say.

{{% image "/img/bitcoin-fungibility/10.png" /%}}

The immediate effects on fungibility at the most basic level is that places like Dread, where people who transact every day, Dread is a message board where there are people who transact every day. They need to transact using Bitcoin. Dread is now looking elsewhere. If you go there and read the articles, you'll see that Bitcoin is very much out of favor there. Darknet Bible, which if you look at the very first editions, it was all about how to use Bitcoin on the Darknet markets. It now actually tells people to avoid Bitcoin. Darknet markets are looking elsewhere, Wall Street market being the best example. And we see the rise of things like Chainalysis, which I believe the day before yesterday, they raised $100 million and are now valued at $4.2 billion. And this is basically because the non-fungibility of Bitcoin is now a big business.

{{% image "/img/bitcoin-fungibility/11.png" /%}}

So we come to, how do we exist in this niche? How do we get around these things? What are the tools that we can use?

{{% image "/img/bitcoin-fungibility/12.png" /%}}

Lightning network is not a privacy solution even though it has been touted as such including very recently. It is bank ready. We have seen examples where I believe it's, I'm not sure, I think it's BottlePay is asking people for the public information for their nodes in order to go through their system. We do see that Lightning has a strong tendency to resort to Custodial UI and UX. And the privacy pitfalls of Lightning are now better understood. There was an [article](/en/lightning-network-privacy) recently which detailed it at length, and I include the link there.

{{% image "/img/bitcoin-fungibility/13.png" /%}}

Liquid was originally presented as a tool for exchange clearing, but in fact, we see that it is being positioned as a custodial trojan horse. It's been sucking in and neutering privacy features. It has a crippled version of confidential transactions. And I am certain that [cross-input signature aggregation](https://bitcoinops.org/en/topics/cross-input-signature-aggregation) will wind up on Liquid and not at all on the main chain. We'll see, but. I'd be very surprised if we ever see signature aggregation onchain.

{{% image "/img/bitcoin-fungibility/14.png" /%}}

So basically, I just come to our features on Samourai Wallet, I'm sure a lot of you are familiar with these. Ricochet was our first premium feature. It was actually based on a fungibility talk given by Adam Back and Blue Matt. You can find that video on [YouTube](https://www.youtube.com/watch?v=AvS3tp0qqgA). I forget where they did that talk. I believe it was in late 2016.

{{% image "/img/bitcoin-fungibility/15.png" /%}}

[BIP47 / PayNyms](/en/bip47-the-ugly-duckling). It's a very popular feature with our users who are familiar with it and depend on it. It's a great privacy feature because it deprives chain analysis of a starting point with which to follow your payments. Unfortunately, there has been a lack of adoption by other wallets for a number of reasons. Getting back to things like "not invented here" and things like that, that certainly plays a part. Also, the fact that BIP47 was written by Justus Ranvier, who was definitely at loggerheads with Core at the time. So BIP47 in that respect is not at all appreciated. And again, just to, I'll repeat what I said earlier. If you go back to April of 2015, when BIP47 was first published, the very term stealth addresses, because BIP47 was promoted as mobile stealth addresses, stealth addresses were very much associated with Dark Wallet. And that we were in contact with a few other wallets after the original test vectors were published. They were actively working on replicating the test vectors and implementing BIP47, and they were pretty much told to discontinue work on that by the management or by their shareholders because of the strong association with Dark Wallet.

{{% image "/img/bitcoin-fungibility/16.png" /%}}

So we come to CoinJoin. CoinJoin done wrong. Well, of course, we have the example of the [ZeroLink](https://github.com/nopara73/ZeroLink), which has been why Wasabi claims to have implemented ZeroLink. They defined ZeroLink, but they never implemented it. And after things started to fall apart with Wasabi, there was what was claimed to be a war on CoinJoin. In fact, the war very much started from within wagons circled around Wasabi and refusing to acknowledge the flaws in their implementation. And basically, they got a pass on everything that they were doing wrong. We saw examples of FUD by influencers. And that's a quote by the way CoinJoin is "[likely illegal](https://twitter.com/danheld/status/1334152359346368513)" from a noted influencer. I left a clue in there as to who he is. CoinSwap in my view is very much a part of the attack on CoinJoin. It was tagged by [Chris Belcher](https://twitter.com/chris_belcher_) and by his supporters as the next generation in Bitcoin privacy that would far surpass anything to do with any CoinJoin anywhere: JoinMarket, Wasabi or Whirlpool. But I see that recently Belcher has backed off those claims and he was even quoted in a recent article as saying that if you want to prove that your UTXO transaction history has been broken, [you should use CoinJoin](https://archive.is/eM97I) as opposed to a CoinSwap. In any case, current development on CoinSwap, from what I gather, appears to have slowed down somewhat. I think the name has been changed to [Teleporting](https://github.com/bitcoin-teleport/teleport-transactions). I expect that CoinSwap will be a very small niche service used by a few people who can run such software, meaning not many. And well, P2EP - Pay-To-Endpoint. Pay-To-Endpoint is an interesting case. Again, it looks pretty much shilled like crazy during the beginning of this supposed war on CoinJoin as an alternative to CoinJoin. We were summoned by several parties to implement it or else we would never be taken seriously. And what we've seen is that it's stillborn. It is present on a lot of servers, thanks to BTCPay server, but it remains unactivated. Including some of its biggest shills who themselves run stores and never bother to activate P2EP. So basically that's a stillborn project in my view. Belcher recently was begging people to step up adoption, but I don't think there's been any change on that front.

{{% image "/img/bitcoin-fungibility/17.png" /%}}

CoinJoin done right is 100% [entropy](https://github.com/Samourai-Wallet/boltzmann) CoinJoins. Those are the only CoinJoins that are guaranteed to break links and break your UTXO history. And right now, the only CoinJoin that is guaranteed to provide 100% entropy every time is Samourai Whirlpool. We would be very happy to see others doing the same, but it's not happening and it doesn't look like it's going to happen anytime soon. We follow the space very closely and the developments very closely. Cahoots, again, those are also CoinJoins. And they have their various uses and their trade-offs. Stonewall is important because it guarantees a floor value in entropy. So for example, a Stonewall with two inputs and four outputs has a guaranteed floor entropy of 1.58. We do have developments ongoing for updates to Stonewall, and they will be ready later on this year. And again, they all involve guaranteeing a minimum entropy amount for users. This is something that even other CoinJoins cannot guarantee or do not guarantee a minimum entropy amount, either because you can outright measure the entropy and see that it's not there, or they simply throw everything they can into a transaction, meaning a large number of inputs and outputs, and thereby making it technically infeasible to even calculate whatever entropy is, in fact, in there, if any.

{{% image "/img/bitcoin-fungibility/18.png" /%}}

That's my only picture in the presentation, by the way.

{{% image "/img/bitcoin-fungibility/19.png" /%}}

And coming soon: there are a couple of groups actively working on the development of [Monero/Bitcoin Atomic Swaps](https://github.com/comit-network/xmr-btc-swap). We are working on the Bitcoin side to integrate this into Samourai Wallet. We are in touch with others on the Monero side who are working on integrating it into their Monero wallet and we are in right now there are two groups actively working on the protocol itself and we are in close touch with one of them and development is ongoing. Again I think that there's a mutual interest on both sides to go ahead with this. It's true that Bitcoin and Monero maxis are not necessarily natural allies. I think Bitcoin and Monero are natural allies, but the maxis on both sides are not necessarily natural allies. That can complicate things somewhat, but that's the way it is. Personally, I think working with these Atomic Swaps is a very good way for Bitcoin to get back in touch with its ethos. And we're looking forward to releasing something as soon as possible.