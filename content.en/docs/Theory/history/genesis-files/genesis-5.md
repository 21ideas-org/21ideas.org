---
title: "Part V: How Hal Finney’s Quest For Digital Cash Led To RPOW (And More)"
h1: "The Genesis Files. Part V: How Hal Finney’s Quest For Digital Cash Led To RPOW (And More)"
cover: /img/gf-245.png
tags: ["bitcoin", "history", "cypherpunks", "genesis"]
description: "Pioneering cryptographer Hal Finney saw the need for an untraceable form of digital cash, and his work ultimately fostered the creation of Bitcoin."
url: gf/genesis-5
date: 2018-08-28
bookFlatSection: false
bookToc: true
weight: 6
---

{{< details "Contents" "..." >}}
1. [Intro: The Day Cryptography Changed Forever](/en/gf/genesis-intro)
2. [Part I: How David Chaum’s eCash Spawned a Cypherpunk Dream](/en/gf/genesis-1)
3. [Part II: Hashcash or How Adam Back Designed Bitcoin’s Motor Block](/en/gf/genesis-2)
4. [Part III: If Bitcoin Had a First Draft, Wei Dai’s B-Money Was It](/en/gf/genesis-3)
5. [Part IV: With Bit Gold, Szabo Was Inches Away From Inventing Bitcoin](/en/gf/genesis-4)
6. [Part V: How Hal Finney’s Quest For Digital Cash Led To RPOW (And More)](/en/gf/genesis-5)
{{< /details >}}

Pioneering cryptographer Hal Finney saw the need for an untraceable form of digital cash, and his work ultimately fostered the creation of Bitcoin.

{{< hint btc >}}
This article by Aaron van Wirdum was published in [Bitcoin Magazine](https://bitcoinmagazine.com/culture/the-genesis-files-how-hal-finneys-quest-for-digital-cash-led-to-rpow-and-more).

[Contribute](/contribute/).
{{< /hint >}}

Once [described](https://youtu.be/M8z0Nx8svC4?t=3195) by [PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) creator Phil Zimmerman as “the Mister Rogers of cryptography,” Hal Finney (1956) was known for his relentlessly uplifting spirit. He carried a positive perspective on life with him even when amyotrophic lateral sclerosis (ALS) paralyzed his entire body, until the Bitcoin pioneer ultimately passed away from the disease on August 28, 2014.

In the 1980s, as a graduate from the California Institute of Technology working in the startup computer game industry, Finney’s optimism made him fit in naturally with the Extropians. This Californian techno-libertarian movement drew much of its inspiration from Austrian economists and libertarian authors, and embraced nanotechnology, artificial intelligence, space travel and other futuristic technologies as tools to propel humanity toward a next evolutionary stage. If science and innovation could progress free from government interference, the Extropians believed, eternal life and other transhumanist goals were within reach.

Finney, too, liked to operate on the cutting-edge of technology. When the internet became publicly available for the first time in the early 1990s, he immediately began to explore the World Wide Web and other corners of the brand new information superhighway, and quickly recognized the revolutionary potential embedded in the nascent network. Humanity would for the first time become connected across the globe, regardless of geographic distances, cultural differences or arbitrary borders.

But there was a flip side. Finney, well-versed in the design tradeoffs presented by the internet, knew that cyberspace didn’t just offer exciting new possibilities, but also potential risks. As communication went digital, anyone’s conversations were in peril of being monitored. The Net could represent an encroachment on everyone's privacy and, therefore, become a possible threat to human liberty.

This was true for regular communication, and Finny realized it was equally true for financial transactions. In a digitalizing world, money would inevitably go digital, too. This meant that anonymous payments could become a thing of the past.

> “Dossiers could be built up which would track the spending patterns of each of us,” Finney [explained](http://fennetic.net/pub/finney.org/~hal/dig_cash_priv.html) in a 1993 essay. “Already, when I order something over the phone or electronically using my Visa card, a record is kept of exactly how much I spent and where I spent it. As time goes on, more transactions may be done in this way, and the net result could be a great loss of privacy.”

Just like regular, physical cash — the paper banknotes and metal coins that you carried in your pocket — Finney concluded that the internet needed an untraceable form of money, allowing for anonymous transactions. The internet needed digital cash.

# The Birth Of Digital Cash

Fortunately, it turned out that digital cash was in development already.

> “It seemed so obvious to me,” Finney later [wrote](https://cypherpunks.venona.com/date/1992/11/msg00108.html). “Here we are faced with the problems of loss of privacy, creeping computerization, massive databases, more centralization — and [David] Chaum offers a completely different direction to go in, one which puts power into the hands of individuals rather than governments and corporations. The computer can be used as a tool to liberate and protect people, rather than to control them.”

Indeed, having foreseen many of the same problems as Finney, cryptographer David Chaum had come up with a design for digital cash, called [eCash](https://bitcoinmagazine.com/articles/genesis-files-how-david-chaums-ecash-spawned-cypherpunk-dream/). What’s more, Chaum had founded a company, DigiCash, to make such a system reality. Designed as a privacy layer for existing currencies — dollars, euros, yen — the plan was to sell the technology to banks.

Finney soon found himself promoting Chaum’s project to his fellow Extropians, at one point authoring a seven-page explainer for _Extropy_, the magazine at the heart of the movement.

> “Cryptography can make possible a world in which people have control over information about themselves, not because government has granted them that control, but because only they posses the cryptographic keys to reveal that information,” he wrote, advocating the potential of digital cash to the techno-libertarian crowd. “This is the world we are working to create.”

Around that same time, in 1992, Finney had received an invitation from fellow-Extropian Tim May. Along with some tech-oriented and privacy-focused friends in the Bay Area, including former DigiCash-employee Eric Hughes, May was assembling a group of hackers, computer scientists and cryptographers to further online privacy by leveraging the potential of cryptography.

The group would call itself the Cypherpunks. Its weapon of choice: the software it would create and distribute. “Cypherpunks write code,” as it would adopt as a rally cry.

Finney did write code; he was responsible for some of the group’s early successes. Together with Hughes, he developed and ran the first remailer: a server that anonymously forwarded emails to help people communicate privately. When Zimmerman released PGP, Finney became a major contributor to the project. And as a much-publicized stunt, he also organized a contest to break Netscape's export-grade (read: weakened) [SSL encryption](https://en.wikipedia.org/wiki/Transport_Layer_Security), which a fellow-Cypherpunk indeed succeeded in breaking.

But Finney’s main interest was always digital cash. When alternative electronic cash proposals popped up on the Cypherpunk mailing list, carrying names like Magic Cash, Brands Cash or TrustBucks, Finney was always eager to review them. Focusing on privacy features in particular, he’d often explain to his fellow Cypherpunks how the different systems worked, helping them understand the possibilities and limitations of different digital cash solutions. And whenever the topic came up in conversation, he was always available to offer his constructive insights.

# Hashcash And Proof Of Work

One particularly interesting digital cash design was proposed in 1997 by a young computer scientist and Cypherpunk from England named Adam Back. [Hashcash](https://bitcoinmagazine.com/articles/genesis-files-hashcash-or-how-adam-back-designed-bitcoins-motor-block), as this proposal was called, used a “proof-of-work” system to generate something akin to postage stamps, as a solution to counter spam. In a nutshell: before sending (say) an email, a Hashcash user would need to generate a hash (a seemingly random string of numbers) using parts of the email and some extra data, and send this hash along with the email to the recipient. The recipient would only accept the email if it included a “valid” hash, otherwise the email would bounce.

The trick was that only a subset of potential hashes based on the email would be considered valid. This meant that users had to spend some computing power — essentially, energy — to generate Hashcash. This was trivial for a regular user sending a simple email; it would maybe cost a few seconds of computations. However, if a spammer wanted to send millions of emails at once, the energy requirements to find all the required valid hashes for each of the millions of emails would quickly add up, rendering spam unprofitable.

Back’s proposal could function as a type of postage, but wasn’t really intended to work as fully-fledged currency. Most importantly, each proof-of-work uniquely corresponded to a specific email, which meant that a Hashcash recipient couldn’t re-spend the same proof-of-work elsewhere.

Regardless, Cypherpunks quickly realized that Hashcash offered something very interesting. Proof-of-work introduced a digital representation of a scarce real-world resource: energy. And since scarcity is a fundamental property of money, Back and other Cypherpunks recognized that proof-of-work could potentially serve as the basis for a whole new type of currency: an _unbacked_ digital cash, that didn’t require banks at all.

In the following years, two notable digital cash proposals were indeed based on proof of work: Nick Szabo's [Bit Gold](https://bitcoinmagazine.com/articles/genesis-files-bit-gold-szabo-was-inches-away-inventing-bitcoin) and Wei Dai’s [B-Money](https://bitcoinmagazine.com/articles/genesis-files-if-bitcoin-had-first-draft-wei-dais-b-money-was-it). But while both were interesting designs, they still had some weaknesses, for which the suggested solutions were complex and not fully thought out. Probably in part because of this, neither proposal was ever actually implemented.

Meanwhile, DigiCash was failing to turn Ecash into a success. Chaum’s company — initially considered a hot new startup by internet pioneers of the 1990s — ended up filing for bankruptcy before the end of the decade.

When, by the early 2000s, the Cypherpunk movement started to fall apart as well, their dream of digital cash was turning into little more than a fading memory.

# RPOW And Remote Attestation

But Hal Finney, ever the optimist, wasn’t ready to give up.

In 2004, about a decade after he first started promoting electronic cash within Extropian circles, Finney proposed a digital currency system of his own: Reusable Proofs of Work, or RPOW (pronounced: “arpow”). While simplified in several ways, the Cypherpunk had taken inspiration from Bit Gold, and used Hashcash’s proof-of-work system for currency generation.

> “Security researcher Nick Szabo has coined the term bit gold to refer to a similar concept of tokens which inherently represent a certain level of effort,” Finney’s RPOW website [explained](https://web.archive.org/web/20090217090451/http://rpow.net/index.html). “Nick's concept is more complex than the simple RPOW system, but his insight applies: in some ways, an RPOW token can be thought of as having the properties of a rare substance like gold. It takes effort and expense to mine and mint gold coins, making them inherently scarce.”

Where Szabo and Dai had stopped short of implementing their digital cash proposals into software, Finney actually coded up an RPOW prototype. He invited people to try the system out, advertising the electronic cash on a simple blue-and-green webpage featuring an RPOW logo in comic book style. (Think of the “POW” letters marking the spot where Batman’s uppercut meets some poor henchman’s jaw.)

{{% image "/img/gf-246.png" %}}
*[Source](https://web.archive.org/web/20090217090451/http://rpow.net/index.html)*
{{% /image %}}

For the prototype, Finney had set up an RPOW server running open-source software. The server acted as the mint where new RPOW tokens were issued, and would also check that tokens weren’t being spent multiple times by the same user (“double spent”).

To see how this worked, let’s say Alice wanted to generate an RPOW token. First, she’d connect with Finney’s server, potentially over [Tor](https://en.wikipedia.org/wiki/Tor_(anonymity_network)) for optimal privacy. Alice would then take some data unique to the server and herself, and start hashing it until she’d find a valid proof of work. She’d send the proof of work to the server, which would check it for validity. If valid, the server would create a unique RPOW token (really just a string of data), and send it to Alice in return. The server would also store a copy of the token in a local database.

When Alice wanted to spend the RPOW token, she'd simply send it to the intended recipient, let’s say Bob, for example, to download an MP3 file from him. It didn't technically matter for the RPOW system how she’d send the token, as long as she’d be sure it'd make its way to Bob without anyone intercepting it. (A message encrypted with Bob’s public key would have done the trick.)

As Bob received the RPOW token, he’d need to check it for validity, and make sure that it hadn’t been double-spent. To do that, he’d immediately forward the token to the RPOW server, where the software would check that it was included in its internal database, and wasn’t already spent. If it checked out, the server confirmed this to Bob, and Bob could send Alice the MP3 file. The server would then also mark the RPOW token as spent, deeming it invalid for future use. Finally, it would create a new RPOW token, send this to Bob, and include this new token in its internal database. Bob could then spend this new token again, repeating the process. In this way, tokens representing a single proof of work could continue to circulate indefinitely. It was, effectively, reusable proof of work.

The system as described so far would work fine — but it would have required trust in the operator of the RPOW server: in this case, Finney. Finney could have adjusted the RPOW software to cheat, and for example mint RPOW tokens for himself without producing any proof of work. Or he could double spend the same tokens without anyone noticing.

Finney, however, didn’t want users to have to trust the operator of the RPOW server, even if that operator was him. An RPOW server therefore needed to have a special property. As the system’s main innovation, the RPOW server was hosted on a secure hardware component, the [IBM 4758](https://en.wikipedia.org/wiki/IBM_4758). This allowed for something called “[trusted computing](https://en.wikipedia.org/wiki/Trusted_Computing).”

In short, the tamper-proof hardware contained a private key embedded by IBM, that no one — not even the owner of the secure hardware component (Finney, in this case) — could meddle with or extract. Using a trick called “remote attestation” the private key could generate a certificate stating what software is running on the secure hardware component. With this certificate, anyone connected with the server could verify that the secure hardware component was running the exact RPOW open-source code, without any backdoors or other adjustments.

> “[T]he RPOW system is architected with one overriding goal: to make it impossible for anyone, even the owner of the RPOW server, even the developer of the RPOW software, to be able to violate the system's rules and forge RPOW tokens,” Finney’s RPOW website [explained](https://web.archive.org/web/20090217090520/http://rpow.net/theory.html). “Without such a guarantee against forgeability, RPOW tokens would not credibly represent the work that was done to create them. Forgeable tokens would be more like paper money than bit gold.”

# The Fate of RPOW...

RPOW was live. But Finney knew that this simplified version of Bit Gold still had its limitations.

For one, the prototype depended on a central server. Thanks to the open-source code and trusted computing, this didn’t give Finney unchecked power over the system — although, perhaps, a rogue IBM employee could do some damage. A more realistic concern, however, was that Finney could for example choose to take his server offline altogether, or be forced to do so. This would instantly render all RPOW tokens useless.

But an even bigger problem was probably that the tokens would be subject to a form of inflation. As computing power would become cheaper over time, it’d be easier to generate valid proof of work year after year.

> “If Moore's Law continues to hold true, the cost of creating a POW token will drop at a steady, exponential rate,” Finney [wrote](https://web.archive.org/web/20090217090439/http://rpow.net/faqs.html#inflation) on the project website. He noted that the hardest proof of work would continue to be difficult to generate well into the future, and that computational performance increases would slow down over time as well. Yet, he told readers: “[k]eep in mind that this is not money and is not intended to be a stable [store of value](https://bitcoinmagazine.com/guides/store-of-value), but rather an easy-to-exchange representation of computer effort.”

Indeed, the RPOW creator considered his electronic cash system more in line with Back’s original Hashcash proposal. While proof-of-work could now be “reused,” the tokens were still mainly intended to function as something like a form of digital postage — not really as a fully-fledged type of money. Users could utilize the system to counter spam, use it to align incentives in a file-sharing network or maybe even have some fun with it as poker chips in a peer-to-peer poker game, but RPOW tokens weren’t exactly useful for savings.

Where Szabo and Dai attempted to solve the inflation problem with layers of added complexity, Finney just accepted the inflation. This made RPOW much simpler in design, but may also be why RPOW never took off. With no financial incentive to hold RPOW tokens, there was very little reason to accept them as payment in the first place. And without anyone accepting the tokens for payment, there was no one to spend them, meaning there was even less reason for anyone to accept them for payment… and so on. RPOW faced a chicken-and-egg problem.

For an electronic cash system to succeed, that chicken-and-egg problem had to somehow be overcome.

# …And the Faith of Finney

In October 2008, Finney received [an email](https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html) through the Cryptography mailing list that he subscribed to, which was widely considered to be the spiritual successor of the Cypherpunks mailing list. In the email, Satoshi Nakamoto — only later to be assumed to be a mysterious pseudonym — proposed a new type of electronic cash: Bitcoin. Like RPOW, Bitcoin was based on Hashcash’s proof-of-work system, but unlike RPOW, it didn’t depend on any central server.

While innovative, Bitcoin wasn’t immediately received with much enthusiasm. Most Cypherpunk veterans on the Cryptography mailing list had by then seen one too many electronic cash experiments come and go, without any real successes to account for. And there were some valid concerns with this new proposal as well: Bitcoin transactions weren’t instant, adversaries with a lot of computing power could overpower the system, and the solution didn’t appear to be very scalable.

But Finney, being the optimist that he was, had decided to focus on the positive instead.

> “Bitcoin seems to be a very promising idea,” Finney [responded](https://www.metzdowd.com/pipermail/cryptography/2008-November/014827.html) on the mailing list. “I like the idea of basing security on the assumption that the CPU power of honest participants outweighs that of the attacker. […] I also do think that there is potential value in a form of unforgeable token whose production rate is predictable and can't be influenced by corrupt parties.”

Indeed, Finney recognized that Bitcoin solved a big problem. Nakamoto had figured out how to limit the issuance of new currency. Where RPOW tokens became easier to generate as computing power became cheaper over time, Bitcoin would have a fixed issuance schedule. Proof of work was still used to generate new tokens, but a clever difficulty adjustment algorithm ensured that increased computing power would also make it more difficult to find new tokens. (And vice versa: a decrease in computing power would make it easier.)

Just a few months after dropping the proposal on the Cryptography mailing list, the pseudonymous author of the Bitcoin white paper followed up with actual code, including an issuance schedule. As fewer and fewer new coins would be released over time, the total supply would eventually level out: there would never be more than 21 million bitcoin.

Finney was quick to [point out](https://www.mail-archive.com/cryptography@metzdowd.com/msg10152.html) why this mattered.

> “One immediate problem with any new currency is how to value it. Even ignoring the practical problem that virtually no one will accept it at first, there is still a difficulty in coming up with a reasonable argument in favor of a particular non-zero value for the coins,” he wrote. “As an amusing thought experiment, imagine that Bitcoin is successful and becomes the dominant payment system in use throughout the world. Then the total value of the currency should be equal to the total value of all the wealth in the world. Current estimates of total worldwide household wealth that I have found range from $100 trillion to $300 trillion. With 20 million coins, that gives each coin a value of about $10 million.”

# Concluding:

> “So the possibility of generating coins today with a few cents of compute time may be quite a good bet, with a payoff of something like 100 million to 1! Even if the odds of Bitcoin succeeding to this degree are slim, are they really 100 million to one against? Something to think about…”

The tokens could have value, Finney figured, even if just speculative value at first. This could provide an incentive for people to mine it, hold it, and of course accept it for payment. Bitcoin offered a way out of the chicken-and-egg problem that RPOW hadn’t been able to overcome. When Bitcoin launched, in early 2009, Finney was one of the first miners on the network, and — while he helped Satoshi Nakamoto with technical contributions — he became the first person in the world to receive a Bitcoin transaction, from the system’s pseudonymous creator himself.

Later that same year, Finney was diagnosed with ALS. But he didn’t let the disease bring him down. While spending the last stage of his life paralyzed, restricted to a wheelchair and dependent on breathing assistance, he was using eye-tracking software to continue writing Bitcoin code. “I still love programming and it gives me goals,” Finney [told](https://bitcointalk.org/index.php?topic=155054.msg1643833#msg1643833) users of the popular BitcoinTalk forum. “It has been an adjustment, but my life is not too bad.”

And even now, in death, the RPOW creator carries a spark of optimism along with him. Following in an Extropian tradition, Finney wasn’t buried or cremated. Instead, his body is cryogenically frozen and preserved in sub-zero temperatures by the [Alcor Life Extension Foundation](https://en.wikipedia.org/wiki/Alcor_Life_Extension_Foundation). Perhaps, as the Extropian philosophy predicts, a cure for ALS will be found one day, and technology advances to the point where Finney can be brought back to life.

It’s a long shot, to be sure, with most mainstream scientists dismissing the idea. But if Finney wasn’t the type to take optimistic long shots, few of us today might have heard of the Bitcoin pioneer at all.

_For more information on RPOW, visit_ [_the archived version of the RPOW webpage on The Nakamoto Institute_](https://nakamotoinstitute.org/finney/rpow/what.html)_._

{{< details "Contents" "..." >}}
1. [Intro: The Day Cryptography Changed Forever](/en/gf/genesis-intro)
2. [Part I: How David Chaum’s eCash Spawned a Cypherpunk Dream](/en/gf/genesis-1)
3. [Part II: Hashcash or How Adam Back Designed Bitcoin’s Motor Block](/en/gf/genesis-2)
4. [Part III: If Bitcoin Had a First Draft, Wei Dai’s B-Money Was It](/en/gf/genesis-3)
5. [Part IV: With Bit Gold, Szabo Was Inches Away From Inventing Bitcoin](/en/gf/genesis-4)
6. [Part V: How Hal Finney’s Quest For Digital Cash Led To RPOW (And More)](/en/gf/genesis-5)
{{< /details >}}
