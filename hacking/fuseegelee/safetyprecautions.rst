.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Safety Precautions (fusee-gelee)
================================

You are now able to run Hekate on your Nintendo Switch to launch the Atmosphere (Kosmos) custom firmware. These next steps will make sure your being as careful as possible in regards to keeping your Switch from bricking and getting banned. These steps are optional but highly recommended

.. note:: 
   If something goes wrong or you need help, check `troubleshooting </troubleshooting.html>`_.
   
........
   
Step 1: Backing up your NAND and BIS keys
-----------------------------------------

By backing up your NAND (the Switch's internal memory), you will later be able to restore it in the event that anything goes wrong, essentially rewinding it back to a previous state. BIS keys are also good to backup so you can reinstall any firmware version manually should your NAND backup become corrupted or lost.

1. Enter RCM and send the Hekate payload provided in the SDSetup download to your Switch (refer to Section 1: Accessing RCM for instructions about sending the Hekate payload)
2. In Hekate, select **'Tools > Backup eMMC > eMMC BOOT0 & BOOT1'**
3. When finished, remove your SD card (you don't need to shutdown Hekate), insert it into your PC, and copy the 'backup' folder to a safe location on your PC. Afterwards, delete the 'backup' folder on your SD card.
4. Insert your SD card back into your Switch
5. In Hekate, select **'eMMC RAW GPP'**

    * If your SD card has less than ~32GB free space, Hekate will provide additional instructions every few minutes about pulling files off of your SD card so it can continue.

6. If you weren't required to copy files during the backup process, once again copy the 'backup' folder off of your SD card and put it in a safe location on your PC. Delete the 'backup' folder on your SD card.
7. Close the Backup menu, go back to the Home tab and tap **'Reboot > RCM'**
8. Send the **"Lockpick_RCM.bin"** payload provided in the SDSetup download to your Switch (if you do not have this payload, you can obtain it `from GitHub <https://github.com/shchmue/Lockpick_RCM/releases/>`_.
9. Select `Dump from SysNAND` and press Power to confirm; press again Power when finished to go back to the Lockpick menu
10. Select poweroff from the menu once finished.
11. Insert your SD card into your PC.
12. Copy the **/switch/prod.keys** file to a safe location.

.. warning::
    It is highly recommended that you store these backups and keys in multiple locations (ex. cloud storage, external harddrive, etc) as they may be critical to restoring your Switch if anything goes wrong in the future.

........

Step 2: (EU Only) Enabling GDPR Protections
--------------------------------------------

Users with EU Nintendo Network accounts have the option of enabling GDPR protections in their account settings. Doing so has been confirmed to disable lots of telemetry that can get you banned. This setting will not appear if your account is not from the EU.

1. Go to https://accounts.nintendo.com/setting
2. Login with your NNID
3. Under **'Other settings'**, Edit **'Usage information'** and set it to **'Don't share'**
4. Save your changes

........

Step 3: Blocking Updates & Telemetry with 90DNS
-----------------------------------------------

You can configure your WiFi settings to use a custom DNS server that blocks all connections to Nintendo servers (except the internet connection test server). 

**Doing this will make games unable to be played online, block eShop, game updates and system updates.** If you are OK with this, follow these instructions:

1. Boot your Switch with or without CFW.
2. Open settings and go to the Internet tab
3. Configure a WiFi connection if you have not already done so
4. Select your Wifi network and pick Change Settings
5. Set DNS Settings to Manual
6. Set **'Primary DNS'** to **'163.172.141.219'**
7. Set **'Secondary DNS'** to **'45.248.48.62'**
8. Save and perform the connection test
    
........

.. raw:: html

	<div class="admonition warning">
		<p class="last">Continue to <a href="/hacking/fuseegelee/aftersetup">After Setup (fusee-gelee)</a></p>
	</div>

.. toctree::
   :maxdepth: 2
   :caption: Contents:
