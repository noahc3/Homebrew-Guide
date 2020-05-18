.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

After Setup (fusee-gelee)
=========================

Congratulations! By this point you have:

* Learned how to enter RCM
* Learned how to launch fusee-gelee payloads through RCM
* Learned how to perform NAND backups
* Learned how to block as much Nintendo telemetry as possible

........
   
Launching Atmosphere CFW
------------------------

To launch Atmosphere:

1. Enter RCM on your Switch
2. Push the Hekate payload to your Switch
3. Tap **'Launch > CFW (SYSNAND)'**

Hekate will now boot Atmosphere. Note that Atmosphere CFW does not look fundamentaly different to the normal Switch operating system. You can verify you are in Atmosphere by trying to load the Homebrew Menu (see below) or checking if the system version string in System Settings contains **(AMS x.x.x)**.


Accessing the Homebrew Menu
---------------------------

Homebrew installed by placing an **NRO** file into the **/switch** folder on your SD card can be launched through the Homebrew Menu.

Access the Homebrew Menu by holding the **R** button while opening **any game or app** or by simply opening the **album**. Note that for games, you need to hold **R** *after* choosing a user (if applicable). Also note that not all Homebrew work by launching them through the Album and require you to run them through a game.

To use the Album again in CFW, hold down the **R** button while clicking on the Album icon.

........

What's Next?
------------------------

It is very highly recommended that you setup emuMMC to protect your Switch from bricking, and so you can use the latest firmware version for online play and games without losing access to CFW.

.. raw:: html

	<div class="admonition warning">
		<p class="last">To setup emuMMC, continue to <a href="/emummc/linux">Create an emuMMC on Linux</a>, <a href="/emummc/mac">Create an emuMMC on Mac OS</a>, or <a href="/emummc/windows">Create an emuMMC on Windows</a></p>
	</div>


.. toctree::
   :maxdepth: 2
   :caption: Contents:
