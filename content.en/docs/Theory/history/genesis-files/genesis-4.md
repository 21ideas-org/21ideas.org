---
title: "Part IV: With Bit Gold, Szabo Was Inches Away From Inventing Bitcoin"
h1: "The Genesis Files. Part IV: With Bit Gold, Szabo Was Inches Away From Inventing Bitcoin"
cover: /img/gf-243.png
tags: ["bitcoin", "history", "cypherpunks", "genesis"]
description: "Digital currency, a cash for the internet, was always a central goal for the Cypherpunks. But few dived into the subject matter like Nick Szabo did."
url: gf/genesis-4
date: 2018-07-12
bookFlatSection: false
bookToc: true
weight: 5
---

{{< details "Contents" "..." >}}
1. [Intro: The Day Cryptography Changed Forever](/en/gf/genesis-intro)
2. [Part I: How David Chaum’s eCash Spawned a Cypherpunk Dream](/en/gf/genesis-1)
3. [Part II: Hashcash or How Adam Back Designed Bitcoin’s Motor Block](/en/gf/genesis-2)
4. [Part III: If Bitcoin Had a First Draft, Wei Dai’s B-Money Was It](/en/gf/genesis-3)
5. [Part IV: With Bit Gold, Szabo Was Inches Away From Inventing Bitcoin](/en/gf/genesis-4)
6. [Part V: How Hal Finney’s Quest For Digital Cash Led To RPOW (And More)](/en/gf/genesis-5)
{{< /details >}}

{{< hint btc >}}
This article by Aaron van Wirdum was published in [Bitcoin Magazine](https://bitcoinmagazine.com/culture/genesis-files-bit-gold-szabo-was-inches-away-inventing-bitcoin).

[Contribute](/contribute/).
{{< /hint >}}

Digital currency, a cash for the internet, was always a central goal for the Cypherpunks. But few dived into the subject matter like Nick Szabo did.

{{% image "/img/gf-244.png" /%}}

As his Hungarian parents had fled post-war Soviet regime to settle in the United States, Nick Szabo came to call the Californian Bay area of the 1990s his home. Here, he was among the first to frequent the in-person “Cypherpunk” meetings organized by Timothy May, Eric Hughes and other founding members of the collective of cryptographers, programmers and privacy activists centered around the ’90s mailing list of the same name.

Like the other Cypherpunks, Szabo was concerned with the receding guarantees of privacy in an upcoming digital age and took action to stem the tide where he could. For example, on the Cypherpunks mailing list, Szabo led opposition to the “[Clipper chip](https://en.wikipedia.org/wiki/Clipper_chip),” a proposed chip that would have been embedded in phones, allowing the NSA to listen into calls. Szabo had a particular knack for explaining the risks of such privacy infringements in a way that resonated with non-technical people, sometimes giving talks on the topic or even handing out flyers. (The chip would eventually be rejected by manufacturers and consumers.)

But like the more libertarian-oriented Cypherpunks, Szabo’s interest in digital privacy was part of a bigger picture — it was not just about privacy alone. Inspired by Timothy May’s vision as laid out in [The Crypto Anarchist Manifesto](https://activism.net/cypherpunk/crypto-anarchy.html), Szabo saw the potential to create a “Galt’s Gulch” in cyberspace: a domain where individuals could trade freely, as described libertarian author Ayn Rand’s novel _Atlas Shrugged_. The pseudo-physics force field of the story, May and Szabo believed, could be substituted with the recently invented magic of public key cryptography.

> “If we step back and look at what many cypherpunks are trying to achieve, a major idealistic theme is a Ghandian cyberspace where violence can only be make-believe, whether in Mortal Komat [sic] or ‘flame wars,’” Szabo [wrote](https://cypherpunks.venona.com/date/1995/09/msg01303.html) on the Cypherpunks mailing list.

Yet, Szabo also realized that free enterprise needs more than just encryption as a security layer. Inspired by another libertarian author — economist Friedrich Hayek — he found that the basis of human society is, to a large extent, based on building blocks, like property and contracts, which are typically enforced by the state. To create a stateless, non-violent cyber alternative, Szabo knew that these building blocks had to be transferred to the online domain.

This is how Szabo, by the mid 1990s, came to propose what he is perhaps best known for today: _smart contracts_. These (then-hypothetical) computer protocols could digitally facilitate, verify and enforce the negotiation or performance of a contract, ideally without the need of any third party. As Szabo had famously [argued](http://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/ttps.html): “Trusted third parties are security holes.” These security holes would be targets for hackers or criminals — as well as nation states during times of political instability or oppression.

But smart contracts were only part of the puzzle. The second tool Szabo needed in order to realize his “Galt’s Gulch” was possibly even more important. Money.

# Electronic Cash

Digital currency, a cash for the internet, was always a [central goal](https://cypherpunks.venona.com/date/1993/08/msg00426.html) for the Cypherpunks. But few dived into the subject matter like Szabo did.

In his essay “Shelling Out: The Origins of Money,” Szabo [described](https://nakamotoinstitute.org/shelling-out/) how — as [first hypothesized](https://books.google.nl/books?id=ekonDAAAQBAJ&pg=PA244&lpg=PA244&dq=Richard+Dawkins+money+as+a+formal+token+of+reciprocal+altruism&source=bl&ots=kBbSS-l5AC&sig=fr85YmvwkvFqWcOYLBkL10O7sI4&hl=en&sa=X&redir_esc=y#v=onepage&q=Richard20Dawkins20money20as20a20formal20token20of20reciprocal20altruism&f=false) by evolutionary biologist Richard Dawkins — using money has been embedded in the very DNA of humans. Having analyzed pre-civilized societies, Szabo found that people across cultures tended to collect scarce, easy-to-carry objects, often to make jewellery out of them. It was these objects that served as money, which in turn allowed humans to cooperate: game theoretical “reciprocal altruism” through trade, at scale and across time.

Szabo also took a keen interest in [free banking](https://en.wikipedia.org/wiki/Free_banking), a monetary arrangement advocated by Hayek, where private banks issue their own currency not bound to any particular state. Under such a system, it’s completely up to the free market to choose which money to use. While a novel idea today (and even more so in the years before Bitcoin), free banking was a reality in the United States of the 1800s, as well as in several other countries.

Szabo also went on to put his interest into practice and sold his expertise as an_internet commerce consultant_ by the mid 1990s, long before most saw the potential of online commerce. Most notably, he spent some time working at David Chaum’s DigiCash startup, headquartered in Amsterdam. Chaum’s company introduced the first digital cash the world had ever seen in the form of [eCash](https://bitcoinmagazine.com/articles/genesis-files-how-david-chaums-ecash-spawned-cypherpunk-dream): a means to make payments online as private as cash in real life was.

But it was also at DigiCash where Szabo learned about the risks of Chaum’s solution. DigiCash was a centralized company, and Szabo found it was far too easy for him and others to mess with people’s balances if they’d wanted to. Trusted parties are security holes, after all, and this risk is perhaps nowhere bigger than with money.

> “The problem, in a nutshell, is that our money currently depends on trust in a third party for its value,” Szabo [argued](https://unenumerated.blogspot.com/2005/12/bit-gold.html) in 2005. “As many inflationary and hyperinflationary episodes during the 20th century demonstrated, this is not an ideal state of affairs.”

In fact, he considered this trust problem such an obstacle that even a typical free banking solution could suffer from it: “[P]rivate bank note issue, while it had various advantages as well as disadvantages, similarly depended on a trusted third party.”

Szabo knew he wanted to create a new form of money that did not depend on trust in any third party.

Based on his analysis of prehistoric money, Szabo had come a long way in figuring out what his ideal money would look like. First, it had to be “secure from accidental loss and theft.” Second, its value must be “unforgeably costly, and therefore considered valuable.” And third: “This value [had to be] accurately approximated by simple observations or measurements.”

Best compared to precious metals like gold, Szabo wanted to create something that was both digital and scarce, where this scarcity did not depend on any third party trust. He wanted to create a digital gold.

> Precious metals and collectibles have an unforgeable scarcity due to the costliness of their creation. This once provided money the value of which was largely independent of any trusted third party. Precious metals have problems, however. […] Thus, it would be very nice if there were a protocol whereby unforgeably costly bits could be created online with minimal dependence on trusted third parties, and then securely stored, transferred, and assayed with similar minimal trust. Bit gold.

# Bit Gold

Szabo first came up with Bit Gold in 1998, though he only [fully described](https://unenumerated.blogspot.com/2005/12/bit-gold.html) it in public in [2005](http://web.archive.org/web/20060329122942/http://unenumerated.blogspot.com/2005/12/bit-gold.html). His proposed digital money scheme consisted of a combination of solutions, some of which were inspired by (or resembled) previous electronic cash concepts.

The first central property of Bit Gold was _proof of work_, the cryptographic trick utilized by Dr. Adam Back in his “anti-spam currency” [Hashcash](https://bitcoinmagazine.com/articles/genesis-files-hashcash-or-how-adam-back-designed-bitcoins-motor-block). Proof of work represented the unforgeable costliness Szabo was looking for, as it required real-world resources — computing power — to produce these proofs.

Bit Gold’s proof-of-work system started with a “candidate string”: basically a random number. Anyone could take this string and mathematically combine — “hash” — it with another, newly generated random number. By the nature of hashing, the result would be a new, seemingly random string of numbers: the hash. The only way to find out what this hash looks like is to actually create it — it cannot otherwise be computed or predicted.

The trick, also utilized in Hashcash, is that not all hashes are considered valid within the Bit Gold protocol. Instead, a valid hash must, for example, start with a predetermined number of zeros. Because of the unpredictable nature of hashing, the only way to find such a valid hash is trial and error. A valid hash, therefore, proves that its creator expended computing power.

This valid hash would, in turn, be the next Bit Gold candidate string. The Bit Gold system would, therefore, grow into a chain of proof-of-work hashes, and there’d always be a next candidate string to work with.

Whoever would find a valid hash would quite literally own that hash, similar to how the person that finds a bit of gold ore owns it. To establish this ownership digitally, Bit Gold used a [digital ownership registry](https://nakamotoinstitute.org/secure-property-titles/#selection-125.47-125.66): another Hayek-inspired building block proposed by Szabo. In this registry, the hashes were to be linked to the public keys of their respective creators.

It was also through this digital ownership registry that a hash could be transferred to a new owner: The original owner would literally sign off on a transaction with a cryptographic signature.

The ownership registry was to be maintained by a Bit Gold “property club.” This property club consists of “club members” (servers) that would keep track of which public keys own which hashes. This solution somewhat resembled Wei Dai’s proposed replicated database solution for b-money; both Szabo and Dai were not only active on the Cypherpunks’ mailing list, but also on a closed email list discussing these topics.

But instead of Dai’s proof-of-stake system to keep the system up to date, Szabo proposed a “Byzantine Quorum System.” Similar to security-critical systems like airplane board computers, if only one (or a minority) of these computers should fall out of line, the system as a whole would continue to operate fine. Only if a majority of computers were to fail at the same time would the system be in trouble. Importantly, none of these checks required courts or judges or police, backed by the state monopoly on violence: It would all be voluntary.

While this system was not in itself 100 percent watertight — it could for example be [Sybil attacked](https://en.wikipedia.org/wiki/Sybil_attack) (the “sock puppet problem”) — Szabo believed it could work itself out. Even in the scenario where a majority of club members would attempt to cheat, the honest minority could branch off into a competing ownership registry. Users could then choose which ownership registry to use, which Szabo thought would probably be the honest one.

> “If the rules are violated by the winning voters, the correct losers can exit the group and reform a new group, inheriting the old titles,” he explained. “Users of the titles (relying parties) who wish to maintain correct titles can securely verify for themselves which splinter group has correctly followed the rules and switch to the correct group.”

(As a modern-day example, this can perhaps be compared with Ethereum Classic, which [maintains](https://bitcoinmagazine.com/articles/rejecting-today-s-hard-fork-the-ethereum-classic-project-continues-on-the-original-chain-here-s-why-1469038808) a version of the original Ethereum ledger that did not undo The DAO smart contract.)

# Inflation

The next problem that Szabo had to solve was inflation. As computers improve over time, it would become easier and easier to generate valid hashes. This means that the hashes themselves can’t function as money very well: they would become increasingly less scarce every year, to the point where abundance would dilute all value.

Szabo figured out a solution. Once a valid hash was found, it had to be timestamped, ideally with different timestamp servers to minimize trust in any particular one. This timestamp would give an idea of how hard it was to produce the hash: an older hash would have been harder to produce than a newer hash. Markets would then determine how much any particular hash is worth relative to one another, presumably adjusting its value for the date it was found. A valid “2018 hash” should be worth much less than a valid “2008 hash.”

But this solution, of course, introduced a new problem, Szabo [knew](https://unenumerated.blogspot.com/2008/04/bit-gold-markets.html): “the bits (the puzzle solutions) from one period (anywhere from seconds to weeks, let's say a week) to the next are not fungible.” Fungibility — the idea that any currency unit is equal to any other unit — is critical for money. A shopkeeper wants to accept a payment without having to worry about the date the money was created.

Szabo came up with a solution to this problem as well. He [envisioned](https://unenumerated.blogspot.com/2008/04/bit-gold-markets.html) a sort of “second layer” solution on top of the Bit Gold base layer. This layer would consist of a type of bank, though a securely auditable bank, since the Bit Gold registry was public. These banks would collect different hashes from different time periods and, based on the value of these hashes, bundle them into packets of a combined standard value. A “2018 pack” would include more hashes than a “2008 pack,” but both packs would be worth the same.

These packs, then, were to be cut up in a specific number of units. Finally, these units could be issued by the “banks” as a private and anonymous Chaumian eCash.

> “[C]ompeting banks issue digital banknotes redeemable in solution bits whose market values add up to the face value of the bank note (i.e. they create bundles of standard value),” Szabo [explained](https://unenumerated.blogspot.com/2011/05/bitcoin-what-took-ye-so-long.html).

Thus, Bit Gold was designed as a gold standard-like base layer for a free banking system of the digital age.

# Bitcoin

In the 2000s, Szabo went on to earn a law degree to understand the law and contract reality he wished to replace or replicate online even better. He also started to collect and publish his ideas on a well-respected blog, “[Unenumerated](https://unenumerated.blogspot.com/),” which covers topics ranging from computer science to law and politics, but also history and biology. “The list of topics for this blog […] is so vast and varied that it cannot be enumerated,” Szabo [explained](https://unenumerated.blogspot.com/2005/10/unenumerated.html) the title.

By 2008 — 10 years after first proposing it in private — Szabo brought up Bit Gold on his blog once again, only this time he wanted to realize a first implementation of his proposal.

> “Bit Gold would greatly benefit from a demonstration, an experimental market (with e.g. a trusted third party substituted for the complex security that would be needed for a real system). Anybody want to help me code one up?” he [asked](https://unenumerated.blogspot.com/2008/04/bit-gold-markets.html?showComment=1207799580000#c3741843833998921269) in the comment section his blog.

If someone responded, it wasn’t in public. Bit Gold, in Szabo’s proposed form, was never implemented.

However, Bit Gold did serve as a key inspiration for Satoshi Nakamoto, who published the Bitcoin white paper later that same year.

> “Bitcoin is an implementation of Wei Dai's b-money proposal [...] on Cypherpunks [...] in 1998 and Nick Szabo's Bitgold proposal,” Bitcoin’s pseudonymous inventor [wrote](https://bitcointalk.org/index.php?topic=342.msg4508#msg4508) on the Bitcointalk forum in 2010.

Indeed, it’s not difficult to see Bit Gold as an early draft of Bitcoin. Apart from the shared database of ownership records based on public key cryptography, the chain of proof-of-work hashes has an eerie resemblance to Bitcoin’s [blockchain](https://bitcoinmagazine.com/guides/what-is-blockchain). And, of course, the names Bit Gold and Bitcoin are not too far apart either.

Yet, unlike systems like Hashcash and b-money, Bit Gold was conspicuously absent from the Bitcoin white paper. Some have even considered this absence so notable they took it as one of several hints that Szabo must be the man behind the Satoshi Nakamoto monicker: Who else would try to hide Bitcoin’s origins like this?

Still, while similar to Bit Gold in several ways, Bitcoin did include some improvements over Szabo’s design. In particular, where Bit Gold still relies on trusted parties to an extent — servers and the timestamp services must be trusted to some degree not to collude — Bitcoin was the first system to solve this problem entirely. It solves it very elegantly, by having the required proof-of-work system serve as both an award system and a consensus mechanism in one: The hash chain with the most proof of work is considered the valid version of history.

> “Nakamoto improved a significant security shortcoming that my design had,” Szabo [acknowledged in 2011](https://unenumerated.blogspot.com/2011/05/bitcoin-what-took-ye-so-long.html), “namely by requiring a proof-of-work to be a node in the Byzantine-resilient peer-to-peer system to lessen the threat of an untrustworthy party controlling the majority of nodes and thus corrupting a number of important security features.”

Further, Bitcoin has a very different monetary model than Szabo proposed, with a fixed inflation schedule that remains unaffected by hash power increases altogether. As computing power on the Bitcoin network increases, it just means that it’s harder to find new coins.

> “Instead of my automated market to account for the fact that the difficulty of puzzles can often radically change based on hardware improvements and cryptographic breakthroughs (i.e. discovering algorithms that can solve proofs-of-work faster), and the unpredictability of demand, Nakamoto designed a Byzantine-agreed algorithm adjusting the difficulty of puzzles,” Szabo explained.
> 
> “I can't decide whether this aspect of Bitcoin is more feature or more bug,” he added, “but it does make it simpler.”

{{< details "Contents" "..." >}}
1. [Intro: The Day Cryptography Changed Forever](/en/gf/genesis-intro)
2. [Part I: How David Chaum’s eCash Spawned a Cypherpunk Dream](/en/gf/genesis-1)
3. [Part II: Hashcash or How Adam Back Designed Bitcoin’s Motor Block](/en/gf/genesis-2)
4. [Part III: If Bitcoin Had a First Draft, Wei Dai’s B-Money Was It](/en/gf/genesis-3)
5. [Part IV: With Bit Gold, Szabo Was Inches Away From Inventing Bitcoin](/en/gf/genesis-4)
6. [Part V: How Hal Finney’s Quest For Digital Cash Led To RPOW (And More)](/en/gf/genesis-5)
{{< /details >}}
