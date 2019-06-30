.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Using and Configuring Hekate
============================

.. note:: 
   If something goes wrong or you need help, check `troubleshooting </troubleshooting.html>`_.

........
   
Launching Atmosphere CFW
------------------------

Atmosphere is currently the CFW with the largest feature set. It enables game modding, homebrew, backup installs, and more. To launch Atmosphere:

1. Enter Hekate through RCM or with PegaScape.
2. Tap **'Launch > CFW'**

Hekate will now boot Atmosphere.

........

Chainloading other fusee-gelee payloads within Hekate
-----------------------------------------------------

Hekate itself supports chainloading other fusee-payloads so you can, for example, launch ReiNX from Hekate. This is useful for modchips or dongles when you can only configure one payload.

1. Put any payloads you wish to chainload into the **'/bootloader/payloads'** folder on your SD card.
2. Enter Hekate through RCM or PegaScape
3. Select **'Payloads'**
4. Select your payload of choice

........

Configuring Auto-Boot with Hekate
---------------------------------

By configuring Auto-Boot, each time you run Hekate, instead of seeing the menu, you will be greeted with a splash screen and immediately launch into the configuration of your choice.

1. Enter Hekate through RCM or PegaScape.
3. Select **'Options > Auto boot'**
4. Select your launch configuration of choice

If you need to get back into the menu with autoboot enabled, hold **VOL-** immediately when the Kosmos bootlogo appears when entering Hekate.

........

Enabling AutoRCM
----------------

.. raw:: html

    <div class="admonition danger" style="color:#C42525" align="center">
		<h1 style="margin-bottom:0.5rem;margin-top:0.5rem;font-size:2.5rem">WARNING</h1>
        <h2>Never enable AutoRCM on an IPATCHED Switch</h2>
        <p>This section is only intended to be used on consoles with a vulnerable RCM. Enabling AutoRCM on an IPATCHED Switch will <b>literally BRICK your Switch.</b>
        <h2 style="margin-bottom:0.5rem">If you cannot run payloads from RCM with fusee-gelee, <b>DO NOT ENABLE AUTORCM.</b></h2>
        <h2>Failure to heed this warning <b>will</b> result in a bricked Switch.</h2>
	</div>

AutoRCM is an optional software method of forcing your Switch to go into RCM on every launch, without the need of a jig or hardmod. Essentially, you are purposefully bricking your Switch in a controlled matter that forces it to launch into recovery. This might sound scary but is not actually dangerous, and can be undone at any time.

By doing this, you will need to use a payload sender to boot your Switch after every restart/shutdown.

1. Enter RCM on your Switch
2. Push the Hekate payload to your Switch **while holding Vol-** to skip autoboot and enter the menu
3. Select **'Tools > Archive Bit - AutoRCM > Enable AutoRCM'**

You can disable AutoRCM by entering the same menu above and selecting 'Disable AutoRCM'.

From now on, to boot into stock firmware, select **'Launch > Stock'** in Hekate.

.. warning::
    Shutting down the Switch from custom firmwares other than Atmosphere after booting with AutoRCM **will not turn off the Switch!** You must choose **'Power Off'** from Hekate to properly shutdown the Switch. Not doing so will leave your Switch in RCM, slowing draining battery.
    
........

Step 1: Backing up your NAND and BIS keys
-----------------------------------------

By backing up your NAND (the Switch's internal memory), you will later be able to restore it in the event that anything goes wrong, essentially rewinding it back to a previous state. BIS keys are also good to backup so you can reinstall any firmware version manually should your NAND backup become corrupted or lost.

1. Enter Hekate through RCM or PegaScape.
2. In Hekate, select **'Tools > Backup eMMC > eMMC BOOT0 & BOOT1'**
3. When finished, remove your SD card (you don't need to shutdown Hekate), insert it into your PC, and copy the 'backup' folder to a safe location on your PC. Afterwards, delete the 'backup' folder on your SD card.
4. Insert your SD card back into your Switch
5. In Hekate, select **'eMMC RAW GPP'**

    * If your SD card has less than ~32GB free space, Hekate will provide additional instructions every few minutes about pulling files off of your SD card so it can continue.

6. If you weren't required to copy files during the backup process, once again copy the 'backup' folder off of your SD card and put it in a safe location on your PC. Delete the 'backup' folder on your SD card.
7. Close the Backup menu, go back to the Home tab and tap **'Reboot > RCM'**
8. Send the **"Lockpick_RCM.bin"** payload provided in the SDSetup download to your Switch (if you do not have this payload, you can obtain it `from GitHub <https://github.com/shchmue/Lockpick_RCM/releases/>`_.
9. Press the power button to shutdown once finished.
10. Insert your SD card into your PC.
11. Copy the **/switch/prod.keys** file to a safe location.

.. warning::
    It is highly recommended that you store these backups and keys in multiple locations (ex. cloud storage, external harddrive, etc) as they may be critical to restoring your Switch if anything goes wrong in the future.

........

.. toctree::
   :maxdepth: 2
   :caption: Contents: