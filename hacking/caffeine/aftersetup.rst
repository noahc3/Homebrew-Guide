.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

After Setup (Caffeine)
=========================

Congratulations! By this point you have:

* Learned how to use PegaScape to reboot to Hekate.
* Learned how to launch fusee-gelee payloads through Hekate.
* Learned how to perform NAND backups.
* Learned how to block as much Nintendo telemetry as possible.

........
   
Launching Atmosphere CFW
------------------------

To launch Atmosphere:

1. Reboot to Hekate using PegaScape.

2. Tap **'Launch > CFW (sysMMC)'**

Note that Atmosphere CFW does not look fundamentaly different to the normal Switch operating system. You can verify you are in Atmosphere by trying to load the Homebrew Menu (see below) or checking if the system version string in System Settings contains **(AMS x.x.x)**.

.. important::

    When you select "Restart" in the power options menu, Atmosphere will instead reboot into Hekate. This means you do not necessarily have to rerun PegaScape on every reboot.

.. important::

    It is safe to remove and reinsert the SD card while in Hekate as long as you do not navigate through menus.

.. important::

    PegaScape will not work in Atmosphere. You must shutdown your switch and turn it on to enter stock firmware to use PegaScape.

    

Accessing the Homebrew Menu
---------------------------

Homebrew installed by placing an **NRO** file into the **/switch** folder on your SD card can be launched through the Homebrew Menu.

Access the Homebrew Menu by holding the **R** button while opening **any game, app or the album** while in Atmosphere. Note that for games, you need to hold **R** *after* choosing a user (if applicable).

........

What's Next?
------------------------

It is highly recommended that you setup emuMMC to protect your Switch from bricking, and so you can use the latest firmware version for online play and games without losing access to CFW.

.. raw:: html

	<div class="admonition warning">
		<p class="last">To create an emuMMC on Windows, continue to <a href="/emummc/windows">Create an emuMMC on Windows</a></p>
	</div>
	
	<div class="admonition warning">
		<p class="last">To create an emuMMC on MacOS, continue to <a href="/emummc/mac">Create an emuMMC on MacOS</a></p>
	</div>

	<div class="admonition warning">
		<p class="last">To create an emuMMC on Linux, continue to <a href="/emummc/linux">Create an emuMMC on Linux</a></p>
	</div>


.. toctree::
   :maxdepth: 2
   :caption: Contents:
