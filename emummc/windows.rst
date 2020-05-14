.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Create an emuMMC on Windows
===========================

.. danger::
	We are not responsible for what happens to your data, your computer, or your Nintendo Switch. We have written this guide to be as easy to follow as possible, and have walked through the steps ourselves to make sure everything works to the best of our ability. If something happens because you fail to follow the guide then you have no one to blame, but yourself.

Before getting started you will need the following:

* A hackable Nintendo Switch.

* An SD Card that is 32GB or larger.

* Latest version of `Atmosphere <https://github.com/Atmosphere-NX/Atmosphere/releases/latest>`_ and `Hekate <https://github.com/CTCaer/hekate/releases/latest>`_.

* Windows 10

* `DiskGenius <https://www.diskgenius.com/>`_

* Administrator access

Once you are ready, follow the guide below:

#. Make sure everything on your SD Card is backed up on to your computer.

#. Open DiskGenius.

#. Click on your SD Card in the left menu.

    .. danger::
        It is very important to select the correct device from this menu as this will be destructive.

    .. image:: ../images/windows/Step3.png

#. In the center right click on your partition and click on "Delete Current Partition(Del)".

    .. image:: ../images/windows/Step4.png

#. A dialog box should show up, click "Yes" to confirm.

    .. image:: ../images/windows/Step5.png

#. In the center right click in the empty space and click on "Create New Parition(N)".

    .. image:: ../images/windows/Step6.png

#. Make sure the partition type is set to "Primary Partition", and the file system type is "FAT32". To get the size of the partition you will want to take the total size available in MB and subtract it by 29856 MB to get the size of your first partition. (Ex 30436 - 29856 = 579) Give your partition a label, and then click "Ok". This will be your SD Card partition that holds your atmosphere, bootloader, Nintendo, etc... folders.

    .. image:: ../images/windows/Step7.png

#. In the center right click in the empty space and click on "Create New Parition(N)" again.

    .. image:: ../images/windows/Step8.png

#. Make sure the partition type is set to "Primary Partition", and the file system type is "Linux swap". The default size should be 29856 MB, and you should not be able to give this parition a label, simply click "Ok" when everything looks good. This will be the partition for your emuMMC.

    .. image:: ../images/windows/Step9.png

#. Click "Save All" up in the top left, confirm you want to write all changes and wait for it to finish.

    .. image:: ../images/windows/Step10.png

#. Once it finishes Windows will mount your SD Card, you may get a dialog prompt to format a drive. You will always want to hit "Cancel" on this. This is because Windows can not read your emuMMC partition.

    .. image:: ../images/windows/Step11.png

#. You can now close DiskGenius and restore your files back to your SD Card.

    .. note::
        The content of your SD card may look different.

    .. image:: ../images/windows/Step12.png

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
