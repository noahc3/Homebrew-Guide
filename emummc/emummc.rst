
Create an emuMMC
================

Before getting started you will need the following:

* A hackable Nintendo Switch.

* An SD Card that is 64GB or larger.

* Latest version of `Atmosphere <https://github.com/Atmosphere-NX/Atmosphere/releases/latest>`_ and `Hekate <https://github.com/CTCaer/hekate/releases/latest>`_.

Once you are ready, follow the guide below:

#. Launch Hekate.

    .. image:: ../images/Step0.png

#. Select Tools, open the bottom right table and select **Partition SD Card**

    .. image:: ../images/Step1.png

#. If you see this screen you can continue, otherwise backup the files via USB

    .. image:: ../images/Step2.png

#. Drag the **emuMMC (RAW)** slider around to match your needs. One emuMMC copy is 29856MB in size

    .. image:: ../images/Step3.png

#. Select **Next Step**, **Start** and wait for it to finish

    .. image:: ../images/Step4.png

#. Go back to the home menu and select **emuMMC**

    .. image:: ../images/Step5.png

#. Select **Create emuMMC**

    .. image:: ../images/Step6.png

#. Select **SD Partition**

    .. image:: ../images/Step7.png

#. Select the partition you want

    .. image:: ../images/Step8.png

#. Wait for it to finish

#. Tap on "Close" on the top right, tap on "Launch", and boot into your emuMMC.

    .. note::
        If you downloaded Hekate by itself then you needed to create a hekate_ipl.ini file in your bootloader folder. That is outside the scope of this guide. If you don't know how to do that then use the SDSetup bundle.

    .. image:: ../images/Step9.png

#. Congratulations you are done. You can go into "System Settings", scroll down to "System", and you should see an "E" at the end of your "Current version:" indicating you are in your emuMMC.

    .. image:: ../images/SystemSettings.jpg

.. toctree::
   :maxdepth: 2
   :caption: Contents:
