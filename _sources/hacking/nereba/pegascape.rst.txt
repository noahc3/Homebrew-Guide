.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Using PegaScape (Nereba)
==========================

PegaScape is a user-friendly frontend for launching browser based Nintendo Switch exploits. PegaScape is accessed by setting a custom DNS on your Switch which redirects certain URLs to PegaScape servers. We will now configure your Switch to access PegaScape.

.. warning::
    When you have a PegaScape DNS server configured, **you will not be able to access any Nintendo services, including multiplayer, game and system updates, news, etc.** PegaScape and online homebrew will still work.

.. note:: 
   If something goes wrong or you need help, check `troubleshooting </troubleshooting.html>`_.
   
........
   
Step 1: Configuring PegaScape DNS Settings
------------------------------------------

1. Power on your Switch normally.
2. Open settings and go to the Internet tab
3. Delete your existing WiFi connection configuration if you have one for the network you want to connect to
4. Add your WiFi network, **but type in a long, wrong password** to fail the connection test.
5. After the connection test fails, choose to change settings.
6. Set DNS Settings to Manual
7. Set **'Primary DNS'** to **'163.172.181.170'**
8. Set **'Secondary DNS'** to **'163.172.141.219'**
9. Re-enter your WiFi password, correctly this time.
10. Save and perform the connection test by connecting to the network. **The connection test should pass.**


Understanding Switch Browser Entrypoints
----------------------------------------

On firmware 1.0.0, the Nintendo Switch has two ways to access the browser.

The first browser can be accessed through a JP gamecart of Puyo Puyo Tetris. The digital manual for this game contains a link to the Japanese SEGA website which can be used to access PegaScape.

The second browser is through the News applet. Most news entries use HTTPS, so we cannot redirect them with a DNS. However, we can inject our own News entry which points to a normal HTTP URL, which can be redirected. This entrypoint is called "Fake News".

To install Fake News on 1.0.0, we need to access hbmenu once to run the **"Fake News Injector"** homebrew. We can do this by either accessing PegaScape once through JP Puyo Puyo Tetris, or by launching Atmosphere CFW through RCM.

.. raw:: html

	<div class="admonition warning">
		<p class="last">To inject Fake News using a copy of JP Puyo Puyo Tetris, jump to <a href="#step-2-option-a-injecting-fake-news-jp-puyo-puyo-tetris">Injecting Fake News (JP Puyo Puyo Tetris)</a></p>
	</div>

.. raw:: html

	<div class="admonition warning">
		<p class="last">To inject Fake News using Atmosphere CFW via RCM, jump to <a href="#step-2-option-b-injecting-fake-news-atmosphere-via-rcm">Injecting Fake News (Atmosphere via RCM)</a></p>
	</div>



........

Step 2 Option A: Injecting Fake News (JP Puyo Puyo Tetris)
----------------------------------------------------------

1. Insert your copy of JP Puyo Puyo Tetris into your Switch
2. Launch the game.
3. Press A, then press R, then press A.
4. Touch the bottom-most menu item labelled “お問い合わせ先”
5. Touch the SEGA logo in the bottom-left corner. This will launch the browser. Wait for the PegaScape page to load.

    * If you are told you must update your system to use WiFi, your system has been hit with "supernag". Your console previously connected to the internet, discovered an update was available, and will not let you use the Internet browser until you update.

    * At this stage, you will want to instead use RCM to install Fake-News. Jump to `Injecting Fake News (Atmosphere via RCM) <#step-2-option-b-injecting-fake-news-atmosphere-via-rcm>`_

    * Afterwards, use `Gag-Order <https://github.com/Adubbz/Gag-Order>`_ to remove supernag the same way you ran fakenews-injector (place the .NRO in **/switch**, launch it through hbmenu).

6. Touch the **"hbmenu"** icon.
    
    * If the exploit fails, press the HOME button, reopen the browser through Puyo Puyo Tetris and try again.

7. Press **HOME**.
8. Tap the **Album** icon, hbmenu should load.
9. Launch the **"Fake News Injector"** homebrew.
10. Press **+** to reboot once finished.

Jump to `Step 3: Rebooting to Hekate (Nereba) <#id1>`_

Step 2 Option B: Injecting Fake News (Atmosphere via RCM)
---------------------------------------------------------

1. Reboot into RCM the same way you did before, but this time push the **Hekate** payload included in the ZIP download from SDSetup.
2. While holding **R**, tap the **Album** icon. This should load hbmenu.
3. Launch the **"Fake News Injector"** homebrew.
4. Press **-** to shutdown once finished.
5. Turn your Switch back on.

Step 3: Rebooting to Hekate (Nereba)
------------------------------------

1. On the HOME menu, tap the **News** icon.
2. Select the new **"Launch PegaSwitch"** news entry.
3. Tap the "ReSwitched" video to load PegaScape.
4. Once PegaScape loads, select the **Nereba** icon.

    * If the exploit fails, press the HOME button, reopen the browser through Fake News and try again.

.. important::

    After a few seconds, your Switch should reboot into Hekate. Congratulations! You can now reboot into Hekate from PegaScape.
    
.. error::

    If nothing appears on the screen, hold the power button for 15 seconds to shutdown your Switch. Turn your Switch back on and try launching Nereba again. This can sometimes take a few tries.

........

.. raw:: html

	<div class="admonition warning">
		<p class="last">Continue to <a href="/hacking/nereba/safetyprecautions">Safety Precautions (Nereba)</a></p>
	</div>

.. toctree::
   :maxdepth: 2
   :caption: Contents: