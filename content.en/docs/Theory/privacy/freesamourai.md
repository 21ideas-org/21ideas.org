---
title: "#FreeSamourai"
h1: "#FreeSamourai"
cover: /img/freesamourai-1.jpeg
description: "Samourai Wallet's founders were arrested, indicted, and charged despite following the law."
url: freesamourai
date: 2024-06-14
bookFlatSection: false
bookToc: false
weight: 10
---

Samourai Wallet's founders were arrested, indicted, and charged despite following the law. It seems the US government is starting another campaign against privacy, which we cannot allow to remain unopposed.

{{% hint btc %}}
Cover: Wallet Guy and TDevD facing the beast.

This article by [dammkewl](https://ronindojo.io/author/dammkewl/) was originally [published](https://ronindojo.io/freesamourai/) in RoninDojo blog.

[Español 🇪🇸🇲🇽🇨🇴🇦🇷🇵🇪](https://blog.ronindojo.io/freesamourai-es/)  
[Português 🇵🇹🇧🇷](https://blog.ronindojo.io/freesamourai-pt/)  
[Русский 🇷🇺🇧🇾](/freesamourai)  
[Audio (English)](https://episodes.fm/1491067458/episode/ZTUxYmU4ZmItNjlmMy00YWZiLTk4M2UtMDhkMWQyNjY4ZTg5)
{{% /hint %}}

## Samourai Wallet

From the start, Samourai Wallet have been transparent about their services. They provided their code fully open sourced and explained every public service they ran. All of this was done in public for everyone to see as they, ironically enough, had nothing to hide.

As will be detailed below, they followed the law to the letter as was laid out in government legislation and guidelines. The key point was that Samourai Wallet's code allowed users to make transactions as they saw fit, without ever holding so much as a single [sat](https://en.bitcoin.it/wiki/Satoshi_(unit)) of the user in their own possession.

## Arrest & Seizure

Despite following the law, the IRS-CI and FBI have [indicted the founders of Samourai Wallet](https://www.justice.gov/usao-sdny/pr/founders-and-ceo-cryptocurrency-mixing-service-arrested-and-charged-money-laundering?ref=blog.ronindojo.io), and charged them with "one count of conspiracy to commit money laundering" and "one count of conspiracy to operate an unlicensed money transmitting business".

So on April 24th 2024, several of their servers and domain names were seized, including samouraiwallet.com and code.samourai.io, and the founders [Samourai Wallet(Wallet Guy)](https://twitter.com/samouraiwallet?ref=blog.ronindojo.io) and [TDevD](https://twitter.com/samouraidev?ref=blog.ronindojo.io) were arrested. Whirlpool has become inactive as a result, and anyone's wallet not connected to a self-hosted Dojo server would no longer be able to receive updates on the state of the user's incoming/outgoing bitcoin transactions.

Several ancillary websites have gone down as well, such as KYCP and OXT, probably the best free services to date that gave users the ability to research the privacy of their own transactions. Finally, some time after the arrest, the wallet has been taken down from the Google Play store at the request of the government.

{{% hint danger %}}
Samourai Wallet founders were transparent about their open source software, complied with the law, and were arrested with their assets seized without warning.
{{% /hint %}}

{{% image "/img/freesamourai-2.jpg" %}}
samouraiwallet.com defaced
{{% /image %}}

## Indictment & FinCEN guidelines

Samourai Wallet have not acted as a Money Service Business according to the government's own explanation of their laws, given the "[2019 FinCEN Guidance issued to synthesize regulatory framework for virtual currency](https://www.cov.com/-/media/files/corporate/publications/2019/11/fincen-issues-guidance-to-synthesize-regulatory-framework-for-virtual-currency.pdf?ref=blog.ronindojo.io)". The quote is as follows:

> By contrast, owners of unhosted wallets – computer software that allows the owners to store and conduct CVC [convertible virtual currencies] transactions – are not money transmitters.

Within the context of the legislation and the government's published interpretation of that, Samourai Wallet is exactly that: _**computer software that allows owners to store and conduct CVC transactions**_.

At no point does Samourai Wallet receive bitcoin that the user intends to have processed by the service for its intended purpose. Thus, they are **"not money transmitters"**.

The 2019 FinCEN guidelines continue on this matter as follows:

>  Multiple-signature wallet providers may be money transmitters depending on the services they offer. For example, if the multiple-signature wallet provider limits its role to creating un-hosted wallets that require the addition of a second authorization key to the wallet owner’s private key in order to validate and complete transactions, the wallet provider is not a money transmitter because it does not accept and transmit value.

Samourai Wallet is not a Multiple-signature wallet so this does not directly apply to Samourai Wallet. But this does help in pointing out how Samourai Wallet is not a money transmitter. It indicates that even entities involved in allowing a user access to their bitcoin to the point of holding a "secondary authorization key", are still not to be considered a "money transmitter" if the service entails the user having his own "un-hosted wallet" and the user not having to share their own private key with the service.

This hammers the point down to the essence: the user has a self-hosted wallet (and not an "account" in a third party service), the service never has the private key under any circumstance (so no custody over the bitcoin); with these facts your service is not a money transmitter.

As part of the indictment, the prosecutor refers to Samourai Wallet receiving payment for their services, but according to the 2019 FinCEN guidelines there is no such criteria relevant for the classification of being a Money Transmitter:

> Whether a CVC wallet provider is a money transmitter depends on four factors: (a) who owns the value; (b) where the value is stored; (c) whether the owner interacts directly with the payment system where the CVC runs; and (d) whether the person acting as intermediary has total independent control over the value.

In conclusion, with what FinCEN laid out should be the interpretation of the law, there is no argument possible that the label of Money Transmitter applies to Samourai Wallet's services. In spite of this, the prosecutor claims that Samourai Wallet have acted as a Money Transmitter in their indictment.

There is also a clear reason they want to label Samourai Wallet as a Money Transmitter: without that claim, they have no basis for the charges. Samourai Wallet "not being a Money Transmitter" makes them unbeholden to the existing set of regulations. The US legislation has no law in place for "anything that isn't a Money Transmitter" to be considered criminal, or even suspicious for that matter, as that would be ludicrously despotic. Yet, the US government likely repines lacking that legal position, as these ridiculous charges are their attempt to set a precedent, further explained below, which for them would be the "next best thing".

There are other egregiously false claims in the indictment, one such example is as follows:

> 23. ... the defendants, owned, controlled, managed, and supervised Samourai, which was engaged in the business of transferring funds on behalf of the public.

As will be detailed with analogies further on in this article, Samourai Wallet have not at any point in the past transferred bitcoin on behalf of the public. Samourai Wallet has never held a single private key from any user. Samourai Wallet has never taken custody of any bitcoin. Samourai Wallet has never handled transactions in a way that a Bitcoin node doesn't do already. This last point is also key in the fact that this trial has a massive impact on Bitcoin and its users, to be further explained below.

## The charges

Note that all (2) charges in the indictment are conspiracy charges. There are no charges of money laundering, and no charges of operating an unlicensed money transmitting business. This already warrants pointing out a few key things:

First: given that Samourai Wallet publicly announced their software and services from the beginning, there is no barrier between any supposed "conspiracy and a corresponding action" in their situation. They did not conspire to do any crimes given that they simply made the software as they publicly stated. In other situations, legal scholars will point out "you do not need to commit a crime to be charged for conspiracy of it". This is an irrelevant point to this situation, as Samourai Wallet "publicly did what they publicly said they would do, and afterwards publicly explained what they did". They were consistent with every new software release they made and released on the internet in public.

It poses the question: where are the charges for any actions instead of just the "conspiracies"? Where is the "charge to commit money laundering" and the "charge to operate an unlicensed money transmitting business"? If what they said they would do was also subsequently done, the US government labeling the former as a conspiracy for committing a crime should logically have the same government label the latter as the crime that was conspired. But the government has curiously done nothing of the sort.

To speculate briefly: it's [easier](https://www.youtube.com/watch?v=4j2IWfsCoMs&ref=blog.ronindojo.io) to charge for conspiracy of an action than to charge for the specific action itself. The implication here is that the government knows they cannot charge Samourai Wallet as such, thus for the government to "have their way" [for](https://reason.com/2024/05/01/groundhog-day-for-the-crypto-wars-the-doj-on-bitcoin-prowl/?ref=blog.ronindojo.io) [ulterior](https://vonupodcast.com/210?ref=blog.ronindojo.io) [motives](https://bitcoinmagazine.com/culture/weekly-reorg-war-of-attrition?ref=blog.ronindojo.io), they apply lawfare in the manner with which they're most certain to cause damage.

Second: No third parties pointed out as the owners of the "illegal funds" that they claim went through Whirlpool have been charged with money laundering by using Whirlpool. Thus, any reference to these third parties and their bitcoin are an attempt by the government to give weight to their claims of "conspiracy to money launder", while the government has yet to show these third parties even so much as a fraction of the same litigious intent to go after as well.

Third: before something can be labelled a criminal conspiracy, it must meet certain criteria:

> A criminal conspiracy exists when two or more people agree to commit a criminal offense and take a concrete step toward its completion. The conduct need not itself be a crime. But it must indicate that those involved in the conspiracy knew of the plan and intended to break the law

Given that Samourai Wallet have shown they hope to achieve [many of the privacy standards that have existed in the fiat system](https://web.archive.org/web/20231204091031/https://blog.samourai.is/why-we-coinjoin/), their intent was clear in bringing privacy to users that was already normal for the average Joe with a bank account — normal before the existence of Bitcoin. But it wasn't just their articles that showed their intent.

They designed their services exactly as such, in that it always gave the user full control of their own bitcoin, never being an intermediary for the transfer of bitcoin, merely helping users retain privacy when they themselves construct their own transactions, using nothing but free and open source code under the supposed protection of the first amendment.

## Analogy: Ricochet

To continue using analogies in explaining these technologies, we'll use the example of you having some product you don't want to use anymore. Maybe you're done using your bike and you want to sell it to some other individual for let's say a bank transfer.

In that scenario, this money-for-bike transaction has no further history related to it. Nothing about any "previous activity" from the bike purchaser is tied to this transaction. Your bank won't apply any "history related scrutiny/research" to these funds. After all, you just sold a bike, nothing else happened between the two of you. Nor will your bank investigate what future recipients of your funds will do with that money. It is of no concern to the bank what the supermarket does with your payment when you buy groceries.

Some Bitcoin/crypto exchanges however, believe they do need to perform an invasive research on the history (and future use!) of your bitcoin. They dive sometimes as far as 4, maybe 5, transactions further down the line of the chain of transactions. It sounds like a small number, but as is generally the case with such "exponential" based numbers, it takes explaining why this number has such a high impact.

If the bike purchaser paid you in bitcoin, you have no control of how he used his Bitcoin before sending some to you. It may be he "reused addresses" for example. That means that any previous transaction he has ever made, may be considered tied together by the exchange. The same could be the case for anyone (or even everyone!) who gave some Bitcoin to the bike purchaser, and the same before that, and so forth.

Before the exchange allows you access to the bitcoin you've just sent to them, they may end up first looking at thousands of people their transaction history, if not more, just so that they can feel "safe" to handle your bitcoin. And that's regardless of how large or small an amount of Bitcoin you send to the exchange. Remember that with any bank transfer to an exchange, that number is nowhere near thousands, it's zero!

{{% hint danger %}}
Exchanges may look at thousands of random people's transactions when investigating your bitcoin. While a huge bank transfer isn't even researched for one.
{{% /hint %}}

They apply these rules only to Bitcoin(and crypto) but not the traditional fiat system. This privacy detriment makes no sense as they judge how to handle your bitcoin based off how others (outside of your control) have handled their bitcoin before you.

It is in fact even worse than that, given that an "address reuser" may very well do 'something stupid' at a future point in time with their bitcoin, well after he's given you some bitcoin. The exchange would then look at the reused address from which your bitcoin came, and label that address as a 'risk' and thus retroactively impact your bitcoin by denying your access to it.

Thus, Ricochet does a very simple thing to bring using Bitcoin back to the realm of sanity. Ricochet creates a hop to have your bitcoin sent from yourself, to yourself. It puts it on a new address as a result. In fact, it does this 6 times in a row. This is very obvious on-chain. There is in fact even no real privacy gained here.

If you receive a Ricochet payment from somebody, you can check it out on a block explorer and see 6 transactions in a row where the bitcoin are simply passed onward. Past those 6 transactions, you could see the same history that you would otherwise see if they did a simple payment instead of Ricochet. Gaining privacy isn't the goal of Ricochet. It's to achieve sanity when interacting with an exchange, where with your Ricochet transaction you implicitly tell the exchange:

_"Hey, this is my bitcoin. There is no justifiable basis for you to look any further than this, as I have no further association with those people that I have received the bitcoin from. You could however, look at the transactions further into its history, as it's very obvious on-chain and simple to do so, but you'll look very silly doing so, knowing that I had nothing to do with those transactions."_

The only reason Ricochet is designed this way, is because exchanges have automated this invasive research. There is not an actual person behind some computer putting on their reading glasses and going through Bitcoin transactions their data. There is not a human with a sense of duty or due diligence who's the one passing judgement on your transaction.

Their systems are fully automated and set up with "risk score calculations" of which their efficacy has yet to even be proven, but also of which the relevance has yet to even be explained. There's no transparency by these exchanges on "what constitutes as a problematic transaction" other than vague abstract assertions. That means you yourself can't even do the research on the history of your bitcoin, to assess whether an exchange would take your Bitcoin and basically "run away with it" under the claim of "complying with regulations".

Note that there is zero legal obligation by users to send bitcoin in a way that they would be maximally linked to any obscure history far removed from what they, again, have no control of researching themselves in the first place. It would be absurd to even expect such a thing, even more so in the face of the United States having what's most importantly here: the 5th amendment stating the right to not self-incriminate. The US government thus cannot enforce regulations upon the customer of services, only upon the services themselves within the confines of their legislation.

To draw a short comparison: when registering to purchase a firearm in the US, you have to fill in ATF form 4473. It is not illegal for anyone to write an article online that says "if you fill in X at question Y, you will be denied access. If you fill in Z at question Y, you won't be denied access". Such an article would be an explanatory statement of fact, it would be protected under the first amendment, and it cannot be construed as "conspiracy to make people lie on the form". Otherwise the law's wording itself would have to be held up to the same standard, as the law too is an article that tells you under what conditions you are denied access, and neither copying nor describing the law or regulations can be considered a crime.

In the same manner, because Samourai Wallet is an "un-hosted wallet", the code they published merely tells people in which ways you can make a transaction, but it is the user who decides in which specific way the wallet is to make a transaction and send that transaction out into the world for the Bitcoin network to accept.

## Analogy: explaining Whirlpool

Their Whirlpool service provided users a way to "[delink](https://github.com/nopara73/ZeroLink?ref=blog.ronindojo.io)" their past receives from future spends. This is a basic privacy concept that even the average Joe enjoys when using his bank: your employer does not know where/when/how you spend your wages. It takes "delinking" on Bitcoin as such, before the same is achieved there. Samourai Wallet has achieved this with Whirlpool.

The analogy can be made that 5 people have each a 20 dollar bill. For comparison's sake, imagine this dollar bill somehow shows the history of all previous transactions it can be related to (it's a fancy e-ink bill where you can scroll through its history), and it shows this history all the way back to the bill's original issuance (in Bitcoin: the mined block that created it).

A person named Samourai Wallet holds out in his hand a large top hat and says "you can use this hat to transact with each other, but you can only each hold a 20 dollar bill in it". The 5 people then each put their hand holding a 20 dollar bill into the hat. After this has been done, Samourai Wallet then says "it seems everybody has agreed to this transaction". Lastly, the 5 participants then each take their hand out again, holding a 20 dollar bill. Each 20 dollar bill now shows this new transaction as part of the bill's full transaction history.

To complete the analogy, in the same manner of how Bitcoin works of every transaction, because each 20 dollar bill now shows the new transaction, it also shows the full history of all transactions that have preceded this particular transaction. That includes the history of the other 4 bills. You cannot pick one of the 20 dollar bills and see the person who owns it their specific transaction history.

On top of that, each participant puts on a mask before putting their hand in the hat, then (while looking away) changes to a completely new mask before taking out the money. This is the "[blinding](https://www.geeksforgeeks.org/chaumian-blinding/?ref=blog.ronindojo.io)" in the "[chaumian conjoin](https://medium.com/@opeyemiadeyemi/chaumian-blinding-blinded-signatures-and-its-use-case-in-bitcoin-s-ecosystem-549310aacce8?ref=blog.ronindojo.io)" technology. This way, no onlooker (not even Samourai Wallet) can take how a bill its transaction history looked before this event and look at who was holding it, and then tie that to the same person holding the "updated bill". In short: afterwards, neither the 20 dollar bill nor the masked person holding it can be tied to anything from before the transaction, not any of the first set of 5 masks nor any of the first separate 5 sets of 20 dollar bills their transaction histories.

Samourai Wallet at no point take any action themselves in hiding the user's identity for them, their coordinator merely only accepts the data in blinded form. In other words: participants are only allowed to join the transaction if they agree to wearing a mask before participating, and agree to change masks before taking out their hand from the hat.

To reiterate on the transaction history aspect: all transactions in Bitcoin behave the exact same way. This transaction "in the hat" does not produce a anomaly compared to any other transaction. In Bitcoin's transaction data structures, it is not the case that "other transactions have a clear distinction from these coinjoin transactions". It is not the case that usually inside a "non-coinjoin" transaction, a subset of its inputs are clearly tied to a subset of its outputs.

Each transaction adds the **full history** of **all inputs** for the transaction, and each transaction simply has only the full set of **all new outputs** it created, with no additional distinguishing properties in there. For all intents and purposes, Bitcoin considers these "coinjoin" transactions normal, as there is nothing different in there to consider it different from other transactions.

Samourai Wallet and all other coinjoin implementations haven't actually introduced something new to the transaction data construct here; they haven't introduced "defying ownership visibility". What Samourai Wallet have done is hold up a hat and said "only 20 dollar bills are allowed in here". With this, no distinction can be made between any particular participant's amount of bitcoin in this transaction. There is no "one person put more in the hat than the others" which would make their bitcoin going in and coming out correlate 100%.

{{% hint danger %}}
Samourai Wallet was targeted first, for making normal Bitcoin transactions. Other wallets and services are next.
{{% /hint %}}

And they did this without taking control of the bitcoin, as the participants held onto their 20 dollar bill the whole time throughout the transaction. If at any point Samourai Wallet "backed out" the process, all Samourai Wallet could do was take the hat and leave before the transaction was made, and all participants would still be holding on to their 20 dollar bill each.

Imagine the post office mailing cash, which not only happens already, several post offices have explicitly stated there is no legal problem with this. The post office however, despite physically having the funds **in their possession,** has no regulations it must follow on this matter. It is not required to perform KYC/AML, it does not have to "x-ray scan" to find any cash or checks in their packages. Despite all this and openly inviting the public to use their services for it, **not one post office is charged with conspiracy to commit money laundering / acting as an unlicensed money transmitter**.

## Previous precedents on what doesn't constitute as money laundering

There's relevant precedent in the history of US law regarding what constitutes as money laundering. One such outcome of a case states that ["the government is required to prove the money was portrayed by the defendant as legitimate wealth"](https://www.oyez.org/cases/2007/06-1456?ref=blog.ronindojo.io) before he could be charged with money laundering. This scenario is not directly relevant given that unlike this older case, Samourai Wallet was never in possession of bitcoin that users sent through Whirlpool. But in relation to the charges being conspiracy charges specifically, at no point did Samourai Wallet make any such "legitimacy claims" about bitcoin that would go through Whirlpool. It's even more clear that the terms used in the statute ("conceal/disguise") do not apply to Ricochet, as Samourai Wallet have explained a Ricochet spend is very clear on-chain and does not provide privacy (prosecution claiming otherwise in paragraph 27 in the indictment).

The statement by the supreme court on this case from 2007 affirms that, it was not proven the defendant knew the **purpose** of his actions was to conceal or disguise the illicit nature of the money he had in his possession. This distinction makes it clear that it was irrelevant whether the defendant knew the **effect** would be said illicit nature would become concealed/disguised.

This matters in the case of Samourai Wallet, given precisely the allegations made by the prosecutor. As the prosecutor claims: Samourai Wallet performs zero checks on who brings their bitcoin to Whirlpool. That means by default that Samourai Wallet have no information about any possible illicit nature behind the source of any bitcoin. Given this fact, no "purpose" for using Whirlpool could be inferred by Samourai Wallet from any of the incoming bitcoin.

Another case was [vacated](https://www.law.cornell.edu/supremecourt/text/06-1005?ref=blog.ronindojo.io), despite the defendant pleading guilty, for the reason that the "profits" were not **used** in the illegal activity. The term "proceeds" was initially interpreted by the court to imply "all revenue of the illegal activity", which if held up would mean all criminal enterprise by definition would also be money laundering. To prevent this becoming the precedent, and keep the law's interpretation clear for its purpose, the District Court established money laundering to be specifically related to the profits of illegal activity, affirmed by the Seventh Circuit.

At the very least, this means that the prosecution cannot claim what Samourai Wallet did with the revenue of Whirlpool for maintaining the business (i.e. paying for servers) to be relevant for any alleged money laundering (prosecution claiming otherwise in paragraph 11 in the indictment).

## The US government's strategic campaign against privacy

We all know that once you enter the realm that is the court of law, prudence becomes most important. Samourai Wallet in fact understood this before the US government had made any moves, as they kept track of any legislative moves made by the US government in relation to their judgement on Bitcoin's transactional nature.

So when FinCEN took it upon themselves to leap for criminalizing basic transactions, even so much as labeling "not reusing addresses as suspicious behavior", Samourai Wallet responded in kind with a well formed legal letter, signed by themselves and other significant companies in the Bitcoin ecosphere, in an attempt to stop the attack on privacy dead in its tracks:

[https://web.archive.org/web/20231204091031/https://blog.samourai.is/our-response-to-fincen-on-proposed-rules-for-bitcoin-mixing/](https://web.archive.org/web/20231204091031/https://blog.samourai.is/our-response-to-fincen-on-proposed-rules-for-bitcoin-mixing/)

There's roughly three months that went by between between Samourai Wallet's response to FinCEN's proposal and their arrest. While we can speculate on a link between the two, there are more important things to consider that have happened since, given how all of this impacts all of us.

### The FBI campaigned to threaten cryptocurrency users that they must use registered money transmitters

One(!) day after the arrest and asset seizure, the government releases an ["Alert on Cryptocurrency Money Services Businesses"](https://www.ic3.gov/Media/Y2024/PSA240425?ref=blog.ronindojo.io). Here, the FBI (as the enforcement arm of the DoJ) seems to imply that any cryptocurrency related service must follow the Money Transmitter regulations because otherwise they can expect the same judicial overreach that has been used on Samourai Wallet. This is a very disturbing and worrying statement so closely timed to their arrest, for obvious reasons (re: they have no control over those who aren't a money transmitter, so they try to force everybody's hand to become a registered money transmitter).

The effects of this have become very real already, as several services have responded by exiting the US, shutting down, or worse: implemented KYC.

- Shutdown: [LocalMonero and Agoradesk](https://alternativeto.net/news/2024/5/prominent-no-kyc-crypto-exchanges-localmonero-and-agoradesk-shut-down/?ref=blog.ronindojo.io)
- US exit: [WasabiWallet and Phoenix Wallet (Acinq)](https://www.coindesk.com/consensus-magazine/2024/04/29/as-wasabi-wallet-and-phoenix-leave-the-us-whats-next-for-non-custodial-crypto/?ref=blog.ronindojo.io)
- US exit: [HodlHodl](https://medium.com/hodl-hodl/effective-immediately-hodl-hodl-has-blocked-access-to-its-lending-platform-for-users-in-the-usa-11c294369850?ref=blog.ronindojo.io)
- US Exit: [Ibex](https://dapp.expert/news/en_ibex-pay-announces-exit-from-us-market?ref=blog.ronindojo.io)
- Implemented KYC: [Speed Wallet](https://www.nobsbitcoin.com/speed-wallet-kyc-us-customers/?ref=blog.ronindojo.io)

And with this we can see the chilling effect of judicial overreach before the Samourai Wallet trial has even begun.

### The US government's pet "witness" can make claims you cannot refute

About a month before the Samourai Wallet indictment, [Roman Sterlingov was convicted](https://www.torekeland.com/roman-sterlingov/?ref=blog.ronindojo.io) by the US government of operating an unlicensed money transmitter in a most [curious case](https://vonupodcast.com/tvp-184-chainanalysis-coercion-quack-science-the-troubling-case-of-roman-sterlingov-with-tor-ekelend-mike-hassard-sw-from-samourai-wallet/?ref=blog.ronindojo.io). The government alleges he was the administrator of the Bitcoin Fog custodial tumbler, with attribution to Sterlingov primarily coming from IP address and blockchain forensic data provided by Chainalysis as an "[expert witness](https://cointelegraph.com/news/bad-blockchain-forensics-convict-roman-sterlingov?ref=blog.ronindojo.io)".

For their part, Samurai Wallet and OXT aided in the defenses preparation for Daubert hearings on the validity and admissibility of the Chainalysis software and heuristics. During the hearings, several issues with Chainalysis methodologies were disclosed by Chainalysis Head of Investigations including both lack of error rate tracking and peer review of the Chainalysis code base. Despite these issues the judge of the case ruled that Chainalysis Reactor was admissible using [pseudoscience](https://archive.ph/lzVXd?ref=blog.ronindojo.io) logic.

Additionally both OXT and CipherTrace, Sterlingov's main expert witness and a direct competitor to Chainalysis, were effectively barred from review of Chainalysis proprietary blackbox heuristics. CipherTrace was set to testify against Chainalysis heuristics and application of block chain forensics use as a primary attribution methodology in criminal prosecution. However one week before trial, CipherTrace was pulled from the case by their wholly owned subsidiary, MasterCard.

This meant that blackbox software, heuristics, and forensic methodology went completely unchallenged during trial allowing the government to railroad Roman Sterlingov and obtain their desired guilty verdict for a crime he did not commit.

This affects all Bitcoin related legal cases from that point on, until an appeal overturns the validity of this "expert witness". Whatever statement this unchecked third party makes on any activity on Bitcoin's blockchain, is now admissible evidence in a trial case. And as was demonstrated in Roman Sterlingov's case, you are likely not allowed to provide an expert witness of your own on the same subject matter.

You receive some bitcoin, you spend it somewhere, and at some unknown point in the future, you are charged and arrested. You may want to claim you had nothing to do with "a transaction 2 hops back from when you received some bitcoin", but in the face of this now newly established authority, your claims make no dent in whatever they may claim, with your life hanging in the balance.

{{% hint danger %}}
The government will use their "expert witness" to make claims you're not allowed to refute.
{{% /hint %}}

### The US government doesn't stop at its borders

Another case in the same theme was that of TornadoCash. Alexey Pertsev was arrested Feb 15 2023 initially without charges and later charged with money laundering (NL law), Roman Storm and Roman Semenov were indicted Aug 25 2024 for conspiracy charges (US law, money laundering, operating unlicensed money transmitting business, violate sanctions). It seems the US government has found its "hammer to hit every nail with" by charging privacy coders with whichever category they can easily get conspiracy convictions for.

What's probably the most important consequence thus far is the ruling on [Alexey Pertsev](https://www.freealex.nl/?ref=blog.ronindojo.io). The statement made by the judge reading the conviction was a most [chilling](https://en.wikipedia.org/wiki/Chilling_effect?ref=blog.ronindojo.io) one:

> ... [because they did not put any "barriers" in their software to oppose criminals who would want to use it for laundering, the defendant was found guilty of money laundering](https://thehackernews.com/2024/05/dutch-court-sentences-tornado-cash-co.html?ref=blog.ronindojo.io).

While the Pertsev trial did not occur in the US, what is shown in all these cases is the impact of the collaboration between the western jurisdictions. Portugal, Iceland, EuroPol, the USA Government, these have worked together in the Samourai Wallet indictment and arrest. In Alexey's case: also the Netherlands. Likely, any EU member state can be considered a part of this litigious covenant.

This is important to understand for citizens of every EU member state: your nation state may have a much easier time charging you for money laundering than the US would charging US citizens. Pertsev was not charged with conspiracy, he was charged and convicted for money laundering. In The Netherlands, the judges are also jury, its constitution is no barrier for new legislation, and there is no supreme court to appeal to.

Samourai Wallet hosted their servers in Iceland. This jurisdiction was precisely chosen for the reason that the data center there had the policy to not comply with foreign nation state legal requests. The Icelandic government itself would have to follow their own laws, using proper procedure, before any request such as asset seizure could be enforced in the data center. Given that the indictment is from the US government, this makes it clear the Icelandic government acted at the instruction of the US government to perform the asset seizure and take down Samourai Wallet's servers.

## The impact on Bitcoin

So now we are in the situation where, several months in a row, one privacy coder is put out of commission after another, using lawfare and unjust procedures as a weapon already. They silence those who voice their criticism of the government's proposals to make "unregulated behavior" illegal. They stop those who build privacy solutions and put them in prison.

Two senators have already voiced their disdain for the situation. Senator Lummis stated how [“This stance contradicts existing Treasury guidance, common sense and violates the rule of law”](https://cryptonews.com/news/cynthia-lummis-slams-doj-after-tornado-cash-saourai-wallet-charges.htm?ref=blog.ronindojo.io). She sent a letter together with Senator Wyden urging the Department of Justice to reconsider its enforcement action in the case of Samourai Wallet. Other well connected individuals such as [Caitlin Long](https://x.com/CaitlinLong_/status/1784292300270575730?ref=blog.ronindojo.io) are also starting to take notice.

We must reiterate that [Non-custodial mixers are not money transmitters](https://blog.samourai.is/statement-on-legality-of-coinjoin-and-other-privacy-tools/?ref=blog.ronindojo.io). No new law has been passed yet that changes this. But the Samourai Wallet trial may set the precedent such that they needn't go through the trouble of enacting new law.

Given that the prosecutor claims Samourai Wallet have "transferred funds on behalf of the public" when there is no evidence of the sort, because Samourai Wallet never did this, this could open up many possible interpretations of Bitcoin use by the government, all to the detriment of Bitcoin users.

This impacts at the very least Lightning Node operators. They too perform no KYC/AML on their nodes before accepting incoming bitcoin and passing it on to the next node. Furthermore, mining pools could be held liable for not performing KYC/AML for their mining payouts.

And if we go beyond the parts of Bitcoin that handle funds directly (even if non-custodially), this terrible precedent could even establish that **any** service, which could potentially be used by criminals to obfuscate criminal activity, could be held liable for facilitating this.

Bitcoin's node implementations and the wallets people use may become the next target pending the outcome of this trial. But at that point, Pandora's box has already been opened to go after any software or service. Imagine Signal messenger being prosecuted for "conspiracy" because some criminals used it for encrypted communication.

This is not hyperbole in the slightest. The US already has a terrible track record respecting the privacy of its citizens, but more importantly it was a hard fought battle for the [precedence](https://www.eff.org/deeplinks/2015/04/remembering-case-established-code-speech/?ref=blog.ronindojo.io) in US law about the [first](https://archive.epic.org/crypto/export_controls/bernstein_decision_9_cir.html?ref=blog.ronindojo.io) amendment [protection](https://www.theregister.com/2021/06/08/pgp_at_30/?ref=blog.ronindojo.io) of [code](https://reason.com/video/2020/10/21/cryptowars-gilmore-zimmermann-cryptography/?ref=blog.ronindojo.io).

This situation is likely to impact Bitcoin for all US citizens, and citizens of foreign nations (re: EU member states) where the US government extends their enforcement upon. Bitcoin has its [own history](https://blog.samourai.is/reflections-on-bitcoin-as-peer-to-peer-cash/?ref=blog.ronindojo.io) in relation to the US legislature, where it depends on its constituents to fight for their own rights to the freedom to transact and their freedom to do so privately.

One such moment in history to join the fight is right fucking now.

{{% hint danger %}}
Privacy is a human fight
{{% /hint %}}

## What you can do to help

**Donate** to the Samourai Wallet defense fund: [http://p2prights.org/?ref=blog.ronindojo.io](http://p2prights.org/?ref=blog.ronindojo.io). Fill in the form to make a tax-deductible donation or **_leave the information as N/A to make an anonymous donation._** Put the following as the "purpose" of the donation (bottom form field):

> U.S. v. Rodriguez & Hill (Samourai Wallet)

**Print** the leaflet we made. It briefly explains the situation and has a QR code to this page. Share them wherever you think best helps the cause (for example: at bitcoin conferences):

- English: [https://21ideas.org/epubs/free-samourai-leaflet.pdf](/epubs/free-samourai-leaflet.pdf)
- Español: [https://ronindojo.io/downloads/free-samourai-leaflet-es.pdf](https://ronindojo.io/downloads/free-samourai-leaflet-es.pdf)
- Português: [https://ronindojo.io/downloads/free-samourai-leaflet-pt.pdf](https://ronindojo.io/downloads/free-samourai-leaflet-pt.pdf)
- Русский: [https://21ideas.org/epubs/free-samourai-leaflet-ru.pdf](/epubs/free-samourai-leaflet-ru.pdf)

**Spread the Word**: Share this blog post, talk to your friends, have the conversation on podcasts, and use your social media platforms to raise awareness about this critical issue:

- English: [https://blog.ronindojo.io/freesamourai](https://blog.ronindojo.io/freesamourai)
- Español: [https://blog.ronindojo.io/freesamourai-es](https://blog.ronindojo.io/freesamourai-es/)
- Português: [https://blog.ronindojo.io/freesamourai-pt](https://blog.ronindojo.io/freesamourai-pt)
- Русский: [https://blog.ronindojo.io/freesamourai-ru](https://blog.ronindojo.io/freesamourai-ru)
- Audio(English): [https://episodes.fm/1491067458/episode/ZTUxYmU4ZmItNjlmMy00YWZiLTk4M2UtMDhkMWQyNjY4ZTg5](https://episodes.fm/1491067458/episode/ZTUxYmU4ZmItNjlmMy00YWZiLTk4M2UtMDhkMWQyNjY4ZTg5?ref=blog.ronindojo.io)

**Stay Informed**: Follow updates on the case and learn more about the broader implications for the Bitcoin community.

## Additional Links

- [https://blog.ronindojo.io/samourai-defense-fund/](https://blog.ronindojo.io/samourai-defense-fund/)
- [https://blog.ronindojo.io/always-rise-after-a-fall/](https://blog.ronindojo.io/always-rise-after-a-fall/)
- [https://freesamourai.com/](https://freesamourai.com/)
- [https://www.youtube.com/watch?v=4j2IWfsCoMs](https://www.youtube.com/watch?v=4j2IWfsCoMs)
- [https://mises.org/mises-wire/arrest-samourai-wallet-developers-shows-us-government-hates-privacy-and-freedom](https://mises.org/mises-wire/arrest-samourai-wallet-developers-shows-us-government-hates-privacy-and-freedom)
- [https://www.cato.org/blog/samourai-charges-mark-chilling-moment-financial-privacy-0](https://www.cato.org/blog/samourai-charges-mark-chilling-moment-financial-privacy-0)