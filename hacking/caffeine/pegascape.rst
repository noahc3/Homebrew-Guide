.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Using PegaScape (Caffeine)
==========================

PegaScape is a user-friendly frontend for launching browser based Nintendo Switch exploits. PegaScape is accessed by setting a custom DNS on your Switch which redirects certain URLs to PegaScape servers. We will now configure your Switch to access PegaScape.

.. warning::
    When you have a PegaScape DNS server configured, **you will not be able to access any Nintendo services, including multiplayer, game and system updates, news, etc.** PegaScape and online homebrew will still work.

.. note:: 
   If something goes wrong or you need help, check `troubleshooting </troubleshooting.html>`_.
   
........
   
Step 0: Understanding Switch Browser Entrypoints
------------------------------------------------

Since firmware 2.0.0, the Nintendo Switch has two ways to access the browser, both of which are **free**.

The first browser is the Wifi Authentication Prompt. This is accessed when trying to connect to a wireless network in Internet settings which does not pass the connection test, or by attempting to link a Nintendo Account on a wireless network which does not pass the connection test. The prompt to link a Nintendo account can be accessed by tapping the eShop icon on the home menu when you do not already have an account linked.

The second browser is through the News applet. Most news entries use HTTPS, so we cannot redirect them with a DNS. However, we can inject our own News entry which points to a normal HTTP URL, which can be redirected. This entrypoint is called "Fake News".

This guide will first have you access PegaScape through the Wifi Authentication Prompt to install Fake News, then change your DNS to allow the use of Fake News.



........

Step 1: Configuring PegaScape (Wifi Authentication Prompt)
----------------------------------------------------------

1. Power on your Switch normally.
2. Open settings and go to the Internet tab
3. Configure a WiFi connection if you have not already done so
4. Select your WiFi network and pick Change Settings
5. Set DNS Settings to Manual
6. Set **'Primary DNS'** to **'<insert pegascape wifi auth dns ip>'**
7. Set **'Secondary DNS'** to **'163.172.141.219'**
8. Save and perform the connection test. 
9. **You should be told that the WiFi network requires registration.** Click Next.
10. Wait for the PegaScape page to load.

Step 2: Injecting Fake News
---------------------------

1. On the PegaScape page, select the **hbmenu** icon. Wait for a success alert to pop up.

    * If the exploit fails, press the HOME button, repeat the connection test in Internet settings, and try again.

2. Press HOME
3. Tap the **Album** icon. This should load hbmenu.
4. Launch the **"Fake News Injector"** homebrew
5. Press '+' to reboot your console once finished.

Step 3: Configuring PegaScape (Fake News)
-----------------------------------------

1. Open settings and go to the Internet tab
2. Select your WiFi network and pick Change Settings
3. Set **'Primary DNS'** to **'<insert pegascape fake news dns ip>'**
4. Save and perform the connection test. 
5. **The connection test should pass.** Press HOME.
6. Tap the **News** icon.
7. Select the new **"Launch PegaScape"** news entry.
8. Tap the video to load PegaScape.

Step 4: Rebooting to Hekate (Caffeine)
--------------------------------------

1. On the PegaScape page, select the **Caffeine** icon. Wait for a prompt with a textbox to appear.

    * If the exploit fails, press the HOME button, repeat the connection test in Internet settings, and try again.

2. When the prompt with the textbox appears, **tap** the textbox. The keyboard will not appear.
3. **Wait five full seconds.**
4. Press the power button to enter sleep mode.

.. important::

    After a few seconds, your Switch should reboot into Hekate, and you will see the **Kosmos** splash screen. Congratulations! You can now reboot into CFW from PegaScape.
    
.. error::

    If nothing appears on the screen, hold the power button for 15 seconds to shutdown your Switch. Turn your Switch back on and try launching Caffeine again. This can sometimes take a few tries.

........

.. raw:: html

	<div class="admonition warning">
		<p class="last">Continue to <a href="/hacking/caffeine/safetyprecautions">Safety Precautions (Caffeine)</a></p>
	</div>

.. toctree::
   :maxdepth: 2
   :caption: Contents: