.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Upgrading/Downgrading Manually With a PC
========================================

This guide will teach you how to upgrade or downgrade to any firmware version of your choosing using the ChoiDujour Windows application. **Your Switch does not need to be booting to perform this guide, and as such it is also useful for unbricking a Switch.**

**Read every warning before starting.**

.. raw:: html

    <div class="admonition danger" style="color:#C42525" align="center">
		<h1 style="margin-bottom:0.5rem;margin-top:0.5rem;font-size:2.5rem">WARNING</h1>
        <h2>Do not follow this guide on an IPATCHED Switch.</h2>
        <p>This guide is only intended to be used on consoles with a vulnerable RCM. It is <b>very very dangerous</b> to follow this guide without the ability to launch payloads via the Switches RCM mode using fusee-gelee.
        <h2 style="margin-bottom:0.5rem">If you cannot run payloads from RCM with fusee-gelee, <b>DO NOT FOLLOW THIS GUIDE.</b></h2>
        <h2>Failure to heed this warning <b>will</b> result in a bricked Switch.</h2>
	</div>

.. note:: 
   If something goes wrong or you need help, check `troubleshooting </troubleshooting.html>`_.
   
.. danger::
    This guide is only intended to be used with RCM. It is **very very dangerous** to follow this guide without the ability to launch payloads via RCM. **Do not follow this guide if you cannot launch RCM payloads!**

.. danger::
    **This guide will likely take you 30-60 minutes to complete if it is your first time.** If you decide to stop half way through, or if anything goes wrong, you must restore your NAND backup that you will create with Hekate to make your Switch work again.
    
.. danger::
    When downgrading across major firmware versions (ex. 7.0.0 -> 6.2.0, 6.1.0 -> 4.1.0), you may be required to lose access to **all user content on your Switch including users, game saves and installed games.** If this turns out to be the case, you will have the option to either restore your Switch back to it's original state, retaining all of your data, or continue with a full wipe to complete the downgrade. This will happen very late in the guide, and as such you may find all of your effort was for nothing if you do not want to lose system data. **Upgrading will never require a wipe, only downgrading.**
    
.. danger::
    **This guide is only for who do not have access to CFW on their latest firmware version and do not have a working NAND backup from a lower firmware version.** If you have access to CFW, follow `Manually Updating/Downgrading </usingcfw/manualupgrade>`_ instead. If you have a working NAND backup, you can restore that with Hekate instead to downgrade to whatever firmware version that NAND backup was made on. In all cases, the side-effects below might still apply.

.. danger::
    **You cannot upgrade or downgrade directly to any firmwares from 6.2.0-9.1.0** as the ChoiDujour PC application does not support these firmware versions. You must upgrade/downgrade to any other firmware version first and then upgrade to these higher firmware versions with the ChoiDujourNX Switch application if you specifically want one of these firmware versions.
    
.. danger::
    This process is very complex and contains many steps. Make sure to read everything carefully, **as any missteps can lead to a bricked Switch.** You have been warned.

.. danger::
    **AutoRCM is required while your Switch is downgraded.** AutoRCM is a software method of forcing your Switch to go into RCM on every launch, without the need of a jig or hardmod. Essentially, you are purposefully bricking your Switch in a controlled matter that forces it to launch into recovery. This might sound scary but is not actually dangerous, and can be undone at any time.

    AutoRCM has the following benefits:

    * You will be able to bypass the normally required fuse count, allowing you to launch any firmware version of your choosing.
    * The Switch will not burn any fuses, meaning you can downgrade your Switch to a lower firmware version in the future should the need arise.
    * You will never accidentally boot stock firmware, meaning you can avoid having telemetry data accidentally sent to Nintendo.
    
    AutoRCM has the following disadvantages:

    * You will not be able to boot your Switch at all without a payload sender.
    
    If you are downgrading, your fuse count will be incorrect for that firmware version. Because of this, **AutoRCM is required to boot your Switch** until you upgrade again.
    
    AutoRCM can always be disabled Hekate > Tools > AutoRCM
    
    .. tip::
        In the past, downgrading below your fuse count would mean you could no longer use sleep mode. This is no longer the case, as Hekate and Atmosphere both support sleep mode while downgraded.
   
.. note:: 
   This guide will allow you to recover your BIS keys if you do not already have them.
   
........

Step 0: Before Starting
-----------------------

1. You need a Windows PC capable of pushing payloads **(you NEED a Windows PC to follow this guide)**
2. You should have the latest version of Hekate and a working Hekate setup on your SD card. If you do not, follow `SD Card Setup (fusee-gelee) </hacking/fuseegelee/sdsetup>`_ and then return back to this page.
3. You need the firmware files for the firmware version you want to upgrade/downgrade to. These cannot be shared here as they are copyrighted.

    * You cannot use files for firmwares 6.2.0-9.1.0 as the ChoiDujour PC application does not support these versions. If you want to specifically upgrade/downgrade to one of these versions, you must first downgrade to any other firmware version and then upgrade to one of these versions using the ChoiDujourNX Switch application afterwards.
    
4. You need a fully populated hactool keys.txt file. These cannot be shared as doing so is illegal.
    
    * ChoiDujour is very picky about the keys file you use. If you have one generated from Lockpick or HACGUI, use that.

........

Step 1: Preparing Files
-------------------------------------------

1. Make sure your SD card includes a basic Hekate/Atmosphere setup (such as the one installed when following this guide)
2. Insert your SD card into your PC
3. Go to `switchtools.sshnuke.net <https://switchtools.sshnuke.net>`_
4. Download the latest version of **ChoiDujour (NOT ChoiDujourNX)** by rajkosto
5. Download the latest version of **HacDiskMount** by rajkosto
6. Download the latest version of **memloader** by rajkosto
7. Extract each downloaded .ZIP file to separate folders on your PC
8. Copy your hactool **keys.txt** into the ChoiDujour folder
9. Create a folder named **"fw"** inside of your ChoiDujour folder
10. Extract the contents of your firmware .ZIP file to the newly created **"fw"** folder
11. Go to `www.balena.io/etcher/ <https://www.balena.io/etcher/>`_, download and install Etcher for your system
12. In File Explorer, make sure Hidden Files are set to be shown

.. image:: https://puu.sh/C65Ri/a4bf21e2f4.png

........

Step 2: Backing up your NAND
-------------------------------------------

By backing up your NAND (the Switch's internal memory), you will later be able to restore it in the event that anything goes wrong, essentially rewinding it back to a previous state.

**If anything goes wrong during this guide, you can always restore this backup with Hekate and restart**

1. Enter RCM and send the **"hekate-ctcaer-5.0.1.bin"** payload
2. In Hekate, select **'Tools > Backup eMMC > eMMC BOOT0 & BOOT1'**
3. When finished, remove your SD card (you don't need to shutdown Hekate), insert it into your PC, and copy the 'backup' folder to a safe location on your PC. Afterwards, delete the 'backup' folder on your SD card.
4. Insert your SD card back into your Switch
5. In Hekate, select **'eMMC RAW GPP'**

    * If your SD card has less than ~32GB free space, Hekate will provide additional instructions every few minutes about pulling files off of your SD card so it can continue.

6. If you weren't required to copy files during the backup process, once again copy the 'backup' folder off of your SD card and put it in a safe location on your PC. Delete the 'backup' folder on your SD card.
7. Close the Backup menu, go back to the Home tab and tap **'Reboot > RCM'**

.. tip:: 
   It is highly recommended that you store these backups in multiple locations (ex. cloud storage, external harddrive, etc) as they may be critical to restoring your Switch if anything goes wrong in the future.
   
........
   
Step 3: Preparing SD card
-------------------------------------------

1. Insert your SD card into your PC
2. Navigate to where you extracted memloader earlier
3. Copy **the contents** of the **"/sample"** folder to the **root** of your SD card
4. Safely eject your SD card from your PC and put it into your Switch

........

Step 4: Converting Firmware Files
-------------------------------------------

1. Navigate to your ChoiDujour folder with File Explorer
2. In the address bar at the top, type **"cmd"** and press enter. A command prompt should open.

.. image:: https://puu.sh/C652v/857f93f5ed.png

3. In the command prompt, type **"ChoiDujour.exe \\-\\-keyset=keys.txt fw"** without quotes

    * If ChoiDujour says it cannot find firmware files or keys.txt, you likely put keys.txt or the firmware files in the wrong location. Try steps 1.9-1.12 again.
    * If the script fails otherwise, your keys.txt may be incompatible with ChoiDujour.

4. Once finished, you should see a message similar to **"All files verified! Prepared firmware update is in folder NX-X.X.X"** in the command prompt. Make sure you can find this folder, it will be used later.

........

Step 5: Transferring boot0 to your Switch
-------------------------------------------

.. danger::
    In this step, **NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".**
    
    .. image:: https://puu.sh/C65yy/8d4a4708fd.png
    
1. Press **Windows Key + R**
2. In the **"Run"** dialogue, type **"devmgmt.msc"** without quotes and press enter to open Device Manager
3. Put your Switch into RCM and send the **"memloader.bin"** payload you downloaded earlier
4. On your Switch, using volume buttons, navigate to **"ums_boot0.ini"** and select it with power
5. The disk should now connect to your PC. In Device Manager, make sure you can see **"LINUX UMS DISK 0"** under **"Disk Drives"**

    * If you see "USB Download Gadget", right click the entry and choose Uninstall.
    * If you cannot see this, look through Device Manager for any devices with a yellow warning icon. Right click and choose uninstall.
    * After doing the above, choose "Scan for hardware changes" in the Device Manager toolbar
    * If you still cannot see "LINUX UMS DISK 0" under "Disk Drives", STOP! Press and hold the power button to shutdown the Switch and try steps 5.3-5.5 again. You cannot continue until you see this device.

6. Open Etcher.
7. Click **"Select image",** browse for **"BOOT0.BIN"** which was generated within the **NX-X.X.X** folder you created earlier with ChoiDujour

    * Etcher may say that **BOOT0.BIN** is not a bootable image. **Select "Continue" anyways.**

8. Make sure the target is **"Linux UMS USB Device"** if it is not already chosen
9. **"BOOT0.BIN" MUST SHOW AS 1.57MB. "Linux UMS USB Device" MUST SHOW AS 4.19MB.** If any of the sizes are incorrect, **STOP! You cannot continue!** Repeat steps 1.11-1.12, 4.1-4.4, and 5.3-5.9.

.. image:: https://puu.sh/C66TN/97d03d8ae3.png

10. If everything looks alright, press **"Flash!"** and wait for the process to complete.
11. Once finished, hold the power button to shutdown your Switch.

........

Step 6: Transferring boot1 to your Switch
-------------------------------------------

.. danger::
    In this step, **NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".**
    
    .. image:: https://puu.sh/C65yy/8d4a4708fd.png
    
1. Put your Switch into RCM and send the **"memloader.bin"** payload you downloaded earlier
2. On your Switch, using volume buttons, navigate to **"ums_boot1.ini"** and select it with power
3. The disk should now connect to your PC. In Device Manager, make sure you can see **"LINUX UMS DISK 0"** under **"Disk Drives"**

    * If you see "USB Download Gadget", right click the entry and choose Uninstall.
    * If you cannot see this, look through Device Manager for any devices with a yellow warning icon. Right click and choose uninstall.
    * After doing the above, choose "Scan for hardware changes" in the Device Manager toolbar
    * If you still cannot see "LINUX UMS DISK 0" under "Disk Drives", STOP! Press and hold the power button to shutdown the Switch and try steps 5.3-5.5 again. You cannot continue until you see this device.

4. Click **"Select image",** browse for **"BOOT1.BIN"** which was generated within the **NX-X.X.X** folder you created earlier with ChoiDujour

    * Etcher may say that **BOOT0.BIN** is not a bootable image. **Select "Continue" anyways.**

5. Make sure the target is **"Linux UMS USB Device"** if it is not already chosen
6. **"BOOT0.BIN" MUST SHOW AS 524.29KB. "Linux UMS USB Device" MUST SHOW AS 4.19MB.** If any of the sizes are incorrect, **STOP! You cannot continue!** Repeat steps 1.11-1.12, 4.1-4.4, and 5.1-5.7.

.. image:: https://puu.sh/C676E/3dc60b58bb.png

8. If everything looks alright, press **"Flash!"** and wait for the process to complete.
9. Once finished, hold the power button to shutdown your Switch.

........

Step 7: Transferring BCPKG2 images to your Switch
-------------------------------------------------

.. danger::
    In this step, **NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".**
    
    .. image:: https://puu.sh/C65yy/8d4a4708fd.png
    
    
1. Put your Switch into RCM and send the **"memloader.bin"** payload you downloaded earlier
2. On your Switch, using volume buttons, navigate to **"ums_emmc.ini"** and select it with power
3. The disk should now connect to your PC. In Device Manager, make sure you can see **"LINUX UMS DISK 0"** under **"Disk Drives"**

    * If you see "USB Download Gadget", right click the entry and choose Uninstall.
    * If you cannot see this, look through Device Manager for any devices with a yellow warning icon. Right click and choose uninstall.
    * After doing the above, choose "Scan for hardware changes" in the Device Manager toolbar
    * If you still cannot see "LINUX UMS DISK 0" under "Disk Drives", STOP! Press and hold the power button to shutdown the Switch and try steps 5.3-5.5 again. You cannot continue until you see this device.
    
4. Locate HacDiskMount which you extracted earlier
5. Right click **HacDiskMount.exe** and choose **"Run as Administrator"**
6. Choose **File > Open Physical Drive** from the menu bar
7. Choose **Linux UMS disk 0 (29.121GiB).** If you do not see this device **with the exact name, STOP! You cannot continue.** Close HacDiskMount and hold the power button on your Switch to shut down. Repeat steps 7.1-7.7
8. Make sure you see a list of partitions as shown below

.. image:: https://puu.sh/C67nN/a471896603.png

9. Double-click **"BCPKG2-1-Normal-Main"**
10. Make sure both BIS key text boxes are BLANK. Clear them and press **"Test"** if they are not.
11. In the **"Restore from file"** section, select **"Browse"** and search for the **"BCPKG2-1-Normal-Main.bin"** file inside of the **NX-X.X.X** folder generated earlier with ChoiDujour.
12. Select **"Start"** and wait for the process to complete.
13. Close the **"Operations on BCPKG2-1-Normal-Main"** window
14. Repeat steps 7.9-7.13 for each of the following partitions, **making sure to select the appropriately named paritions and filenames for each:**

    * BCPKG2-2-Normal-Sub
    * BCPKG2-3-SafeMode-Main
    * BCPKG2-4-SafeMode-Sub
    * For example, for "BCPKG2-3-SafeMode-Main" you would double click the "BCPKG2-3-SafeMode-Main" partition, and use the "BCPKG2-3-SafeMode-Main.bin" file when restoring.
    
........

Step 8: Recovering your BIS Keys
-------------------------------------------------
    
.. danger::
    BIS, TSEC and SBK keys are console unique. **You cannot use someone else's BIS, TSEC or SBK keys.** Make sure you are using/dumping your own.
    
.. note::
    If you already have your BIS keys, skip to **Step 9**
    
.. note::
    If you already have a backup of **your own console unique** fuses.bin and tsec_keys.bin, skip to step **8.12**
    
.. note::
    You can follow this step even if you have already updated to the newest firmware.
    
1. Close HacDiskMount
2. Hold the power button on your Switch to shut down
3. Put your Switch into RCM and send the **"hekate-ctcaer-5.0.1.bin"** payload you downloaded earlier **while holding Vol-** to skip autoboot and enter the menu
4. In Hekate, navigate to **Console Info > Fuses**
5. Tap **Dump Fuses**, press **OK**.
6. Close the menu
7. Tap **TSEC Keys**
8. Tap **Dump Keys**, press **OK**
9. Exit the menu
10. Go back to the Main tab and tap **Reboot > RCM**
11. Insert your SD Card into your PC
12. Go to `www.sdsetup.com/biskeygen <https://www.sdsetup.com/biskeygen>`_
13. Under **"Upload Hekate fuse_cached.bin",** click **Choose File**
14. Browse for **"[SD]/backup/[8 character folder]/dumps/fuse_cached.bin"**
15. Under **"Upload Hekate tsec_keys.bin",** click **Choose File**
16. Browse for **"[SD]/backup/[8 character folder]/dumps/tsec_keys.bin"**
17. Press **"Derive BIS Keys"**
18. The **"Output"** textbox should now be filled with 8 keys as shown below.

.. image:: https://puu.sh/C68E1/e7692c881a.png

19. Store these keys somewhere safe, they will be used in the next step.

........

Step 9: Configuring HacDiskMount BIS Keys
-------------------------------------------------
    
.. danger::
    In this step, **NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".**
    
    .. image:: https://puu.sh/C65yy/8d4a4708fd.png
    
1. If you closed memloader and HacDiskMount in the last step:

    1. Put your Switch into RCM and send the **"memloader.bin"** payload you downloaded earlier
    2. On your Switch, using volume buttons, navigate to **"ums_emmc.ini"** and select it with power
    3. The disk should now connect to your PC. In Device Manager, make sure you can see **"LINUX UMS DISK 0"** under **"Disk Drives"**
    
        * If you see **"USB Download Gadget",** right click the entry and choose **Uninstall.**
        * If you cannot see this, look through Device Manager for any devices with a yellow warning icon. Right click and choose **uninstall.**
        * After doing the above, choose **"Scan for hardware changes"** in the Device Manager toolbar
        * If you still cannot see **"LINUX UMS DISK 0"** under **"Disk Drives", STOP!** Press and hold the **power button** to shutdown the Switch and try steps 5.3-5.5 again. You cannot continue until you see this device.
        
    4. Locate **HacDiskMount** which you extracted earlier
    5. Right click **HacDiskMount.exe** and choose **"Run as Administrator"**
    6. Choose **File > Open Physical Drive** from the menu bar
    7. Choose **Linux UMS disk 0 (29.121GiB).** If you do not see this device **with the exact name, STOP! You cannot continue.** Close HacDiskMount and hold the **power button** on your Switch to shut down. Repeat steps 7.1-7.7
    8. Make sure you see a list of partitions as before
    
2. Double-click the **"PRODINFO"** partition
3. Copy the 32 character **"BIS Key 0 (Crypt)"** key you obtained earlier into the **Crypto (Upper)** text box
4. Copy the 32 character **"BIS Key 0 (Tweak)"** key you obtained earlier into the **Tweak (Lower)** text box
5. Press **"Save"**

    * You should see a green message with **"OK!"** next to the **"Save"** button like shown in the picture below.
    * If the message is red, **STOP! Your keys are WRONG! You cannot continue.** Make sure you put in the correct keys, and otherwise repeat step 8.
    
    .. image:: https://puu.sh/C693m/8de28d2b24.png
    
6. Close the **"Operations on PRODINFO"** window

7. Double-click the **"PRODINFOF"** partition
8. Make sure the keys are prefilled
9. Press **"Test"**

    * You should see a green message with **"OK!"** next to the **"Save"** button like before.
    * If the message is red, **STOP! Your keys are WRONG! You cannot continue.** Make sure you put in the correct keys in the last step, and otherwise repeat step 8.

10. Close the **"Operations on PRODINFOF"** window

11. Double-click the **"SAFE"** partition
12. Copy the 32 character **"BIS Key 1 (Crypt)"** key you obtained earlier into the **Crypto (Upper)** text box
13. Copy the 32 character **"BIS Key 1 (Tweak)"** key you obtained earlier into the **Tweak (Lower)** text box
14. Press **"Save"**

    * You should see a green message with **"OK!"** next to the **"Save"** button like before.
    * If the message is red, **STOP! Your keys are WRONG! You cannot continue.** Make sure you put in the correct keys, and otherwise repeat step 8.

15. Close the **"Operations on SAFE"** window

16. Double-click the **"SYSTEM"** partition
17. Copy the 32 character **"BIS Key 2 (Crypt)"** key you obtained earlier into the **Crypto (Upper)** text box
18. Copy the 32 character **"BIS Key 2 (Tweak)"** key you obtained earlier into the **Tweak (Lower)** text box
19. Press **"Save"**

    * You should see a green message with **"OK!"** next to the **"Save"** button like before.
    * If the message is red, **STOP! Your keys are WRONG! You cannot continue.** Make sure you put in the correct keys, and otherwise repeat step 8.

20. Close the **"Operations on SYSTEM"** window

21. Double-click the **"USER"** partition
22. Copy the 32 character **"BIS Key 3 (Crypt)"** key you obtained earlier into the **Crypto (Upper)** text box
23. Copy the 32 character **"BIS Key 3 (Tweak)"** key you obtained earlier into the **Tweak (Lower)** text box
24. Press **"Save"**

    * You should see a green message with **"OK!"** next to the **"Save"** button like before.
    * If the message is red, **STOP! Your keys are WRONG! You cannot continue.** Make sure you put in the correct keys, and otherwise repeat step 8.

25. Close the **"Operations on USER"** window

........

Step 10: Transferring SAFE
-------------------------------------------------

.. danger::
    In this step, **NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".**
    
    .. image:: https://puu.sh/C65yy/8d4a4708fd.png
    

1. Double-click **"SAFE"** in HacDiskMount
2. Make sure both BIS key text boxes are FILLED as they should have been in Step 9. Press **"Test"** and make sure they are green as before.
3. Under **"Virtual Drive",** if the driver status shows up as **"Driver not installed",** click **"Install"** to install it.
    
    * You may see driver signature verification dialogs. **Accept all of them.**

4. Make sure the text now says **"Driver (ver xxxx.x.x.xx) installed, service is running"** as shown in the image below.
    
.. image:: https://puu.sh/C69Sg/e203765548.png

5. Under **"Virtual drive",** select an unused drive letter
6. Make sure **"Passthrough zeroes"** is checked
7. Press **"Mount"**
8. **MAKE SURE YOU DO NOT FORMAT THE DRIVE AS PER THE WARNING ABOVE. You will not be warned again.**  
9. Navigate to the newly mounted drive in File Explorer
10. If you see any files/folders in this drive, delete ALL of them. **Make sure the drive is EMPTY before continuing.**

    * It is normal to not see any. If there are no files/folders, skip this step.
    
11. Navigate to **"/NX-X.X.X/SAFE"** folder which was generated with ChoiDujour.
12. If you see any files/folders in this folder, copy ALL OF THEM to the mounted drive.

    * It is normal to not see any. If there are no files/folders, skip this step.

13. In HacDiskMount, under **"Virtual drive",** press **"Unmount"**
14. Close the **"Operations on SAFE"** window.

........

Step 11: Transferring SYSTEM
-------------------------------------------------

.. danger::
    In this step, **NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".**
    
    .. image:: https://puu.sh/C65yy/8d4a4708fd.png
    

1. Double-click **"SYSTEM"** in HacDiskMount
2. Make sure both BIS key text boxes are FILLED as they should have been in Step 9. Press **"Test"** and make sure they are green as before.
3. Under **"Virtual drive",** select an unused drive letter
4. Make sure **"Passthrough zeroes"** is checked
5. Press **"Mount"** 
6. Navigate to the newly mounted drive in File Explorer
7. Delete the **"Contents"** folder
8. If it exists, delete the **"PRF2SAFE.RCV"** file

    * It is normal to not see this. If this file is not there, skip this step.
    
9. Navigate to **"/NX-X.X.X/SYSTEM"** folder which was generated with ChoiDujour.
10. Copy ALL of the files/folders in this directory to the newly mounted drive

    * Make sure to **copy and replace** all duplicate files.

11. In HacDiskMount, under **"Virtual drive",** press **"Unmount"**
12. Close the **"Operations on SYSTEM"** window.

........

Step 12: Transferring USER
-------------------------------------------------

.. danger::
    In this step, **NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".**
    
    .. image:: https://puu.sh/C65yy/8d4a4708fd.png
    

1. Double-click **"USER"** in HacDiskMount
2. Make sure both BIS key text boxes are FILLED as they should have been in Step 9. Press **"Test"** and make sure they are green as before.
3. Under **"Virtual drive",** select an unused drive letter
4. Make sure **"Passthrough zeroes"** is checked
5. Press **"Mount"** 
6. Navigate to **"/NX-X.X.X/USER"** folder which was generated with ChoiDujour.
7. Copy ALL of the files/folders in this directory to the newly mounted drive

    * Make sure to **copy and replace** all duplicate files.

8. In HacDiskMount, under **"Virtual drive",** press **"Unmount"**
9. Close the **"Operations on USER"** window.
10. **DO NOT CLOSE HacDiskMount.** It may be required if the next step fails.

........

Step 13: Launching the First Time After Downgrading
---------------------------------------------------

1. Insert your SD card into your PC
2. Navigate to the **"/bootloader"** folder on your SD card
3. Rename **"hekate_ipl.ini"** to **"hekate_bak.ini"**
4. Navigate to **"/NX-X.X.X/microSD"** folder which was generated with ChoiDujour.
5. Copy the **"FSXXX-exfat_nocmac_nogc.kip1"** file to the root of your SD card
6. Copy the **"hekate_ipl.ini"** file to the **"/bootloader"** folder on your SD card
7. Safely eject your SD card and insert it into your Switch
8. Enter RCM and send the **"hekate-ctcaer-5.0.1.bin"** payload
9. In Hekate, navigate to **Tools > Archive bit - AutoRCM > Unset archive bit**
10. Return to the main menu, then select **'Launch > FS_XXX-exfat_nocmac_nogc'** where **XXX** is the firmware version you downgraded to.
11. Make sure your system successfully boots

    * Your system may say it was unable to read the gamecard. This is normal.
    * If your system **does not boot,** make 100% sure you are using the latest version of Hekate and have correctly copied the hekate_ipl.ini file.
    * If your system **still does not boot,** and you are **downgrading your system from a higher firmware to a lower one** skip to **Step 14: First Launch Failed**
    
12. Shutdown
13. Insert your SD card into your PC
14. Navigate to the **/bootloader** folder on your SD card
15. Delete the **"hekate_ipl.ini"** file
16. Rename the **"hekate_bak.ini"** file to **"hekate_ipl.ini"**
17. Safely eject your SD card and insert it into your Switch
18. Enter RCM and send the **"hekate-ctcaer-5.0.1.bin"** payload
19. Select **'Launch > CFW'**    
20. Make sure your system successfully boots


---------------------------------------------------

.. note::
    If you successfully completed step 13 and your system boots, congrats! Your Switch is now running the firmware version of your choosing. You can close HacDiskMount.
    
  
---------------------------------------------------
  
Step 14: First Launch Failed
---------------------------------------------------

.. warning::
    This next step is **only to be followed if your Switch did not boot during step 13.12 and you are trying to downgrade your Switch!** Do not follow it for any other reason.

If your Switch fails to launch during step 13, and you were trying to downgrade from a higher firmware version to a lower one, it is likely that there were incompatible changes made to system save data across firmware versions. Because of this, the only way to complete the downgrade is to wipe all system save data, **which will also delete all users, save data, installed games, and other system data.**
    
.. tip::
    If you want to keep your data and abort the downgrade, you must now restore the NAND backup you created in Step 2 through Hekate.
    
.. danger::
    If you understand that you will lose access to **all users, save data, installed games, and other system data.** and will want to complete the downgrade, proceed with the steps below.
    
.. danger::
    In this step, **NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".**
    
    .. image:: https://puu.sh/C65yy/8d4a4708fd.png
    

1. Put your Switch into RCM and send the **"memloader.bin"** payload you downloaded earlier
2. On your Switch, using volume buttons, navigate to **"ums_emmc.ini"** and select it with power
3. The disk should now connect to your PC. In Device Manager, make sure you can see **"LINUX UMS DISK 0"** under **"Disk Drives"**
4. Double-click **"SYSTEM"** in HacDiskMount
5. Make sure both BIS key text boxes are FILLED as they should have been in Step 9. Press **"Test"** and make sure they are green as before.
6. Under **"Virtual drive",** select an unused drive letter
7. Make sure **"Passthrough zeroes"** is checked
8. Press **"Mount"** 
9. Navigate to the newly mounted drive in File Explorer
10. Delete EVERYTHING in this drive. **By doing this, you accept that you will lose access to all users, save data, installed games, and other system data.**
11. Navigate to **"/NX-X.X.X/SYSTEM"** folder which was generated with ChoiDujour.
12. Copy ALL of the files/folders in this directory to the newly mounted drive
13. In HacDiskMount, under **"Virtual drive",** press **"Unmount"**
14. Close the **"Operations on SYSTEM"** window.
15. Return to and repeat **Step 13.** Your Switch should now boot where it previously did not.
    
.. toctree::
   :maxdepth: 2
   :caption: Contents:
