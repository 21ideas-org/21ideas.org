---
title: "SeedSigner: DIY Bitcoin Signing Device"
h1: "How To Set Up And Use The SeedSigner DIY Bitcoin Signing Device"
cover: /img/seedsigner/01.webp
tags: ["bitcoin", "hodl", "cold storage", "private keys", "security"]
description: "This comprehensive how-to guide walks you through unboxing, setting up and signing bitcoin transactions with the air-gapped SeedSigner device."
url: seedsigner
date: 2022-05-27
bookFlatSection: false
bookToc: true
weight: 3
---

This comprehensive how-to guide walks you through unboxing, setting up and signing bitcoin transactions with the air-gapped SeedSigner device.

{{< hint btc >}}
This guide by [@econoalchemist](https://twitter.com/econoalchemist) was published in [Bitcoin Magazine](https://bitcoinmagazine.com/guides/how-to-use-seedsigner-for-secure-bitcoin).

[Contribute](/contribute/).
{{< /hint >}}

This guide demonstrates how to self-custody bitcoin using the SeedSigner. SeedSigner is a project that brings together free and open-source code, inexpensive and general-purpose hardware, and a do-it-yourself (DIY) approach to taking personal responsibility of your bitcoin.

{{% image "/img/seedsigner/02.webp" %}}
[Source](https://seedsigner.com/)
{{% /image %}}

## Unboxing

This section demonstrates what is included in the full SeedSigner kit. The kit can be purchased from [BTC Hardware Solutions](https://btc-hardware-solutions.square.site/) with worldwide shipping available. Alternatively, EU/U.K. customers can purchase the kit from [GoBrrr](https://www.gobrrr.me/?v=7516fd43adaa) or [DIYNodes](https://diynodes.com/), and Philippines customers can use [TechHaven](https://www.lazada.com.ph/products/preassembled-seedsigner-in-open-pill-case-i2659439195-s12652647245.html?spm=a2o4l.seller.list.18.111a346bP5V0no&mp=1&freeshipping=1).

{{% image "/img/seedsigner/03.webp" /%}}

The SeedSigner kit includes the following components:

1. Raspberry Pi Zero
2. Raspberry Pi Camera
3. Ribbon cable for the camera
4. WaveShare LCD HAT
5. 3D-printed, open-face case
6. Seven blank QR code/mnemonic phrase cards
7. SeedSigner sticker
8. "Getting Started" instructions
9. "Thank You" card

The SeedSigner kit comes with most everything you will need to get started, the only pieces you will need to supply yourself are a MicroSD card of at least 4 GB capacity and a micro USB cable. Assembly required.

{{% image "/img/seedsigner/04.webp" /%}}

The included blank QR code/mnemonic phrase cards measure 64 millimeters (mm) by 89 mm. These cards feature 24 blank spaces for seed words on one side, along with a warning that reads: "Never enter seed words into a computer that connects to the internet." On the opposite side, there is a blank 29 by 29 QR code grid with room for the wallet fingerprint and some notes, along with a warning that reads: "Never scan seed QR into a computer that connects to the internet."

{{% image "/img/seedsigner/05.webp" /%}}

Alternatively, one can opt to use the stainless-steel version of the QR code backup. The stainless steel plates are made by [@SeedMint21](https://twitter.com/SeedMint21). All of its high-quality products are available at [https://vulcan21.com/](https://vulcan21.com/).

The SeedSigner stainless steel plate features a 3 mm by 66 mm by 91 mm plate that can withstand fire and flooding. This is a great alternative from paper because it can handle extreme environments. The plate featured in this guide has the SeedSigner logo on it, but future plates may not have this logo to help prevent revealing that this is a Bitcoin-related product. There is a 29 by 29 QR code grid on the plate and you can mark the indentations with a marker, check that it works and then stamp the marks with a punch to make them permanent.

{{% image "/img/seedsigner/06.jpg" /%}}

{{% image "/img/seedsigner/07.jpg" /%}}

You can set the SeedSigner kit aside for now while you prepare the software image on your microSD card in the next section.

## Software

This section demonstrates how to download the SeedSigner image and flash it to your microSD card. You will need to supply your own microSD card that has at least a 4 GB capacity. Best practice is to test your hardware with the software image to make sure everything works prior to attempting assembly with the 3D-printed enclosure.

### Step One: Download

Navigate to the [SeedSigner GitHub repo](https://github.com/SeedSigner/seedsigner/releases) and look for the latest release.

{{% image "/img/seedsigner/08.webp" /%}}

Scroll to the bottom of that release section and click on the link to download the .zip file. If you would like to verify your download, click on the links to download the “.sha256” file and “.sig” file as well. Save these files in the same folder location.

{{% image "/img/seedsigner/09.webp" /%}}

### Step Two, A: Verify — Windows

This step is optional but recommended. This will ensure that you have downloaded the file that the SeedSigner developers intended on you receiving. This step will demonstrate how to verify on a Windows platform. Skip to “Step Two, B” if you are using a Linux platform.

Or skip to “Step Three” if you do not wish to verify your software download that will be handling your Bitcoin private keys.

The following instructions make an assumption that you already use Kleopatra from the [gpg4win software bundle](https://www.gpg4win.org/features.html) and have your own PGP key setup.

- First you will need the SeedSigner public key, which you can find [here](https://github.com/SeedSigner/seedsigner/blob/main/seedsigner_pubkey.gpg)
- Copy the public key to your clipboard.
- Open Kleopatra, navigate to “Tools” then “Clipboard” then “Certificate Import”

{{% image "/img/seedsigner/10.webp" /%}}

- You should receive a dialog that informs you the certificate was imported successfully. Click on “OK.”
- Now you can compare the fingerprint in Kleopatra to a known publicly-displayed fingerprint such as [SeedSigner's Twitter profile](https://twitter.com/SeedSigner).

{{% image "/img/seedsigner/11.webp" /%}}

- Now you can right click on the SeedSigner certificate in Kleopatra and select “Certify.”
- You will be prompted to enter your password.

{{% image "/img/seedsigner/12.webp" /%}}

- Open the folder containing the .zip file, “.sha256” file and “.sig” file.
- Right click on the “.sig” file.
- Select “More GpgEX options” then “Verify.”

{{% image "/img/seedsigner/13.webp" /%}}

- Kleopatra will now use the signature file and the SeedSigner public key to verify the “.sha256” file.
- You should receive a dialog displaying the successful verification.

It is important to be able to distinguish between a valid and certified signature, a valid signature and an invalid signature. Because the SeedSigner public key was certified by comparing the resulting fingerprint to a known, publicly-displayed fingerprint, the Kleopatra software prints a valid and certified dialog in green.

{{% image "/img/seedsigner/14.webp" /%}}

If you did not take the extra step to certify the SeedSigner public key, then Kleopatra can still determine that the signature is valid, but not certified. Meaning that the public key and accompanying signature are valid but that they could be from some other entity impersonating the developer. These dialogs will be printed in white. This is still a valid matching signature, it's just that unless you take that extra step to certify the fingerprint of the public key, then do you really know it is a valid signature from SeedSigner and not an impersonator?

{{% image "/img/seedsigner/15.webp" /%}}

Or if there has been some manipulation in the file you downloaded and it is not authentically signed by the SeedSigner key, Kleopatra will print the dialog in red. This is an invalid signature and you should not proceed with decompressing the .zip file.

{{% image "/img/seedsigner/16.webp" /%}}

Now that you have verified the authenticity of the accompanying “.sha256” file, you can rest assured that the SHA-256 hash value contained within it is in fact the hash value that you should be able to independently generate on the accompanying .zip file. To generate hash values on files, you can use a convenient freeware hex editor tool called [HxD](https://mh-nexus.de/en/hxd/).

- In HxD, navigate to “File” then “Open” and select the SeedSigner .zip file
- Navigate to “Analysis” then “Checksums” then “SHA256”

{{% image "/img/seedsigner/17.webp" /%}}

- Now you can open the SeedSigner “.sha256” file with a text editor like Notepad.
- Compare the hash values between HxD and the SeedSigner file.

{{% image "/img/seedsigner/18.webp" /%}}

After verifying the hash value, you know that the .zip file is authentic. If the hash values do not match, then do not decompress the .zip file. It is a good idea to close the .zip file from HxD at this point. You can skip ahead to “Step Three” now.

### Step Two, B: Verify — Linux

Verifying signatures in Linux is a much more straightforward process. PGP tools come built in and can be executed from the command line terminal.

Before proceeding, ensure you have the .zip file, “.sha256” file and “.sig” file in your downloads directory.

- Open your terminal
- Import the SeedSigner public key to your key-chain with:

```bash
curl https://raw.githubusercontent.com/SeedSigner/seedsigner/main/seedsigner_pubkey.gpg | gpg --import
```

- You should see the terminal print “imported: 1”
- Then change your directory to your downloads folder with “cd Downloads”

{{% image "/img/seedsigner/19.webp" /%}}

- Now verify the signature with:

```bash
gpg --verify seedsigner_0_5_0.img.zip.sha256.sig
```

Be sure to use the version relative to the one you are verifying, this was version 0.5.0 and releases are made often, so always use the latest one from [SeedSigner’s releases page](https://github.com/SeedSigner/seedsigner/releases).

- The terminal should print “Good signature from ‘seedsigner \<btc.hardware.solutions@gmail.com\>’”
- You will see the warning about the key not being certified, see the example in “Step Two, A” for a detailed explanation. Long story short, this is fine.

{{% image "/img/seedsigner/20.webp" /%}}

- Now you can verify the hash value with:

```bash
shasum -a 256 -c seedsigner_0_5_0.img.zip.sha256
```

Again, making sure to use the version appropriate for you.

- The terminal should print “seedsigner_0_5_0.img.zip: OK”
- You can ignore the warning about improperly formatted lines if you get it.

{{% image "/img/seedsigner/21.webp" /%}}

That's it, you're done verifying the .zip file you downloaded. You can now move on to flashing the image to the microSD card in the next step.

### Step Three: Flash

Using a program like Balena Etcher makes flashing the SeedSigner image easy. Navigate to the [Balena Etcher website](https://www.balena.io/etcher/) where you can download the application appropriate for your operating system. Follow your system prompts to install. Make sure you have a microSD card at least 4 GB in size formatted and connected to your computer.

{{% image "/img/seedsigner/22.webp" /%}}

Once you have Balena Etcher installed and opened, select “Flash from file.”

{{% image "/img/seedsigner/23.webp" /%}}

Select the .zip file from the file explorer. The .zip file can remain in its compressed state, Balena Etcher will decompress it.

{{% image "/img/seedsigner/24.webp" /%}}

Select the target drive that you want to flash the image file to. You want to choose your microSD card here.

{{% image "/img/seedsigner/25.png" /%}}

{{% image "/img/seedsigner/26.png" /%}}

Click on the “Flash!” button and the flashing process should start automatically. The progress bar will move over to the left-hand side of the application and some promotional dialogs will be displayed on the right-hand side of the application. You do not need to interact with the promotional dialogs, just let the flashing process run.

There are three stages of the flashing process: decompression, flashing and validation. Just let the software run through all the steps and do not disconnect the microSD card during this process. If you get any operating system prompts saying the drive needs to be formatted, just ignore them.

{{% image "/img/seedsigner/27.png" /%}}

{{% image "/img/seedsigner/28.png" /%}}

{{% image "/img/seedsigner/29.png" /%}}

{{% image "/img/seedsigner/30.png" /%}}

Once finished, you should receive a message that lets you know the flash was completed successfully. If it was not completed successfully, try again and if the problem persists, then consider using a different microSD card.

{{% image "/img/seedsigner/31.webp" /%}}

You can close the Balena Etcher application. Safely eject the microSD card from your computer if your system has not done so already. Now you are ready to mock up your hardware and test it prior to final assembly.

## Hardware

This section demonstrates how to test and assemble the SeedSigner kit and also provides details on what each component is and alternative places to purchase these components in case you do not want to purchase the whole kit from one vendor. Best practice is to test that your components power on and the SeedSigner software works prior to assembly. The enclosure and or components can be damaged if you attempt disassembly.

### The Enclosure

The enclosure included in the kit is an open-faced design, alternative designs are available from vendors linked below. The enclosure is 3D printed, you can even [download the file](https://github.com/SeedSigner/seedsigner/tree/main/enclosures/open_pill) and print one yourself. Be sure to check out some [community designs](https://github.com/SeedSigner/seedsigner#community-designs) as well. The enclosure featured here is designed to be the most basic enclosure and the quickest to reproduce. Various enclosure design files can be downloaded from [here](https://github.com/SeedSigner/seedsigner/tree/main/enclosures), and there are a number of distributors that offer alternate designs [here](https://www.cryptocloaks.com/product/seed-signer-pill/), [here](https://btc-hardware-solutions.square.site/s/shop) and [here](https://robotechy.com/collections/frontpage).

The enclosure outer dimensions are 80 mm by 35 mm by 26 mm and there are a number of retention bumps, support ledges and journals to fit the components snugly inside.

{{% image "/img/seedsigner/32.webp" /%}}

The enclosure also features openings for the camera lens, micro USB ports, HDMI port and microSD card port.

{{% image "/img/seedsigner/33.webp" /%}}

If you do not want to get the complete kit, you can buy a standalone enclosure of various designs from the following vendors:

- Worldwide delivery available from [BTC Hardware Solutions](https://btc-hardware-solutions.square.site/product/orange_pill/5?cs=true&cst=custom)
- Worldwide delivery available from [Robotechy](https://robotechy.com/collections/frontpage/products/seedsigner-3d-printed-pill-case)
- EU/U.K. delivery available from [GoBrrr](https://www.gobrrr.me/product/seedsigner-lilpill-case/?v=7516fd43adaa), [DIYNodes](https://diynodes.com/product/seedsigner-3d-printed-orange-pill-case/) and [AnchorHodl](https://anchorhodl.com/product/retro-pill-case-for-seedsigner)

### The Camera And Cable

The camera is a 5MP OV5647 sensor, 30 frames per second (FPS), 2,592 pixel by 1,944 pixel resolution video camera module designed for a range of Raspberry Pis. The working voltage is 1.7 volts direct current (VDC) to 3 VDC. This module measures 25 mm by 24 mm by 9 mm. The camera ships with a protective film over the lens — be sure to remove this prior to assembly.

{{% image "/img/seedsigner/34.jpg" /%}}

{{% image "/img/seedsigner/35.jpg" /%}}

You want the “HBV-Raspberry-160FPC” golden ribbon cable for the Raspberry Pi Zero. This cable has a 16-flat-pin connector side measuring 16 mm, a 22-flat-pin connector side measuring 11 mm and the overall length is 160 mm.

{{% image "/img/seedsigner/36.webp" /%}}

If you do not want to get the complete kit, you can buy a standalone camera and cable from the following vendors:

- EU/U.K. delivery available from [GoBrrr](https://www.gobrrr.me/product/ov5647-pi-cam/?v=7516fd43adaa)
- North America delivery available from [Amazon](https://www.amazon.com/dp/B07RXKZ1KN?th=1)
- Philippines delivery available from [TechHaven](https://www.lazada.com.ph/products/raspberry-pi-camera-i2659578273-s12654014174.html?spm=a2o4l.seller.list.4.111a346bP5V0no&mp=1&freeshipping=1)

### The Raspberry Pi Zero v1.3

The Raspberry Pi Zero is the smallest single-board computer Raspberry Pi manufactures. The v1.3 computer features a 1 gigahertz (Ghz) single-core CPU, 512 MB of RAM, mini-HDMI port, one micro USB port for power only, one micro USB port for data transfer, a hardware-attached-on-top (HAT)-compatible 40-pin header, composite video and reset headers, a microSD card slot and a CSI camera connector. The full hardware specification can be found [here](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html).

{{% image "/img/seedsigner/37.webp" /%}}

 The Raspberry Pi Zero measures 66 mm by 31 mm by 11 mm.

{{% image "/img/seedsigner/38.webp" /%}}

If you do not want to get the complete kit, you can buy a standalone Raspberry Pi Zero from the following vendors:

- EU/U.K. delivery available from [GoBrrr](https://www.gobrrr.me/product/pizero-wh/?v=7516fd43adaa)
- EU delivery available from [BricoGeek](https://tienda.bricogeek.com/placas-raspberry-pi/1358-raspberry-pi-zero-v1-3.html) or [Reichelt](https://www.reichelt.com/ch/en/raspberry-pi-zero-v-1-3-1-ghz-512-mb-ram-rasp-pi-zero-p256439.html)
- North American delivery available from [Adafruit](https://www.adafruit.com/product/2885)
- Philippines delivery available from [TechHaven](https://www.lazada.com.ph/products/raspberry-pi-zero-version-13-i2659573158-s12653906040.html?spm=a2o4l.seller.list.1.111a346bP5V0no&mp=1&freeshipping=1)

If you are having a difficult time finding the Raspberry Pi Zero hardware, some alternative sources are [Rpilocator](https://rpilocator.com/) or possibly the [Raspi Zero W](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/) — make sure to do your homework on compatibility with this version prior to purchasing it. Alternatively, if you are only able to find the WiFi- and/or Bluetooth-enabled versions of the Raspberry Pi Zero, then [this](https://github.com/DesobedienteTecnologico/rpi_disable_wifi_and_bt_by_hardware) guide by [@DesobedienteTec](https://twitter.com/DesobedienteTec) will show you how to disable the communication radios.

### The Waveshare LCD HAT Display

The Waveshare LCD HAT is a 65 mm by 30 mm module that attaches to the 40-pin connector on the Raspberry Pi Zero. This module features a 240 pixel by 240 pixel resolution RGB display measuring 39 mm diagonally. The embedded controls use a joystick and three push buttons. The operating voltage is 3.3 vdc. More specifications can be found [here](https://www.waveshare.com/wiki/1.3inch_LCD_HAT).

{{% image "/img/seedsigner/39.jpg" /%}}

{{% image "/img/seedsigner/40.jpg" /%}}

If you do not want to get the complete kit, you can buy a standalone Waveshare LCD HAT display from the following vendors:

- EU/U.K. delivery available from [GoBrrr](https://www.gobrrr.me/product/waveshare-lcd-display/?v=7516fd43adaa)
- EU delivery available from [Welectron](https://www.welectron.com/Waveshare-14972-13inch-LCD-HAT_1)
- North America delivery available from [WaveShare](https://www.waveshare.com/1.3inch-lcd-hat.htm)
- Worldwide delivery available from [AliExpress](https://www.aliexpress.com/item/32952472064.html)
- Philippines delivery available from [TechHaven](https://www.lazada.com.ph/products/waveshare-14972-13inch-lcd-hat-i2659455966-s12653987690.html?spm=a2o4l.seller.list.7.111a346bP5V0no&mp=1&freeshipping=1)

## Testing And Assembly

### Testing

Testing the hardware with the SeedSigner software is a good idea. If you assemble everything and then find out that something doesn't work, you can damage the components and/or enclosure trying to disassemble it.

#### Step One: Release Camera Retainer

On the Raspberry Pi Zero board, gently pull the tabs out on the camera connection port. When these tabs are depressed, they will lock the ribbon cable in place.

{{% image "/img/seedsigner/41.webp" /%}}

#### Step Two: Connect Ribbon Cable

Make sure the ribbon cable is facing the correct direction, the gold connectors should be facing the bottom side of the Raspberry Pi Zero circuit board. Insert the ribbon cable until it stops, then press the tabs down to lock the ribbon cable in place.

{{% image "/img/seedsigner/42.png" /%}}

{{% image "/img/seedsigner/43.png" /%}}

#### Step Three: MicroSD Card

Insert the microSD card with the flashed SeedSigner image. Ensure the MicroSD card is facing the correct direction — again the gold contacts should be facing the bottom of the Raspberry Pi Zero circuit board.

{{% image "/img/seedsigner/44.png" /%}}

{{% image "/img/seedsigner/45.png" /%}}

#### Step Four: Display

Connect the LCD display, making sure that the pins on the Raspberry Pi Zero circuit board are all straight and that they won't get bent by being misaligned. This will just loosely attach to the Raspberry Pi Zero circuit board, it is not going to snap into place until you do the final assembly in the 3D-printed enclosure.

{{% image "/img/seedsigner/46.webp" /%}}

#### Step Five: Power On And Test

Connect your power cable and wait about 45 seconds for the SeedSigner to activate. Then test out the joystick and buttons on the LCD display and ensure that the camera works.

{{% image "/img/seedsigner/47.png" /%}}

{{% image "/img/seedsigner/48.png" /%}}

Now that you have checked that everything is working, you can power off the SeedSigner by selecting the power icon in the upper right-hand corner from the main menu. Then you can disassemble everything and re-assemble it in the 3D-printed enclosure.

### Assembly

Prior to attempting assembly, ensure that you have tested that everything works by connecting the camera and display to the RaspberryPi Zero, inserting the microSD card with the SeedSigner image loaded, and powering on the device by connecting a micro USB cable to the power input port.

#### Step One: Materials Check

Gather your tested components. You should have the 3D-printed enclosure, Raspberry Pi Zero, microSD card, LCD display, camera module and ribbon cable.

{{% image "/img/seedsigner/49.webp" /%}}

#### Step Two: Camera Module

Remove the protective layer of film from the camera lens. Then snap the camera module into place under the retainer clips. If the ports for the USB connections are facing away from you then the ribbon cable should be going to the right-hand side.

{{% image "/img/seedsigner/50.png" /%}}

{{% image "/img/seedsigner/51.png" /%}}

#### Step Three: Raspberry Pi Zero

Insert the Raspberry Pi Zero circuit board. Make sure you remove the microSD card first. The ribbon cable will fold over the camera module, with the slack tucking underneath the enclosure recess.

Align the USB connectors with the ports on the enclosure, the circuit board will be at a slight angle, then you can press down on the side with the pins until you hear it snap into place.

{{% image "/img/seedsigner/52.png" /%}}

{{% image "/img/seedsigner/53.png" /%}}

{{% image "/img/seedsigner/54.png" /%}}

{{% image "/img/seedsigner/55.png" /%}}

#### Step Four: MicroSD Card

Then you can insert the MicroSD card again. Then press the LCD display into place on the PINs of the Raspberry Pi Zero circuit board, taking care to ensure the pins are aligned. This should fit tightly and not be loose.

{{% image "/img/seedsigner/56.png" /%}}

{{% image "/img/seedsigner/57.png" /%}}

#### Step Five: Power On And Test

Plug in your power cable and make sure everything works. Then you are ready to start setting up your new Bitcoin seed phrase.

{{% image "/img/seedsigner/58.webp" /%}}

You may be able to find additional resources in [this](https://github.com/shishi21m/SeedSigner-Guides/blob/main/SeedSigner%20Build%20Guide.pdf) guide by [@shishi21m](https://twitter.com/shishi21m).

## Generate A New Seed

This section will demonstrate two methods to generate a new master seed with the SeedSigner, with the camera or with dice, as well as how to calculate the checksum of a mnemonic phrase and also how to import a pre-existing mnemonic phrase.

The master seed is just a number, a really long and random number. In fact, this number is so long and random that it can be considered truly unique. Practically speaking, the only place in the universe this number exists is on your SeedSigner when you create it. For all intents and purposes, for someone to guess this number would be like guessing the exact same atom from the entire observable universe that you secretly picked.

This really long random number is used in some clever cryptographic functions to deterministically derive your Bitcoin wallet private/public key pairs. In other words, this is how you can generate many receiving addresses and spend from them. There are several ways to represent these long random numbers; binary ones and zeros, hexadecimal 0 to 9/A to F, a QR code, or even a list of words. Humans have a difficult time handling a numeric representation that is as abstract as 256 ones and zeros, this is why the word lists (or mnemonic phrases) are a popular solution. The long random number is turned into a list of words that are easier for the user to write down and interpret later with accuracy.

If you want to learn more about the processes used with hierarchical deterministic wallets and mnemonic phrases, check out [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) and [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

Your SeedSigner can communicate this number to you in the form of a list of English words or a QR code; both methods contain the same information, your master seed. Keep in mind that anyone who gains access to this master seed information can use it to re-create your Bitcoin wallet and take the bitcoin from it, so be sure to handle this information securely and privately.

You will have a couple of choices when creating a new seed: capture an image or roll some dice. Both processes involve randomness, which is a key element in creating a secure master seed that cannot be guessed. Best practice is to use a 256-bit number for your master seed which translates to a 24-word mnemonic; the 12-word mnemonics are made from 128 bits.

### Method One: With Camera

No two images will be exactly the same and they will all produce drastically different master seeds. The randomness of the image-method involves taking information from several frames prior to the image itself, along with some information in the image as well as the unique serial number of the Raspberry Pi Zero processor and the number of milliseconds the device has been powered on for.

#### Step One: Initiate Camera

From the SeedSigner main menu, navigate to “Seeds” then “+ Create a seed” then “;camera icon’ New seed.” This will activate the camera. During this time prior to you taking the image, the SeedSigner is capturing frames and using information from these frames to include in the generation of your master seed.

{{% image "/img/seedsigner/59.png" /%}}

{{% image "/img/seedsigner/60.png" /%}}

{{% image "/img/seedsigner/61.png" /%}}

{{% image "/img/seedsigner/62.png" /%}}

#### Step Two: Capture Image

Take an image of something unique. The SeedSigner will display the captured image and then you will have a choice to “reshoot” or “accept,” move the joystick in the appropriate direction for your decision.

{{% image "/img/seedsigner/63.png" /%}}

{{% image "/img/seedsigner/64.png" /%}}

#### Step Three: Mnemonic Length

Next, you will be asked which mnemonic length you want to use, 12-words or 24-words. Accept the warning telling you that this information needs to remain private and secure.

{{% image "/img/seedsigner/65.png" /%}}

{{% image "/img/seedsigner/66.png" /%}}

Finally, your mnemonic phrase will be displayed. The screen displays four words at a time.

{{% image "/img/seedsigner/67.webp" /%}}

Follow the directions in the next section, "Seed Backup," to see how to secure this information.

### Method Two: With Dice

The randomness of the dice rolls is pretty self explanatory, best practice is to use a balanced dice. The technical definition of entropy with a six-sided dice is calculated by “log2(6) = 2.58 bits of entropy,” this is why it takes 50 rolls for 128 bits or 99 rolls for 256 bits: “log2(6)*99 = 255.9.” By rolling a dice 99 times, you are providing the randomness necessary to create a random number that is impossible to guess. The dice method will give you a choice between 128 bits/50 rolls/12 words or 256 bits/99 rolls/24 words.

#### Step One: Initiate Dice Entry

From the SeedSigner main menu, navigate to “Seeds” then “+ Create a seed” then “‘dice icon’ New seed.” Then select which mnemonic length you want to use, 12 words or 24 words. Accept the warning telling you that this information needs to remain private and secure.

{{% image "/img/seedsigner/68.png" /%}}

{{% image "/img/seedsigner/69.png" /%}}

{{% image "/img/seedsigner/70.png" /%}}

{{% image "/img/seedsigner/71.png" /%}}

#### Step Two: Roll The Dice

Next, you can roll your dice and then enter the result by selecting that number on the SeedSigner screen and pushing the joystick. Repeat this process for all of your rolls.

{{% image "/img/seedsigner/72.png" /%}}

{{% image "/img/seedsigner/73.png" /%}}

#### Step Three: Finalize

When you enter the last roll, the SeedSigner will display the warning about sharing this information. Accept the warning telling you that this information needs to remain private and secure. Finally, your mnemonic phrase will be displayed. The screen displays four words at a time.

{{% image "/img/seedsigner/74.webp" /%}}

Follow the directions in the next section, "Seed Backup," to see how to secure this information.

### Calculating A Mnemonic Checksum

You can also calculate the last word of a mnemonic phrase with the SeedSigner. A 256-bit number is not quite long enough to generate 24 words. Each word represents 11 bits of the original 128 bit or 256 bit master seed. Each 11-bit segment translates to a numeric value on an index from zero to 2,047.

Each of the 2,048 words on the BIP39 list corresponds to a different numeric value on this index. For example, “256 / 11 = 23.27” but the mnemonic is 24 words or “128 / 11 = 11.63” but the mnemonic is 12 words. The original master seed is hashed with the SHA-256 algorithm, that hash value is hashed again. For a 128-bit master seed, the last four bits from that secondary hash value is appended to the end of the first hash value; for a 256-bit master seed, the last eight bits from that secondary hash value is appended to the end of the first hash value. This provides a checksum, so really your 12th or 24th word is actually a checksum that the rest of the proceeding mnemonic is correct. When you add 4 bits to 128 bits you get 132 bits, which equals 12 11-bit words. When you add 8 bits to 256 bits you get 264 bits, which equals 24 11-bit words.

SeedSigner can calculate this checksum for you and tell you what the 12th or 24th word is based on the rest of the proceeding mnemonic. This may be helpful if you have a mnemonic phrase that is missing the last word, or if you want to double check a mnemonic, or if you want to pick your own words from the BIP39 list. However, picking your own words from the BIP39 list will probably not be as random as using the random number generator found in tools like the SeedSigner.

From the main menu navigate to “Seeds” then “+ Create a seed” then “Calc 12th/24th word” then select mnemonic length “12 words” or “24 words.”

{{% image "/img/seedsigner/75.png" /%}}

{{% image "/img/seedsigner/76.png" /%}}

{{% image "/img/seedsigner/77.png" /%}}

{{% image "/img/seedsigner/78.png" /%}}

On the next screen you can start entering the first 11 words for a 12-word mnemonic or the first 23 words for a 24-word mnemonic. Start by entering the first letter of the desired word, the available letters to choose from for the next letter will be reduced to the only options based on the BIP39 word list. You can also scroll up or down through a list on the right-hand side of the screen using the “KEY1” and “KEY3” buttons on the HAT display. When you find the word you want, push “KEY2” on the HAT display to select that word and move on to the next one. Continue this process until all 11 or 23 words have been entered.

{{% image "/img/seedsigner/79.png" /%}}

{{% image "/img/seedsigner/80.png" /%}}

After the 11th or 23rd word has been entered, the SeedSigner will display the final word. You will have the option to load that seed into the SeedSigner’s active memory and apply an optional passphrase as well.

{{% image "/img/seedsigner/81.webp" /%}}

### Importing A Mnemonic Phrase

You can also import a pre-existing 12-word or 24-word mnemonic in its entirety. From the main menu, navigate to “Seeds” then select “Enter 24-word seed” or “Enter 12-word seed.” Then follow the same process above, selecting the first letter of each word until you find the desired word and pressing “KEY2” on the HAT display to select that word. If you enter a word incorrectly, the calculated checksum will be incorrect and the SeedSigner will alert you.

{{% image "/img/seedsigner/82.png" /%}}

{{% image "/img/seedsigner/83.png" /%}}

{{% image "/img/seedsigner/84.png" /%}}

{{% image "/img/seedsigner/85.png" /%}}

Once all the words have been entered you will be presented with the wallet fingerprint and given the option to apply an optional passphrase.

{{% image "/img/seedsigner/86.webp" /%}}

## Seed Backup

This section will demonstrate how to backup the master seed generated on the SeedSigner. There are two ways to backup this information: as a mnemonic phrase or as a QR code. A combination of these two methods can be used for redundant backups. Anyone who gains access to this information will be able to steal your bitcoin, so ensure that you take precautions when handling this information. Some basic best practices are to never store this information in a text file, don't save it to a computer, don't take a picture of it and don't speak the words out loud. Handle this information as if it were gold, cash or jewelry.

Both the mnemonic phrase and the QR code can be transcribed visually from the SeedSigner display without having to connect the SeedSigner to any device to transfer the information. This keeps the SeedSigner completely air gaped while exporting the master seed. The information can be transcribed to an included paper card or to a stainless steel QR code plate, available from [Vulcan21](https://vulcan21.com/steelqr/).

Paper cards can be quick and easy to fill out, hidden in many different places and easily distributed to different geographic locations. Steel plates can take more time to set up, they may not be as easily concealable, but the steel plates will withstand extreme environmental conditions like fire and flooding; they are much more robust than paper.

After you generate a new seed on your SeedSigner, either by taking an image or by completing dice rolls, the SeedSigner will direct you to the mnemonic phrase. The mnemonic phrase will be a list of either 12 or 24 English words. If you need to display the mnemonic phrase again after your seed has already been created you can scan in your QR code and navigate to “Backup Seed” then “View Seed Words” then accept the warning and then the list of 12 or 24 words will be displayed. If you did not write down your mnemonic phrase or transcribe your QR code when initially creating your master seed and you have cycled the power on your SeedSigner, then you will need to create a new seed as there is no way for the SeedSigner to store that information in memory. Never deposit any bitcoin to a wallet until you have verified the backup information works to restore the wallet.

### Note Card

When you create a new seed, SeedSigner will direct you to the list of 12 or 24 words. You want to write these words down as they are displayed. The back of the included note cards have space for 24 words. Write these words down legibly and in order. Four words are displayed at a time, select “Next” until you have cycled through all the words.

{{% image "/img/seedsigner/87.webp" /%}}

Select “Done” when finished and the SeedSigner will prompt you to test yourself on your backup, it is best practice to take this test to ensure your backup was written down correctly. On the reverse side of the note card is a blank 29 by 29 QR code grid. You can visually transcribe your master seed in QR code format onto the note card. This makes importing your wallet into SeedSigner as fast as scanning a QR code can be. After taking the test to confirm the mnemonic phrase, you can scroll down the menu on your SeedSigner to “Backup Seed” then “Export as SeedQR” then “I Understand” then “Begin 29x29.”

{{% image "/img/seedsigner/87.png" /%}}

{{% image "/img/seedsigner/88.png" /%}}

{{% image "/img/seedsigner/89.png" /%}}

{{% image "/img/seedsigner/90.png" /%}}

The SeedSigner will then display a magnified view of the QR code, one segment at a time starting on A1. You can toggle the joystick to navigate through the rest of the segments and visually transcribe the darkened squares you see on the screen to the card using a permanent marker. There are four predefined squares on the QR code, that are already printed on the card for you.

{{% image "/img/seedsigner/91.png" /%}}

{{% image "/img/seedsigner/92.png" /%}}

There is error correction built into the QR code scanning software, meaning that if you misplace a few squares, the SeedSigner will still be able to produce your seed. Try to be as accurate as possible though.

Once you have the QR code transcribed, test it by scanning it and checking the fingerprint, an eight-character string that uniquely identifies your wallet.

{{% image "/img/seedsigner/93.webp" /%}}

If you are using a passphrase on your wallet, you will need to decide how you want to handle this added piece of information. A passphrase can be thought of as a 13th or 25th word added to your mnemonic phrase; this will create a completely different wallet. A passphrase can be a string of any combination of uppercase letters, lowercase letters, numbers and special characters. Only you will know this passphrase and there is no way for the SeedSigner or anyone to help you recover a lost or forgotten passphrase. By entering a passphrase on your wallet, this added piece of information will be required each time you want to access this wallet in the future.

There is a tool maintained by [@BitcoinQ_A](https://twitter.com/BitcoinQ_A) that can assist you in trying different passphrases over a mnemonic phrase in case you write down the passphrase incorrectly but have a rough idea of what it should be. You can enter your mnemonic words and a receiving address and test different passphrases. Use this tool offline by downloading it, do not enter your mnemonic phrase or passphrase into a network-connected device.

Visit [Bitcoiner.Guide/seed/](https://bitcoiner.guide/seed/) to learn more.

{{% image "/img/seedsigner/94.webp" /%}}

Decide if you want to write down the fingerprint for the mnemonic phrase wallet, or the fingerprint for the passphrase-applied wallet, or both. In this example, the generated fingerprint once the QR code is scanned is different from the fingerprint generated once the passphrase is applied.

{{% image "/img/seedsigner/95.png" /%}}

{{% image "/img/seedsigner/96.png" /%}}

{{% image "/img/seedsigner/97.png" /%}}

Or in this example, the primary wallet fingerprint is noted at the top and then the fingerprint for the passphrase-applied wallet is noted at the bottom with the indicator "PP" for passphrase. Keep in mind too that if you store your mnemonic phrase with your passphrase then an adversary would have all the information they need to steal your bitcoin. However, if you store your passphrase separate from your mnemonic phrase then there is added security.

{{% image "/img/seedsigner/98.webp" /%}}

One thing to consider as well is that although the fingerprint itself will not put the security of your bitcoin at risk directly, the simple existence of an additional fingerprint could be enough to tip off an adversary that there is another bitcoin wallet which a passphrase is needed to access. If you set up a duress wallet with a small amount of bitcoin in the primary wallet and the majority of bitcoin in the passphrase-applied wallet, this could be a consideration for you.

### QR Code Steel Plate

The initial process for creating a steel QR code backup is much the same as for the note card version. After you have saved your mnemonic phrase, on the SeedSigner navigate to “Backup Seed” then “Export as SeedQR” then “I Understand” then “Begin 29x29.” Alternatively, you could transcribe this information from a pre-existing note card QR code if you already have one backup that you are upgrading to steel.

Use a permanent marker to mark where the punches should be made.

{{% image "/img/seedsigner/99.webp" /%}}

If you make a mistake, you can remove the permanent marker with acetone and a Q-tip. There is error correction software in the SeedSigner that tolerates some misplaced dots, but it is best practice to be as accurate as possible.

{{% image "/img/seedsigner/100.webp" /%}}

Prior to stamping the dots with a punch, test the QR code with the SeedSigner.

{{% image "/img/seedsigner/101.png" /%}}

{{% image "/img/seedsigner/102.png" /%}}

Now you are ready to stamp the dots permanently into the steel plate with a punch. This demonstration uses what is known as a "Prick Punch" and a 4-pound mini sledge hammer on a concrete floor. Having a solid surface to hammer on and a heavy hammer is key to getting crisp, clear punches.

{{% image "/img/seedsigner/103.jpg" /%}}

{{% image "/img/seedsigner/104.jpg" /%}}

{{% image "/img/seedsigner/105.webp" /%}}

A letter and number stamp set can be used to mark additional information onto the steel plate such as the fingerprint. Again, make careful considerations of how you will store information related to passphrase applied wallets. In this example, the primary fingerprint is marked on top — this is the resulting fingerprint when the QR code is scanned. On the bottom, the "PP" indication is used to symbolize “passphrase” followed by the resulting fingerprint when the passphrase is applied.

{{% image "/img/seedsigner/106.webp" /%}}

Be sure to test your stamped QR code steel plate by scanning it with your SeedSigner. Be aware that you may need to try different lighting conditions.

{{% image "/img/seedsigner/107.png" /%}}

{{% image "/img/seedsigner/108.png" /%}}

You should have well-defined and clear marks in your steel plate that match the note card QR code.

{{% image "/img/seedsigner/109.jpg" /%}}

{{% image "/img/seedsigner/110.jpg" /%}}

{{% image "/img/seedsigner/111.jpg" /%}}

{{% image "/img/seedsigner/112.jpg" /%}}

{{% image "/img/seedsigner/113.jpg" /%}}

{{% image "/img/seedsigner/114.jpg" /%}}

{{% image "/img/seedsigner/115.jpg" /%}}

Your Steel QR code is now ready to be securely stored.

### Fire Test

To verify that the wallet information could be recovered in the event of catastrophic events such as fire, the steel plate was heated up to just below melting temperatures using an oxygen and acetylene torch. Ideally, in the event of a fire, the QR code on the steel plate would still be able to be scanned and recovered quickly. However, fire can cause the finish on the plate to disappear leaving very little distinction between the plate background and the darkened areas.

Recovery in this case can still be possible by visually transcribing the information from the burnt QR code steel plate to a paper note card and then scanning the QR code on the note card. This stress test revealed that the steel plate can withstand temperatures just below 1,500° C, well above typical house fire temperatures, and the information contained within the steel plate was still 100% recoverable by visually transcribing the QR code to a paper note card.

You can watch the fire test in the full video at [this link](https://media.econoalchemist.com/w/du6mSagqhxYSr5uz8CvnzU?start=12m23s).

{{% image "/img/seedsigner/116.png" /%}}

{{% image "/img/seedsigner/117.jpg" /%}}

{{% image "/img/seedsigner/118.jpg" /%}}

{{% image "/img/seedsigner/119.jpg" /%}}

{{% image "/img/seedsigner/120.jpg" /%}}

The wallet was 100% recoverable by transcribing the information on the burnt steel plate to a note card and then scanning the note card with the SeedSigner. Attempts were made to modify the finish of the steel plate after the fire test to see if enough distinction could be brought back to allow for scanning. A brass bristle brush was used, as well as some solvent to remove any remaining carbon, then some oil was applied which just caused the surface to turn a brown hue, and finally a polish wheel was used on the surface and a permanent marker was used to color in the stationary squares in the four corners of the QR code. But the QR code would not scan. Transcribing it though did work just fine.

{{% image "/img/seedsigner/121.png" /%}}

{{% image "/img/seedsigner/122.png" /%}}

{{% image "/img/seedsigner/123.png" /%}}

As an example of the error correction in action, you will notice that some dots were mis-stamped in segment B6 when transcribing the QR code to the steel plate. The dots were later re-stamped in the correct place, all three variations of the QR code produced the same seed.

{{% image "/img/seedsigner/124.webp" /%}}

## Sparrow Wallet

This section will demonstrate how to import your wallet to Sparrow Wallet from SeedSigner. The concept here is that the SeedSigner will use your private key to sign transactions and Sparrow Wallet will generate those transactions for the SeedSigner to sign. This way, you can keep your private key off of a network-connected device while still being able to check your wallet balance and generate receiving addresses safely.

Importing a wallet in this manner enables you to have a "watch-only" wallet available on your personal computer (PC) without putting your bitcoin private keys at risk. The watch-only wallet can display your balance and generate receiving addresses without you needing to go through the process of opening your wallet with your SeedSigner each time. You would just use your SeedSigner when you want to sign transactions from this wallet to spend those bitcoin.

For more information on installing Sparrow Wallet and connecting it to a node, check out the [Sparrow Wallet website](https://www.sparrowwallet.com/).

This demonstration uses Sparrow Wallet installed on a Windows desktop using [Bitcoin Core](https://bitcoincore.org/) as the node backend.

### Step One: Initiate Import

Once you have Sparrow Wallet installed and open on your PC, navigate to “File” then “Import Wallet”

{{% image "/img/seedsigner/125.webp" /%}}

### Step Two: Device Selection

In the pop-up window, scroll down and select “SeedSigner” then “Scan” to launch your webcam.

{{% image "/img/seedsigner/126.webp" /%}}

### Step Three: Export Watch-Only Information

- On your SeedSigner, scan your seed QR code and enter your passphrase
- Then go to “Export Xpub” and select your wallet
- Then choose your quorum type, “Single Sig” or “Multisig” (single sig is used in this demo).
- Then choose your script type (the kind of addresses you want to use) “Native Segwit” or “Nested Segwit”
- Then select your Bitcoin wallet application (Sparrow Wallet in this example).

{{% image "/img/seedsigner/127.png" /%}}

{{% image "/img/seedsigner/128.png" /%}}

{{% image "/img/seedsigner/129.png" /%}}

{{% image "/img/seedsigner/130.png" /%}}

You will receive a warning about privacy implications of exporting your xpub, then you will have a chance to review the details. Once you select “Export Xpub” the series of animated QR codes will begin and you can hold your SeedSigner up to your PC webcam so that Sparrow Wallet can gather the details it needs to import your watch-only wallet.

{{% image "/img/seedsigner/131.png" /%}}

{{% image "/img/seedsigner/132.png" /%}}

{{% image "/img/seedsigner/133.png" /%}}

{{% image "/img/seedsigner/134.png" /%}}

If you are having trouble with the brightness of the HAT display, you can hold the joystick in the up or down position during the animated QR code loop to change the brightness of the screen. There are right brightness levels from very dim to very bright.

{{% image "/img/seedsigner/135.webp" /%}}

### Step Four: Finalize Import

Back in Sparrow Wallet, once you scan the animated QR codes, you can name your new wallet and add an optional password. Be careful not to confuse this password with your passphrase. This password in Sparrow Wallet is just to encrypt the wallet file on your PC.

{{% image "/img/seedsigner/136.png" /%}}

{{% image "/img/seedsigner/137.png" /%}}

### Step Five: Receiving Bitcoin

Once your node finishes scanning for any transactions (automatic process), you will be at your wallet home screen in Sparrow Wallet. If you click on the “Receive” tab on the left-hand side of the interface, you will see the first address on your SeedSigner that you can deposit some bitcoin to.

{{% image "/img/seedsigner/138.png" /%}}

{{% image "/img/seedsigner/139.png" /%}}

Once you make a deposit, the transaction should show up right away in Sparrow Wallet as “Unconfirmed” until it receives some block confirmations. Once this deposit is made, a signature from your SeedSigner will be required to spend it.

{{% image "/img/seedsigner/140.webp" /%}}

### Creating A PSBT

Once you have bitcoin deposited to your wallet, you can create a partially-signed bitcoin transaction (PSBT) in Sparrow Wallet. Then you can exchange QR codes back and forth between the SeedSigner and Sparrow Wallet to sign the transaction in an air-gapped fashion with your SeedSigner.

#### Step One: UTXO Selection

From Sparrow Wallet, navigate to your “UTXOs” tab on the left-hand side of the interface. Then select the UTXO you want to spend. Alternatively, you could just select the “Send” tab instead and enter an amount, but in this example the entire UTXO is being spent.

{{% image "/img/seedsigner/141.webp" /%}}

#### Step Two: Build Transaction

- On the next screen, you can enter the address you want to spend the bitcoin to.
- Add a label so you remember what the transaction was for. This is only visible in your local wallet instance, these labels are not included in the transaction information that gets broadcast to the Bitcoin network. 
- Enter the amount (or select maximum amount in this case).
- Set your miner fee rate
- Then click on “Create Transaction” once you have all the details filled in.

{{% image "/img/seedsigner/142.webp" /%}}

#### Step Three: Finalize Transaction

On the next screen you will be presented with the transaction ID (txid) and a graph showing the inputs and outputs to the transaction. Click on “Finalize Transaction for Signing.”

{{% image "/img/seedsigner/143.webp" /%}}

#### Step Four: Animated QR Codes

On the next screen, click on “Show QR” and Sparrow Wallet will display a series of animated QR codes in a pop-up window. Then you can scan those with your SeedSigner. If you have not done so already, you will need to power on your SeedSigner, scan your QR code seed phrase, enter your passphrase and then select the option to sign the PSBT.

{{% image "/img/seedsigner/144.png" /%}}

{{% image "/img/seedsigner/145.jpg" /%}}

#### Step Five: Confirmation

On your SeedSigner you will confirm several details about this transaction:

- Make sure you select the correct wallet, noting the fingerprint.
- Check the amount and input/output graph.
- You will be warned if this is a full spend.
- Verify that the transaction math checks out.

{{% image "/img/seedsigner/146.jpg" /%}}

{{% image "/img/seedsigner/147.jpg" /%}}

{{% image "/img/seedsigner/148.jpg" /%}}

{{% image "/img/seedsigner/149.jpg" /%}}

#### Step Six: Signing

- Double check the address you are sending to.
- Approve the PSBT if everything looks good.
- Select the Bitcoin wallet application you are working with (Sparrow Wallet in this case).
- In Sparrow Wallet, select “Scan QR” then hold up the animated series of QR codes flashing on the SeedSigner screen.

{{% image "/img/seedsigner/150.jpg" /%}}

{{% image "/img/seedsigner/151.jpg" /%}}

{{% image "/img/seedsigner/152.jpg" /%}}

{{% image "/img/seedsigner/153.png" /%}}

#### Step Seven: Broadcast

Once the details are received by Sparrow Wallet, then select “Broadcast Transaction.”

{{% image "/img/seedsigner/154.webp" /%}}

Once your transaction is broadcast to the Bitcoin network, then you can use your favorite block explorer to keep an eye on it.

{{% image "/img/seedsigner/155.webp" /%}}

### Importing Private Key

As of Sparrow Wallet version 1.6.4, you can scan your private key QR code and import to Sparrow Wallet. If you are trying to keep your wallet air gapped, then do not attempt this as it will put your private key on a device that is either currently connected to the internet or has been/will be connected to the internet. The risk here is that you could be turning your cold wallet into a hot wallet.

By following the steps below, Sparrow Wallet will write a wallet file to your PC. This wallet file will contain your private key. If your computer is compromised in the future and this file is found then your bitcoin could be at risk. Using a password to encrypt this wallet file is a minimum-recommended precaution if you choose to proceed. A passphrase will not be stored in the wallet file and this is another safeguard you can use to help protect your bitcoin in the event that your private key is exposed. Importing a private key can be useful for quickly generating your wallet, constructing a transaction and broadcasting it without having to pass details back and forth to the SeedSigner if you find yourself in a situation where time is of the essence and your signing device is unavailable to you.

If you want the convenience of being able to generate receiving addresses and checking your balance without the security vulnerability of having your private keys on a network-connected device, then use the watch-only wallet option described above. You can also sign a PSBT in Sparrow Wallet using your SeedSigner QR code and Sparrow Wallet will not save that information, if you are in an emergency.

#### Step One: Initiate Import

In Sparrow Wallet, navigate to “File” then “Import Wallet.”

{{% image "/img/seedsigner/156.webp" /%}}

#### Step Two: Select Method

A window will pop up with several import options. On the “Mnemonic Words” option, click on the drop-down menu and choose “Scan QR.”

{{% image "/img/seedsigner/157.webp" /%}}

#### Step Three: Scan QR Code

Your webcam should automatically launch, hold up your SeedSigner private key QR code so Sparrow Wallet can gather the details.

{{% image "/img/seedsigner/158.webp" /%}}

#### Step Four: Passphrase

If you have a passphrase applied to your wallet, enter it now. Then click on “Discover Wallet.”

{{% image "/img/seedsigner/159.webp" /%}}

#### Step Five: Name Wallet

Then you will be asked to name your new wallet. Once you have entered a name, click on “Create Wallet.”

{{% image "/img/seedsigner/160.webp" /%}}

#### Step Six: Add Password

Optionally, you can add a password to protect this wallet file. This password should not be confused with your _passphrase_. This password will encrypt the wallet file saved on your PC.

{{% image "/img/seedsigner/161.webp" /%}}

#### Step Seven: Confirm Passphrase

You will then be asked to confirm the passphrase you entered in step four.

{{% image "/img/seedsigner/162.webp" /%}}

Now you have a fully-functional wallet from your SeedSigner live in Sparrow Wallet. Remember, if you are using Sparrow Wallet on a network-connected PC then this is no longer an air-gapped wallet. However, you can now quickly construct and broadcast transactions.

{{% image "/img/seedsigner/163.webp" /%}}

Another benefit is that now you can find your PayNym to start making collaborative transactions and you can use the Sparrow Wallet Whirlpool implementation for the privacy benefits.

Navigate to “Tools” then “Show PayNym.”

{{% image "/img/seedsigner/164.webp" /%}}

Then click on “Retrieve PayNym.”

{{% image "/img/seedsigner/165.png" /%}}

{{% image "/img/seedsigner/166.png" /%}}

To learn more about making collaborative transactions or using Whirlpool, check out the documents section of [Sparrow Wallet website](https://www.sparrowwallet.com/docs/mixing-whirlpool.html) or the privacy section of the [Bitcoiner.Guide website](https://bitcoiner.guide/articles/).

## Multisig

This section demonstrates how to set up a multisig wallet using SeedSigner and Sparrow Wallet.

### Step One: Generate Seeds

First, create as many new seeds as you want for your multisig quorum. Follow the same process explained in the "Generate-Seed" section, use either the image capture method or the dice roll method. You can apply an optional passphrase as well.

In this example, four new seeds were generated to construct a four-of-four multisig. A passphrase was applied to each one.

{{% image "/img/seedsigner/167.jpg" /%}}

{{% image "/img/seedsigner/168.jpg" /%}}

{{% image "/img/seedsigner/169.jpg" /%}}

{{% image "/img/seedsigner/170.jpg" /%}}

### Step Two: Create Multisig Wallet In Sparrow

- In Sparrow Wallet, navigate to “File” then “New Wallet.”
- Then name your new multisig wallet.

{{% image "/img/seedsigner/171.png" /%}}

{{% image "/img/seedsigner/172.png" /%}}

### Step Three: Configure The Multisig Quorum

- Select “Multi Signature” from the policy type drop-down menu.
- Set the “M of N” cosigners. This is the minimum number of required signatures you want for your wallet. Typical quorums are three-of-five or five-of-seven, etc. Four-of-four was used in this example.
- You will notice that a new keystore tab appears at the bottom of the screen for each of the cosigners you add.
- Once that is set, you can select “Airgapped Hardware Wallet” to import the first cosigner. The xpub information will be exported from SeedSigner for each wallet in this example to preserve the air-gapped advantage.

{{% image "/img/seedsigner/173.webp" /%}}

### Step Four: Initiate PC Webcam

Once you click on “Airgapped Hardware Wallet,” a window will pop up with several options, next to the SeedSigner icon, click on “Scan.” This will launch your PC webcam.

{{% image "/img/seedsigner/174.webp" /%}}

### Step Five: Export Xpub

- On your SeedSigner, you should have all of your seeds loaded that you want to export. If you need to, scan the QR codes to load them now. Select the first one.
- Scroll down to “Export Xpub.”
- Select “Multisig.”
- Select script type, “Native Segwit” was used in this example
- Then select the wallet application, “Sparrow” was used in this example.
- Accept the warning about the potential privacy leak exporting your xpub poses.

{{% image "/img/seedsigner/175.jpg" /%}}

{{% image "/img/seedsigner/176.jpg" /%}}

{{% image "/img/seedsigner/177.jpg" /%}}

{{% image "/img/seedsigner/178.jpg" /%}}

{{% image "/img/seedsigner/179.jpg" /%}}

{{% image "/img/seedsigner/180.jpg" /%}}

### Step Six: Confirm Details

SeedSigner will display the details of what you are about to export. Look them over and confirm everything is correct. You want to ensure that the displayed fingerprint matches the passphrase-applied fingerprint you have written down.

{{% image "/img/seedsigner/181.webp" /%}}

### Step Seven: Import Xpub

The SeedSigner will start to flash a series of animated QR codes that contain your xpub information. Hold this up to your PC webcam so that Sparrow Wallet can gather the details necessary to import your first cosigner.

{{% image "/img/seedsigner/182.jpg" /%}}

{{% image "/img/seedsigner/183.png" /%}}

### Step Eight: Confirm And Repeat

Once Sparrow Wallet gets the details that it needs, it will populate several fields under the first keystore tab. Double check that this information is correct, taking care to ensure the fingerprint is correct. If everything looks good, then click on the second keystore tab and repeat that process with your second cosigner, then again for your third, and so on.

{{% image "/img/seedsigner/184.webp" /%}}

### Step Nine: Finalize

Once you have all of your cosigners imported, click on “Apply.”

{{% image "/img/seedsigner/185.webp" /%}}

If you want to add an optional password, you can do so when Sparrow Wallet prompts you. This is not to be confused with your passphrase. The password encrypts the wallet file saved on your PC.

{{% image "/img/seedsigner/186.webp" /%}}

### Spending

Your new multisig wallet is now ready to deposit to. You can generate receive addresses from Sparrow Wallet and deposit bitcoin. You will need your minimum number of cosigners to each sign the transaction to spend bitcoin deposited to this multisig wallet.

When you want to spend your bitcoin, navigate to the “Send” tab in Sparrow Wallet and fill out the address you wish to spend to, add a label, set the amount to spend and select a miner fee rate. Then click on “Create Transaction.”

{{% image "/img/seedsigner/187.webp" /%}}

Then click on “Finalize Transaction for Signing."

{{% image "/img/seedsigner/188.webp" /%}}

Then you will have the option to display the transaction QR code so that you can scan it from the SeedSigner with the appropriate cosigners loaded. You will have to do each one individually. Once the SeedSigner receives the information it needs, it will display the signed PSBT as an animated QR code to be scanned by your PC webcam for Sparrow Wallet to receive. This is the same process used for signing transactions covered in the "Sparrow Wallet" section, only you have to do it for as many minimum number of cosigners you have set on your multisig wallet.

{{% image "/img/seedsigner/189.png" /%}}

{{% image "/img/seedsigner/190.png" /%}}

### Example

To spread awareness of SeedSigner, Sparrow Wallet and multisig wallets, 100,000 sats were deposited to the four-of-four multisig wallet in this guide. You can see the transaction here: [mempool.space](https://mempool.space/tx/dec20d2e6e3ce792124ddd738473e60ac7cf5444b3d24e78dff5871a6528c2bc).

The scavenger hunt was announced on Twitter here: [econoalchemist](https://twitter.com/econoalchemist/status/1528497446606606336?s=20&t=l_egT555rddanOrEqpAplQ).

## The Importance Of Self Custody

Understanding the context for self custody is a critical aspect of mitigating some of the most pervasive risks involved with Bitcoin, as the saying goes: "Not your keys, not your coins." Trusting third parties like exchanges with your bitcoin introduces several risks that have the potential to leave you vulnerable to theft, seizure and unrealized capital gains taxes.

Additionally, most custodians, if not all of them, are required to comply with know-your-customer (KYC) regulations that introduce you to even more risks associated with data breaches that leak your personally-identifiable information (PII) to the wide open internet. All Bitcoin transactions are public and if your PII is tied to on-chain data, then you are left with no privacy against the trusted custodian who knows your identity and your on-chain balances. In the hands of a hacker, that information can put your life at risk. Also, since these custodians prioritize their relationship with law enforcement and will always make decisions that do not have your best interest in mind; in the hands of your government, this information can put your freedoms at risk.

If you are interested in learning more about catastrophic events involving trusted third parties, check out these resources:

- [Exchange CEO mysteriously "dies" taking $190 million dollars worth of cryptocurrency keys to the grave](https://decrypt.co/5853/complete-story-quadrigacx-190-million).
- [Cryptocurrency exchange partners with IRS and DEA](https://decrypt.co/31485/coinbase-license-analytics-irs-dea)
- [Data breach leaks customer information from 30 cryptocurrency companies](https://decrypt.co/95586/hacker-steals-customer-data-circle-blockfi-big-crypto-firms)
- [Argentina introduces "one-off" wealth tax](https://www.businessinsider.com/one-time-wealth-tax-in-argentina-brought-in-24-billion-2021-5?op=1)

Many of these risks can be mitigated by taking self custody. The trade off is that you are taking the personal responsibility of securing your bitcoin. You and you alone are responsible for your bitcoin. There are no "1-800" helplines to reverse your transactions and nobody can help you recover a lost or forgotten seed phrase. Luckily there are many tools available to help you achieve safe and private self custody.

SeedSigner is one such tool that combines general-purpose, inexpensive hardware with free and open-source software to provide you with a DIY signing device so you maintain unrestricted, permissionless access to your bitcoin.

Customers of Bitcoin hardware wallet manufacturers face certain risks that users should be aware of. There is risk of a supply chain attack where the hardware is intercepted en route and modified in some compromising way prior to final delivery. There is also a risk introduced by exposing personal information to such manufacturers, for example, the [Ledger data breach](https://www.ledger.com/blog/our-communications-about-data-breach) exposed the PII of over one million customers which led to sophisticated phishing attacks and potentially aided in [physical assault and armed robbery](https://coinidol.com/criminals-steal-cryptocurrency/). There is also the risk of a ["sunset" attack](https://medium.com/cryptoadvance/hardware-wallets-can-be-hacked-but-this-is-fine-a6156bbd199) where the hardware wallet manufacturer could try different nonces until they guess your master private key based on information obtained by watching your transactions on the public [blockchain](https://bitcoinmagazine.com/guides/what-is-blockchain).

One helpful feature of SeedSigner is that the required components are widely available, inexpensive and general purpose. This means that these parts can be procured in such a way that no indication of using them for Bitcoin is revealed. SeedSigner is sold in a kit from various vendors, so if you purchase the complete kit then it is obvious what the intended use is. However, throughout this guide you will find links to several vendors for the individual components so that you have the resources you need to procure them individually if you prefer.

## Video Summary

[This video](https://media.econoalchemist.com/w/du6mSagqhxYSr5uz8CvnzU) demonstrates a high-level overview of the content within this guide. The video is not meant as a replacement for the information in this guide, only as a supplemental visual assistant that demonstrates testing, assembly, generating a seed, entering a passphrase, backing up a seed via QR code and fire-testing the steel plate.

<center><video src="https://v.nostr.build/L5w2.mp4" controls style="width: 100%"></video></center>

## Trade Offs

No solution is without its trade offs, here are a few things to consider with the SeedSigner (a full list of acknowledged criticisms and vulnerabilities is maintained by SeedSigner [here](https://github.com/SeedSigner/independent_custody_guide#alright-but-theres-got-to-be-a-catch-right)):

- There is no safety mechanism that verifies the software like what is found on other hardware wallets. The user is fully responsible for verifying the authenticity of the software used on the SeedSigner. This is explained in detail for both Windows and Linux users in the "Software" section of this guide. Learn how to use the GPG verification tools to mitigate this concern.
- Saving the private key in a QR code format increases the opportunities that an adversary could get this information. As with any backup information no matter the form, if anyone accesses it they could snap a picture of a list of words or a steel plate or they could just take the backup with them in their pocket. Users benefit from keeping backup information private and secure in the way they would handle gold, jewelry or cash. Having some redundant security in place like a passphrase that is stored separately from the backup information can help mitigate these concerns. Multisig cosigners that are dispersed in different geographic locations can also be beneficial to mitigating a single source of failure.
- Constructing a multisig quorum using the same signing device for all cosigners can introduce a vulnerability if some unforeseen issue arises with that particular signing device. Best practice is to use signing devices from multiple manufacturers to mitigate the risks of a sunset attack and or some security bug that puts your entire multisig balance at risk because you did not diversify the hardware used.