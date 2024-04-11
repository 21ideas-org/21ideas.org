---
title: "Transaction Size"
h1: "Bytes, Weight, and Virtual Bytes"
cover: /img/txsize/01.jpg
description: ""
url: transaction-size
date: 2023-11-03
bookFlatSection: false
weight: 71
---

{{< hint btc>}}
This article by [Greg Walker](https://twitter.com/in3rsha) was published on [learnmeabitcoin.com](https://learnmeabitcoin.com/technical/transaction/size) website.

[Contribute](/contribute/).
{{</hint >}}

You can measure the size of a bitcoin [transaction](https://learnmeabitcoin.com/technical/transaction/) in 3 ways:

1. **Bytes (b)** – Transaction size on disk.
2. **Weight Units (wu)** – For fitting transactions in to a block.
3. **Virtual Bytes (vB)** – For comparing [fee rates](https://learnmeabitcoin.com/technical/transaction/fee/) between transactions.

_Bytes_ is the most straightforward unit. It's used for measuring any amount of data on a computer.

_Weight Units_ and _Virtual Bytes_ are measurements unique to bitcoin. They both measure the size of a transaction in terms of bytes too, but they give a **discount to some parts of the transaction data** and are used when calculating how many transactions can fit inside a [block](https://learnmeabitcoin.com/technical/block/).

## 1. Bytes (b)

{{% image "/img/txsize/02.png" /%}}

This is the natural way to measure the size of a transaction. It's just a transaction's _actual_ size in terms of how many [bytes](https://learnmeabitcoin.com/technical/general/bytes/) of space it takes up.

Bytes are used when measuring how big a transaction is when it's being sent across the [network](https://learnmeabitcoin.com/technical/networking/), or how much space it takes up on disk (e.g. when stored in [blockchain files](https://learnmeabitcoin.com/technical/block/blkdat/)).

{{% hint info %}}
Measuring the size of a transaction in bytes was more important when the block size limit was also measured in bytes (1,000,000 bytes, or 1 megabyte). However, the block size limit is now based on _weight_ instead.
{{% /hint %}}

### Example

Transaction: [30dcd74b7fd8a585db3b2beddd4a7fc0edcfe9b8a1bac9abee695648659f8a6a](https://learnmeabitcoin.com/explorer/tx/30dcd74b7fd8a585db3b2beddd4a7fc0edcfe9b8a1bac9abee695648659f8a6a)

01000000000101dd40a8d7f105055e781afa632207f5d3c4b4f4cad9f0fb320d0f0aa8e1ba904b0000000000ffffffff021027000000000000160014858e1f88ff6f383f45a75088e15a095f20fc663f841c0000000000001976a9142241a6c3d4cc3367efaa88b58d24748caef79a7288ac02483045022100d66341c3e6ce846b92bedcf9bc673ab8e47b770c616618eb91009e44816f4c2f0220622b5ebf6afabee3f4255bbcb84609e1185d4b6b1055602f5eed2541e26324620121022ed6c7d33a59cc16d37ad9ba54230696bd5424b8931c2a68ce76b0dbbc222f6500000000

Size: 226 bytes

There are 226 bytes in this transaction.

You can check this for yourself, because every 2 [hexadecimal](https://learnmeabitcoin.com/technical/general/hexadecimal/) characters represents 1 byte.

### Typical transaction sizes

The size of a transaction in _bytes_ mostly **depends on how many [inputs](https://learnmeabitcoin.com/technical/transaction/input/) and [outputs](https://learnmeabitcoin.com/technical/transaction/output/)** are in the transaction. Here are the average sizes for typical transactions (with standard [P2PKH](https://learnmeabitcoin.com/technical/script/p2pkh/) locking scripts on the outputs):

- Inputs: 1, Outputs: 1 = 191 or 192 bytes
- Inputs: 1, Outputs: 2 = 225 or 226 bytes _(most common)_
- Inputs: 2, Outputs: 1 = 338 or 339 bytes
- Inputs: 2, Outputs: 2 = 373 or 374 bytes _(very common)_

The more inputs and outputs there are in a transaction, the bigger it gets.

There is no limit to how big a transaction can be in terms of bytes, other than the fact that it needs to be able to fit inside a [block](https://learnmeabitcoin.com/technical/block/).

## 2. Weight Units (wu)

{{% image "/img/txsize/03.png" /%}}

Every transaction has a _weight_ measurement. This measurement was introduced in the [segregated witness](/en/segwit) upgrade. A transaction's weight is calculated by multiplying the size (in bytes) of different parts of the [transaction](https://learnmeabitcoin.com/technical/transaction/) by either 4 or 1:

|Field|Multiplier|
|---|---|
|version|x4|
|marker|x1|
|flag|x1|
|input|x4|
|output|x4|
|witness|x1|
|locktime|x4|

This therefore gives a _discount_ to the [witness](https://learnmeabitcoin.com/technical/transaction/witness/) data.

### Example

Transaction: [30dcd74b7fd8a585db3b2beddd4a7fc0edcfe9b8a1bac9abee695648659f8a6a](https://learnmeabitcoin.com/explorer/tx/30dcd74b7fd8a585db3b2beddd4a7fc0edcfe9b8a1bac9abee695648659f8a6a)

01000000<mark>0001</mark>01dd40a8d7f105055e781afa632207f5d3c4b4f4cad9f0fb320d0f0aa8e1ba904b0000000000ffffffff021027000000000000160014858e1f88ff6f383f45a75088e15a095f20fc663f841c0000000000001976a9142241a6c3d4cc3367efaa88b58d24748caef79a7288ac<mark>02483045022100d66341c3e6ce846b92bedcf9bc673ab8e47b770c616618eb91009e44816f4c2f0220622b5ebf6afabee3f4255bbcb84609e1185d4b6b1055602f5eed2541e26324620121022ed6c7d33a59cc16d37ad9ba54230696bd5424b8931c2a68ce76b0dbbc222f65</mark>00000000

Size: 226 bytes

Weight: 574 weight units (116 x 4 + <mark>110 x 1</mark>)

There are 226 bytes in this transaction. Out of those, 116 bytes are non-witness data so they get multiplied by 4, and 110 bytes are <mark>witness</mark> data so they get multiplied by 1. Add those together and you get 574 weight units.

### Block Limit (4,000,000 weight units)

The weight measurement is important because **[blocks](https://learnmeabitcoin.com/technical/block/) can hold up to 4,000,000 weight units** of transaction data.

So when [miners](https://learnmeabitcoin.com/technical/mining/) fill up their [candidate blocks](https://learnmeabitcoin.com/technical/mining/candidate-block/) with transactions, they use transaction weight to determine how many transactions they can fit in their block.

{{% image "/img/txsize/04.png" /%}}

{{% hint info %}}
Using bytes for transaction sizes and the block limit was more straightforward. But this new weight measurement introduces _fairness_ to the cost of spending outputs.
{{% /hint %}}

### Why does witness data weigh less?

Because it helps to bring more of a balance between the cost of creating an output and the cost of spending an output (in terms of [transaction fees](https://learnmeabitcoin.com/technical/transaction/fee/)).

The amount of data required to unlock an output (i.e. [signature](https://learnmeabitcoin.com/technical/keys/signature/) data) is unfairly larger than the amount of data required to put a [lock](https://learnmeabitcoin.com/technical/transaction/output/scriptpubkey/) on an output in the first place. So the new weight measurement brings the "size" of outputs and inputs in a transaction more in line with each other.

{{% image "/img/txsize/05.png" /%}}

## 3. Virtual Bytes (vBytes, vB)

{{% image "/img/txsize/06.png" /%}}

The _virtual size_ of a transaction is the same as its _weight_ divided by 4.

Or to put it another way, instead of multiplying some parts of a transaction by 4 to create a discount for the witness data, you discount the witness data directly by multiplying it by 0.25 instead:

|Field|Multiplier|
|---|---|
|version|x1|
|marker|x0.25|
|flag|x0.25|
|input|x1|
|output|x1|
|witness|x0.25|
|locktime|x1|

So "weight" and "virtual size" provide the same measurement, just with different units. But using virtual bytes makes it easier to compare the fee rate of new segwit transactions with the fee rate of legacy transactions (which had previously used _sats-per-byte_).

{{% hint info %}}
A legacy transaction will be the same size in _bytes_ as it is in _vbytes_.
{{% /hint %}}

{{% hint info %}}
A block can hold 1,000,000 virtual bytes.
{{% /hint %}}

### Example

Transaction: [30dcd74b7fd8a585db3b2beddd4a7fc0edcfe9b8a1bac9abee695648659f8a6a](https://learnmeabitcoin.com/explorer/tx/30dcd74b7fd8a585db3b2beddd4a7fc0edcfe9b8a1bac9abee695648659f8a6a)

01000000<mark>0001</mark>01dd40a8d7f105055e781afa632207f5d3c4b4f4cad9f0fb320d0f0aa8e1ba904b0000000000ffffffff021027000000000000160014858e1f88ff6f383f45a75088e15a095f20fc663f841c0000000000001976a9142241a6c3d4cc3367efaa88b58d24748caef79a7288ac<mark>02483045022100d66341c3e6ce846b92bedcf9bc673ab8e47b770c616618eb91009e44816f4c2f0220622b5ebf6afabee3f4255bbcb84609e1185d4b6b1055602f5eed2541e26324620121022ed6c7d33a59cc16d37ad9ba54230696bd5424b8931c2a68ce76b0dbbc222f65</mark>00000000

Size: 226 bytes

vSize: 143.50 virtual bytes (116 x 1 + <mark>110 x 0.25</mark>)

There are 226 bytes in this transaction. Out of those, 116 bytes are non-witness data so they get multiplied by 1, and 110 bytes are <mark>witness</mark> data so they get multiplied by 0.25. Add those together and you get 143.50 virtual bytes.

As you can see, the weight and vsize calculations work in the same way.

### Why do we use vbytes?

So why have both weight and vbytes? Why not calculate the weight of a transaction by multiplying some parts by 0.25 and just use that instead?

In other words, why have two measurements that do the same thing?

> Because virtual size is fractional when computed accurately. Weight is an integer. We only use integers in consensus code.
> 
> – *Pieter Wuille, [bitcoin.stackexchange.com](https://bitcoin.stackexchange.com/questions/53623/why-does-bip141-define-both-virtual-transaction-size-and-weight)*

You see, working with fractional numbers on computers can often lead to [rounding errors](https://floating-point-gui.de/errors/rounding/), which is why in Bitcoin we prefer to work with _whole numbers_ when performing critically important calculations. **Integer arithmetic always returns consistent and reliable results, whereas floating point arithmetic does not.**

So in summary:

- **Weight Units** — Used _internally_ when working out how many transactions can fit in to a block.
- **Virtual Bytes** — Used by _humans_ when comparing the different fee rates on transactions.

## Resources

- [BIP 141 (Transaction size calculations)](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki#transaction-size-calculations)
- [Is there a difference between bytes and virtual bytes (vbytes)?](https://bitcoin.stackexchange.com/questions/89385/is-there-a-difference-between-bytes-and-virtual-bytes-vbytes)
- Thanks to [luke-jr](https://github.com/luke-jr) for explaining to me on IRC how multiplying non-witness data by 4 helps to create a balance between the costs of creating and spending [UTXOs](https://learnmeabitcoin.com/technical/transaction/utxo/).