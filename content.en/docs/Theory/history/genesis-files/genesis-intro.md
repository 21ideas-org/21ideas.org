---
title: "Intro"
h1: "The Day Cryptography Changed Forever"
cover: /img/173.jpeg
tags: ["bitcoin", "history", "cypherpunks", "genesis"]
description: ""
url: gf/genesis-intro
date: 2020-01-06
bookFlatSection: false
weight: 1
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
This article by Steven Ellis was published in his [Medium blog](https://medium.com/swlh/the-day-cryptography-changed-forever-1b6aefe8bda7).

[Contribute](/contribute/).
{{< /hint >}}

On 1 August 1977, [Scientific American](https://www.scientificamerican.com/), a popular science magazine, released its monthly publication, as it had been doing since 1921. It contained an interesting mix of maths, science, engineering, biology, mechanics, geography and other such content.

Appearing near the end of the publication on page 120, was a short article by popular mathematician [Martin Gardner](http://martin-gardner.org/) entitled _‘Mathematical Games’_.

In it, he described a _‘new kind if cypher that would take millions of years to break’_.

The new form of cryptography, titled **_RSA_** after its inventors Ron Rivest, Adi Shamir and Leonard Adleman, was, the author claimed, about to herald a new era in cryptography.

As it turned out, he was spot on with his prediction.

{{% image "/img/210.png" %}}
_The August 1977 edition of Scientific American._
{{% /image %}}

# What the world needs is …. trustless encryption

Prior to 1977, cryptography had been dominated by stream cyphers, and in particular the [one-time pad](https://en.wikipedia.org/wiki/One-time_pad).

The one-time pad is a random sequence numbers letters or bits, which, when combined with an original message, creates a pseudo random sequence.

Without knowing the one-time pad, it’s impossible to de-cypher the encrypted message. But if you do know the key, it’s a simple task to extract the original message from the encryption.

Maths theory shows that stream cyphers and one-time pads are the safest and most secure form of cryptography. However, using such a form of encryption comes with fairly onerous and unwieldy implementation requirements.

{{% image "/img/211.png" %}}
_The now-famous article by Martin Gardner about RSA public key encryption, in the August 1977 edition of Scientific American._ 
{{% /image %}}

Firstly, the key can only be used **once** (since using the same key on two different message immediately breaks the cipher), and secondly the key must _always be as long as the original message_.

This implies that two parties who wish to communicate securely through the use of a one-time pad, _need to find a way of sharing the key with each other prior to communicating with it_.

If such parties don’t know each other beforehand, or are separated by great distance or time, this poses a logistical problem: they somehow need to share keys with each other, before encrypted communication can take place. Moreover, if these parties somehow find a way of securely passing each other these keys (via private courier, registered mail, nuclear submarine etc.), it begs the question: why not just use that channel to communicate and bother with encryption at all?

# A digital storm is brewing…

Against this backdrop, if you had gazed upon the digital landscape back in 1977, you would have seen a giant tidal wave starting to form on the distant horizon. This tidal wave was the coalescing of computer & networking hardware, software and protocols, which in time would form the Digital Revolution we experience today.

Many of the key components of modern computing and networking had already been discovered or invented, and were waiting for the right conditions to gain mass adoption.

The ARPANET (a distributed packet-switched network & the precursor to the modern internet) already existed and was in use at various corporate and academic locales. TCP (transmission control protocol, the [connection-oriented](https://searchnetworking.techtarget.com/definition/connection-oriented) protocol used by the internet) and FTP ([file transfer protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol), used for the transfer of computer files between a client and server on a network) had also both already in use. Various forms of one-to-one electronic messaging such as [FTPmail](https://en.wikipedia.org/wiki/FTPmail) and Mail Protocol (which would evolve into email using SMTP in the 80s) had been invented, and were in use to send mail messages across the ARPANET. In 1965, [Gordon Moore](https://en.wikipedia.org/wiki/Gordon_Moore), then CEO of Intel, predicted a doubling every year in the number of components per integrated circuit (which he revised in 1975 to a doubling every two years). His prediction became known as [Moore’s Law](https://en.wikipedia.org/wiki/Moore%27s_law), and promised continuous and sustained advancements in digital electronics and hardware.

Computer companies like Intel, IBM, SAP & Honeywell were already well established. Two years earlier, two young entrepreneurs had incorporated a company in Albuquerque, New Mexico, to develop and sell [BASIC](https://en.wikipedia.org/wiki/BASIC) [interpreters](https://en.wikipedia.org/wiki/Interpreter_(computing)) for the [Altair 8800](https://en.wikipedia.org/wiki/Altair_8800). And one year prior, another young entrepreneur co-founded a company in his childhood home on Crist Drive in Los Altos, California. The companies were Microsoft and Apple respectively.

In short, software and hardware were ready for wide-scale and all-pervasive adoption.

But on the networking side, it lacked one crucial component: trustless encryption, allowing communications between two parties who don’t have prior acquaintance. For a true multi-node and decentralised network like the internet to flourish, it would need a way for unacquainted members within that network with no prior correspondence, to communicate securely. The contemporary method of using stream ciphers placed too onerous a requirement on network members to agree upon and share an encryption key beforehand.

# Merkel Puzzles — a first stab at the problem

The first recognised effort to resolve the problem of key distribution was in 1974, when computer scientist [Ralph Merkle](https://en.wikipedia.org/wiki/Ralph_Merkle) came up with a solution for allowing two parties to agree on a secret key by exchanging messages, even if they had no secrets in common beforehand.

The protocol works as follows:

1. Assume Alice and Bob wish to communicate securely.
2. Alice creates a large number of puzzles (a mathematical problem that is difficult, but not impossible, to solve).
3. Bob randomly chooses one of the puzzles sent to him, and solves the puzzle.
4. The decrypted solution contains an **identifier** and a **session key** (which will serve as the key for their communication). Bob communicates the identifier back to Alice, thereby indicating to her which puzzle he has solved.
5. Both parties now have a common key; Bob, because he solved a puzzle, and Alice, because she sent the puzzle.
6. Any eavesdropper (Eve, say) has a harder task since she doesn’t know which puzzle was solved by Bob. Her best strategy is to solve all the puzzles, but since there are so many, this is more computationally expensive for Eve than it is for Bob.

A mathematical analysis of the protocol reveals that there is a [quadratic gap](https://en.wikipedia.org/wiki/Time_complexity) between time and effort for an attacker (Eve) to solve all the puzzles compared to Alice and Bob.

These days, quadratic complexity is typically not considered secure enough against an attacker for practical real-world cryptographic applications. In addition, the Merkle Puzzle protocol requires Alice to come up with a large number or puzzles, and to send them all to Bob. This obviously represents quite a lot of work for Alice, and also quite a lot of network traffic between Alice and Bob. Given these requirements, this protocol is considered too inefficient to be used in practice. However, the significance of Merkle’s contribution should not be overlooked. This was the first implementation of a scheme where two participants can come up with a key ‘on the fly’, and where there is a significant gap between the amount of work it takes for the participants to come up with the key, and the amount of work required for an attacker to break the key. It would also provide the inspiration for a new key distribution protocol devised two years later…

# A major theoretical breakthrough is made

Inspired by Merkle’s work, on November 6 1976 two Harvard professors, [Whitfield Diffie](https://en.wikipedia.org/wiki/Whitfield_Diffie) and [Martin Helman](https://en.wikipedia.org/wiki/Martin_Hellman) published a theoretical paper that tackled many of long-standing problems around trustless encryption and key distribution.

{{% image "/img/212.png" %}}
_[‘New Directions in Cryptography’](https://ee.stanford.edu/~hellman/publications/24.pdf) a paper by Whitfield Diffie and Martin Hellman in 1976._
{{% /image %}}

Both Diffie and Helman completely understood how the then shortcomings of cryptography prevented secure and convenient communication between two people with no prior acquaintance.

They also realised that the only way to resolve the key exchange problem was with the use of complex mathematics. In other words, as they put it, ‘_changing this ancient art into a science_’.

Their brilliant and groundbreaking solution to the problem was **public key cryptography**.

In this protocol, there exist two sets of keys for _enciphering_ and _deciphering_ (we’ll call these keys **E** and **D**).

The protocol uses mathematical properties to ensure that:

- **E** is the _inverse_ of **D**
- deriving both **E** and **D** is computationally easy
- computing **D** from **E** is computationally infeasible (i.e. _very_ difficult)
- **E** can be publicly disclosed without compromising the integrity of **D (**based on the condition above).

The properties of such a protocol allow for a private conversation between to people who have never communicated before.

How?

1. A user (Bob) generates a pair of inverse transformations **E** and **D**.
2. The deciphering transformation **D** must be kept secret, and need never be communicated to anyone.
3. The enciphering key **E** can be made public by placing it in a public directory along with Bob’s name and address.
4. Anyone (say Alice) can then look up Bob’s public key **E** in the directory, encrypt messages using **E** and send them to Bob, but **no-one else can decipher messages intended for Bob, except Bob himself (who uses D to do so)**.

The concept of a one-way function offered an efficient solution for key exchange. However, both the authors admitted that a practical implementation of the protocol was still ‘an open problem’, and invited readers to put their minds towards finding one. The breakthrough would come less than a year later.

# A practical one-way function is devised

{{% image "/img/213.png" %}}
_[‘On Digital Signatures and Public-Key Cryptosystems’](https://apps.dtic.mil/dtic/tr/fulltext/u2/a039036.pdf) a paper by Ronals Rivest, Adi Shamir and Len Adleman, published in 1977._
{{% /image %}}

[Ronald Rivest](https://en.wikipedia.org/wiki/Ron_Rivest) and [Adi Shamir](https://en.wikipedia.org/wiki/Adi_Shamir) were both computer scientists at MIT while [Len Adleman](https://en.wikipedia.org/wiki/Leonard_Adleman) was a mathematician.

The Diffie–Hellman paper had captured their imagination, and they set about trying to find an implementation that would satisfy its specifications. When Rivest or Shamir would come up with a new theoretic scheme, Adleman, usually shot it down after only a few minutes’ analysis.

Around midnight the evening of the Passover Seder in 1977, Rivest called Adleman with the idea of using _prime number factorisation_ as the trapdoor function. Adleman failed to find any holes in this one. (In fact, over 40 years later, still no-one has managed to do so).

The effectiveness of the RSA one-way function relies on the fact that **multiplying two large prime numbers together is easy, but factoring this product into the two primes that compose it, is really difficult**.

Prime numbers — numbers greater than one that are only divisible by one and themselves — have special mathematical properties which have intrigued mathematicians for centuries. The brilliant insight of Rivest, Shamir and Alderman, was to use these properties of prime numbers, to build a practical an efficient trapdoor function.

I encourage the reader to read [the original paper](https://apps.dtic.mil/dtic/tr/fulltext/u2/a039036.pdf) to gain a detailed insight into the arithmetic implementation of the protocol.

In summary, to use RSA:

1. Find two prime numbers **P** & **Q** (usually each hundreds of digits long), and multiply them together to create their product, called **N**
2. Generate a number, called the [Euler totient](https://en.wikipedia.org/wiki/Euler%27s_totient_function) & symbolised by **φ(N)**, and calculated as **(P-1) * (Q-1).** This represents the number of integers that are [**relatively prime**](https://en.wikipedia.org/wiki/Coprime_integers) to N (excluding the number 1, which is relatively prime to every non-zero integer).
3. Find a number **E** (_the encryption key_) which is [**relatively prime**](https://en.wikipedia.org/wiki/Coprime_integers) to both **N** and **φ(N)**
4. Determine the number **D** (_the decryption key_) that is the [**modular multiplicative inverse**](https://en.wikipedia.org/wiki/Modular_multiplicative_inverse) of E. This is calculated using the equation **E * D = 1 (mod φ(N))**
5. The **public key** is the number **N** and the number **E**
6. The **private key** is the number **N** and the number **D**

The cipher is then achieved by **raising the message to E mod N**. Decryption is achieved by **raising the cipher to D mod N**.

```
C ≡ Mᴱ mod N

M ≡ Cᴰ mod N
```

(_the ‘mod’ operation as used above is described_ [_here_](https://brilliant.org/wiki/modular-arithmetic/)_)_

## RSA Example 1

1. Find two prime numbers **P** & **Q:  
    P** = 2, **Q** = 7
2. Calculate **N**  
    N = P * Q  
    = 2 * 7  
    = **14**
3. Calculate **φ(N)**  
    φ(N) = (P — 1)(Q — 1)  
    = 1 * 6  
    = **6**
4. Choose an encryption key **E**.  
    E must be between 1 and ϕ i.e. **1 < E< 6**  
    E must be [relatively prime](https://en.wikipedia.org/wiki/Coprime_integers) to **N** and **φ(N)**  
    Based on these requirements, E is calculated as **5**
5. Calculate decryption key **D**:  
    D is the inverse of E mod **φ(N)**  
    In other words, **D * E (mod φ(N)) = 1**  
    i.e. in our example, **5 * D (mod 6) = 1**  
    Based on this, we can choose D = **11** (since **5 * 11 mod 6 = 1**)

**_E = 5  
D = 11  
N = 14  
C ≡ Mᴱ mod N  
M ≡ Cᴰ mod N_**

If our message M is say **9**,  
**_C = 9⁵ mod 14 = 11  
M = 11¹¹ mod 14 = 9_**

## RSA Example 2

1. Find two prime numbers **P** & **Q:  
    P** = 61, **Q** = 53
2. Calculate **N**  
    N = P * Q  
    = 61 * 53  
    = **3233**
3. Calculate **φ(N)**  
    φ(N) = (P — 1)(Q — 1)  
    = 60 * 52  
    = **3120**
4. Choose an encryption key **E:**  
    E must be between **1** and **φ(N)** i.e. **1 < E < 3120**  
    E must be [relatively prime](https://en.wikipedia.org/wiki/Coprime_integers) to **N** and **φ(N)**  
    Based on these requirements, **E** is calculated as **17**
5. Calculate decryption key **D**:  
    D is the inverse of E mod **φ(N)**  
    In other words, **D * E (mod φ(N)) = 1**  
    i.e. in our example, **17 * D (mod 3120) = 1**  
    Using the [Extended Euclidian Algorithm](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm), we calculate D = **2753** (since **17 * 2753 mod 3120 = 1**)

**_E = 17  
D = 2753  
N = 3233  
C ≡ Mᴱ mod N  
M ≡ Cᴰ mod N_**

If our message M is say **42**,  
**_C = 42¹⁷ mod 3233 =_ 2557_  
M = 2557²⁷⁵³ mod 3233 = 42_**

## RSA Example 3

1. Find two prime numbers **P** & **Q:  
    P** = 5, **Q** = 11
2. Calculate **N**  
    N = P * Q  
    = 5 * 11  
    = **55**
3. Calculate **φ(N)**  
    **φ(N)** = (P — 1)(Q — 1)  
    = 4 * 10  
    = **40**
4. Choose an encryption key **E**:  
    E must be between **1** and **φ(N)** i.e. **1 < E< 40**  
    E must be [relatively prime](https://en.wikipedia.org/wiki/Coprime_integers) to **N** and **φ(N)**  
    Based on these requirements, E is calculated as **7**
5. Calculate decryption key **D**:  
    D is the inverse of **C mod φ(N)**  
    In other words, **D * E (mod φ(N)) = 1**  
    i.e. in our example, **7 * D (mod 40) = 1**  
    Using the [Extended Euclidian Algorithm](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm), we calculate D = **23** (since **7 * 23 mod 40 = 1**)

**_E = 7  
D = 23  
N = 55  
C ≡ Mᴱ mod N  
M ≡ Cᴰ mod N_**

If our message M is say **15**,  
**_C = 15⁷ mod 55 = 5  
M = 5²³ mod 55 = 15_**

# Final remarks

Even though Rivest, Shamir and Adleman published their paper in April 1977, it was the publication in Scientific American 4 months later which alerted the world to their discovery, and heralded in a new era of cryptography.

The impact of Diffie Helman’s public key cryptographic system, and RSA’s implementation thereof, can hardly be overstated. Public key encryption now forms the foundation for most regularly-used security protocols on the internet today, and is fundamentally critical to the privacy, integrity and authentication in modern communication systems.

In addition, the technologies of encryption have since 1976 been public domain, not controlled by any single entity. As Diffie later put it, after they published their paper, the National Security Agency’s crypto monopoly was effectively terminated. _“Every company, every citizen now had routine access to the sorts of cryptographic technology that not many years ago ranked alongside the atom bomb as a source of power.”_

Interestingly, no-one has been able to prove that prime number factorisation is computationally hard (in other words, we have no guarantees that in the future someone won’t discover a technique to factor large prime numbers efficiently). Nonetheless, for over 40 years, whilst certain weaknesses in implementations of the algorithm have been uncovered, no-one has made any real progress in attacking the core of the algorithm.

We can therefore safely assume that these protocols and standards will last long into the future.

{{% image "/img/214.png" %}}
_Meet the heroes of modern cryptography. From left to right: Adi Shamir, Ron Rivest, Len Adleman, Ralph Merkle, Martin Hellman, and Whitfield Diffie (Picture courtesy of Eli Biham, taken at the presentation on August 21 at [Crypto 2000](http://www-cse.ucsd.edu/users/mihir/crypto2k/program.html), an [IACR](http://www.iacr.org/) conference)._
{{% /image %}}

{{< details "Contents" "..." >}}
1. [Intro: The Day Cryptography Changed Forever](/en/gf/genesis-intro)
2. [Part I: How David Chaum’s eCash Spawned a Cypherpunk Dream](/en/gf/genesis-1)
3. [Part II: Hashcash or How Adam Back Designed Bitcoin’s Motor Block](/en/gf/genesis-2)
4. [Part III: If Bitcoin Had a First Draft, Wei Dai’s B-Money Was It](/en/gf/genesis-3)
5. [Part IV: With Bit Gold, Szabo Was Inches Away From Inventing Bitcoin](/en/gf/genesis-4)
6. [Part V: How Hal Finney’s Quest For Digital Cash Led To RPOW (And More)](/en/gf/genesis-5)
{{< /details >}}
