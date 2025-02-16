---
title: "Fighting Fake Bitcoin"
h1: "Securing Bitcoin's Scarcity: Fighting Fake Bitcoin"
cover: /img/bpb-800.jpg
description: ""
url: fighting-fake-bitcoin
date: 2022-11-16
bookToc: true
bookFlatSection: false
weight: 61
---

{{< hint btc >}}
This article by [Jameson Lopp](https://twitter.com/lopp) was published in Casa [blog](https://blog.keys.casa/securing-bitcoins-scarcity).

[Contribute](/contribute/).
{{< /hint >}}

Bitcoin provides strong assurances around the predictability and scarcity of its money supply. I wrote a detailed technical explanation of how it works [here](https://blog.lopp.net/how-is-the-21-million-bitcoin-cap-defined-and-enforced).

I don't think it's controversial to state that this scarcity is one of [bitcoin's key properties](https://nakamoto.com/what-are-the-key-properties-of-bitcoin/) and fundamental value drivers. If this property is violated, we have a big problem. So...do we have a problem?

{{< x user="lopp" id="1591770569414004738" >}}

This tweet confused a fair number of folks, probably because it has a variety of layers and interpretations.

Bitcoin is often touted as a "store of value," but how is that value accrued? It's no different than any other asset. In order for the price/exchange rate to increase, value must flow from other assets into this new asset. Value flows as a result of demand and the exchange rate adjusts as a result of the available supply. By "available supply," I mean the amount that is actually purchasable on the market, not the total amount in existence. This is how the invisible hand of the market acts upon the available information to effect the discovery of an asset's price.

{{% image "/img/bpb-801.png" /%}}

The problem is that **there are many forms of fake bitcoin**, and when someone who wants to buy real bitcoin ends up buying fake bitcoin, that value is not accrued and stored by the true bitcoin system. The process of price discovery is thus corrupted!

## Bitcoin knockoffs

{{< x user="lopp" id="1572836378463076352" >}}

Back during the fork wars of 2017, the biggest looming issue of "fake bitcoins" were, in fact, other cryptographically secured tokens. The "forkcoins," if you will.

There have long been arguments by bitcoin detractors that BTC is not scarce because there is a near zero cost for anyone to launch a limitless number of similar tokens. This argument has a grain of truth, but only to the extent that other tokens are seen as being "the same" in the eyes of market participants. Clearly, forkcoins are incompatible protocols that are rejected by anyone running a bitcoin node.

During the first few years of the fork wars there was a great deal of deception and shady marketing as forkcoiners would tout their asset as "the real bitcoin" and many folks were duped into buying forks, thus diverting some value from being accrued in real bitcoin. This was concerning for a time, as the aggregate market cap value of forkcoins at one point approached 40% of bitcoin. As of November 2022, the aggregate value of all forkcoins has dwindled to less than 1% the value of bitcoin. This danger appears to have passed... for now.

But what if I told you that bitcoin's value is being manipulated in far more deceptive and subversive ways?

Enter...paper bitcoin. The most straightforward form of which is the simple IOU. This technique (fractional reserve banking) has been employed by institutions for hundreds of years.

## Bitcoin IOUs

The unfortunate current crypto reality is that the vast majority of users are being onboarded through centralized exchanges. They send fiat to the exchange through a bank that uses traditional payment rails and then place an order to buy BTC. But what happens when that order is executed by the exchange's trading engine? An entry in a private database is updated, thus crediting the exchange user with an IOU corresponding to the amount of BTC they purchased.

This IOU has none of the properties of bitcoin. It is merely a financial instrument that gives the IOU owner exposure to the BTC exchange rate. It's not even possible for the IOU owner to independently verify that there is a corresponding amount of real BTC set aside for them. Sure, it's possible for the exchange to provide Proof of Reserve attestations, but those still rely upon trusting third-party auditors.

Do you see the problem? Since you can't verify a company's balance sheet, you can't be sure that your IOU is redeemable for the asset it represents. For the average user, this isn't a problem...until it is. History is rife with catastrophic revelations that exchanges were operating with fractional reserves. Here are some of the highlights:

|Entity|BTC Lost|
|---|---|
|Bitcoinica|61,000|
|Bitfloor|24,000|
|MTGOX|650,000|
|Cryptsy|10,000|
|Bitstamp|19,000|
|BTC-e|66,000|
|Bitfinex|120,000|
|QuadrigaCX|10,000|
|Cred|10,000|
|Fcoin|10,000|
|Celsius|105,000|
|BlockFi|30,000?|
|Voyager|10,000?|
|FTX|70,000|

That's over 1 million BTC just from some of the large losses we know about! Out of the current total supply of 19 million BTC, that's 5%, which is nontrivial. And who knows how many other unknown unbacked IOUs are floating around out there...

{{< x user="zachxbt" id="1592337921922994177" >}}

If you're a fan of bitcoin, then you probably aren't a fan of fractional reserve banking! After all, that's where most of the inflation of the money supply comes from - not from the central bank, but from all of the small banks that are taking deposits and then lending the vast majority of the money that was deposited!

{{% image "/img/bpb-802-en.gif" /%}}

Point being: while there is no central authority that can manipulate the supply of real bitcoin, these independent "bitcoin banks" can absolutely manipulate the amount of "bitcoin IOUs" that are for sale on the market.

But alas! There are even more unscrupulous forms of market manipulation. Some techniques have been performed in commodities markets for decades. Other techniques were even employed in the credit derivatives market which, of course, resulted in the great financial crisis of 2008!

## Wrapped bitcoin

There are many different "wrapped" bitcoin tokens available on different (non-bitcoin) networks. The vast majority of them keep the underlying asset stored with a custodian. In such cases, it doesn't even matter if you storing a wrapped bitcoin token in self custody - you are still exposed to counterparty risk. As an example, we can observe the failure of several wrapped tokens on Solana that were "backed" by assets held by a custodian that was shown to be [insolvent](https://www.theblock.co/post/186326/wrapped-tokens-issued-by-ftx-or-alameda-collapsing-no-longer-redeemable).

## Derivatives, futures, and options contracts

The history of the precious metals markets and their manipulation by Wall Street trading firms is quite fascinating and gold bugs get pretty riled up over the shenanigans that have occurred.

In 2019 the CFTC [announced](https://www.cftc.gov/PressRoom/PressReleases/7946-19?utm_source=govdelivery) that it had fined Merrill Lynch Commodities Inc $25 million for manipulating gold and silver futures contracts on the COMEX exchange between 2008 and 2014. This was done ‘thousands of times’ according to the CFTC, by MLCI traders ‘spoofing’, or placing and then cancelling orders before they were executed. By creating artificial demand or supply and thus false prices, this interfered with the price discovery of precious metals.

But the case against Merrill is far from an isolated event. It follows similar [moves](https://www.reuters.com/article/us-usa-cftc-arrests/european-banks-pay-46-6-million-to-settle-u-s-spoofing-charges-idUSKBN1FI19J) by the CFTC in early 2018 where the CFTC [charged](https://www.cftc.gov/PressRoom/PressReleases/pr7681-18) investment banks UBS, Deutsche Bank, HSBC, and a number of their traders for spoofing precious metals futures from as early as 2008.

JP Morgan Chase was [caught manipulating the price of silver](https://www.reuters.com/article/jp-morgan-spoofing-penalty-idINKBN26K325) countless times over the span of a decade. Their Global Chief of Precious Metals was convicted of [13 felony counts of attempted price manipulation](https://www.justice.gov/opa/pr/former-jp-morgan-traders-convicted-fraud-attempted-price-manipulation-and-spoofing-multi-year), commodities fraud, wire fraud, and spoofing prices.

And yet the most egregious method of manipulation is right in plain sight. The very structure of contemporary commodity markets where prices are established by trading vast quantities of fractionally backed credits, be it in the form of unallocated positions that are "gold" or "silver" in name only, or in the form of futures that don't have any connection with CME-approved precious metals vaults and warehouses.

CME Group owns COMEX, the leading options and futures market, which executes over 400,000 futures and options contracts daily. Futures and options contracts are generally used as components of sophisticated hedging strategies. Most contracts do not result in the physical delivery of precious metals because the entities trading them don't want to deal with the hassle - they only care about the financial exposure. Historically we only see about 1% of contracts settling with the buyer taking delivery of the actual asset being traded. Since delivery of the asset is extremely rare, the paper market’s price is subject to heavy and frequent manipulation.

By siphoning off demand for real bullion and channeling it into unbacked or fractionally backed credits and futures, the central banks and their bullion bank counterparts have done an amazing job in creating an entire market structure of futures and synthetics trading that is unconnected to actual physical gold and silver markets. This siphons demand away from the physical precious metals and creates a system of price discovery that has nothing to do with the supply and demand for physical bullion.

Are we seeing this occur today in the bitcoin markets? At any given time there is about $10 billion in futures being traded across crypto exchanges.

{{% image "/img/bpb-803.png" %}}
[_https://coinalyze.net/futures-data/global-charts/bitcoin/_](https://coinalyze.net/futures-data/global-charts/bitcoin/)
{{% /image %}}

CME bitcoin futures, on the other hand, currently have about 18,000 contracts worth of open interest. Each contract is 5 BTC which comes to a sum of 90,000 BTC / $1.5 billion in cash-settled contracts.

{{% image "/img/bpb-804.png" %}}
[_https://www.cmegroup.com/markets/cryptocurrencies/bitcoin/bitcoin.volume.html_](https://www.cmegroup.com/markets/cryptocurrencies/bitcoin/bitcoin.volume.html)
{{% /image %}}

Here we can see about $5 billion in options interest on Deribit alone.

{{% image "/img/bpb-805.png" %}}
[_https://metrics.deribit.com/options/BTC_](https://metrics.deribit.com/options/BTC)
{{% /image %}}

Thus it looks like these paper contract markets are still less than 10% the size of the bitcoin market cap. It seems that the level of manipulation we've seen in precious metals markets has yet to occur in bitcoin, but it's certainly worth keeping an eye on - the potential is there. I would start to get worried if the size of these contracts approaches the size of the spot market. For reference, during the Great Financial Crisis of 2008, the credit default swap (derivatives) market grew to $60 trillion, which was an order of magnitude larger than the underlying bond market.

{{% image "/img/bpb-806.png" %}}
[_https://www.bis.org/publ/qtrpdf/r_qt1806b.htm_](https://www.bis.org/publ/qtrpdf/r_qt1806b.htm)
{{% /image %}}

## The solution

While we can't stop exchanges from issuing IOUs and we can't stop financial firms from offering complex "paper bitcoin" contracts, we can limit the magnitude at which these activities occur.

The simple solution to IOU inflation is to **take custody of your own assets**.

{{< x user="lopp" id="1591758506616844288" >}}

Point being, exchanges MUST keep sufficient reserves in order to withstand panics and avoid collapse. By creating a culture that extols the virtues of self-custody, we minimize the balances held by exchanges and thus minimize the systemic risk they pose to bitcoin's scarcity. The smaller the balances held by exchanges, the fewer IOUs they can even risk issuing.

{{< x user="lopp" id="1592090911177334785" >}}

What about lending? In this case we should support non-rehypothecated loans that allow the borrower to hold one key of a [multisig wallet](https://casa.io/learn-more/multisig-wallets). This works by having a user deposit BTC as collateral into a 2 of 3 key wallet for which the user, lender, and a neutral third party each hold a key. The user receives a fiat loan and is able to monitor that collateral on chain to ensure it is not given to anyone else. It's quite clear from the crypto credit crisis of 2022 that rehypothecation makes it very easy to lose track of just how much risk to which one's funds are exposed. This is easier said than done, as rehypothecated loans will always offer more favorable rates due to the increased risk and profitability.

One reason that the precious metals markets have prolific unbacked paper trading is because it's difficult to deliver and verify physical assets; we have strong footing to insist that bitcoin contracts should be settled in actual bitcoin.

The creation of a spot bitcoin ETF, assuming that the bitcoin it holds is not rehypothecated, could reduce some of the demand for cash-settled contracts. Note that ETFs permit market makers to sell more assets than they have on hand in order to maintain liquidity, but to a far lesser degree than what can be done with other types of paper contracts. It's essentially the lesser of several evils: the potential "supply inflation" from a regulated ETF is far lower than that of a typical crypto casino. This is yet another reason why the SEC's rejection of dozens of ETF applications over the past 5 years is a travesty.

Satoshi gave us the gift of sound money. It's up to us to ensure that those who offer services built on top of it are still playing by the rules.

{{< x user="lopp" id="1390280536296460288" >}}