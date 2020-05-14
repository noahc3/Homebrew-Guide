.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Create an emuMMC on Linux
=========================

.. danger::
	We are not responsible for what happens to your data, your computer, or your Nintendo Switch. We have written this guide to be as easy to follow as possible, and have walked through the steps ourselves to make sure everything works to the best of our ability. If something happens because you fail to follow the guide then you have no one to blame, but yourself.

Before getting started you will need the following:

* A hackable Nintendo Switch.

* An SD Card that is 32GB or larger.

* Latest version of `Atmosphere <https://github.com/Atmosphere-NX/Atmosphere/releases/latest>`_ and `Hekate <https://github.com/CTCaer/hekate/releases/latest>`_.

* Linux based operating system (Installed or LiveCD)

* GParted

* Root access

Once you are ready, follow the guide below:

#. Make sure everything on your SD Card is backed up on to your computer.

#. Open GParted.

#. Select your SD Card from the top left menu.

    .. danger::
        It is very important to select the correct device from this menu as this will be destructive.

    .. image:: ../images/linux/Step3.png

#. If any partitions have a mount point you will want to right click on them and click "Unmount".

    .. image:: ../images/linux/Step4.png

#. Next go up to the Device menu and click "Create Partition Table..."

    .. image:: ../images/linux/Step5.png

#. A dialog box should show up, make sure the partition table type is set to "msdos" and then click "Apply".

    .. image:: ../images/linux/Step6.png

#. Right click on the unallocated space and click "New".

    .. image:: ../images/linux/Step7.png

#. You will want to put in 29856 for "Free space following (MiB):", set the "File system:" to be "fat32", give it a label, and click "Add". This will be your SD Card partition that holds your atmosphere, bootloader, Nintendo, etc... folders.

    .. image:: ../images/linux/Step8.png

#. Right click again on the unallocated space and click "New".

    .. image:: ../images/linux/Step9.png

#. For this you want to set the "File system:" to be "fat32", and click "Add". This will be the partition for your emuMMC.

    .. image:: ../images/linux/Step10.png

#. Click "Apply All Operations" up in the top bar, confirm you want to apply and wait for it to finish.

    .. image:: ../images/linux/Step11.png

#. Next we want to zero out the beginning and end of our emuMMC partition. The reason for doing this is because we formatted the partition as fat32, however we really only needed GParted to set the partition ID to something Hekate would pick up. On top of this Hekate won't write to the first or last 512kb of the partition. This is problematic if it's formatted as fat32, as some operating systems will continue to see this partition as a fat32 partition, and try to repair it. To do this open up a console window and run the following commands making sure to supply the block device of your emuMMC partition to the ``of=`` argument.

    .. danger::
        This is highly destructive triple check you have the correct block device in the “of” argument.

    ::

        sudo dd if=/dev/zero of=/dev/your_emummc_partition bs=1M count=1 status=progress
        sudo dd if=/dev/zero of=/dev/your_emummc_partition seek=29854 bs=1M count=1 status=progress

    .. image:: ../images/linux/Step12.png

#. To make sure you have done the last step correct go back to GParted, go to the GParted menu and click Refresh. Your emuMMC partition's file system should now be "unknown".

    .. image:: ../images/linux/Step13.png

#. Next restore your files back to your SD Card.

    .. note::
        The content of your SD card may look different.

    .. image:: ../images/linux/Step14.png

#. Eject your SD Card and insert it into your Switch. Turn your Switch on in RCM and inject the Hekate payload.

#. Tap on "emuMMC".

    .. image:: ../images/HekateStep1.png

#. Tap on "Create emuMMC".

    .. image:: ../images/HekateStep2and5.png

#. Tap on "SD Partition".

    .. image:: ../images/HekateStep3.png

#. Tap on "Continue", and wait.

    .. image:: ../images/HekateStep4.png

#. Tap on "Close" on the top right, and then tap on "Change emuMMC".

    .. image:: ../images/HekateStep2and5.png

#. Tap on "SD RAW 1", and tap "OK".

    .. image:: ../images/HekateStep6.png

#. Tap on "Close" on the top right, tap on "Launch", and boot into your emuMMC.

    .. note::
        If you downloaded Hekate by itself then you needed to create a hekate_ipl.ini file in your bootloader folder. That is outside the scope of this guide. If you don't know how to do that then use Kosmos.

    .. image:: ../images/HekateStep7.png

#. Congratulations you are done. You can go into "System Settings", scroll down to "System", and you should see an "E" at the end of your "Current version:" indicating you are in your emuMMC.

    .. image:: ../images/SystemSettings.jpg

.. toctree::
   :maxdepth: 2
   :caption: Contents:
