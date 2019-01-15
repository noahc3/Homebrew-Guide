.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Before Starting
===============

This section of the guide will teach you basic information about terminology used, what you will be able to do after following this guide, and provide some warnings before you proceed.

What is Homebrew?
-----------------

Homebrew is a term used to describe software not authorized by Nintendo. This includes custom firmwares, tools, applications, games, emulators, etc.

What is Custom Firmware?
------------------------

Custom Firmware (CFW) gives homebrew more access to the system than standard userland homebrew most commonly available on most systems. 

Currently, all Nintendo Switches sold before July 2018 can run custom firmware. Switches sold after this point may not be exploitable right now. This guide will include checking if your system is vulnerable.

What will I get by following this guide?
----------------------------------------

This guide will give you the ability to run a custom firmware of choice on a previously unmodified Nintendo Switch.

The guide will utilize the fusee-gelee exploit (sometimes also referred to as ShofEL2 or CVE-2018-6242, these are all the same exploit) which takes advantage of an oversight in the Nintendo Switch built-in recovery mode (referred to as RCM). fusee-gelee is a tethered, non-persistent exploit, meaning you require a secondary device (such as a PC or Android phone) to enable CFW on every reboot. This is unlike the untethered coldboot exploits available on other systems such as Boot9strap for 3DS and Henkaku Enso for Vita.

The fusee-gelee exploit allows for a full system takeover; the exploit runs before even the normal bootloader code, meaning anything about the normal Switch operating system (named Horizon, or HOS) can be changed. The exploit also allows dumping on the bootloader and any console unique information.

For an advanced technical overview on how fusee-gelee works, you can view this whitepaper

This guide will focus on using a configuration of the Hekate custom bootloader, as well as the Atmosphere custom firmware, both provided by Team AtlasNX's Kosmos. You can also install ReiNX along the way if you wish to use that instead.

.. toctree::
   :maxdepth: 2
   :caption: Contents: