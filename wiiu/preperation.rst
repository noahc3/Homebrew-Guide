.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Preparations
============

This section of the guide will help you to prepare everything.
    
Step 0: What You Will Need
--------------------------

* A SD Card (or Micro SD card + adapter)

    * We recommend a SD with at least 4GB+ even if not needed. A small SD card is enough to get CFW running, but larger ones are preferred for installing games and performing NAND backups efficiently.
    * If you want to backup your Wii U, you should use a SD at least twice the size of your console (16GB for the white console and 64GB for the black one)

* A working internet connection on your Wii U

    * The browser exploit requires internet (Crazy, I know). If you decide to install Haxchi this is only needed once however.

* One of the following games if you want Haxchi:

    * **NOTE:** This is not required if you just want to run the Browser exploit. We do recommend buying one of these games though
    * **WARNING:** Don't use a pirated copy of these games. This will result in a brick.


        +-----------------------------------------------+
        | Compatible Haxchi Games                       |
        +===============================================+
        | Animal Crossing: Wild World                   |
        +-----------------------------------------------+
        | Big Brain Academy                             |
        +-----------------------------------------------+
        | Brain Age                                     |
        +-----------------------------------------------+
        | DK: Jungle Climber                            |
        +-----------------------------------------------+
        | Dr. Kawashima’s Brain Training                |
        +-----------------------------------------------+
        | Kirby: Canvas Curse                           |
        +-----------------------------------------------+
        | Kirby: Mass Attack                            |
        +-----------------------------------------------+
        | Kirby: Squeak Squad / Kirby: Mouse Attack     |
        +-----------------------------------------------+
        | Legend of Zelda: Phantom Hourglass            |
        +-----------------------------------------------+
        | Legend of Zelda: Spirit Tracks                |
        +-----------------------------------------------+
        | Mario & Luigi: Partners in Time               |
        +-----------------------------------------------+
        | Mario Kart DS                                 |
        +-----------------------------------------------+
        | New Super Mario Bros.                         |
        +-----------------------------------------------+
        | Pokemon Mystery Dungeon: Explorers of the Sky |
        +-----------------------------------------------+
        | Pokemon Ranger                                |
        +-----------------------------------------------+
        | Pokemon Ranger: Guardian Signs                |
        +-----------------------------------------------+
        | Pokemon Ranger: Shadows of Almia              |
        +-----------------------------------------------+
        | Starfox Command                               |
        +-----------------------------------------------+
        | Super Mario 64 DS                             |
        +-----------------------------------------------+
        | Wario: Master of Disguise                     |
        +-----------------------------------------------+
        | WarioWare: Touched                            |
        +-----------------------------------------------+
        | Yoshi’s Island DS                             |
        +-----------------------------------------------+
        | Yoshi’s Touch & Go                            |
        +-----------------------------------------------+

    * We recommend buying Brain Age as it's the cheapest at 6.99€ ($6.99 USD). However any of those games work fine!
    * If you had Brain Age or Brain Training installed for a very long time, please consider deleting and redownloading it as older versions are not compatible with Haxchi.

........

Step 1: Format your SD Card
---------------------------

The Wii U needs a FAT32 formatted SD card. However unlike the Switch, **only FAT32 works!**. If you need to format your SD on Windows and you can't find FAT32 as a selectable option, use `guiformat <http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm>`_ and set the Allocation Unit Size to 32K (32768).

.. important::

    **Don't call your SD "wiiu", this will cause problems later on**

........

Step 2: Download Kosmos Wii U
-----------------------------

1. Grab the latest version of Kosmos-WiiU from `https://github.com/NicholeMattera/WiiU-Kosmos/releases <https://github.com/NicholeMattera/WiiU-Kosmos/releases>`_
2. Insert your SD card into your PC
3. Open **`Kosmos-WiiU-vX.zip`** with a ZIP Archiver of your choice
4. Copy the content of the ZIP onto your SD
5. You should now have a **`wiiu`,** **`haxchi`** and **`install`** folder on your SD

Congratulations, we're done with preparations.

........

.. raw:: html

	<div class="admonition warning">
		<p class="last">Continue to <a href="/wiiu/browserexp">Exploits and You</a></p>
	</div>

.. toctree::
   :maxdepth: 2
   :caption: Contents:
