---
title: "Comments on 21ideas"
h1: Comments
bookHidden: true
url: comments
---

To allow you, dear readers, to comment on 21ideas posts, we have turned to the open communications protocol called Nostr.

## Why Nostr?

With Nostr, we know you won't have to share any personal info. Nostr, like Bitcoin, uses a private and public keypairs and a network of lightweight relays to provide a pseudonymous and censorship-resistant system for sharing information online.

## How do I leave a comment?

If you already have an account on Nostr:

1. Make sure you have activated an extension that manages Nostr keys, such as [Alby](https://getalby.com), [Nos2x](https://chrome.google.com/webstore/detail/nos2x/kpgefcfmnafjgpblomihpgmejjdanjjp), or [Nostore](https://apps.apple.com/us/app/nostore/id1666553677) (for Safari).
2. Click "Log in"
3. Write and post a comment.

If you haven't gotten a Nostr account yet: 

You'll have to do some work, but don't be discouraged - there's nothing complicated about the process. What's more, Nostr can be useful for many purposes, not just as a commenting tool and social media analog.

{{< hint info >}}
You can find all the information on Nostr you need by visiting [nostr.how](https://nostr.how/). 
{{< /hint >}}

One of the most efficient ways to activate your Nostr account (creating a private and public key pair) is to use the Alby browser extension. In addition to generating and storing your key, Alby will also allow you to log in to any Nostr-based web application. Moreover, Alby supports Lightning Network and onchain payments, allows you to [set up recurring payments](https://zapplanner.albylabs.com) via Lightning and much more.

## 21ideas Relay

A relay `wss://21ideas.nostr1.com` will be used to display comments on the site. The proprietary relay is needed to combat spam in the site's comments. As you already know, Nostr is a censorship-resistant protocol, meaning that it is virtually impossible to delete a message sent to the network. This is achieved thanks to the so-called relays, to which your messages are sent for further relaying. As soon as a message is sent, it is instantly distributed to the many relays that send it onward. If we had configured the site to display information from numerous relays, spam bots would immediately appear in the comments, advising to buy token "X" or offering to get an airdrop. Therefore, in order to leave a comment that will be displayed on the site, it is necessary to broadcast it to the 21ideas relay, which is moderated by the project maintainers.

To leave a comment, you need to pay a fee of 21 satoshis (literally a few pennies) and connect to our relay. The payment is required to make sure that spammers and scammers can't use bots to fill comments with harmful information for free. You can pay for the relay by visiting https://21ideas.nostr1.com/. 

![pay](https://i.nostr.build/Z4BD.png)

After payment is done, add `wss://21ideas.nostr1.com` to the list of your Nostr relays in your client settings (the application you use to interact with Nostr). You can learn more about relays from [this guide](https://habla.news/tony/relays), about clients from [here](https://nostr.how/en/clients), and the most extensive knowledge base about Nostr can be found [here](https://nostr.how/).

{{< hint warning >}}
Running and maintaining the relay has its cost. If you have benefited from the comments on the website, [support our initiative](/contribute/). Every sat counts.
{{< /hint >}}

## Help newcomers

The purpose of comments on the platform is to revitalize the discussion between bitcoiners, to help people find not only answers to their questions, but also to become part of the bitcoin community. If you are an experienced bitcoiner or just know the answer to a question, help a newcomer by participating in the discussion. This will bootstrap the development of the community. 

Moreover, comments will soon support zaps, which means that everyone will be able to get some sats in return for their support and involvement.


