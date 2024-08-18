---
tags: ["nerdy"] 
title: My Set Up & Workflows
date: 2024-08-14
permalink: posts/set-up-and-workflows.html
---
## PC Set up

I run Arch on my PC and wanted a fast and simple code editor that didn’t use Electron. That automatically cancelled out a few of the big ones like Atom and VSCode. People complained about every single editor I looked at, so I ended up staying with Vim. I installed the NERDTree and IndentLines plugins and honestly, it’s excellent. Most of this site was built in Vim and the parts that weren’t were built in GitHub Codespaces (more on that later). 

## Pursuing a Laptop Alternative

 I feel like my set up is a bit out of the ordinary- at least when compared to the programmers around me. People around me usually have laptops for productivity on the go, but my laptop from 2016 died last year. She doesn't turn on anymore v_v may she rest in peas. 

I however, am not resting in peas about it. I am really obsessive about this blog and have gotten into web dev and automation, but I am not always at my computer. Sometimes I want to sit at the couch! Sometimes I travel!  But I have no laptop >_<!!!

I would love to buy a used think-pad and re-image it with Linux, but for at the moment I’m on a budget. Yanno the phrase “make do or do without”? Well I wasn’t about to do without so a bitch made do.

My iPad was patiently waiting to be used for more than drawing and watching Crunchy Roll. But typing on an iPad is god awful! Luckily my husband was getting rid of his 15 year old Bluetooth keyboard and all it needed was new batteries (I saw cheap bluetooth keyboards at FiveBelow that might have been an ok alternative). And a few days prior my colleague had lent me his mouse!!! It’s [this one](https://www.pcmag.com/reviews/logitech-ergo-m575) and it happens to be perfect for use in weird places, because it uses a track ball where the thumb rests to move the mouse. Genius. And all of that happened to be able to connect to my iPad. Insane!!!!! 

Next: how can I actually write stuff on my iPad? Are there really good IDEs on the Apple store? Well, if there are any I didn’t find them. I ended up making use of GitHub Codespaces, and it’s been decent. I also installed a Vim emulator plugin in Codespaces so I can make use of the keyboard even more, because the iPad OS and the mouse fight sometimes. Using this set up would be a little more tedious without that plugin.

## Codespaces is OP

I have been out in the wild just loafing about and ended up on Codespaces writing stuff. It really really sucks on mobile, but if you go landscape mode it just barely works. Definitely feels like pushing the bounds of what it should be able to do. It makes me feel like hooking up my keyboard and mouse to my smart TV and running Codespaces there. 

## Workflow

My site is built with 11ty and lives on GitHub. I used a GitHub workflow to automatically upload my files to Nekoweb when a push occurs on the main branch.  Because of 11ty and GitHub Actions, I can just plop a new markdown file into my posts folder and call it a day. It really enables me to do what I want and automate what I don’t. Shit rocks.
