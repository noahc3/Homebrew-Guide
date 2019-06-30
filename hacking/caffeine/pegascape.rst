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
3. Delete your existing WiFi connection configuration if you have one for the network you want to connect to
4. Add your WiFi network, **but type in a long, wrong password** to fail the connection test.
5. After the connection test fails, choose to change settings.
6. Set DNS Settings to Manual
7. Set **'Primary DNS'** to **'51.15.245.41'**
8. Set **'Secondary DNS'** to **'163.172.141.219'**
9. Re-enter your WiFi password, correctly this time.
10. Save and perform the connection test. 
11. **You should be told that the WiFi network requires registration.** Click Next.

    * If the connection test passes without the registration prompt:

        * **Immediately delete the WiFi connection setting.** It is possible that your router is overriding the Switch's DNS settings with its own. You will need to determine how to disable this settings on your router, or set the PegaScape DNS settings on your router.

            * Not fixing this on your router will not only cause PegaScape to not work, but you could get "supernag" which prevents you from launching the browser, which would permanently block you from using PegaScape.

            * Every router is different so unfortunately we can not help with this step.

    * If you are told you must update your system to use the web browser, your system has been hit with "supernag". Your console previously connected to the internet, discovered an update was available, and will not let you use the Internet browser until you update.

        * If your console is IPATCHED:

            * At this stage, your console cannot use the internet browser, and is therefore locked out of PegaScape. You unfortunately cannot use CFW at this time as there is no known way to remove the supernag.

        * If your console can launch payloads through RCM with fusee-gelee:

            * You should install CFW with fusee-gelee and use `Gag-Order <https://github.com/Adubbz/Gag-Order>`_ to remove the supernag.

            * If you do not already have working CFW through fusee-gelee, jump to `SD Card Setup (fusee-gelee) </hacking/fuseegelee/sdsetup>`_

            * You can come back here when you are done.

12. Wait for the PegaScape page to load.

Step 2: Injecting Fake News
---------------------------

1. On the PegaScape page, select the **hbmenu** icon. Wait for a success alert to pop up.

    * If the exploit fails or takes longer than 60 seconds to load, press the HOME button, repeat the connection test in Internet settings, and try again.

        * If your Switch white screens trying to do this, hold **POWER** for 15 seconds to shutdown, then try again.

2. Press HOME
3. Tap the **Album** icon. This should load hbmenu.
4. Launch the **"Fake News Injector"** homebrew
5. Press '+' to reboot your console once finished.

Step 3: Configuring PegaScape (Fake News)
-----------------------------------------

1. Open settings and go to the Internet tab
2. Select your WiFi network and pick Change Settings
3. Set **'Primary DNS'** to **'163.172.181.170'**
4. Save and perform the connection test. 
5. **The connection test should pass without any registration prompt.** Press HOME.
6. Tap the **News** icon.
7. Select the new **"Launch PegaSwitch"** news entry.
8. Tap the "ReSwitched" video to load PegaScape.

Step 4: Rebooting to Hekate (Caffeine)
--------------------------------------

1. On the PegaScape page, select the **Caffeine** icon. Wait for a prompt with a textbox to appear.

    * On firmwares 4.0.1 and 4.1.0, the spinner will freeze and the exploit can take up to 45 seconds to run. Be patient.

    * If the exploit fails or takes longer than 60 seconds to load, press the HOME button, reopen the browser through Fake News and try again.

        * If your Switch white screens trying to do this, hold **POWER** for 15 seconds to shutdown, then try again.

2. When the prompt with the textbox appears, **tap** the textbox. The keyboard will not appear.
3. **Wait five full seconds.**
4. Press the power button to enter sleep mode.

.. important::

    After a few seconds, your Switch should reboot into Hekate. Congratulations! You can now reboot into Hekate from PegaScape.
    
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
