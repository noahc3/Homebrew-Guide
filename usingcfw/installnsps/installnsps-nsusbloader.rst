.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Install NSPs over USB (NS-USBLoader)
====================================

This guide will teach you how to setup the unofficial NS-USBLoader USB installer for Goldleaf. This guide requires Java, but the end result is better than standard Goldtree. NS-USBLoader will work on Windows, OSX and Linux.

.. note:: 
   If something goes wrong or you need help, check `troubleshooting </troubleshooting.html>`__.
   
.. tip:: 
   After completing steps 0 and 1 once, you can `skip to Step 2 </usingcfw/installnsps/installnsps-nsusbloader#step-2-install-nsp-with-ns-usbloader>`_ to install more NSP files.

........
   
Step 0: What You Will Need
--------------------------

* A USB-C cable which can connect your Switch to your PC.

* The latest version of Goldleaf by XorTroll, either as an NRO or installed NSP. Available from `Github <https://github.com/XorTroll/Goldleaf/releases>`__ or SDSetup.

    * Goldleaf is included by default in Kosmos.

* The latest version of NS-USBLoader by developersu extracted somewhere to your PC. Available from `Github <https://github.com/developersu/ns-usbloader>`__ or SDSetup.

* The latest version of Java

    * This can be downloaded from `java.com <https://www.java.com/en/download/manual.jsp>`__
    
    * Linux users can optionally use OpenJDK instead to keep things within the package manager ecosystem. See `openjdk.java.net <https://openjdk.java.net/install/>`__ for instructions.

* **For Windows Users Only:** The latest version of Zadig. Available from `zadig.akeo.ie <https://zadig.akeo.ie/>`__.
    
........
   
Step 1 (Windows Only): Installing libusbk Driver
------------------------------------------------

.. note::
    OSX and Linux do not need this driver. If you are not using Windows, `skip to Step 2 </usingcfw/installnsps/installnsps-nsusbloader#step-2-install-nsp-with-ns-usbloader>`_.

1. Make sure Goldleaf is available on your Switch.

2. Plug your Switch into your PC.

3. Run Goldleaf on your Switch.

4. On your PC, open the Zadig application and complete the installation if prompted.

5. In the dropdown box, look for either **'libnx usb comms'** or **'Nintendo Switch'** and select it.

    * If you cannot see either one, enable **'List All Devices'** under the options menu item.
    
6. Set driver to **'libusbK (v3.0.7.0)'**

.. image::  https://puu.sh/CKNk1/86e21a92e5.png

7. Choose **'Install Driver'** or **'Replace Driver'** or **'Reinstall Driver'** (the big button). Wait for this process to finish.

8. Close Zadig.

9. Disconnect and reconnect your Switch

Step 2: Install NSP with NS-USBLoader
-------------------------------------

1. Open the NS-USBLoader JAR file downloaded earlier on your PC.

    * Double click the file in Explorer on Windows and Mac
    
    * On Linux, or if the above does not work, run `java -jar /path/to/NS-USBloader.jar` in your command terminal

2. Make sure **'Goldleaf'** is selected in the dropdown menu in the top left corner of the application.

3. Click **'Select .NSP files** and pick which NSP(s) you want to install

    * You can select as many NSP files as you wish.

4. Choose **'Upload to NS'**

5. On your Switch in Goldleaf, choose **'Explore Content > Remote PC (via USB)**.
    
6. Choose **'Virtual (VIRT:\\)'**.

7. The NSPs you selected will be shown here. Select the NSP you wish to install and choose where to install it.

8. If asked, select **'Install'** to confirm the installation.

9. Wait for the installation process to complete

10. Repeat steps 2.7 through 2.9 for each NSP being installed.


Your NSP(s) should now be installed on your Switch!
   
.. toctree::
   :maxdepth: 2
   :caption: Contents:
