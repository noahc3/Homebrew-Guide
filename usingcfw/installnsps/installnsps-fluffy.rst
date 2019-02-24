.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Install NSPs over USB (Fluffy)
==============================

This guide will teach you how to setup the unofficial Fluffy USB installer for Goldleaf. This guide requires Python and some other dependencies, making it more difficult to setup than Goldtree. Fluffy is required for OSX and Linux, but will also work on Windows.

.. note:: 
   If something goes wrong or you need help, check `troubleshooting </troubleshooting.html>`__.
   
.. tip:: 
   After completing steps 0 through 2 once, you can `skip to Step 3 <http://localhost/usingcfw/installnsps/installnsps-fluffy#step-3-install-nsp-with-fluffy>`_ to install more NSP files.

........
   
Step 0: What You Will Need
--------------------------

* A USB-C cable which can connect your Switch to your PC.

* The latest version of Goldleaf by XorTroll, either as an NRO or installed NSP. Available from `Github <https://github.com/XorTroll/Goldleaf/releases>`__ or SDSetup.

    * Goldleaf is included by default in Kosmos.

* The latest version of Fluffy by fourminute extracted somewhere to your PC. Available from `Github <https://github.com/fourminute/Fluffy/releases>`__ or SDSetup.

* The latest version of Python 3

    * Windows users can download this from `python.org <https://www.python.org/downloads/>`__. **You must choose to add Python to PATH or this guide will not work!**
    
    * OSX users should install this with the command **'brew install python3'** if it is not already installed.
    
    * Linux users should install this with their distribution's package manager if it is not already installed. You will also need pip3 (python3-pip).

* **For Windows Users Only:** The latest version of Zadig. Available from `zadig.akeo.ie <https://zadig.akeo.ie/>`__.
    
* **For Windows Users Only:** A copy of `libusb.dll <https://github.com/fourminute/Fluffy/raw/master/windows/libusb-1.0.dll>`__ from the Fluffy repository placed next to the Fluffy pyw file.

* **For Windows Users Only:** The libusb developer filter. Available from `Github <https://github.com/fourminute/Fluffy/blob/master/windows/libusb-win32-devel-filter-1.2.6.0.exe>`__.
    
........
   
Step 1 (Windows Only): Installing libusbk Driver
------------------------------------------------

.. note::
    OSX and Linux do not need this driver. If you are not using Windows, `skip to Step 2 <http://localhost/usingcfw/installnsps/installnsps-fluffy#step-2-install-python3-dependencies>`_.

1. Make sure Goldleaf is available on your Switch.

2. Plug your Switch into your PC.

3. Run Goldleaf on your Switch.

4. Choose **USB installation (via Goldtree)** and choose **Start**.

    * Goldleaf should now say 'USB connection detected'. If it doesn't, close Goldleaf and try again.

5. On your PC, open the Zadig application and complete the installation if prompted.

6. In the dropdown box, look for either **'libnx usb comms'** or **'Nintendo Switch'** and select it.

    * If you cannot see either one, enable **'List All Devices'** under the options menu item.
    
7. Set driver to **'libusbK (v3.0.7.0)'**

.. image::  https://puu.sh/CKNk1/86e21a92e5.png

8. Choose **'Install Driver'** or **'Replace Driver'** or **'Reinstall Driver'** (the big button). Wait for this process to finish.

9. Close Zadig.


Step 2: Install Python3 dependencies
------------------------------------

1. Install various Python3 dependencies:
    
    * On Windows, open a command prompt and run the command **'pip3 install pyusb pyqt5 libusb libusb1 qdarkstyle'**
    
    * On OSX and Linux, open a command prompt and run the command **'sudo pip3 install pyusb pyqt5 libusb libusb1 qdarkstyle'**
    
2. Additional instructions for **Windows Only:**

    1. Make sure the libusb.dll file downloaded earlier is placed in the same directory as the Fluffy pyw file.
    
    2. Run the **'libusb-win32-devel-filter-1.2.6.0.exe'** installer, making sure that **'Launch filter installer wizard'** is checked before finishing.
    
    3. Choose **'Install a device filter'** and choose **'Next'**
    
    4. Look for a device with a decription of either **'libnx usb comms'** or **'Nintendo Switch'**. Select it and press **'Install'**
    
    5. Close the application.

Step 3: Install NSP with Fluffy
-------------------------------

1. Make sure your Switch is still connected to your PC with Goldleaf in USB installation mode.

2. Open the Fluffy pyw file downloaded earlier on your PC.

    * Double click the file in Explorer on Windows
    
        * If this does not work, open the application through the command-line using the command **'python [path/to/fluffy.pyw]'**
    
    * Open the file through terminal on OSX and Linux. You may need to make the file executable.

3. Make sure **'Goldleaf'** is selected in the top right corner of the application.

4. Click NSP Selection and pick which NSP(s) you want to install

    * You can do this as many times as you wish to select any number of NSP's to be queued for install.

5. Choose **'Begin Transfer'**
    
6. On your Switch, choose Install.

7. Pick where you want to install the NSP (Note: SD Card is always recommended to prevent issues with corruption)

8. If the NSP you are installing usually requires a firmware version higher than yours, choose **'Yes'** to ignore required firmware version. Otherwise, choose **'No'**

9. Wait for the installation process to complete

10. Repeat steps 3.6 through 3.9 for each NSP being installed.


Your NSP(s) should now be installed on your Switch!
   
.. toctree::
   :maxdepth: 2
   :caption: Contents: