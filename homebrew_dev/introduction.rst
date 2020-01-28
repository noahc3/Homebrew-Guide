.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Introduction to Homebrew development
====================================

This guide will teach you how to write your own homebrew apps, system modules and mitm services
using C/C++. There are also ways to write limited apps using Rust or Python but these languages
won't be covered in this guide.

.. important::
    This guide is meant for developers. If you're just here to install a CFW on your
    Nintendo Switch, this is **NOT** the guide for you.

.. important::
    Homebrew development should not be used as way to learn a programming language. You
    should have a good understanding about C/C++ **BEFORE** trying to write homebrew apps.
    At the time of writing this guide there is no easy way to debug homebrews on the switch so you'll
    be limited to printf debugging and fatal screen interpretation mostly. 


Development tools
-----------------

To get started, make sure you have all the following tools installed on your system.

1. `devkitA64 <https://devkitpro.org/wiki/Getting_Started>`_
    - The toolchains used to compile your homebrew apps. Windows has a installer for it and other platforms just use pacman. Make sure to actually install the switch package that contains devkitA64!
2. `Visual Studio Code <https://code.visualstudio.com/>`_
    - A amazing IDE / Text editor that works perfectly for homebrew development.
    - Make sure to install the C/C++ and optionally the GitLens extension
3. `GitKraken [Optional] <https://www.gitkraken.com/>`_
    - A Git GUI that makes version control super easy.

Useful resources
----------------

1. `SwitchBrew <https://switchbrew.org>`_
    - Provides information about the Switch's hardware and software.
2. `libnx <https://github.com/switchbrew/libnx>`_
    - A amazing homebrew library that gives access to many of the switch's hardware and software features. ¨
    - A Doxygen documentation can be found `here <https://switchbrew.github.io/libnx/>`_
3. `switch-examples <https://github.com/switchbrew/switch-examples>`_ 
    - Examples for common homebrew features
4. `SwIPC <https://reswitched.github.io/SwIPC/>`_
    - A documentation of most of the switch's IPC calls.
5. `stratosphere <https://github.com/Atmosphere-NX/Atmosphere/tree/master/stratosphere>`_
    - Atmosphere's custom or reimplemented sysmodules.
6. `GitHub <https://github.com/search?q=Nintendo+Switch+homebrew>`_
    - Other peoples homebrew projects are a great way of learning
7. `Error Codes <https://switchbrew.org/wiki/Error_codes>`_
    - Descriptions for fatal and IPC error codes 


.. toctree::
   :maxdepth: 2
   :caption: Contents: