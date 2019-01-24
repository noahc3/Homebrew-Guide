.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

SD Card Setup
===============

At this point, you've verified that you can exploit fusee-gelee to run CFW. You will now prepare your SD card with the necessary software.

.. note:: 
   If something goes wrong or you need help, check `troubleshooting </troubleshooting.html>`_.
   
.. note:: 
   This guide will assume you want to use `https://www.sdsetup.com <http://www.sdsetup.com>`_ to get your homebrew setup, and will guide you on doing so. You can alternatively directly use `Team AtlasNX's Kosmos <https://www.github.com/atlasnx/kosmos>`_, or obtain and setup CFW software on your own (not recommended).

........
   
Step 1: Downloading Software
----------------------------

This guide will walk you through the process of using the website SDSetup to prepare your SD card. This website allows you to easily select which homebrew you want and will automatically prepare a ZIP file with the correct file structure for your SD card.

1. Go to https://www.sdsetup.com
2. Select **Nintendo Switch** 
3. Select the **"Kosmos Defaults"** package

    * If you think you know what you are doing, you can choose whatever CFW and options you wish. This guide will assume you at least select Atmosphere, Homebrew Menu and Hekate.
    
4. Select the **"biskeydump"** payload under **Extras > Payloads > biskeydump** 
5. Select any additional homebrew packages you wish.

    * On desktop, you can hover over the homebrew names to get a description of what they do.
    
6. Select **"Download your ZIP"** 

    * This can take a while depending on your Internet speed and latency. Be patient.
    
7. Save the resulting ZIP if your browser does not do so automatically.

........

Step 2: Preparing Software
--------------------------

Extract the ZIP file from SDSetup to a folder on your PC.

* The **'sd'** folder contains all of the files that should go on your SD card. **Copy all of the contents of this folder to the root of your SD card.**
* The **'payloads'** folder contains all of the fusee-gelee payloads which can be launched with TegraRcmGui/Rekado/fusee-launcher/etc that you selected.
* The **'pc'** folder contains all of the PC tools that you selected.
* The **'android'** folder contains all of the Android tools you selected.
* The **'licenses'** folder contains distribution licenses for downloaded applications
* The **'readmes'** folder contains readmes for selected applications, if one was provided.

After copying the SD card files to your SD card, insert it back into your Switch.

........

.. important::
    You are technically done! At this point, you can use the Hekate payload provided in your download with your payload sender to launch into Atmosphere or ReiNX CFW.
    
    The next section includes important information about safety precautions you should take.
    
........

.. raw:: html

	<div class="admonition warning">
		<p class="last">Continue to <a href="safetyprecautions.html">Safety Precautions</a></p>
	</div>

.. toctree::
   :maxdepth: 2
   :caption: Contents: