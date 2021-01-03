.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Updating/Downgrading Manually
=============================

When you update your system firmware version and boot the stock operating system, your Nintendo Switch burns a microscopic fuse to prevent your Switch from being able to downgrade. Essentially, if a stock firmware tries to boot but too many fuses are burnt for that specific firmware version, the system will simply power off, preventing you from booting.

All custom firmware bypasses these fuse checks and the fuse burns. By enabling AutoRCM you can prevent the stock bootloader from ever running and keep your Switch in a state where it can be downgraded again the future.

You can also use this guide as a way to upgrade your Switch if your Switch does not have access to the internet, uses 90DNS or is superbanned, and to downgrade your Switch to any firmware version.

If you want to prevent fuse burns you can follow `this guide first </hekate.html#enabling-autorcm>`_.

.. note:: 
   If something goes wrong or you need help, check `troubleshooting </troubleshooting.html>`_.

........
   
Step 1: Preparing Files
-----------------------

1. You need to locate the firmware binaries for the firmware version you want to upgrade/downgrade to. These cannot be shared here as they are copyrighted.
2. Make sure your SD card includes a basic Hekate/Atmosphere setup (such as the one installed when following this guide)
3. Insert your SD card into your PC
4. Create a new folder on the root of your SD card named **"firmware"**
5. Extract **the contents** of your firmware archive file into the new **/firmware** folder on your SD card

........

Step 2: Installing the New Firmware Version
-------------------------------------------

1. Insert your SD card into your Switch
2. Launch Atmosphere CFW
    
3. **IMPORTANT: Plug your Switch in to prevent the Switch from dying midway through the install process**
4. Enter the Homebrew Menu through Album or title override
5. Select **Daybreak**
6. In Daybreak, select **Install** and enter the **/firmware** folder you created earlier
7. After processing, select **Continue**
8. If you are upgrading select **Preserve settings**. Otherwise, if you are downgrading, select **Reset to factory settings**, which will erase all save data.
9. Select **Install (FAT32 + exFAT)**

    * This "FAT32 + exFAT" version of the firmware contains both the FAT32 and exFAT filesystem drivers, so it will work with any SD card. If you are certain your SD card is FAT32 formatted, you can choose the option without exFAT instead. Choose the "FAT32 + exFAT" version if you are unsure.

10. Select **Continue**
11. Wait for the firmware update to finish

    * This can be take little time or a long time depending on the situation. Be patient, and don't worry if it finishes very quickly.

12. After installation, select **Reboot** and then **Shutdown Now!**

.. toctree::
   :maxdepth: 2
   :caption: Contents:
