.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Exploits and you
=============

    
Step 0: A clean desk
--------------------------

1. Start the Wii U web browser.
2. Go into your browser settings.
3. Reset your browser's data.
4. Close your browser.
5. Open your browser again.

........

Step 1: Running the exploit
----------------------

1. Go to `http://u.wiidb.de` in your Wii U web browser
2. Press `HAXX`.
    * **Note:** This may take some tries till it works. Just repeat the whole process from Step 0 and hope for the best.
3. The Homebrew Launcher should start.
4. Now select `Mocha CFW` in your Homebrew Channel.
4,5. You should return to the Homebrew Channel.
5. Congratulations, you now started your first Wii U CFW - Mocha allows signature patches, region patches and many other CFW options.
    * This will only last till your reboot your console! Please always start Mocha after the browser exploit to ensure the best homebrew compatibility.

........

Step 2: Backing up your NAND
----------------------

1. Select `Wii U Nand Dumper` in the Homebrew Channel.
2. You now have multiple options:
    * Dump your SLC (512MB) (Wii U firmware)
    * Dump your SLCCMPT (512MB) (vWii firmware and internal storage)
    * Dump your MLC (8GB on white consoles, 32GB on black ones) (Your internal storage including all games, DLC, etc.)
    * Dump your OTP [**STRONGLY RECOMMENDED**] (~1KB) (Your console specific keys)
    * Dump your SEEPROM [**STRONGLY RECOMMENDED**] (~a few KB) (All general Wii U keys)

........

[Optional] Step 4: Installing Haxchi
----------------------

If you installed any of the Haxchi-compatible games we mentioned in the preparations you can now proceed to install Haxchi.
Compared to the browser exploit, haxchi does not require any luck or internet and is just a launchable icon on your home menu.

**NOTE:** Your DS game must be installed on your NAND, installing it on a USB could potentially cause a brick and does not work

1. Select `Haxchi` in your Homebrew Channel.
2. Select the DS title you would like to overwrite with Haxchi
    * **NOTE:** This will make the game unplayable, so maybe don't overwrite a DS title your really love playing (such as Animal Crossing ;^D)
3. Press (A) to confirm your selected title
4. Read the warning!
5. Press (A) once again to confirm and install
6. Once finished your DS title should be your gateway to the world of CFW.

Pressing the Haxchi application will automatically start Mocha CFW, if you want to start Homebrew Channel hold and press (A) while starting the title.

........

Step 5: Installing the Homebrew Channel (Channel)
----------------------

The Homebrew Channel (Channel) is a shortcut to the homebrew channel you can start from your home menu when having Mocha CFW enabled. Please note that you always have to launch Mocha before starting this application! Otherwise it won't work.

1. Enter the Homebrew Channel
2. Launch `WUP Installer GX2`
    * If for some reason WUP Installer GX2 fails with `DSi Exception Has Occurred` try again.
3. Select `Homebrew Channel`
4. Press `Install`
5. Press `Yes` to confirm
6. Select `NAND` as the destination
7. Press the (HOME) button
8. Close the application once the installation finishes.
9. You can now launch the Homebrew Channel through the icon, congratulations!

.. toctree::
   :maxdepth: 2
   :caption: Contents: