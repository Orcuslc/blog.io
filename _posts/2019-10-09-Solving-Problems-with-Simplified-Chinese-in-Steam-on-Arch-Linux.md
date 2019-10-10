---
title: Handling messed Simplified Chinese words in Steam on Arch Linux
category: Dev
tag: [Steam, Arch Linux]
layout: post
---

The messed language problems of Steam on Arch Linux has always annoyed me. After trying various of methods including reinstalling the fonts, the steam application and regenerating locale, I gave up and adapted myself to the messed GUI. But today I found one solution from the internet:

<!-- more -->

The solution comes from this link: https://www.bbsmax.com/A/D854LDQ5Eg/

Adapted it to my system:
1. Copied the configuration file and put it in ```~/.local/share/Steam/steam-fontconfig.conf```
2. Added a line ```export FONTCONFIG_FILE=/usr/local/steam/steam-fontconfig.conf``` to the beginning of ```~/.local/share/Steam/steam.sh```
3. Done.