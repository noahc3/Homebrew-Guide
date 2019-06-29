.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Frequently Asked Questions
==========================

Is it safe to update to the latest firmware version?
----------------------------------------------------

When a new firmware update is released, you should always wait for SDSetup and/or SDFilesSwitch to add support for it, or if a trusted source says it is safe. New firmware versions can also bring unwanted telemetry. Ultimately, whether or not you update is up to you.

**As of writing, the latest firmware version is 8.1.0. It is currently completely safe to update as long as you are using Atmosphere v0.9.1 or a bundle from SDSetup downloaded after June 26th 2019.**
    
........
   
Should I disable WiFi?
----------------------

This is an extreme that you don't necessarily need to take, though it will basically 100% guarantee you won't get banned (since you are basically banning yourself).

Using 90DNS (163.172.141.219 or 45.248.48.62) or enabling GDPR protections is usually enough to keep from being banned as long as you don't care about NSP files.

........

I can't load Homebrew Launcher?
-------------------------------

When trying to access Album, or any game, hold the R button and this will launch Homebrew Launcher.

........

What is AutoRCM? I heard it drains the battery too?
---------------------------------------------------

.. important:: UNDER NO CIRCUMSTANCES SHOULD YOU ENABLE AUTORCM ON AN IPATCHED SWITCH. THIS WILL CAUSE YOU TO BRICK YOUR SWITCH AS YOU CANNOT GET OUT OF IT!

AutoRCM essentially corrupts part of your boot sector in order to force your Switch to always boot into RCM mode. This is incredibly handy for two reason:

* You no longer need a jig to access RCM 
* It stops you from accidently burning fuses

AutoRCM will only drain your battery if you leave your Switch in RCM mode, which is a black screen but your Switch is still "on". To stop this, make sure you shut your Switch down properly, or hold power for 12 seconds.

........

FAT32 or ExFAT?
-----------------------------

Unfortunately ExFAT on the Switch, specifically with Custom Firmware, has terrible drivers. This can easy corruption and force you to start again if this happens.

We highly recommend you stay with FAT32 as it almost never corrupts, and there is no draw backs since the Switch automatically splits it's games on FAT32, and Hekate splits NAND back ups for you.

In order to format an SD Card on Windows above 32GB, use GuiFormat.

........

What are sigpatches?
--------------------

Sigpatches allow your Switch to install and run unofficial NSP files (digital titles that appear on the home menu). Note that you must use CFW to launch these applications even after installation as sigpatches are always required to do so.

.. important:: 
Using ES or FS patches are not supported by Atmosphere or Kosmos and never will be. Please use Google to answer any questions regarding this.

........


    
What does 'burning fuses' mean? / Can I downgrade my Nintendo Switch?
----------------------------------------------------------------------

The Switch uses a common anti-downgrade technique that utilizes microscopic (ie. cannot be replaced) fuses built into the CPU. When you turn on your Switch through regular means, the firmware performs a fuse check:

* The firmware will first check for how many fuses are burnt
* If there are less fuses burnt than the firmware version expects, it will burn up fuses up to as many as it expects and reboot.
* If there are exactly enough fuses burnt as the firmware expects, it will allow the Switch to load
* If there are too many fuses burnt, your Switch will shutdown, not allowing the firmware to boot.

The fusee-gelee exploit happens before any of these checks occur, meaning these checks can be bypassed. **Hekate, ReiNX, and SX OS all block fuses from being burnt and bypass the fuse check**, meaning you can keep your Switch in a downgradable state if you update your firmware manually.
    
........

How can I load .XCI cartridge backups?
--------------------------------------

Currently only SX OS is able to emulate cartridges using XCI files. SX OS is a paid custom firmware (usually $25 USD depending on the reseller) by Team Xecuter, with some drama behind it due to theft and license violation of open source code.


.........

.. tip::
    If this page doesn't answer your question, feel free to ask on the `Team AtlasNX Discord <https://discord.teamatlasnx.com/>`_.

.. toctree::
   :maxdepth: 2
   :caption: Contents:
