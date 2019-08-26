.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

emuMMC
================================

.. warning::

    Read absolutely everything on this page!

emuMMC is a method of creating a complete duplicate of your Switch's internal storage on your SD card and running your Switch from that copy. This allows you to essentially have multiple separate
installations of the Switch's operating system. This is useful for:

* Having a separate OS which has no WiFi configured, allowing you do to anything in the emuMMC without fear of being banned, while still having a sysMMC available for playing legitimate games online.
* For PegaScape users, having an emuMMC on the latest firmware version so you can play online, while keeping your sysMMC on the lower firmware necessary for booting CFW.
* For PegaScape users, using both of the above to have both a latest firmware emuMMC to play legitimate games online, and another latest firmware emuMMC which stays offline so you can use CFW to its fullest extent without fear of being banned.


Before jumping into setting up emuMMCs, it is important to explain some terms:


.. raw:: html

    <div class="admonition important">
        <p class="first admonition-title">sysMMC or sysNAND</p>
        <p class="last">sysMMC or sysNAND are synonymous terms which refer to your Switch's real internal storage. This holds your Switch's original firmware, save data, system settings such as WiFi, and games installed to the internal storage.</p>
    </div>
    <div class="admonition important">
        <p class="first admonition-title">emuMMC or emuNAND</p>
        <p class="">emuMMC or emuNAND are synonymous terms which refer to <b>a copy</b> of your Switch's internal storage, which is stored on your SD card. This holds a clone of everything needed to run the Switch, including the firmware, save data, system settings, and games installed to the internal storage, as mentioned before.</p>
        <p class="last">Any changes made to an emuMMC, such as WiFi settings, installed games, themes, etc. will have <b>no effect on other emuMMCs or sysMMC.</b></p>
    </div>
    <div class="admonition important">
        <p class="first admonition-title">File System Partition</p>
        <p class="last">A partition in the context of file systems refers to a logical section of a storage device. You can think of this as a storage drive on a PC. Each partition is treated as a separate file system with it's own files and file system format. A storage device can have multiple partitions, allowing completely separate file systems or drives on the same storage device.</p>
    </div>
    <div class="admonition important">
        <p class="first admonition-title">File-based emuMMC</p>
        <p class="">File-based emuMMCs are when the internal storage clone is stored as files on an SD card's primary partition, the same partition where you normally put files on your SD card. These emuMMCs are formatted very similarly to NAND backups created by Hekate, and it is trivial to convert Hekate NAND backups to file-based emuMMCs.</p>
        <p class="last">Unfortunately at this time, file-based emuMMCs are <b>very very slow</b>, boot times are often upwards of ten minutes and once you do boot the OS is prohibitively slow. File-based emuMMCs should not be used at this time. </p>
    </div>
    <div class="admonition important">
        <p class="first admonition-title">Partition-based emuMMC</p>
        <p class="">A partition-based emuMMC is when the internal storage clone is flashed to it's own partition on an SD card. This allows for higher performance when using emuMMC as the partition can be mounted directly without any performance lost to having to read and write across multiple files.</p>
        <p class="last">Partition-based emuMMCs usually run nearly as fast as internal storage, depending on the speed of the SD card.</p>
    </div>
    <div class="admonition important">
        <p class="first admonition-title">Nintendo Folder</p>
        <p class="">The Nintendo folder is the folder on your SD card where games installed to the SD card are stored. This is also where album photos and videos copied to the SD card are stored.</p>
        <p class="last">For sysMMC, this folder is on the root of your SD card <b>( SD:/Nintendo/ )</b>. emuMMC's use their own unique Nintendo folders to avoid cross-contamination between emuMMCs and sysMMCs. These folders are usually placed in <b>SD:/emummc/[emummc name]/Nintendo/</b></p>
    </div>


Since file-based emuMMCs are considered unusable right now, this guide will instruct you on configuring partition emuMMCs.

This guide will use a website called **emuMMC Instructor**, a tool which will generate a guide tailored exactly to the setup best fit for you.

.. raw:: html

    <div class="admonition danger" style="color:#C42525" align="center">
		<h1 style="margin-bottom:0.5rem;margin-top:0.5rem;font-size:2.5rem">WARNING</h1>
        <h2>Your emuMMCs will share the same console-unique data as your sysMMC</h2>
        <p>An emuMMC is not magic. It does not allow you to, for example, play pirated games online.</p>
        <h2 style="margin-bottom:0.5rem">If you get banned in an emuMMC, your sysMMC and your other emuMMCs will also be banned!</h2>
        <h2>To safely use an emuMMC for bannable behaviour, make sure 90DNS or PegaScape is correctly configured at all times, or that WiFi/Ethernet is completely disabled!</h2>
	</div>

.. raw:: html

	<div class="admonition warning">
		<p class="last">If you use fusee-gelee (payloads over USB) to load CFW, jump to <a href="#for-fusee-gelee-users">For fusee-gelee Users</a></p>
	</div>

.. raw:: html

	<div class="admonition warning">
		<p class="last">If you use PegaScape (Caffeine/Nereba) to load CFW, jump to <a href="#for-pegascape-caffeine-nereba-users">For PegaScape (Caffeine/Nereba) Users</a></p>
	</div>

........
   
For fusee-gelee Users
-----------------------------------------

If you use RCM to push payloads over USB, it is recommended to have one emuMMC. In this configuration, you can use your sysMMC for playing legitimate games online, while using the emuMMC for bannable behaviour.

1. Go to `the emuMMC Instructor <http://emummc.homebrew.guide/?import=v1-01210000000000000>`_ with this link to have the necessary settings preconfigured.

    * Ensure you select your PC platform, then click "Instruct Me" to generate the guide.
    * **Follow every instruction exactly**
    * **Return to this guide when you are finished**

2. After following emuMMC Instructor, you should know how to enable the emuMMC named **'RAW1'**

    * To boot this emuMMC, enable the **'RAW1'** emuMMC in Hekate, then under the **'Launch'** option, choose **'CFW (EMUMMC)'**
    * To boot your regular sysMMC, under the **'Launch'** option, choose **'CFW (SYSNAND)'**. This option will boot sysMMC **even if you have an emuMMC set to enabled in Hekate.**

3. Consider changing your theme in either sysMMC or emuMMC.

    * It can sometimes be difficult to distinguish your sysMMC and emuMMC, making it easy to accidentally do something bannable on the online MMC. Having a different theme in emuMMC from sysMMC is an easy way to tell the difference.
    * You can also change the name of your console in emuMMC and/or sysMMC to make distinguishing them even easier.
    * Atmosphere will have an **E** or an **S** in the system version string to indicate whether or not you are in emuMMC or sysMMC.
    
    .. raw:: html

        <br/>
    
    .. image:: https://puu.sh/E9PmO/4f6fce2aed.png

    .. raw:: html

        <br/><br/>

    .. image:: https://puu.sh/E9PnL/58a050a6d3.png
        

4. If you have never done anything bannable in sysMMC (ex. installed NSP files), it is now safe to remove 90DNS from sysMMC to restore online functionality.

    * It is generally considered safe to use only Atmosphere online.
    * **Installed NSPs, even if they are no longer installed or deleted, will get you banned!** If you have ever previously installed NSPs in sysMMC, you should perform a factory reset before removing DNS settings.
    * You can remove DNS settings by editing your Wi-Fi configuration and changing DNS Settings to Auto.
    * This is optional. If you still do not feel safe using Atmosphere online, you can leave DNS settings enabled, or boot without Atmosphere if you do not have AutoRCM (you must still follow the same precautions detailed above).


The Nintendo folder for your new emuMMC will be stored at **SD:/emummc/RAW1/Nintendo**. If you ever need to retrieve album photos or videos from your SD card, this is where they will be. Additionally, games installed to the SD card while in emuMMC will be stored here. Your sysMMC will still use the original Nintendo folder at **SD:/Nintendo/**

Remember that at this point, anything you do in emuMMC will not appear in your sysMMC, with the exception of homebrew as they share the same **SD:/switch** folder. Games, save data, Wi-Fi settings, accounts, etc, will not be shared across MMCs. Additionally, you will need to resync wireless controllers every time you switch MMCs.

.. raw:: html

    <div class="admonition important">
        <p class="first admonition-title">Success!</p>
        <p class="last">You have now successfully created your emuMMC!</p>
    </div>

........

For PegaScape (Caffeine/Nereba) Users
-----------------------------------------

If you use PegaScape to access CFW, it is recommended to have two emuMMCs. One emuMMC can be used to play legitimate games online, while the other can be used offline for bannable behaviour. 

1. Create a NAND backup.

    * If you already have a NAND backup from earlier, you can just use that one.
    * A NAND backup is necessary as Hekate is unable to flash more than one partition-based emuMMC. As such, we will need to create a NAND dump and flash it to the SD card with a PC.

2. Go to `the emuMMC Instructor <http://emummc.homebrew.guide/?import=v1-02110110000000000>`_ with this link to have the necessary settings preconfigured.

    * Ensure you select your PC platform, then click "Instruct Me" to generate the guide.
    * **Follow every instruction exactly**
    * When the guide refers to selecting the NAND backups you wish to flash, use the one mentioned here in step 1.
    * **Return to this guide when you are finished**

3. After following emuMMC Instructor, you should know how to enable the emuMMCs named **'RAW1'** and **'RAW2'**

    * To boot these emuMMCs, select one in the emuMMC manager menu in Hekate, then under the **'Launch'** option, choose **'CFW (EMUMMC)'**
    * To change between emuMMCs, you must return to the emuMMC manager in Hekate and select the other one.
    * To boot your regular sysMMC, under the **'Launch'** option, choose **'CFW (SYSNAND)'**. This option will boot sysMMC **even if you have an emuMMC set to enabled in Hekate.**

4. Consider changing your theme in either sysMMC or emuMMC.

    * It can sometimes be difficult to distinguish your sysMMC and each emuMMC, making it easy to accidentally do something bannable on the online emuMMC. Having a different theme in your online emuMMC from your offline emuMMC is an easy way to tell the difference. For example, you could make your online emuMMC use the light theme and your offline emuMMC use the dark theme.
    * You can also change the name of your console in your emuMMCs and/or sysMMC to make distinguishing them even easier.
    * Atmosphere will have an **E** or an **S** in the system version string to indicate whether or not you are in emuMMC or sysMMC.
    
    .. raw:: html

        <br/>
    
    .. image:: https://puu.sh/E9PmO/4f6fce2aed.png

    .. raw:: html

        <br/><br/>

    .. image:: https://puu.sh/E9PnL/58a050a6d3.png
        

5. If you have never done anything bannable in your sysMMC (ex. install NSP files), it is safe to remove DNS settings from your **online emuMMC**.

    * **DO NOT REMOVE DNS SETTINGS FROM YOUR sysMMC, AS YOU RISK PERMANENTLY LOSING ACCESS TO CFW ON IPATCHED SWITCHES!** Make 100% certain you are in the emuMMC you want to use online.
    * It is generally considered safe to use only Atmosphere online.
    * **Installed NSPs, even if they are no longer installed or deleted, will get you banned!** If you have ever previously installed NSPs in sysMMC, you should perform a factory reset before removing DNS settings.
    * You can remove DNS settings by editing your Wi-Fi configuration and changing DNS Settings to Auto.

6. Consider upgrading **your emuMMCs** to the latest firmware version.

    * **DO NOT UPGRADE YOUR sysMMC TO THE LATEST FIRMWARE VERSION, AS DOING SO WILL PERMANENTLY LOSE ACCESS TO CFW!** Make 100% certain you are in emuMMC before doing this.
    * **NEVER ENABLE AUTORCM ON AN IPATCHED SWITCH AS DOING SO WILL LITERALLY BRICK YOUR SYSTEM!**
    * See `Updating/Downgrading Manually </usingcfw/manualupgrade>`_ for instructions on upgrading your emuMMCs with ChoiDujourNX.
    * You can also use the official system updater in your online emuMMC.

The Nintendo folders for your new emuMMCs will be stored at **SD:/emummc/RAW1/Nintendo** and **SD:/emummc/RAW2/Nintendo**. If you ever need to retrieve album photos or videos from your SD card, this is where they will be. Additionally, games installed to the SD card while in emuMMCs will be stored here. Your sysMMC will still use the original Nintendo folder at **SD:/Nintendo/**

Remember that at this point, anything you do in your emuMMCs will not appear in your sysMMC, with the exception of homebrew as they share the same **SD:/switch** folder. Games, save data, Wi-Fi settings, accounts, etc, will not be shared across MMCs. Additionally, you will need to resync wireless controllers every time you switch MMCs.

.. raw:: html

    <div class="admonition important">
        <p class="first admonition-title">Success!</p>
        <p class="last">You have now successfully created your emuMMCs!</p>
    </div>

.. toctree::
   :maxdepth: 2
   :caption: Contents: