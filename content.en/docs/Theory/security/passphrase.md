---
title: "Is your passphrase strong enough?"
h1: "Is your passphrase strong enough?"
cover: /img/pass-811.jpg
description: ""
url: passphrase
date: 2019-07-12
bookToc: true
bookFlatSection: false
weight: 4
---

{{< hint btc >}}
This article by SatoshiLabs was published in [Trezor blog](https://blog.trezor.io/is-your-passphrase-strong-enough-d687f44c63af).

[Contribute](/contribute/).
{{< /hint >}}

There are various approaches to creating a good [passphrase for your wallet](https://blog.trezor.io/passphrase-the-ultimate-protection-for-your-accounts-3a311990925b). You can go with something that is quick to type but not so easy to remember, such as “5Xai1WhSYu”, or you can opt for a sentence that is easy to remember but takes longer to enter into your Trezor, such as “Buying a Trezor was the wisest choice I ever made.”

Another option is to make up a sequence of random words like “correct horse battery staple”. This all depends on what is easiest for you to memorize and how often you enter the passphrase. In this blog post we would like to give you a better idea of how strong your passphrase is, depending on the method and length you use.

{{% image "/img/pass-807-en.webp" %}}
_Source: [https://xkcd.com/936/](https://xkcd.com/936/)_
{{% /image %}}

## Option 1: A random sequence of words
  
The first method for creating a passphrase is to choose several words from a list of words, at random. You can take a dictionary, open it on a random page, and select a word by placing your finger on the page, eyes closed, and repeat this several times to get a four or five word passphrase.

However, humans are not very good at making random choices, so a better method might be to select words by rolling some dice and using the result to select a word from a word list. 
  
A popular choice is Arnold Reinhold’s Diceware list [^Rei95], first published in 1995. The list contains 7,776 words, which is equal to the number of possible ordered rolls of five six-sided dice (7776 = 6⁵). Joseph Bonneau recently made enhancements to this list [^Bon16], eliminating words which are uncommon or difficult to spell and also introduced a shortened version with only 1,296 words.

- [_Bonneau’s Long Diceware list_](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt)
- [_Bonneau’s Short Diceware list_](https://www.eff.org/files/2016/09/08/eff_short_wordlist_1.txt)

You roll only four dice to select words from the Short Diceware list (1296 = 6⁴). The list works like a dictionary. Each word in the list is prefixed by a unique four digit number. These four digits indicate the word you should choose when you roll these four numbers on the dice. So for example if you roll:

{{% image "/img/pass-808.png" /%}}

Then you should choose the word which has the number 4216, and that is the word “_move_”:

…  
**4215** _mouth_  
**4216** _move_  
**4221** _movie_  
…  
  
If you use the Short Diceware wordlist to generate your passphrase, then compared with the Long Diceware list you will need more words to achieve the same level of security, but the words in the Short Diceware list are shorter. As a result, a four-word passphrase from the Long Diceware list will have 28.0 letters on average, whereas a five-word passphrase from the Short Diceware list will have only 22.7 letters on average. To give an example, the following passphrases provide the same level of security:
  
Using Short Diceware: “_float volt limes rhyme nest_”

Using Long Diceware: “_freeway oppose spinout managing_”
  
## Option 2: A random-character passphrase
  
Another method of creating a passphrase is to use the same rules that you are often asked to follow for creating a password. Choose a random sequence of characters with uppercase and lowercase letters, numbers, punctuation and special characters like #!@+ etc.

If you don’t like using special characters, for example, you don’t necessarily have to use them, but then you need to make your passphrase longer to achieve the same level of security. Similarly, if you find it difficult to remember whether a letter in your password is lowercase or uppercase, you can resort to using only lowercase letters in your passphrase, but again you have to make the passphrase longer to compensate.

Here are some examples:

||Alphabet|Example|
|---|---|---|
|Lowercase|a–z|akorhrjfmsym|
|Alphanumeric lowercase|a–z, 0–9|bqkng36w9nf|
|Alphanumeric case-sensitive|A–Z, a–z, 0–9|5Xai1WhSYu|
|Any printable characters|ASCII 32–126|q%9Ec#pD7|

## Option 3: A valid English sentence
  
Using a valid English sentence or a poem as a passphrase is also an option. It will be easy to remember, but it needs to be long enough and random enough to provide a sufficient level of security.

The right length depends on the amount of entropy (randomness) per word. The estimates for a grammatically correct and semantically valid English sentence vary. A conservative estimate is 5.7 bits per word given in [^Mon11], which is what we use in our calculations below.
  
The greatest problem with this option remains: humans are not very good at making random choices. You certainly cannot use your favorite quote from a book or a movie, as these would be at the top of an attacker’s list of passphrases to check. Similarly you cannot use a published poem, but rather a poem you make up yourself.
  
## Passphrase length and security
  
Assume an attacker steals your BIP-0039 recovery seed and attempts to guess the correct passphrase in order to access your wallet. They can do a brute-force / dictionary attack to search through possible passphrases you might have used. If you chose your passphrase well, then that will take them a lot of time and computing power.

One way they can do this is to rent out an NVIDIA Tesla V100 GPU from Amazon AWS, which can compute 2160 million SHA-512 hashes per second (see [hashcat benchmarks](https://gist.github.com/iam1980/808f696a14b0c42b26621a01f91a8b18)) at $3.06 per hour (see [Amazon EC2 Pricing](https://aws.amazon.com/ec2/pricing/on-demand/)).

With the recovery seed in hand, checking one passphrase requires 2048 HMAC computations, the derivation of some public keys, and checking whether any of them appear on the blockchain. That amounts to over 4096 SHA-512 computations plus additional work checking the blockchain. Thus the attacker could check no more than 620 million passphrases for $1.

This might seem like a huge number, but if you use a random passphrase of 12 lowercase letters, then the attacker would have to check about 48,000,000,000,000,000 passphrases on average, before hitting the right one. That translates to $77 million in today’s prices! If you add uppercase letters and numbers to the mix, you need only 9 or 10 random letters to achieve the same level of security.

One needs to take into account that the price of computing power will decrease in the future, making this attack cheaper. When choosing the passphrase length, you should make sure it remains secure for the next few years.
  
According to [Moore’s law](https://en.wikipedia.org/wiki/Moore%27s_law), the cost of any fixed attack effort drops by a factor of 2 every 18 months [^Len05]. This means that in 10 years time the cost of an attack could drop to one hundredth of today’s costs. In the example above that translates to around $750,000, which probably won’t be worth it for an attacker, unless they know you are storing over $1,000,000 of cryptoassets on your Trezor.

Finally, the table you have been waiting for. This table shows how much it would cost to break your passphrase today and in 2030, depending on the length and method you use:

{{% image "/img/pass-809-en.webp" /%}}

For example, if you want a passphrase which will cost at least $10,000,000 to break in the year 2030, and you want to use the Short Diceware list, then according to the table you need to create a passphrase 5.8 words long. You have to round that up to 6 words, of course.

The amount of time required to conduct a brute-force attack corresponding to any of the rows in the table is immense. The exact estimates vary depending on the amount of computing power at the attacker’s disposal. That is why the cost in US dollars is a better metric.

If you are interested to know more about the time requirements, then there is an extensive analysis by Coldbit [^Col19]. To give an example, Coldbit estimates that if an attacker were to design and build a supercluster of ASICs specially for cracking PBKDF2-HMAC-SHA512, then a 6 word passphrase from the Short Diceware list would take 150 years to crack. That kind of hardware doesn’t even exist today, so there would be additional costs to design and build it.
  
## Show me the math
  
In the table we work with the assumption that an attacker might rent an NVIDIA Tesla V100 GPU from Amazon AWS which, as explained above, can be used to check 620 million passphrases for $1. So the question is, if the attacker tries to go through all possible passphrases of a given length and constructed using a particular method, how many will they have to check, before they hit the right one? On average the number of passphrases that need to be checked is one half of the total.

For random-character passphrases, the total number of passphrases of a given length is _nᵏ_, where _n_ is the size of the alphabet and _k_ is the length of the passphrase in characters. So for lowercase letters _n_ = 26, for alphanumeric lowercase _n_ = 36, for alphanumeric case-sensitive _n_ = 62 and for all printable ASCII characters _n_ = 95.

For random word passphrases, the total number is again _nᵏ_, but now _n_ is the number of words in the wordlist and _k_ is the length of the passphrase in words, so _n_ = 7776 for Long Diceware and _n_ = 1296 for Short Diceware.

For a valid English sentence passphrase, the total number depends on the entropy per word. As noted above we use the estimate of 5.7 bits per word from [^Mon11]. In that case the total number of passphrases is 2^(5.7 × _k_) ≈ 52_ᵏ_, where _k_ is the length of the passphrase in words.

Once you have the total number of passphrases, divide that by 2 and then divide the result by 620 million to get the cost in US dollars today. Remember, on average the attacker needs to check only half of the total number of passphrases, that is why you have to divide by 2.

As for the prediction of the cost of the attack in years to come, we assume Moore’s law, according to which the cost of any fixed attack effort drops by a factor of 2 every 18 months. So to compute the cost of the attack _m_ months from today, take the estimate of what it would cost today and divide that by 2^(_m_/18). In the table above we used _m_ = 126 months for January 2030.
  
## Trezor Trusted Display
  
Remember, no hardware can provide 100% protection for your recovery seed. With sufficient resources and the right expertise an attacker will be able to extract the recovery seed from any hardware wallet. So if you are worried about your wallet being stolen, you should use a strong passphrase.

Currently, the most advanced solution on the market is the [Trezor Model T](https://shop.trezor.io/product/trezor-model-t). Its unique [Trusted Display](https://blog.trezor.io/what-are-you-looking-at-why-the-trusted-display-of-a-trezor-is-guaranteed-to-boost-your-security-d1545f0e48e9) allows you to enter your passphrase directly on the device. Entering your passphrase on the device rather than on your computer allows you to achieve maximum security. That way even if your computer is infected with malware, your passphrase will remain safe.

_Tip: Did you know that swiping your finger left or right over the keyboard on your Trezor T will change the layout, so that you can enter uppercase letters, numbers and special characters?_

{{% image "/img/pass-810.png" /%}}

At the end of the day, you know your security needs best. If physical attacks are in your threat model, then use a strong passphrase to protect your wallet. Even if someone gets physical access to your device and extracts the recovery seed, they still absolutely will not be able to break through a strong passphrase.

Our goal at SatoshiLabs is to give you all the tools you need to be self-sovereign and secure your assets, independently of us as a company. Your Trezor device is secure against remote attacks, and the passphrase feature protects it against physical attack.

Your security is in your own hands. Make sure your hands are also holding a Trezor.

[^Bon16]: Joseph Bonneau: Deep Dive: EFF’s New Wordlists for Random Passphrases (2016), [https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases).
[^Col19]: Coldbit: Can BIP-39 passphrase be cracked? (2019), [https://coldbit.com/can-bip-39-passphrase-be-cracked/](https://coldbit.com/can-bip-39-passphrase-be-cracked/).
[^Len05]: Arjen K. Lenstra: Key Lengths. In: The Handbook of Information Security, ch. 114. Wiley (2005).
[^Mon11]: Montemurro MA, Zanette DH (2011) Universal Entropy of Word Ordering Across Linguistic Families. PLoS ONE 6(5): e19875. [https://doi.org/10.1371/journal.pone.0019875](https://doi.org/10.1371/journal.pone.0019875).
[^Rei95]: Arnold G. Reinhold: The Diceware Passphrase Home Page, [http://world.std.com/~reinhold/diceware.html](http://world.std.com/~reinhold/diceware.html).
