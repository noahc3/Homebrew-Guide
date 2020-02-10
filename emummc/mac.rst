.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Create an emuMMC on Mac OS
==========================

.. danger::
	We are not responsible for what happens to your data, your computer, or your Nintendo Switch. We have written this guide to be as easy to follow as possible, and have walked through the steps ourselves to make sure everything works to the best of our ability. If something happens because you fail to follow the guide then you have no one to blame, but yourself.

Before getting started you will need the following:

* A hackable Nintendo Switch.

* An SD Card that is 32GB or larger.

* Latest version of `Atmosphere <https://github.com/Atmosphere-NX/Atmosphere/releases/latest>`_ and `Hekate <https://github.com/CTCaer/hekate/releases/latest>`_ -or- the latest version of `Kosmos <https://github.com/AtlasNX/Kosmos/releases/latest>`_.

* Mac OS Catalina

* Administrator access

Once you are ready, follow the guide below:

#. Make sure everything on your SD Card is backed up on to your computer.

#. Open Terminal.

#. Run the follow command and identify which disk is your SD Card:

    ::

        diskutil list external

    .. image:: ../images/mac/Step3.png

#. Run the following command, making sure to replace the ``#`` with the drive number, to get the size of the SD Card in bytes.

    ::

        diskutil info disk# | grep "Disk Size"

    .. image:: ../images/mac/Step4.png

#. Take that number and subtract it by 31306285056 to get the size of our SD Card parition. (Ex. 31914983424 - 31306285056 = 608698368) With that number run the following command to partition your SD Card, making sure to replace ``#`` with the drive number and ``PutSizeHere`` with the number you came up with.

    .. danger::
        This is highly destructive triple check you have the correct disk number as this will partition and format the disk.

    ::

        diskutil partitionDisk disk# MBR fat32 "SWITCH" PutSizeHere fat32 "EMUMMC" 31306285056

    .. image:: ../images/mac/Step5.png

#. Run the following command to identify the partition number of your emuMMC partition, making sure to replace the ``#`` with the drive number.

    ::

        diskutil list disk#

    .. image:: ../images/mac/Step6.png

#. Run the following command to unmount your EmuMMC partition, making sure to replace the first ``#`` with the drive number and the second ``#`` with the partition number of your emuMMC partition.

    ::

        diskutil unmount disk#s#

    .. image:: ../images/mac/Step7.png

#. Next we want to zero out the beginning and end of our emuMMC partition. The reason for doing this is because we formatted the partition as fat32, however we only did this to set the partition ID to something Hekate would pick up. On top of this Hekate won't write to the first and last 512kb of the partition. This is problematic if it's formatted as fat32, as some operating systems will continue to see this partition as fat32, and will try to repair it. Run the following commands to zero out the first and last megabyte of the partition, making sure to replace the first ``#`` with the drive number of your SD Card and the second ``#`` with the partition number of your emuMMC partition.

    .. danger::
        This is highly destructive triple check you have the correct block device in the "of" argument.

    ::

        sudo dd if=/dev/zero of=/dev/disk#s# bs=1m count=1
        sudo dd if=/dev/zero of=/dev/disk#s# seek=29853 bs=1m count=1

    .. image:: ../images/mac/Step8.png

#. To make sure you have done the last step correctly eject your SD Card, disconnect and reconnect it to your computer. Mac OS should not mount your EmuMMC partition now.

#. Next restore your files back to your SD Card.

    .. note::
        The content of your SD card may look different.

    .. image:: ../images/mac/Step10.png

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
