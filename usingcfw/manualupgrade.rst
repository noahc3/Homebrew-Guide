.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Updating/Downgrading Manually
=============================

When you update your system firmware version, your Nintendo Switch burns a microscopic fuse to prevent your Switch from being able to downgrade. Essentially, if a firmware tries to boot but too many fuses are burnt for that specific firmware version, the system will simply power off, preventing you from booting.

Hekate, ReiNX and SXOS bypass these fuse checks and the fuse burns. By enabling AutoRCM and then manually updating using ChoiDujourNX, you can keep your Switch in a state where it can be downgraded again the future.

You can also use this guide as a way to upgrade your Switch if your Switch does not have access to the internet or is superbanned, and to downgrade your Switch to any firmware version.

.. note:: 
   If something goes wrong or you need help, check `troubleshooting </troubleshooting.html>`_.

.. danger::
    **A later step will give you the option to enable or disable AutoRCM.** AutoRCM is a software method of forcing your Switch to go into RCM on every launch, without the need of a jig or hardmod. Essentially, you are purposefully bricking your Switch in a controlled matter that forces it to launch into recovery. This might sound scary but is not actually dangerous, and can be undone at any time.

    AutoRCM has the following benefits:

    * The Switch will not burn any fuses, meaning you can downgrade your Switch to a lower firmware version in the future should the need arise.
    * You will never accidentally boot stock firmware, meaning you can avoid having telemetry data accidentally sent to Nintendo.
    
    AutoRCM has the following disadvantages:

    * You will not be able to boot your Switch at all without a payload sender.
    * Your Switch will not turn off correctly from the Switch OS. You will have to shutdown from a payload like Hekate.
    
    It is **highly recommended that you enable AutoRCM** as if you ever boot your Switch without Hekate, your fuses will burn and you will not be able to cleanly downgrade again in the future.
    
    .. tip::
        If you just want to manually update your system firmware and do not care about burning fuses, you can leave AutoRCM disabled.
        
    .. warning::
        If you are downgrading to a firmware expecting less fuses burnt than you have, AutoRCM is required to boot your Switch until you upgrade again.
   
........
   
Step 1: Preparing Files
-----------------------

1. You need to locate the firmware binaries for the firmware version you want to downgrade to. These cannot be shared here as they are copyrighted (hint: darthsternie)
2. Make sure your SD card includes a basic Hekate/Atmosphere setup (such as the one installed when following this guide)
3. Insert your SD card into your PC
4. Create a new folder on the root of your SD card named **"firmware"**
5. Extract **the contents** of your firmware archive file into the new **/firmware** folder on your SD card
6. Go to switchtools.sshnuke.net
7. Download the latest version of ChoiDujourNX by rajkosto
8. Extract the **ChoiDujourNX.nro** file within the downloaded .ZIP file into the /switch folder on your SD card

........

Step 2: Installing the New Firmware Version
-------------------------------------------

1. Insert your SD card into your Switch
2. Run Hekate using your payload sender of choice
3. Launch CFW **(Launch > CFW)**
4. **IMPORTANT: Plug your Switch in to prevent the Switch from dying midway through the install process**
5. Enter the Homebrew Menu through Album
6. Select **ChoiDujourNX**
7. In ChoiDujourNX, enter the **/firmware** you created earlier and select Choose
8. After processing, select **[x.x.x] (exFAT)** where [x.x.x] is the firmware version you chose
9. After verification, choose **Select Firmware**
10. Choose whether you want to enable or disable AutoRCM (see above for more information). **This will override an existing AutoRCM settings you have, so make sure to pick which you want.**
11. Choose **Start installation**
12. Wait for the firmware update to finish

    * This can be take little time or a long time depending on the situation. Be patient, and don't worry if it finishes very quickly.

13. After installation, select **Reboot** and then **Shutdown Now!**

You can now delete the **/firmware** folder on your SD card.

.. toctree::
   :maxdepth: 2
   :caption: Contents: