.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Preparations.
=============

This section of the guide will help you to prepare everything.
    
Step 0: What You Will Need
--------------------------

* A Micro SD Card

    * You should have an SD card at least 4GB in size. A small SD card is enough to get CFW running, but larger ones are preferred for installing games and performing NAND backups efficiently.
    * If you want to backup your Wii U, you should use a SD at least twice the size of your console (16GB for the white console and 64GB for the black one)

* A working internet connection on your Wii U

    * The browser exploit requires internet (Crazy, I know). If you decide to install Haxchi this is only needed once however.

* One of the following games if you want Haxchi:

    * **NOTE:** This is not required if you just want to run the Browser exploit. We do recommend buying one of these games though
    * **WARNING:** Don't use a pirated copy of these games. This will result in a brick.

    .. raw:: html
        <table>
        <thead>
            <tr>
            <th>Compatible Haxchi Games</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Animal Crossing: Wild World</td>
            </tr>
            <tr>
            <td>Big Brain Academy</td>
            </tr>
            <tr>
            <td>Brain Age</td>
            </tr>
            <tr>
            <td>DK: Jungle Climber</td>
            </tr>
            <tr>
            <td>Dr. Kawashima’s Brain Training</td>
            </tr>
            <tr>
            <td>Kirby: Canvas Curse</td>
            </tr>
            <tr>
            <td>Kirby: Mass Attack</td>
            </tr>
            <tr>
            <td>Kirby: Squeak Squad / Kirby: Mouse Attack</td>
            </tr>
            <tr>
            <td>Legend of Zelda: Phantom Hourglass</td>
            </tr>
            <tr>
            <td>Legend of Zelda: Spirit Tracks</td>
            </tr>
            <tr>
            <td>Mario &amp; Luigi: Partners in Time</td>
            </tr>
            <tr>
            <td>Mario Kart DS</td>
            </tr>
            <tr>
            <td>New Super Mario Bros.</td>
            </tr>
            <tr>
            <td>Pokemon Mystery Dungeon: Explorers of the Sky</td>
            </tr>
            <tr>
            <td>Pokemon Ranger</td>
            </tr>
            <tr>
            <td>Pokemon Ranger: Guardian Signs</td>
            </tr>
            <tr>
            <td>Pokemon Ranger: Shadows of Almia</td>
            </tr>
            <tr>
            <td>Starfox Command</td>
            </tr>
            <tr>
            <td>Super Mario 64 DS</td>
            </tr>
            <tr>
            <td>Wario: Master of Disguise</td>
            </tr>
            <tr>
            <td>WarioWare: Touched</td>
            </tr>
            <tr>
            <td>Yoshi’s Island DS</td>
            </tr>
            <tr>
            <td>Yoshi’s Touch &amp; Go</td>
            </tr>
        </tbody>
        </table>

    * We recommend buying Brain Age as it's the cheapest at 6.99€ ($6.99 USD). However any of those games work fine!
    * If you had Brain Age or Brain Training installed for a very long time, please consider deleting and redownloading it as older versions are not compatible with Haxchi.

........

Step 1: Format your SD
----------------------

Like your Switch, the Wii U needs a FAT32 formatted Switch. However unlike the Switch, **only FAT32 works!**. If you need to format your SD on Windows and you can't find FAT32 as a selectable option use
.. raw:: html

    <b><a href="http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm">guiformat</a></b>

and set the Allocation Unit Size to 32K (32768).

.. important::

**Don't call your SD "wiiu", this will cause problems later on**

........

Step 2: Download Kosmos Wii U
---------------------------------------------------------------

1. Grab the latest version of Kosmos-WiiU from https://github.com/AtlasNX/WiiU-Kosmos/releases
2. Insert your SD into your PC
3. Open `Kosmos-WiiU-vX.zip` with a ZIP-Archiver of your choice
4. Copy the content of the ZIP onto your SD
5. You should now have a `wiiu`, `haxchi` and `install` folder on your SD
6. Congratulations, we're done with preparations.

........

.. raw:: html

	<div class="admonition warning">
		<p class="last">Continue to <a href="wiiu/browserexp.html">"Exploits, Homebrew Channel and more"</a></p>
	</div>

.. toctree::
   :maxdepth: 2
   :caption: Contents: