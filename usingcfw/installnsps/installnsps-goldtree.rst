.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Install NSPs over USB (Goldtree)
================================

This guide will teach you how to setup the official Goldtree USB installer for Goldleaf. This guide is **Windows Only** as the Goldtree software only supports Windows.

.. note:: 
   If something goes wrong or you need help, check `troubleshooting </troubleshooting.html>`_.

........
   
Step 0: What You Will Need
--------------------------

* A USB-C cable which can connect your Switch to your PC.

* The latest version of Goldleaf by XorTroll, either as an NRO or installed NSP. Available from `Github <https://github.com/XorTroll/Goldleaf/releases>`_ or SDSetup.

    * Goldleaf is included by default in Kosmos.

* The latest version of Goldtree by XorTroll extracted somewhere to your PC. Available from `Github <https://github.com/XorTroll/Goldleaf/releases>`_ or SDSetup.

* The latest version of Zadig. Available from `zadig.akeo.ie <https://zadig.akeo.ie/>`_.
    

........
   
Step 1: Installing libusbk Driver
---------------------------------

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


Step 2: Install NSP with Goldtree
---------------------------------

1. Make sure your Switch is still connected to your PC with Goldleaf in USB installation mode.

2. Open Goldtree downloaded earlier on your PC.

3. You will be asked to select the NSP you wish to install. Navigate to and select it.

4. On your Switch, choose Install.

5. Pick where you want to install the NSP (Note: SD Card is always recommended to prevent issues with corruption)

6. If the NSP you are installing usually requires a firmware version higher than yours, choose **'Yes'** to ignore required firmware version. Otherwise, choose **'No'**

7. Wait for the installation process to complete


Your NSP should now be installed on your Switch!
   
.. toctree::
   :maxdepth: 2
   :caption: Contents: