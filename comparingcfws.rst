.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Comparing Custom Firmwares
==========================
   
================================ ===============================================================  ================================================  ==================================== ========================================== ==========================================================
Features                         Stock Atmosphere                                                 Kosmos                                            ReiNX                                SX OS                                      Notes
================================ ===============================================================  ================================================  ==================================== ========================================== ==========================================================
Free                             ✓                                                                ✓                                                 ✓                                     ✖ (~$25 USD)                                         
Open Source                      ✓                                                                ✓                                                 ✓                                     ✖                                          
Firmware 7.0.0+ Support          ✓                                                                ✓                                                 ✓                                     ✓
Supports Custom Sysmodules       ✓                                                                ✓                                                 ✓                                     ✖                                          
Supports Game Modding            ✓                                                                ✓                                                 ✓                                     ✓
Homebrew Support                 ✓                                                                ✓                                                 ✓                                     ‒                                         SX OS has compatibility issues with many homebrew
FS Patches                       ✓                                                                ✓                                                 ✓                                     ✓                                         
ES Patches                       ‒                                                                ‒                                                 ✓                                     ✓                                         Atmosphere & Kosmos Sigpatches must be installed manually
Configuration Tools              ✖                                                                ✓                                                 ✓                                     ✓                                         
Reboot to Payload                ✓                                                                ✓                                                 ✓                                     ✖
Proper Shutdown w/ AutoRCM       ✓                                                                ✓                                                 ✖                                     ✖
Realtime Cheat Engine            ✓                                                                ✓                                                 ‒                                     ✓                                         Sysnetcheat or noexes on ReiNX. Requires a PC or phone.
Button Remapping                 ‒                                                                ✓                                                 ‒                                     ✖                                         Using hid-mitm.
Third-party controler support    ‒                                                                ✓                                                 ‒                                     ✖                                         Using hid-mitm. Requires a PC or phone.
EmuNAND                          ✓                                                                ✖                                                 ✖                                     ✓                                         Atmosphere emuMMC is currently experimental.
XCI Loading                      ✖                                                                ✖                                                 ✖                                     ✓                                         XCIs can be converted to NSP for other CFWs
Relevant Guide                   `nh switch guide <https://nh-server.github.io/switch-guide/>`_   `guide.sdsetup.com <https://guide.sdsetup.com>`_  `reinx.guide <https://reinx.guide>`_ `sx.xecuter.com <https://sx.xecuter.com>`_
================================ ===============================================================  ================================================  ==================================== ========================================== ==========================================================

✓ - Supported

‒ - Partial or incomplete support

✖ - No Support

.........

.. tip::
    If this page doesn't answer your question, feel free to ask on the `Team AtlasNX Discord <https://discord.teamatlasnx.com/>`_.

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   
   
