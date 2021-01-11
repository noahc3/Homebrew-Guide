.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Forewarning (Caffeine)
================================

You're reading this page because your switch cannot use the fusee-gelee exploit to run payloads in the Switch's RCM mode. This is referred to as the console being "IPATCHED" or simply "patched".

In the past, almost all homebrew were developed with the concept in mind that everyone running homebrew has access to RCM. With fusee-gelee, should a user prevent their system from booting, they can very easily take a NAND backup or regenerated system files, put them on their Switch, and they are back in action.

You do not have this luxury.

Your access to homebrew and recovery tools primarily depends on the Switch's normal operating system (OFW, original firmware) functioning. On an IPATCHED Switch, doing anything to prevent your Switch from booting **will render your Switch permanently inoperable.** As such, you should avoid using any of the following homebrew on your Switch should you come across them:

* memloader
* ChoiDujour
* ChoiDujourNX (OK in emuMMC/emuNAND, NEVER use in sysMMC/sysNAND)
* Any homebrew or payloads involving the enabling or disabling of "AutoRCM"
* Any homebrew or payloads which writes to the system internal memory without proper security or verification in place

Upon using PegaScape to reboot into CFW for the first time, we will immediately create a NAND backup and dump system keys. **These steps are not optional** and will provide you at least one (tedious) hardware recovery method should anything ever go wrong.

Additionally, you should **never connect to the internet without PegaScape or 90DNS configured on your sysMMC, even for a second,** as doing so can make your Switch **force you to update to use the browser**, which is required for this exploit. **There is currently no known way of removing supernag, so supernag may permanently block you from accessing CFW.**

The guide also includes instructions on using emuMMC, which redirects all read and write operations on the internal memory to the SD card. With this, even if you accidentally brick within an emuMMC, your Switch will still function properly.

Neither this guide nor anybody in this community is responsible should anything happen to your Switch.

.. raw:: html

	<div class="admonition warning">
		<p class="last">Continue to <a href="/hacking/caffeine/sdsetup">SD Card Setup (Caffeine)</a></p>
	</div>

.. toctree::
   :maxdepth: 2
   :caption: Contents:
