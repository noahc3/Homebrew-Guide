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

1. Enter RCM on your Switch
2. Push the Hekate payload to your Switch

Hekate will now autoboot Atmosphere.

........

Chainloading other fusee-gelee payloads within Hekate
-----------------------------------------------------

Hekate itself supports chainloading other fusee-payloads so you can, for example, launch ReiNX from Hekate. This is useful for modchips or dongles when you can only configure one payload.

1. Put any payloads you wish to chainload into the **'/bootloader/payloads'** folder on your SD card.
2. Enter RCM on your Switch
3. Push the Hekate payload to your Switch **while holding Vol-** to skip autoboot and enter the menu
4. Select **'Launch > Payloads'**
5. Select your payload of choice

........

Configuring Auto-Boot with Hekate
---------------------------------

By configuring Auto-Boot, each time you run Hekate, instead of seeing the menu, you will be greeted with a splash screen and immediately launch into the configuration of your choice.

1. Enter RCM on your Switch
2. Push the Hekate payload to your Switch **while holding Vol-** to skip autoboot and enter the menu
3. Select **'Options > Auto boot'**
4. Select your launch configuration of choice

If you need to get back into the menu, hold **Volume Down** when sending the Hekate payload.

........

Enabling AutoRCM
----------------

AutoRCM is an optional software method of forcing your Switch to go into RCM on every launch, without the need of a jig or hardmod. Essentially, you are purposefully bricking your Switch in a controlled matter that forces it to launch into recovery. This might sound scary but is not actually dangerous, and can be undone at any time.

By doing this, you will need to use a payload sender to boot your Switch after every restart/shutdown.

1. Enter RCM on your Switch
2. Push the Hekate payload to your Switch **while holding Vol-** to skip autoboot and enter the menu
3. Select **'Tools > AutoRCM > Enable AutoRCM'**

You can disable AutoRCM by entering the same menu above and selecting 'Disable AutoRCM'.

From now on, to boot into stock firmware, select **'Launch > Stock'** in Hekate.

.. warning::
    Shutting down the Switch from custom firmwares other than Atmosphere after booting with AutoRCM **will not turn off the Switch!** You must choose **'Power Off'** from Hekate to properly shutdown the Switch. Not doing so will leave your Switch in RCM, slowing draining battery.
    
........

Creating a NAND Backup
----------------------

By backing up your NAND (the Switch's internal memory), you will later be able to restore it in the event that anything goes wrong, essentially rewinding it back to a previous state.

1. Enter RCM on your Switch
2. Push the Hekate payload to your Switch **while holding Vol-** to skip autoboot and enter the menu
3. In Hekate, select **'Tools > Backup > Backup eMMC BOOT0/1'**
4. When finished, remove your SD card (you don't need to shutdown Hekate), insert it into your PC, and copy the 'backup' folder to a safe location on your PC. Afterwards, delete the 'backup' folder on your SD card.
5. Insert your SD card back into your Switch
6. In Hekate, select **'Backup eMMC RAW GPP'**

    * If your SD card has less than ~32GB free space, Hekate will provide additional instructions every few minutes about pulling files off of your SD card so it can continue.

7. If you weren't required to copy files during the backup process, once again copy the 'backup' folder off of your SD card and put it in a safe location on your PC. Delete the 'backup' folder on your SD card.
8. Go back to the main menu and select **'Power Off'**

.. warning::
    It is highly recommended that you store these backups in multiple locations (ex. cloud storage, external harddrive, etc) as they may be critical to restoring your Switch if anything goes wrong in the future.

.. toctree::
   :maxdepth: 2
   :caption: Contents: