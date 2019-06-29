.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Before Starting
===============

This section of the guide will teach you basic information about terminology used, what you will be able to do after following this guide, and provide some warnings before you proceed.

.. important:: 
   This is a lot of info to take in, but if you are a complete noob to the Switch scene, you should seriously consider reading all of it. The Switch scene is very different from the 3DS/WiiU/Wii.

........

BACK UP YOUR NAND
-----------------

.. important:: IT IS INCREDIBLY IMPORTANT THAT YOU ARE AWARE BEFORE WE START THAT YOU HAVE TO BACK UP YOUR NAND BEFORE EVEN ATTEMPTING YOUR ADVENTURE INTO CUSTOM FIRMWARE. IF YOU BACK UP YOUR NAND YOU WILL ALWAYS BE SAFE IN CASE OF BRICKING YOUR SWITCH. IF YOU DO NOT HAVE A NAND BACK UP AND YOU BRICK YOUR SWITCH, IT IS INCREDIBLY DIFFICULT TO FIX IT. BE WARNED!

........
   
What is Homebrew?
-----------------

Homebrew is a term used to describe software not authorized by Nintendo. This includes custom firmwares, tools, applications, games, emulators, etc.

........

What is Custom Firmware?
------------------------

Custom Firmware (CFW) gives homebrew more access to the system than standard userland homebrew most commonly available on most systems. 

Currently, all Nintendo Switches sold before July 2018 can run custom firmware. Switches sold after this point may only be exploitable if they are on firmware 4.1.0. This guide will include checking if your system is vulnerable.

........

What will I get by following this guide?
----------------------------------------

This guide will give you the ability to run a custom firmware of choice on a previously unmodified Nintendo Switch.

The guide details usage of two exploits (one of which with different implementations depending on the firmware version). 

fusee-gelee
^^^^^^^^^^^

The primary exploit is fusee-gelee (sometimes also referred to as ShofEL2 or CVE-2018-6242, these are all the same exploit) which takes advantage of an oversight in the Nintendo Switch built-in recovery mode (referred to as RCM). **fusee-gelee is a tethered, non-persistent exploit**, meaning you require a secondary device (such as a PC or Android phone) to enable CFW on every reboot. This is unlike the untethered coldboot exploits available on other systems such as Boot9strap for 3DS and Henkaku Enso for Vita.

The fusee-gelee exploit allows for a full system takeover; the exploit runs before even the normal bootloader code, meaning anything about the normal Switch operating system (named Horizon, or HOS) can be changed. The exploit also allows dumping of the bootloader and any console unique information.

For an advanced technical overview on how fusee-gelee works, you can view `this paper <https://www.exploit-db.com/docs/english/44532-nintendo-switchnvidia-vulnerability-disclosure-fus%C3%A9e-gel%C3%A9e.pdf>`_

Deja-vu
^^^^^^^

The secondary exploit group is called deja-vu, which takes advantage of an oversight in the Nintendo Switch's warmboot firmware (the code that runs when you put your Switch to sleep and wake it up). This exploit also allows for a full system takeover, as we can reboot the system into a state with the same posibilities that fusee-gelee provides. **Deja-vu is a browser-based, software only exploit. You must launch the exploit through the browser every time you reboot your system into stock firmware.**

Deja-vu currently only has implementations available from firmwares 1.0.0 - 3.0.0 and 4.0.1 - 4.1.0, however the exploit theoretically works up to firmware 7.0.1 (the exploit was patched in firmware 8.0.0) and support for these higher firmwares should be added in the future. The current deja-vu implementations are **Nereba** for firmware 1.0.0, and **Caffeine** for firmwares 2.0.0-3.0.0 and 4.0.1 - 4.1.0.

Custom Firmware
^^^^^^^^^^^^^^^

This guide will focus on using a configuration of the Hekate custom bootloader, as well as the Atmosphere custom firmware, both provided by Team AtlasNX's Kosmos. You can also install ReiNX along the way if you wish to use that instead, however this guide will assume you are using Hekate and Atmosphere, and will not walk you through using ReiNX.

Atmosphere provides most things you might expect in a custom firmware, including homebrew, cheats, game mods, emuNAND (referred to as emuMMC on Switch), and more.

........

.. danger::
	* Nintendo is taking no chances with the Nintendo Switch. Permanent console bans can and often do happen. This guide will take many precautions to avoid getting banned, but this site assumes no responsibility if your system is banned.
	* There is always a chance that your Nintendo Switch will brick. This is very rare, and often recoverable on fusee-gelee vulnerable Switches. For unpatched Switches, extra precautions will be taken to avoid bricking as much as possible.
	* Due to the level of access these exploits provide, malicious homebrew exists. These can brick your Switch or otherwise render your Switch inoperable. You should only ever run homebrew from trusted sources.
	* Follow the guide and everything should be fine.
	
.. note::
	This guide will work on **all firmware versions** as long as fusee-gelee is not patched on the Switch. The guide will include a step for checking if fusee-gelee is patched or not. If fusee-gelee is patched, this guide will only work on patched Switches running firmware 4.1.0.

    
........

.. raw:: html

	<div class="admonition warning">
		<p class="last">Continue to <a href="checkingrcm.html">Checking RCM</a></p>
	</div>

.. toctree::
   :maxdepth: 4
   :caption: Contents:
