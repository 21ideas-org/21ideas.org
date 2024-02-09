---
title: "About Time"
h1: "Discovering Bitcoin Part 1: About Time"
cover: /img/sb-307.jpg
description: "In part one of Giacomo Zucco’s “Discovering Bitcoin” series, he reimagines the period of monetary history prior to fiat money."
url: discovering-bitcoin/about-time
date: 2019-09-16
bookFlatSection: false
weight: 2
---

{{< expand "Contents" "..." >}}
1. [Introduction](/en/discovering-bitcoin/intro)
2. [Part 1: About Time](/en/discovering-bitcoin/about-time)
3. [Part 2: About People](/en/discovering-bitcoin/about-people)
4. [Part 3: Introducing Money](/en/discovering-bitcoin/introducing-money)
5. [Part 4: A Wrong Turn (New Plan Needed)!](/en/discovering-bitcoin/a-wrong-turn-new-plan-needed)
6. [Part 5: Digital Scarcity](/en/discovering-bitcoin/digital-scarcity)
7. [Part 6: Digital Contracts](/en/discovering-bitcoin/digital-contracts)
8. [Part 7: The Missing Pieces](/en/discovering-bitcoin/the-missing-pieces)
{{< /expand >}}

In part one of Giacomo Zucco’s “Discovering Bitcoin” series, he reimagines the period of monetary history prior to fiat money.

{{< hint btc >}}
This article by [Giacomo Zucco](https://twitter.com/giacomozucco) was first published in [Bitcoin Magazine](https://bitcoinmagazine.com/culture/discovering-bitcoin-part-1-time).

[Contribute](/contribute/).
{{< /hint>}}

As anticipated in the [introduction to this series](/en/discovering-bitcoin/intro), we will start exploring the period of monetary (pseudo)history prior to fiat money, which we call “Plan A,” focusing on the topic of time and on the question “When?” There won’t be much cryptography or computer science in what follows: It will all sound very simple, even … primitive! Indeed, I would ask you, dear reader, to try to forget your advanced education and your civilized manners, and pretend, just for a few minutes, to be a fish-eating caveman.

## From Immediate Consumption ... to Storage ...

{{% image "/img/sb-308.jpeg" %}}
*Image courtesy of [BitcoinMemeHub](https://twitter.com/BitcoinMemeHub?lang=en)*
{{% /image %}}

Your caveman life is based on immediate consumption: You use your bare hands and a pointy stick to catch two fish every day, then you go back to the cave and you eat them immediately. One fish would be enough to survive, two are enough to feel “Thanksgiving full.” Every day you catch and eat two. You don’t save. It’s always the same. Your “utility function” (this is what a fancy economist would call it) is constant with respect to time.

{{% image "/img/sb-309.jpg" %}}
*Image courtesy of [BitcoinMemeHub](https://twitter.com/BitcoinMemeHub?lang=en)*
{{% /image %}}

But let’s try to think about the future for a bit! What if, instead of eating both fish, you eat just one and save the second (alive in a jar, for example)? Do it for two days in a row, and on the third day you will be able to eat your fill without even going out to fish! I will admit this is not a great improvement yet: You just give up some pleasure today and tomorrow, in order to get some rest on the third day. Not impressed.

{{% image "/img/sb-310-en.webp" /%}}

## … to Investment!

But what about spending that third day building a fishing rod (“capital good”), which would enable you to catch four fish instead of two, every day, forever? That’s called investment: You give up some pleasure for a while, but in return you get some productive and durable results. Congratulations, dear reader: You are a “low-time-preference capitalist caveman” now! With your brand new fishing rod, you can eat two fish every day _and_ rest every two days!

{{% image "/img/sb-311-en.webp" /%}}

But why stop here? You could invest some of your day off in building a large fishing net, which you could use to get eight fish a day! By saving and investing, you can get more fish, thus have more time to build something more efficient, as long as there are improvements to achieve. The more time you spend saving and investing, the wealthier you get. 

The growth is not even linear: Every improvement can build on top of the previous one! Soon enough, you will be “Captain Caveman”: commanding a huge fleet of wonderful fishing boats, getting 1,000 fish a day!

{{% image "/img/sb-312-en.webp" /%}}

It’s easy to underestimate the deep implications of this process. Predisposition to invest (after having saved, delaying consumption) is linked to something economists call “low temporal preference,” which is, in turn, connected to very important effects on the well-being of people and of entire civilizations! 

A very good account of the significance of these topics and of their relationship with monetary technologies and practices is given in the book [_The Bitcoin Standard_](https://www.amazon.it/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861) by Saifedean Ammous. Read it, if you haven’t. Another great reference is the essay ["Money, Bitcoin and Time"](https://docs.wixstatic.com/ugd/00fccb_2a5db46cd9a14cf99618f03cbc5e5b34.pdf) by Robert Breedlove.

## Physical “Hardness”

In order to be useful for this kind of process, a good must possess a good “hardness”: Any unit of said good should not significantly lose its ability to provide utility if stored over some period of time. (This means the good does not easily decompose, deteriorate or degrade, or it does so comparatively less than other goods.) 

Other common terms for this attribute are “durability” and “salability across time.” (In the context of your currently solitary condition, you should interpret the “sale” part as “you selling something to your future self.”) 

In all of the cases above, the expressions are often used beyond the physical scope to include the social and institutional attributes of goods as well. Since you are a lonely caveman, and there is no society or institution around you yet, we employ the term “hardness” only in the narrower sense of physical resistance to deterioration of the units of good, delegating other aspects to Part 3 (coming soon).

{{% image "/img/sb-313-en.webp" /%}}

The good we chose as our first example, fish, is not very “hard,” comparatively, at least not if you don’t perform some specific actions as soon as you bring it back to your cave. A trivial action would be to keep it alive in a jar, as mentioned. Without additional treatments, a fish kept alive is more durable than a dead one. A smoked or salted fish, though, would be even more durable than one kept alive.

## A New Attribute: “Scaleness”

Even dismissing social considerations, there is another reason for which unitary physical durability doesn’t really cover, alone, the broader concept of scalability across time. The fact is that the ability to store arbitrary quantities of a good is not dependant only on its unitary attributes!

At the beginning of your virtuous cycle of saving and investment, you decided to eat one fish and to store the other alive. How convenient that, in order to survive, you needed to eat exactly _one fish_ and not, for example, one and a half fish, leaving you with half a fish to store! 

Indeed, a live fish isn’t great for divisibility. Smoked, salted or refrigerated fish would fare way better. On the other hand, considering that by the time you appointed yourself “Captain Caveman” you started storing 1,000 fish every day, keeping them alive in jars must be quite challenging. Again: Conserved fish would be way easier to store than living specimens.

In these examples, the discriminant is not how well any unit of good maintains its value across time, but rather how well the overall good maintains it across “scale”: when you store smaller fractions of it vs. when you store larger multiples. 

The former case is usually addressed in monetary theory with the term “divisibility,” the latter with the term “portability” (which often carries some movement-across-space connotations, but ultimately boils down to the fact that a portable good must possess high value in small bulk).

{{% image "/img/sb-314-en.webp" /%}}

The composite attribute is sometimes called “salability across scale,” which, just like “salability across time,” is actually pretty neat. Since I like shorter terms, I will use the (almost made-up) word “scaleness” instead (I guess this is a case of terminology choice which would deserve a Trigger Warning as I described [in my introduction](/en/discovering-bitcoin/intro)). This attribute has more to do with the “What?” column than with the “When?” one, to be fair.

{{% image "/img/sb-315-en.webp" /%}}

It’s interesting to note the nice link with the word “scalability,” which usually means something else entirely (it refers to the property of a system to handle a growing amount of work by means of additional resources). Within the context of Bitcoin, however, it has been used to address the technical limitations on the number of settlement transactions per unit of time and cost (related to the fact that blocks are limited in size and frequency). In this very specific meaning, the “salability problem” could be reduced to a divisibility one (basically, it doesn’t make economic sense to transfer amounts that are less valuable than the transfer costs), thus the conceptual link is justified.

So far, you’ve learned:

- to store your wealth, sacrificing immediate consumption;
- to invest your stored wealth, increasing your productivity;
- to focus on goods that show good physical “hardness” and good “scaleness.”

But what can you do with all of the fish you catch every day? Not much, actually, if you are still able to consume just two and you can’t exchange them, which is something you will learn about tomorrow, in [Part 2](/en/discovering-bitcoin/about-people).

{{< expand "Contents" "..." >}}
1. [Introduction](/en/discovering-bitcoin/intro)
2. [Part 1: About Time](/en/discovering-bitcoin/about-time)
3. [Part 2: About People](/en/discovering-bitcoin/about-people)
4. [Part 3: Introducing Money](/en/discovering-bitcoin/introducing-money)
5. [Part 4: A Wrong Turn (New Plan Needed)!](/en/discovering-bitcoin/a-wrong-turn-new-plan-needed)
6. [Part 5: Digital Scarcity](/en/discovering-bitcoin/digital-scarcity)
7. [Part 6: Digital Contracts](/en/discovering-bitcoin/digital-contracts)
8. [Part 7: The Missing Pieces](/en/discovering-bitcoin/the-missing-pieces)
{{< /expand >}}
