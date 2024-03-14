---

title: "The best Bitcoin hardware wallets"
h1: "The best Bitcoin hardware wallets"
cover: /img/hwws/hwws.png
description: "An overview of the most popular devices, including Trezor, Ledger, Coldcard, and more."
url: hwws
date: 2023-03-01
bookHidden: false
bookToc: true
bookFlatSection: false
weight: 6
---

An overview of the most popular devices, including Trezor, Ledger, Coldcard, and more.

{{< hint btc >}}
This article by Anil was published in [Unchained blog](https://unchained.com/blog/best-bitcoin-hardware-wallets).

[Contribute](/contribute/).
{{< /hint >}}

As the events of 2022 have illustrated, nothing is more important than taking self-custody of your bitcoin and removing counterparty risk.

> *“Your keys, your bitcoin. Not your keys, not your bitcoin.”*
>
> — Andreas Antonopoulos

When you entrust your bitcoin to a third party (e.g., an exchange), you are at their mercy when it comes to accessing your wealth. This can entail many risks and inconveniences, from unplanned outages and scheduled maintenance to account closures. The most painful possible outcome by far is a complete loss of your bitcoin in the event of a bankruptcy or hack.

Fortunately, such an outcome can be avoided for less than $100 and with a few simple steps. This high-level overview will equip you with the information needed to pick the best hardware wallet (or wallets) for you.

{{< hint info >}}
**Note:** The wallets in this list are all compatible with many third-party wallet software tools. These applications have widely varying feature sets, such as support for connecting to your own node, coin control, replace-by-fee (RBF), or Tor. This article focuses on the specific features of the devices themselves.
{{< /hint >}}

## Trezor Model One

{{% image "/img/hwws/trezor-one.png" /%}}

| **Manufacturer** | **Released** | **MSRP** | **Suitable for** | **Native app** |
|---------------|-------------|------|--------------|---------------------|
| SatoshiLabs | 2014 | U.S. $69 | Beginners | [Trezor Suite](https://trezor.io/trezor-suite) |

---

| **Connector** | **microSD** | **Camera** | **Secure element** |
|--------|---------|--------|----|
| microUSB | - | - | - |
| **Battery** | **Bluetooth** | **NFC** | **Open source** |
| - | - | - | ✅* |

The Trezor _Model One_ was the first consumer hardware wallet designed for the masses. Approaching nine years of production, the device has stood the test of time and earned its place among bitcoiners.

Overall, it’s lightweight, low-cost, and compatible with a wide range of wallet software interfaces. It’s a simple and straightforward entry point for beginners who may not yet be comfortable with more advanced features such as air-gapped signing.

### Small and inconspicuous

Comparable to the size of a standard USB stick, the _Model One_ easily fits in the palm of your hand. At just 12 grams, you’ll be hard-pressed to find a lighter option. Although [traveling with a hardware wallet](https://unchained.com/blog/7-tips-traveling-bitcoin/) on your person comes with risks, if you absolutely must, this may be a more portable and inconspicuous choice.

### Budget-friendly

If you do not require every advanced feature and can manage without certain design comforts (i.e., a touch screen), this device fits the bill. As one of the lowest-cost devices on the market, it’s ideal for the casual user with basic needs.

### Bitcoin-only firmware available

While _Model One_ supports multiple tokens (and _Model T_ supports even more), SatoshiLabs offers [bitcoin-only firmware](https://trezor.io/learn/a/bitcoin-only-firmware-on-trezor), which strips out all non-essential applications, including altcoin support, U2F, and Trezor Password Manager.

### Software features overview

| **BTC-only** | **PIN** | **Decoy PIN** | **Wipe PIN** |
|--------------------|---------|-----------------|---------------------|
| ✅† | ✅ | - | ✅ |
| **U2F** | **Air-gap** | **DIY entropy** | **Third-party wallets** |
| ✅ | - | - | - | ✅ |

{{< hint info >}}
\* The [hardware](https://github.com/trezor/trezor-hardware) and [firmware](https://github.com/trezor/trezor-firmware) for Trezor devices are open source.

† Bitcoin-only firmware not installed by default.
{{< /hint >}}

## Trezor Model T

{{% image "/img/hwws/trezor-t.png" /%}}

| **Manufacturer** | **Released** | **MSRP** | **Suitable for** | **Native app** |
|---------------|-------------|------|--------------|---------------------|
| SatoshiLabs | 2018 | U.S. $219 | Beginners | [Trezor Suite](https://trezor.io/trezor-suite) |

---  

| **Connector** | **microSD** | **Camera** | **Secure element** |
|------------|-------------|------------|------|
| USB-C | ✅ | - | - |
| **Battery** | **Bluetooth** | **NFC** | **Open source** |
| - | - | - | ✅* |

Boasting several quality-of-life improvements over the Model One, the Model T replaces clickable buttons with a touch screen and ditches the microUSB port in favor of the now more widely-used USB-C. The Trezor Model T also adds a microSD slot, but it cannot be used for air-gapped signing via PSBTs.

### Easy navigation that complements security

You’ll interact with the Model T via its 1.54” LCD touchscreen. The benefit is that, when restoring or accessing a wallet, all sensitive data can be entered directly on the device: PIN, passphrase, and recovery seed. And entering that sensitive data is noticeably easier.

### Seed recovery options

As one of the few devices on the market that currently supports [Shamir backups](https://trezor.io/learn/a/what-is-shamir-backup), the _Model T_ enables users to generate a seed phrase which can then be split into several unique pieces (called “shares”), with the user specifying how many are required to recover the wallet.

### microSD PIN encryption

While the microSD card slot on the Model T can’t be used for signing PSBTs, it _can_ be used to enhance your security. This feature allows you to [encrypt your device PIN](https://trezor.io/learn/a/encrypt-pin-with-microsd-card), requiring the microSD card to be inserted to decrypt your data and use the device.

### Software features overview

| **BTC-only** | **PIN** | **Decoy PIN** | **Wipe PIN** |
|--------------|-------|----------------|--------------|
| ✅† | ✅ | - | ✅ |
| **U2F** | **Air-gap** | **DIY entropy** | **Third-party wallets** |
| ✅ ‡ | - | - | - | ✅ |

{{< hint info >}}
\* The [hardware](https://github.com/trezor/trezor-hardware) and [firmware](https://github.com/trezor/trezor-firmware) for Trezor devices are open source.

† Bitcoin-only firmware not installed by default.

‡ Unlike Model One, Model T [supports FIDO2 for passwordless authentication](https://trezor.io/learn/a/what-is-fido2).
{{< /hint >}}

## Ledger Nano S Plus

{{% image "/img/hwws/nano-s-plus.png" /%}}

| **Manufacturer** | **Released** | **MSRP** | **Suitable for** | **Native app** |
|---------------|-------------|------|--------------|---------------------|
| Ledger | 2022 | U.S. $79 | Beginners | [Ledger Live](https://www.ledger.com/ledger-live) |

---

| **Connector** | **microSD** | **Camera** | **Secure element** |
|------------|-------------|------------|------|
| USB-C | - | - | ✅ | 
| **Battery** | **Bluetooth** | **NFC** | **Open source** |
| - | - | - | - |

The _Nano S Plus_ is Ledger’s entry model comparable to Trezor’s _Model One_. It’s a revamp of the original _Nano S_ (released in 2016, since discontinued), boasting a larger screen, increased internal storage (1.5MB vs. 320KB), and USB-C in place of microUSB.

### Compartmentalized OS

Most hardware wallets operate using a single firmware application. Ledger takes a different approach, opting for a custom operating system called [_BOLOS_](https://www.ledger.com/academy/security/our-custom-operating-system-bolos). The rationale is that a multi-token wallet must compartmentalize risk by allowing users to install isolated apps that cannot interact with one another. 

This is an important consideration for bitcoiners who may not accept the attack surface created by offering thousands of tokens without the option to disable such functionality.

### Secure element on board

One of the critical distinctions between Trezor and Ledger is the trade-off around secure elements and the closed-source nature of the one used in Ledger’s devices. A device with a secure element requires slightly more trust, but secure elements offer protection against fault attacks, side-channel attacks, and other less common attacks.

### Low threshold for brute force

Most hardware wallets will automatically trigger some form of security procedure (reset or self-destruct) after several sequential incorrect PIN attempts. Ledger devices will return to a factory reset state after just three failed PIN entries (compared to 16 for Trezor devices). On the one hand, you must be careful not to carelessly make attempts if you forget your PIN. Conversely, an attacker would have a wiped device on their hands in short order.

### Software features overview

| **BTC-only** | **PIN** | **Decoy PIN** | **Wipe PIN** |
| ------------------ | ------- | --------------- | ------------------- |
|   -                |  ✅     |      ✅*         |     ✅†             |
| **U2F** | **Air-gap** | **DIY entropy** | **Third-party wallets** |
| ✅ | - | - | ✅ |

{{< hint info >}}
\* Ledger lets you can attach a PIN code to a passphrase-protected wallet.

† You can enter an incorrect PIN three times to wipe the device.
{{< /hint >}}

## Ledger Nano X

{{% image "/img/hwws/nano-x.png" /%}}

| **Manufacturer** | **Released** | **MSRP** | **Suitable for** | **Native app** |
|---------------|-------------|------|--------------|---------------------|
| Ledger | 2019 | U.S. $149 | Beginners | [Ledger Live](https://www.ledger.com/ledger-live) |

---

| **Connector** | **microSD** | **Camera** | **Secure element** |
|------------|-------------|------------|------|
| USB-C | - | - | ✅ |
| **Battery** | **Bluetooth** | **NFC** | **Open source** |
| ✅ | ✅ | - | - |

There isn’t a vast difference between the Nano X and the more affordable Nano S Plus. While it comes with an internal battery, air-gapped usage is not possible. The other differing traits include Bluetooth for signing transactions using a mobile phone app and slightly more storage (2MB vs. 1.5MB).

### Internal battery

With a battery life of 3-4 hours per charge, the _Nano X_ offers the option of Bluetooth signing. One downside of this feature is that the battery cannot be replaced (due to the device’s design) and has an expected life of 5 years.

### Bluetooth pairing

Pairing this device with Ledger’s native app (Ledger Live) on your smartphone eliminates the need for a cable. Bluetooth connectivity may understandably make some bitcoiners nervous due to the potential for leaking sensitive information. However, Ledger does [acknowledge such concerns](https://www.ledger.com/ledger-nano-x-bluetooth-security-model-of-a-wireless-hardware-wallet).

This feature can also be disabled entirely via the device’s settings, and a traditional USB-C connection can be used in its place.

### Software features overview

| **BTC-only** | **PIN** | **Decoy PIN** | **Wipe PIN** |
|--------------|-------|----------------|--------------|
| - | ✅ | ✅* | ✅† |
| **U2F** | **Air-gap** | **DIY entropy** | **Third-party wallets** |
| ✅ | - | - | ✅ |

{{< hint info >}}
\* Ledger lets you can attach a PIN code to a passphrase-protected wallet.

† You can enter an incorrect PIN three times to wipe the device.
{{< /hint >}}

## Coldcard Mk4

{{% image "/img/hwws/mk4.png" /%}}

| **Manufacturer** | **Released** | **MSRP** | **Suitable for** | **Native app** |
|---------------|-------------|------|--------------|---------------------|
| Coinkite | 2022 | U.S. $149 | Intermediate | N/A |

---

| **Connector** | **microSD** | **Camera** | **Secure element** |
|------------|-------------|------------|------|
| USB-C | ✅ | - | ✅ |
| **Battery** | **Bluetooth** | **NFC** | **Open source** |
| - | - | ✅ | ✅* |

The fourth version of the _Coldcard_ comes with a handful of new features and changes to the now-discontinued _Mk3_. With its numeric keypad and plain design, the device appears to the average person to be nothing more than an old-school pocket calculator.

The addition of a [second secure element](https://blog.coinkite.com/understanding-mk4-security-model/) (from a different manufacturer) offers an alternative approach to private key storage. One of the secure elements stores an encrypted version of your private key but requires both the second secure element and microcontroller unit (MCU) for decryption.

### NFC-V (near-field communication) capabilities

The _Coldcard_ _Mk4_ has an embedded NFC chip for PSBTs, address sharing, and actions like “tap-to-sign” when used with a compatible NFC reader (i.e., smartphone). This functionality is disabled by default and can be made permanently non-functional by damaging the device’s board.

### Hardened security for the hardened bitcoiner

The higher “security” is on your list of requirements, the higher up the _Coldcard Mk4_ is likely to be. Several unique features and design elements contribute to the device’s standing among seasoned bitcoiners:

- **Anti-phishing words:** Your PIN is split into two parts. After entering the first half of the PIN, two words unique to the device are displayed. This signals that an attacker has not swapped out the device, and that it is safe to enter the rest of the PIN.

- **LED security lights:** Two LEDs are located next to the device’s display. These will confirm (green) or alert (red) you that 1) the contents of the secure element haven’t changed since the device’s last use, 2) the firmware is authentic, or 3) the device’s circuitry has not been tampered with since leaving the manufacturer.

- **Tamper-evident bag:** The _Coldcard Mk4_, arrives in a clear sealed plastic bag. Once unsealed, the bag will permanently show the word ‘void’ to indicate that the bag has been opened. This is in addition to a unique number, printed on the bag itself, that will match the number displayed on screen when the device is powered up for the first time.

- **Self-destruct PIN:** You have the option of creating a self-destruct (“brick me”) PIN that, when entered, will automatically “destroy the dual secure element and render your Coldcard worthless.” It should be noted that one should not attempt to test this feature. If you want to further ensure that the contents of the device have been destroyed, you can drill into the secure elements by following the inscription showing their location.

{{% image "/img/hwws/mk4-destroy.png" /%}}

### Air-gapped coldpower

The _Coldcard Mk4_ has a variety of options when it comes to supplying power to the device in an air-gapped manner. You can opt for a standard 9V battery + USB adapter, a power bank, or an AC adapter plugged directly into a power outlet.

### Software features overview

| **BTC-only** | **PIN** | **Decoy PIN** | **Wipe PIN** |
|--------------|-------|----------------|--------------|
| ✅ | ✅ | ✅† | ✅‡ |
| **U2F** | **Air-gap** | **DIY entropy** | **Third-party wallets** |
| - | ✅ | ✅ | ✅ |

{{< hint info >}}
\* Both the [hardware](https://github.com/Coldcard/firmware/tree/master/hardware) and [firmware](https://github.com/coldcard/firmware) for Coldcard is fully source-viewable, and its architecture [allows the secure element not to be trusted](https://coldcard.com/docs/faq).

† The Coldcard’s duress wallet is controlled by the same keys as your main wallet.

‡ The Coldcard’s “brick-me” PIN does not reset the device—it destroys it.
{{< /hint >}}

## Jade

{{% image "/img/hwws/jade.png" /%}}

| **Manufacturer** | **Released** | **MSRP** | **Suitable for** | **Native app** |
|---------------|-------------|------|--------------|---------------------|
| Blockstream | 2021 | US $65 | Beginners | [Blockstream Green](https://blockstream.com/green/) |

---

| **Connector** | **microSD** | **Camera** | **Secure element** |
|------------|-------------|------------|------|
| USB-C | - | ✅ | - |
| **Battery** | **Bluetooth** | **NFC** | **Open source** |
| ✅ | ✅ | - | ✅ |

The long-awaited hardware wallet from Blockstream arrived in 2021 and packs a punch for its price point. While it lacks a microSD card slot, PSBTs can still be executed using the camera. Taken in conjunction with its built-in 240 mAh battery, true air-gapped usage is possible.

A noticeable missing component from this device is a secure element (an intentional design and security consideration). Instead, an [alternative security model](https://help.blockstream.com/hc/en-us/articles/13745404122265-Does-Blockstream-Jade-have-a-secure-element-) is used, allowing all hardware and firmware components to be [fully open-source](https://github.com/Blockstream/Jade).

### Bluetooth connectivity

The inclusion of an internal battery and Bluetooth enables wireless use with compatible wallet software, for example the [Blockstream Green app for iOS](https://apps.apple.com/us/app/green-bitcoin-wallet/id1402243590). This feature is disabled by default and must be activated via the device’s settings.

### Camera for air-gapped use

If you don’t wish to plug the _Jade_ directly into a computer to execute actions or use Bluetooth, you can simply make use of the device’s camera to scan addresses via QR code, and present signed transaction data as a QR code on the device’s screen.

### Wallet-erase PIN

While many hardware wallets come with a factory reset, decoy wallet, or self-destruct PIN, the _Jade_ has an even more innocuous option—erasing the stored wallet (recovery phrase) and displaying an ‘Internal Error’ message.

### Liquid Network support

The _Jade_ can be used to send and receive assets issued on the [Liquid Network](https://blockstream.com/liquid/) when used with the Blockstream _Green_ wallet. Previously, the _Ledger Nano S_ also supported some Liquid Network assets, but this model has since been retired, making the _Jade_ the only commercially-available option.

### Software features overview

| **BTC-only** | **PIN** | **Decoy PIN** | **Wipe PIN** |
|--------------|-------|----------------|--------------|
| ✅ | ✅ | - | ✅ |
| **U2F** | **Air-gap** | **DIY entropy** | **Third-party wallets** |
| ✅ | ✅ | ✅ | ✅ |

## BitBox 02

{{% image "/img/hwws/bitbox.png" /%}}

| **Manufacturer** | **Released** | **MSRP** | **Suitable for** | **Native app** |
|---------------|-------------|------|--------------|---------------------|
| Shift Crypto | 2019 | US $149 | Beginners | [BitBoxApp](https://shiftcrypto.ch/download/) |

---

| **Connector** | **microSD** | **Camera** | **Secure element** |
|------------|-------------|------------|------|
| USB-C | ✅ | - | ✅ |
| **Battery** | **Bluetooth** | **NFC** | **Open source** |
| - | - | - | ✅* |

Manufactured in Switzerland, the BitBox 02 is a compact and discreet choice for cold storage. The design is based on the original BitBox 01, which was discontinued in November 2019. However, this time Shift Crypto released a bitcoin-only edition which can only support bitcoin firmware in an effort to reduce attack vectors compared to a multi-token compatible device.

> *“The BitBox02 Bitcoin-only will only ever have Bitcoin firmware. Nothing else. Unlike other hardware wallets, the Bitcoin-only edition cannot be reset to support other coins. The Bitcoin-only firmware is locked down at factory setup.”*
> 
> — Shift Crypto

Actions are confirmed or rejected on the device by touching sensors located along its sides. The built-in screen also allows for on-device PIN entry. The main trade-off of the BitBox is that it is not possible to use the device in an air-gapped manner.

### Low-key for improved opsec

With no obvious markings (other than a small Shift Crypto logo), the _BitBox02_ appears to be a generic black USB stick to the untrained eye. This makes it an ideal option for those needing to use a hardware wallet in public settings.

### No cables required

The device plugs directly into a computer or smartphone via its USB-C port (or USB port with included adapter) rendering cables unnecessary. This option will be particularly attractive to users who may require a device for a high volume of low value transactions, prioritizing convenience over privacy.

### Software features overview

| **BTC-only** | **PIN** | **Decoy PIN** | **Wipe PIN** |
|--------------|-------|----------------|--------------|
| - | ✅ | - | - |
| **U2F** | **Air-gap** | **DIY entropy** | **Third-party wallets** |
| ✅ | - | - | ✅ |

{{< hint info>}}
\* The BitBox 02 [firmware is open source](https://github.com/digitalbitbox/bitbox02-firmware/blob/master/BUILD.md), and its architecture [allows the secure element not to be trusted](https://shiftcrypto.ch/blog/best-of-both-worlds-using-a-secure-chip-with-open-source-firmware/).
{{< /hint >}}

## Keystone Pro

{{% image "/img/hwws/keystone.png" /%}}

| **Manufacturer** | **Released** | **MSRP** | **Suitable for** | **Native app** |
|---------------|-------------|------|--------------|---------------------|
| Yanssie HK | 2021 | US $169 |  Beginners | [Keystone](https://keyst.one/companion-app) |

---

| **Connector** | **microSD** | **Camera** | **Secure element** |
|------------|-------------|------------|------|
| microUSB | ✅ | ✅ | ✅ |
| **Battery** | **Bluetooth** | **NFC** | **Open source** |
| ✅ | - | - | -* |

Fomerly known as the Cobo Vault, this device has a large touchscreen making it feel similar to navigating a smartphone. While it has support for a long list of tokens, bitcoin-only firmware is available (this becomes irreversible once installed).

The _Keystone Pro_’s hardware design is open source, as is the secure element’s firmware. However, the device’s firmware is not considered to be open source (though independent code audits are offered).

### Fingerprint sensor

Located on the back of the device, this feature can be enabled to unlock and signing transactions. However, the inclusion of a fingerprint sensor may also introduce risks associated with [$5 wrench attacks](https://unchained.com/blog/21-ways-lose-bitcoin/#wrench) and plausible deniability.

{{% image "/img/hwws/wrench-en.png" /%}}

### Removable battery packs

The _Keystone Pro_ gives the option of using a AAA-powered battery pack or a rechargeable lithium-ion battery pack (both of which are inbcluded included) for air-gapped usage. Similar to the _Coldcard Mk4_, the use of external battery sources eliminates the threat of compromised charging cables unsuspectingly transmitting data.

### Self-destruct on intrusion

If access to the circuit board is attempted by removing the screen, the device will initiate a self-destruct process: wiping sensitive data and bricking itself. It should be noted that this action is triggered by a button battery with a 2-year lifespan, meaning the device must be replaced after 2 years if you wish to preserve this feature

### Software features overview

| **BTC-only** | **PIN** | **Decoy PIN** | **Wipe PIN** |
|--------------|-------|----------------|--------------|
| ✅† | ✅ | - | -‡ |
| **U2F** | **Air-gap** | **DIY entropy** | **Third-party wallets** |
| - | ✅ | - | ✅ |

{{< hint info >}}
\* Some [but not all](https://blog.keyst.one/on-open-source-and-transparency-ba37fa1c1e8c) components of the device are open-source.

† Bitcoin-only firmware [is not installed by default](https://blog.keyst.one/the-relevance-benefits-of-keystones-btc-only-firmware-8965ebb42e48).

‡ The device has no wipe PIN, but it does [have a self-destruct mechanism](https://blog.keyst.one/self-destruct-mechanisms-unique-defense-against-side-channel-attacks-4cfea3d4eff1), and the device is wiped [after 5 incorrect password attempts](https://support.keyst.one/basic-features/password/forgot-or-reset-a-pin-or-password).
{{< /hint >}}

## Passport (Batch 2)

{{% image "/img/hwws/passport.png" /%}}

| **Manufacturer** | **Released** | **MSRP** | **Suitable for** | **Native app** |
|--------------------|-------------|------|--------------|---------------------|
| Foundation Devices | 2022 | US $259 | Beginners | [Envoy](https://foundationdevices.com/envoy/) |

---

| **Connector** | **microSD** | **Camera** | **Secure element** |
|------------|-------------|------------|------|
| USB-C | ✅ | ✅ | ✅ |
| **Battery** | **Bluetooth** | **NFC** | **Open source** |
| ✅ | - | - | ✅* |

The second iteration from Foundation, _Passport_ is priced at the higher end of the spectrum when compared to other air-gapped options. Built without wireless communication capabilities of any kind, the device ingests data via microSD card and camera. While it does have USB-C port, the device has been configured (pins removed) to transmit power only and prevent any data from being transmitted.

### Standard OEM battery pack

Unlike the first version of _Passport_, this device replaces the AA-battery pack with a standard rechargeable lithium-ion battery. The rationale was to offer greater battery life and more accurate power level indicator. However, this design choice does not introduce any additional dependency on Foundation Devices for parts, as the chosen battery can be sourced from a variety of vendors.

### Security LEDs for firmware validation

A similar feature to the _Coldcard Mk4_, _Passport_ will display a blue LED to confirm that the secure element has not been tampered with since its last use, and to confirm that any firmware updates are genuine. If tampering or inauthentic firmware is detected, a red LED will turn on.

### Software features overview

| **BTC-only** | **PIN** | **Decoy PIN** | **Wipe PIN** |
|--------------|-------|----------------|--------------|
| ✅ | ✅ | - | - |
| **U2F** | **Air-gap** | **DIY entropy** | **Third-party wallets** |
| - | ✅ | - | ✅ |

{{< hint info >}}
\* Passport’s [firmware and hardware is open source](https://github.com/Foundation-Devices), but the device uses a secure element chip that is not.
{{< /hint >}}

## SeedSigner

{{% image "/img/hwws/seedsigner.png" /%}}

| **Manufacturer** | **Released** | **MSRP** | **Suitable for** | **Native app** |
|---------------|-------------|------|--------------|---------------------|
| N/A | 2020 | Varies | Advanced | N/A |

---

| **Connector** | **microSD** | **Camera** | **Secure element** |
|------------|-------------|------------|------|
| microUSB | ✅ | ✅ | - |
| **Battery** | **Bluetooth** | **NFC** | **Open source** |
| - | - | - | ✅ |

SeedSigner is a do-it-yourself template for a no frills, air-gapped hardware wallet that can perform a number of limited, but critical, operations. The key design considerations of this device were to create a stateless, low-cost option using general-purpose hardware aimed at long-term holders and multisignature custody schemes. One trade-offs to be aware of is power-up speed (up to 1 minute).

Three basic components make up the device:

- Raspberry Pi Zero (v1.3 recommended)
- Waveshare 1.3 LCD Hat (240 x 240 pixels)
- Aokin / AuviPal/ (other) RPI Camera

These parts can be sourced from a variety of vendors. You’ll also need an enclosure to protect the parts and a MicroSD card for importing and exporting data. If you prefer a more convenient option, the SeedSigner can be purchased as a [pre-assembled kit](https://btc-hardware-solutions.square.site/product/orange_pill_kit/6?cp=true&sa=true&sbp=false&q=false). Air-gapped operations are achieved through use of the _power only_ MicroUSB port on the Rasp Pi Zero, the MicroSD card for exporting PSBTs and the camera for scanning QR codes. 

Unlike other hardware wallet options, the SeedSginer does not generate your private key for you on the device. Instead, you must provide the entropy (either through dice rolls, coin flips, or taking a photo with the camera), input this data, and the device will calculate the final seed word (checksum).

### Low-cost, widely-available parts

While users can opt for custom cases and more expensive parts, the basic hardware requirements place it as the most affordable option against its pre-assembled peers. At present, it’s possible to acquire the essentials for just under $50.

### A resilient community of builders

A device built with off-the-shelf parts eliminates any single company as a single point of failure. Everything about the device is open source and trust-minimzed. For these reasons among others, the device has attracted a growing crew of developers, designers, and tinkerers building all kinds of solutions and additional functionality.

### Customizability

For those inclined to add some personality to their Seed Sginer, options are endless: 3D print your own enclosure, purchase custom buttons and joystick, use higher-grade components, etc.

### Software features overview

| **BTC-only** | **PIN** | **Decoy PIN** | **Wipe PIN** |
|--------------|-------|----------------|--------------|
| ✅ | - | - | - |
| **U2F** | **Air-gap** | **DIY entropy** | **Third-party wallets** |
| - | ✅ | ✅ | ✅ |

## The wallet that’s right for you

With so many choices now available on the market, it can be easy to get overwhelmed. However, like all matters relating to securing one’s wealth, the choice of hardware wallet requires a uniquely personal solution.

Considering several factors unique to you (e.g., the amount of wealth being secured, anticipated frequency of use, privacy preferences, etc.) can help narrow down the list. Another key question is whether the device will be used as a standalone wallet (singlesig) or part of a multisig custody scheme.

> *“As long as you’re controlling your own bitcoin and have those words written down, secured, you have the freedom to control your money.”*
> 
> — Marty Bent

Everyone will have different needs, technical abilities, and desired features. There will always be trade-offs. But, the most important foundational step is to take one: Learn about your self-custody options until you feel confident in securing your private keys and taking possession of your bitcoin. An affordable and reputable hardware wallet can make this process significantly easier.

