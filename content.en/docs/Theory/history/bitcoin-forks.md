---
title: "A complete history of Bitcoin’s consensus forks"
h1: "A complete history of Bitcoin’s consensus forks"
cover: /img/forks-01.jpg
tags: ["bitcoin", "history", "softfork", "hardfork", "consensus", "blockchain", "chainsplit"]
description: ""
url: bitcoin-forks
date: 2017-12-28
bookFlatSection: false
bookToc: false
weight: 53
---

## Abstract

In this piece, we list 19 Bitcoin consensus rule changes (or 18 as an accidental one “failed”), which represents what we believe to be almost every significant such event in Bitcoin’s history. At least three of these incidents resulted in an identifiable chainsplit, lasting approximately 51, 24, and six blocks, in 2010, 2013 and 2015, respectively.

{{< hint btc >}}
This report was originaly published in BitMEX Research [blog](https://blog.bitmex.com/bitcoins-consensus-forks/). Later it has been [updated](https://blog.bitmex.com/a-complete-history-of-bitcoins-consensus-forks-2022-update/). The updated list now includes the 2018 [security incident](https://bitcoincore.org/en/2018/09/20/notice/) and the 2021 [Taproot activation](https://en.bitcoin.it/wiki/BIP_0341).

[Please click here to download the PDF version of first version of this report](https://blog.bitmex.com/wp-content/uploads/2017/12/2017.12.28-A-complete-history-of-Bitcoins-consensus-forks-.pdf).

[Contribute](/contribute/).
{{< /hint >}}

## Terminology

<table>
<tbody>
<tr bgcolor="#526482">
<td width="25%"><span style="color: white;"><strong>Term</strong></span></td>
<td width="75%"><span style="color: white;"><strong>Definition</strong></span></td>
</tr>
<tr>
<td> Chainsplit</td>
<td style="text-align: left;">A split in the blockchain, resulting in two separate chains, with a common ancestor. This can be caused by either a hardfork, a softfork, or neither.</td>
</tr>
<tr bgcolor="#526482">
<td colspan="2"> <strong>Consensus rule changes</strong></td>
</tr>
<tr>
<td> Hardfork</td>
<td>
<p style="text-align: left;">A loosening of the consensus rules on block validity, such that some blocks previously considered as invalid are now considered valid.</p>
<p style="text-align: left;">Existing nodes are required to upgrade to follow the new hardforked chain.</p>
</td>
</tr>
<tr>
<td> Softfork</td>
<td>
<p style="text-align: left;">A tightening of the consensus rules on block validity, such that some blocks previously considered as valid are now considered invalid.</p>
<p style="text-align: left;">Existing nodes do not necessarily need to upgrade to follow the new softforked chain.</p>
</td>
</tr>
</tbody>
</table>

Note: These terms are believed to have originated in [April 2012](https://gist.github.com/gavinandresen/2355445) and formalized in [BIP99](https://github.com/bitcoin/bips/blob/master/bip-0099.mediawiki) and [BIP123](https://github.com/bitcoin/bips/blob/master/bip-0123.mediawiki).

## List of Bitcoin consensus forks

<table style="width: 100%;">
<tbody>
<tr bgcolor="#526482">
<td style="width: 10%;" width="10%"><span style="color: white;"><strong>Date</strong></span></td>
<td style="width: 10%;" width="10%"><span style="color: white;"><strong>Activation Block Number</strong></span></td>
<td style="width: 10%;" width="10%"><span style="color: white;"><strong>BIP Number or Software Version</strong></span></td>
<td style="width: 29%;" width="29%"><span style="color: white;"><strong>Description</strong></span></td>
<td style="width: 12%;" width="12%"><span style="color: white;"><strong>Type</strong></span></td>
<td style="width: 29%;" width="29%"><span style="color: white;"><strong>Outcome</strong></span></td>
</tr>
<tr>
<td style="width: 10%;">28 July 2010</td>
<td style="text-align: right; width: 10%;">n/a<sup>1</sup></td>
<td style="width: 10%;"><a href="[https://en.bitcoin.it/wiki/Common_Vulnerabilities_and_Exposures#CVE-2010-5141](view-source:https://en.bitcoin.it/wiki/Common_Vulnerabilities_and_Exposures#CVE-2010-5141)">0.3.5</a></td>
<td style="width: 29%;">OP_RETURN disabled, fixing a critical bug which enabled anyone to spend any Bitcoin.</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;" width="151">No evidence of any issues during this upgrade.</td>
</tr>
<td style="width: 10%;" rowspan="2">31 July 2010</td>
<td style="text-align: right; width: 10%;" rowspan="2">n/a<sup>1</sup></td>
<td style="width: 10%;" rowspan="2"><a href="[https://github.com/bitcoin/bitcoin/commit/a75560d828464c3f1138f52cf247e956fc8f937d](view-source:https://github.com/bitcoin/bitcoin/commit/a75560d828464c3f1138f52cf247e956fc8f937d)">0.3.6</a></td>
<td style="width: 29%;">OP_VER and OP_VERIF <a href="[https://github.com/bitcoin/bitcoin/commit/a75560d828464c3f1138f52cf247e956fc8f937d#diff-8458adcedc17d046942185cb709ff5c3L109](view-source:https://github.com/bitcoin/bitcoin/commit/a75560d828464c3f1138f52cf247e956fc8f937d#diff-8458adcedc17d046942185cb709ff5c3L109)">disabled</a>.<sup>3</sup></td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;" rowspan="2">Some users had trouble upgrading and it was recommended that nodes should be shut down if they could not be upgraded.<sup>2</sup></td>
</tr>
<tr bgcolor="#F2F7FF">
<td style="width: 29%;">The addition of the OP_NOP functions.</td>
<td style="width: 12%;">Hardfork</td>
</tr>
<tr>
<tr bgcolor="#F2F7FF">
<td style="width: 10%;">1 Aug 2010</td>
<td style="text-align: right; width: 10%;"> n/a<sup>1</sup></td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bitcoin/commit/73aa262647ff9948eaf95e83236ec323347e95d0](view-source:https://github.com/bitcoin/bitcoin/commit/73aa262647ff9948eaf95e83236ec323347e95d0)">0.3.7</a></td>
<td style="width: 29%;">Separation of the evaluation of the <a href="[https://github.com/bitcoin/bitcoin/commit/6ff5f718b6a67797b2b3bab8905d607ad216ee21#diff-8458adcedc17d046942185cb709ff5c3L1135](view-source:https://github.com/bitcoin/bitcoin/commit/6ff5f718b6a67797b2b3bab8905d607ad216ee21#diff-8458adcedc17d046942185cb709ff5c3L1135)">scriptSig and scriptPubKey</a>.  Fixing a critical bug which enabled anyone to spend any Bitcoin</td>
<td style="width: 12%;">Hardfork</td>
<td style="width: 29%;">No evidence of any issues during this upgrade</td>
</tr>
<td style="width: 10%;" rowspan="2">15 Aug 2010</td>
<td style="text-align: right; width: 10%;" rowspan="2">74,638</td>
<td style="width: 10%;" rowspan="2"><a href="[https://github.com/bitcoin/bitcoin/commit/08fee75201e82f2e34fcc1549ee8edd152f5d040](view-source:https://github.com/bitcoin/bitcoin/commit/08fee75201e82f2e34fcc1549ee8edd152f5d040)">0.3.10</a></td>
<td style="width: 29%;">Output-value-overflow bug fix following a 184.5-billion Bitcoin spend incident. The 0.5 BTC that was the input to the transaction remains <a href="[https://blockchain.info/address/17TASsYPbdLrJo3UDxFfCMu5GXmxFwVZSW](view-source:https://blockchain.info/address/17TASsYPbdLrJo3UDxFfCMu5GXmxFwVZSW)">unspent</a> to this day.</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;" rowspan="2">A chainsplit occurred.  Around five hours after the incident, a fix was released, client 0.3.10. It is believed that <a href="[https://bitcointalk.org/index.php?topic=823.msg9734#msg9734](view-source:https://bitcointalk.org/index.php?topic=823.msg9734#msg9734)">51 blocks</a> were generated on the &#8220;bad chain&#8221; before the &#8220;good&#8221; chain retook the PoW lead.</td>
</tr>
<tr bgcolor="#F2F7FF">
<td style="width: 29%;">Disabling OP_CAT, which removed a DoS vector, along with the disabling of 14 <a href="[https://github.com/bitcoin/bitcoin/commit/4bd188c4383d6e614e18f79dc337fbabe8464c82#diff-8458adcedc17d046942185cb709ff5c3R94](view-source:https://github.com/bitcoin/bitcoin/commit/4bd188c4383d6e614e18f79dc337fbabe8464c82#diff-8458adcedc17d046942185cb709ff5c3R94)">other functions</a>.</td>
<td style="width: 12%;">Softfork</td>
</tr>
<tr>
<tr bgcolor="#F2F7FF">
<td style="width: 10%;">7 Sept 2010</td>
<td style="text-align: right; width: 10%;">n/a<sup>1</sup></td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bitcoin/commit/8c9479c6bbbc38b897dc97de9d04e4d5a5a36730](view-source:https://github.com/bitcoin/bitcoin/commit/8c9479c6bbbc38b897dc97de9d04e4d5a5a36730)">0.3.12</a></td>
<td style="width: 29%;">Adding the 20,000-signature operation limit in an incorrect way. This incorrect limit still exists.</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">No evidence of any issues during this upgrade.</td>
</tr>
<td style="width: 10%;">12 Sept 2010</td>
<td style="text-align: right; width: 10%;">79,400</td>
<td style="width: 10%;">n/a</td>
<td style="width: 29%;">
<p style="text-align: left;">Adding the 1MB blocksize limit.</p>
<p style="text-align: left;">The &#8220;MAX_BLOCK_SIZE = 1000000&#8221; commit <a href="[https://github.com/bitcoin/bitcoin/blob/a30b56ebe76ffff9f9cc8a6667186179413c6349/main.h#L18](view-source:https://github.com/bitcoin/bitcoin/blob/a30b56ebe76ffff9f9cc8a6667186179413c6349/main.h#L18)">occurred</a> on 15 July 2010, which was released in the 0.3.1 rc1 version of the software <a href="[https://github.com/bitcoin/bitcoin/commit/9d2174b6f5f3fac2463c7ebc2dbb9004b3740d23](view-source:https://github.com/bitcoin/bitcoin/commit/9d2174b6f5f3fac2463c7ebc2dbb9004b3740d23)">on 19 July 2010</a>. The <a href="[https://github.com/bitcoin/bitcoin/commit/8c9479c6bbbc38b897dc97de9d04e4d5a5a36730](view-source:https://github.com/bitcoin/bitcoin/commit/8c9479c6bbbc38b897dc97de9d04e4d5a5a36730)"> commit</a> enforcing the 1MB rule occurred on 7 September 2010, activating at block 79,400. On 20 September 2010, Satoshi <a href="[https://github.com/bitcoin/bitcoin/commit/172f006020965ae8763a0610845c051ed1e3b522](view-source:https://github.com/bitcoin/bitcoin/commit/172f006020965ae8763a0610845c051ed1e3b522)">removed</a> this activation logic, but kept the 1MB limit.</p>
</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">No evidence of any issues during this upgrade.</td>
</tr>
<tr>
<td style="width: 10%;">15 March 2012</td>
<td style="text-align: right; width: 10%;">171,193</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki)">BIP30</a></td>
<td style="width: 29%;">Disallow transactions with the same TXID, unless the older one was fully spent. In <a href="[https://github.com/bitcoin/bitcoin/commit/ab91bf39b7c11e9c86bb2043c24f0f377f1cf514](view-source:https://github.com/bitcoin/bitcoin/commit/ab91bf39b7c11e9c86bb2043c24f0f377f1cf514)">September 2012</a>, the rule was applied to all blocks, apart from 91,842 and 91,880, which violate the rule.</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">This was a flag-day softfork. There is no evidence of any issues.</td>
</tr>
<td style="width: 10%;">1 April 2012</td>
<td style="text-align: right; width: 10%;">173,805</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki)">BIP16</a></td>
<td style="width: 29%;">Pay-to-script hash (P2SH) allows transactions to be sent to a script hash (address starting with 3) instead of a public-key hash (addresses starting with 1).</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">55% activation threshold, over blocks in the seven days prior to 1 February 2012. Miners <a href="[https://bitcointalk.org/index.php?topic=66514.0;all](view-source:https://bitcointalk.org/index.php?topic=66514.0;all)">did not upgrade fast enough</a>, so the evaluation point was delayed until 15 March.  Users running 0.6.0 rc1 who did not upgrade for the delay activated the softfork early and got <a href="[https://bitcointalk.org/index.php?topic=63165.60](view-source:https://bitcointalk.org/index.php?topic=63165.60)">stuck on block 170,060</a> when an invalid transaction, according to their nodes, was mined.    After activation, problems were caused as the remaining 45% of miners produced invalid blocks for several months after the softfork</td>
</tr>
<tr>
<td style="width: 10%;">24 Mar 2013</td>
<td style="text-align: right; width: 10%;"> 227,835</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki)">BIP34</a></td>
<td style="width: 29%;">Requires the coinbase transaction to include the block height.</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">95% activation threshold. A successful rollout occurred.</td>
</tr>
<td style="width: 10%;">11 Mar 2013</td>
<td style="text-align: right; width: 10%;">225,430</td>
<td style="width: 10%;"><a href="[https://bitcoin.org/en/alert/2013-03-11-chain-fork](view-source:https://bitcoin.org/en/alert/2013-03-11-chain-fork)">0.8.0</a></td>
<td style="width: 29%;" width="236">This was an unplanned hardfork caused by the migration from Berkeley DB to LevelDB, which accidentally removed an unknown 10,000-BDB database lock limit. This caused a chainsplit on 11 March 2013, although the software which caused the error was released 20 days earlier on 20 February 2013. The change was reverted as the Bitcoin economy and miners switched back to 0.7.2 rules.</td>
<td style="width: 12%;">No change in the consensus rules</td>
<td style="width: 29%;">A chainsplit of at least <a href="[https://bitcoinmagazine.com/articles/bitcoin-network-shaken-by-blockchain-fork-1363144448/](view-source:https://bitcoinmagazine.com/articles/bitcoin-network-shaken-by-blockchain-fork-1363144448/)">24</a> blocks occurred, with the 0.8.0 chain having a maximum lead of 13 blocks. A <a href="[http://archive.is/64Rkj](view-source:http://archive.is/64Rkj)">successful double spend</a> also occurred. The original rules chain eventually re-took the PoW lead.</td>
</tr>
<tr>
<td style="width: 10%;">18 Mar 2013</td>
<td style="text-align: right; width: 10%;">n/a<sup>1</sup></td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bitcoin/commit/34d62a8efe4c51b2dd73d56fa03001d4accee4ad](view-source:https://github.com/bitcoin/bitcoin/commit/34d62a8efe4c51b2dd73d56fa03001d4accee4ad)">0.8.1</a></td>
<td style="width: 29%;" width="236">This was a temporary softfork, introducing a new rule requiring that no more than 4,500 TXIDs are referenced by inputs in a block. This rule is stricter  than the 10,000-BDB lock limit. The rule <a href="[https://github.com/bitcoin/bitcoin/commit/8bd02881899bbae2d8e5082081e02c7d577994e5#diff-7ec3c68a81efff79b6ca22ac1f1eabba](view-source:https://github.com/bitcoin/bitcoin/commit/8bd02881899bbae2d8e5082081e02c7d577994e5#diff-7ec3c68a81efff79b6ca22ac1f1eabba)">expired</a> on 15 May 2013, a flag-day hardfork.</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">There is no evidence of any issues.</td>
</tr>
<td style="width: 10%;">15 May 2013 or 16 Aug 2013</td>
<td style="text-align: right; width: 10%;"> 252,451 or earlier</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki)">BIP50</a></td>
<td style="width: 29%;">In August 2013, a block may have been produced that violated the original 10,000-BDB lock limit rule, which was relaxed on 15 May 2013.</td>
<td style="width: 12%;">Hardfork</td>
<td style="width: 29%;">There is no evidence of any issues.</td>
</tr>
<tr>
<td style="width: 10%;">4 July 2015</td>
<td style="text-align: right; width: 10%;"> 363,731</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki)">BIP66</a></td>
<td style="width: 29%;">Strict DER signature upgrade means Bitcoin is no longer dependent on OpenSSL&#8217;s signature parsing.</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">95% threshold over a 1,000-block period. A chainsplit occurred, lasting six blocks, as some miners signaled support for BIP66 but had not upgraded and were <a href="[https://blog.bitmex.com/empty-block-data-by-mining-pool/](view-source:https://blog.bitmex.com/empty-block-data-by-mining-pool/)">SPY mining</a>. The new softfork rules chain eventually took the lead.</td>
</tr>
<td style="width: 10%;">14 Dec 2015</td>
<td style="text-align: right; width: 10%;"> 388,380</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki)">BIP65</a></td>
<td style="width: 29%;">Check Lock Time Verify enables funds to be locked until a specific time in the future. This is Bitcoin&#8217;s first new function.</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">Successful rollout using a 95% threshold.</td>
</tr>
<tr>
<td style="width: 10%;">4 July 2016</td>
<td style="text-align: right; width: 10%;"> 419,328</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki)">BIP68</a><br/><a href="[https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki)">BIP112</a><br/><a href="[https://github.com/bitcoin/bips/blob/master/bip-0113.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0113.mediawiki)">BIP113</a></td>
<td style="width: 29%;">
<p style="text-align: left;">Relative lock-time enables a transaction output to be banned for a relative amount of time after the transaction.</p>
<p>CheckSequenceVerify.</p>
<p style="text-align: left;">Median time-past removes the incentive for a miner to use a future block timestamp to grab more transaction fees.</p>
</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">Successful rollout using 95% versionbits signaling.</td>
</tr>
<td style="width: 10%;">23 July 2017</td>
<td style="text-align: right; width: 10%;">  477,800</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki)">BIP91</a></td>
<td style="width: 29%;">This temporary softfork makes signaling for the SegWit upgrade mandatory.</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">Softfork successfully activated with an 80% miner threshold over a 336-block period, although only a tiny minority of users enforced BIP91 rules, which have since expired.  Therefore, the risk of a chainsplit was elevated in this period.</td>
</tr>
<tr>
<td style="width: 10%;">01 Aug 2017</td>
<td style="text-align: right; width: 10%;"> 478,479</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki)">BIP148</a></td>
<td style="width: 29%;">This temporary softfork makes signaling for the SegWit upgrade mandatory for a two week period following 1 August 2017.</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">Flag-day softfork appeared to succeed with no issues, although only a minority of users enforced BIP148 rules, which have since expired. Therefore, the risk of a chainsplit was elevated in this period.</td>
</tr>
<td style="width: 10%;">24 Aug 2017</td>
<td style="text-align: right; width: 10%;"> 481,824</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki)">BIP141</a><br/><a href="[https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki)">BIP143</a><br/><a href="[https://github.com/bitcoin/bips/blob/master/bip-0147.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0147.mediawiki)">BIP147</a></td>
<td style="width: 29%;">The <a href="[https://blog.bitmex.com/the-segwit-transaction-capacity-increase-part-1/](view-source:https://blog.bitmex.com/the-segwit-transaction-capacity-increase-part-1/)">segregated-witness</a> (SegWit) upgrade.</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">Rollout using 95% versionbits signaling.</td>
</tr>
<tr>
<td style="width: 10%;">14 Sep 2017</td>
<td style="width: 10%; text-align: right;">n/a</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bitcoin/releases/tag/v0.15.0](view-source:https://github.com/bitcoin/bitcoin/releases/tag/v0.15.0)">0.15.0</a></td>
<td style="width: 29%;">Accidental <a href="[https://bitcoincore.org/en/2018/09/20/notice/](view-source:https://bitcoincore.org/en/2018/09/20/notice/)">critical inflation bug</a> was added. This was fixed over a year later, on 17 Sep 2018.</td>
<td style="width: 12%;">Accidental hardfork client</td>
<td style="width: 29%;">No block was produced which exploited the bug and therefore it can be said that no hardfork occurred on the Bitcoin network.</td>
</tr>
<tr>
<td style="width: 10%;">14 Nov 2021</td>
<td style="width: 10%; text-align: right;">709,632 </td>
<td style="width: 10%;"><a href="[https://en.bitcoin.it/wiki/BIP_0341](view-source:https://en.bitcoin.it/wiki/BIP_0341)">BIP341</a></td>
<td style="width: 29%;">The Taproot upgrade combines ideas such as Schnorr signatures (<a class="mw-redirect" title="Bip-0340.mediawiki" href="[https://en.bitcoin.it/wiki/Bip-0340.mediawiki](view-source:https://en.bitcoin.it/wiki/Bip-0340.mediawiki)">BIP340</a>) and MAST (<a class="mw-redirect" title="Bip-0114.mediawiki" href="[https://en.bitcoin.it/wiki/Bip-0114.mediawiki](view-source:https://en.bitcoin.it/wiki/Bip-0114.mediawiki)">BIP114</a>, <a class="mw-redirect" title="Bip-0117.mediawiki" href="[https://en.bitcoin.it/wiki/Bip-0117.mediawiki](view-source:https://en.bitcoin.it/wiki/Bip-0117.mediawiki)">BIP117</a>)</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">This softfork activated using &#8220;Speedy Trial&#8221;, an idea <a href="[https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2021-March/018583.html](view-source:https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2021-March/018583.html)">proposed</a> by Russell O&#8217;Connor to resolve a dispute on the best activation methodology. A 90% miner threshold over fixed 2,016 block windows was sucessfully used. The softfork locked-in on 12 June 2021 at block height 687,283</td>
</tr>
<tr>
<td style="width: 10%;">The year 2262</td>
<td style="width: 10%;"> 13,440,000</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki)">BIP42</a></td>
<td style="width: 29%;">Fixed a 21 million coin supply cap bug.  The software was upgraded in April 2014 to fix this bug, but the new rule does not apply until the 23rd century.</td>
<td style="width: 12%;">Softfork</td>
<td style="width: 29%;">The softfork is not applicable yet.</td>
</tr>
</tbody>
</table>

**(Sources: BitMEX Research, GitHub, Bitcoin blockchain)**

### Notes

1. With the exception of the 1MB blocksize limit, prior to the 2012 BIP16 softfork, there was no activation methodology, so if the fork occurred smoothly without a chainsplit, there is not necessarily a specific block height or date on which the consensus fork occurred.
2. “If you can’t upgrade to 0.3.6 right away, it’s best to shut down your Bitcoin node until you do.” — [Satoshi Nakamoto](http://archive.is/L7amG)
3. Prior to the removal of OP_VER, each software upgrade could potentially be considered a non-deterministic hardfork and these have been excluded from this list. If the definition of hardforks does include this, then it’s a somewhat pedantic definition.
4. There are no consistent definitions used in the above table because, for example, a different definition of the date on which the fork occurred may be more relevant in each incident, depending on the circumstances.
5. Others have mentioned that changes to the P2P protocol can also be considered hardforks if they make previous software releases unusable, since they can no longer connect to the network. Strictly speaking, however, these do not relax the rules on block validity and one could sync old nodes by setting up a relay of intermediary versions of the software. These changes are excluded from the above list.
6. Some consider [BIP90](https://github.com/bitcoin/bips/blob/master/bip-0090.mediawiki) a hardfork, but since it only relaxed rules related to softfork activations that happened in the past, it does not share many of the characteristics or risks normally associated with consensus forks. Using the same logic, the block checkpoint scheme can also be considered as softforks.
7. In [July 2010](https://github.com/bitcoin/bitcoin/commit/40cd0369419323f8d7385950e20342e998c994e1#diff-623e3fd6da1a45222eeec71496747b31R420), the chain selection rule was altered to shift to most accumulated work from the number of blocks. Technically, this is not a change to block validity rules; however, this change does share some of the risks associated with consensus rule changes.

## Was the 2013 incident a hardfork?

In our view, on balance, the increase in the BDB lock limit a few months after the 11 March 2013 chainsplit was a hardfork. The rule in question was a 10,000-BDB lock limit, which was increased. The rule was relaxed on [15 May 2013](https://github.com/bitcoin/bitcoin/commit/8bd02881899bbae2d8e5082081e02c7d577994e5#diff-7ec3c68a81efff79b6ca22ac1f1eabba) in software version 0.8.1, which was released on [18 March 2013](https://github.com/bitcoin/bitcoin/commit/34d62a8efe4c51b2dd73d56fa03001d4accee4ad). A block exceeding this limit may finally have been produced on 16 August 2013 so one can define the date of the hardfork to be either 15 May 2013 or 16 August 2013.

Some have argued that this may not have been a hardfork for a variety of reasons, including that this rule was “quasi-non-deterministic” or that one could manually change the BDB config settings. Indeed, due to the non-deterministic nature of the lock limit, perhaps it is theoretically possible one could have a local system set up such that the old BDB lock limit has never been breached. Therefore, one could declare that there has “never been a hardfork” in Bitcoin, following a strict definition that requires a hardfork to be deterministic or perhaps even directly related to Bitcoin data such as transactions or the block header.

When discussing this incident, Bitcoin developer Gregory Maxwell [said](https://bitcointalk.org/index.php?topic=702755.msg8116032#msg8116032):

> *Sort of a mixed bag there, you can actually take a pre BIP-50 node and fully sync the blockchain, I last did this with 0.3.24 a few months ago. It just will not reliably handle reorgs involving large blocks unless you change the BDB config too. So it’s debatable if this is a hard fork either, since it’s quasi-non-deterministic. There were prior bugs fixed where older versions would get stuck and stop syncing the chain before that too… So I think by a really strong definition of creating a blockchain which violates the rules mandated by prior versions we have never had a hardfork.*

## Chainsplit incident of July 2015

In the list of consensus rules changes above, there are three incidents that caused identifiable chainsplits. The most recent of these occurred on 4 July 2015, during the BIP66 softfork upgrade.

Immediately after the activation of BIP66, there was a six-block orphan chain created because a miner produced an invalid block that was not recognised as invalid by some other mining pools, because they were not validating new blocks.  

In this case, some miners signalled support for the BIP66 softfork but hadn’t actually upgraded their nodes to validate; one could say miners were “false flagging”. If the miners had been validating blocks, they would have discovered the block was invalid and rejected it. Instead, some miners built on top of the invalid block and a chainsplit occurred.  

A diagram illustrating these six blocks and the chainfork is displayed below.

{{% image "/img/forks-02.png" %}}
*Graphical illustration of the July 2015 chainsplit. (Source: Blockchain.info [http://archive.is/WqGRp](http://archive.is/WqGRp) and [http://archive.is/LHlF7](http://archive.is/LHlF7))*
{{% /image %}}

{{< hint info >}}
**Note:** After the publication of this piece, an alternative list of consensus versions was published on the [Bitcoin Wiki](https://en.bitcoin.it/wiki/Consensus_versions).
{{< /hint >}}

{{< hint danger >}}
**Disclaimer:** Whilst many claims made in this piece are cited, we do not guarantee accuracy.  We may have made errors or accidentally omitted consensus rule changes from the list.  We welcome corrections.
{{< /hint >}}