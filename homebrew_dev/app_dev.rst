.. Homebrew Guide documentation master file, created by
   sphinx-quickstart on Sun Jan 13 23:22:33 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Homebrew app development
========================

A homebrew app is a program that can be launched through the hbmenu when running a CFW on the Switch.
Common examples are `EdiZon <https://github.com/WerWolv/EdiZon>`_, `Goldleaf <https://github.com/XorTroll/Goldleaf>`_ or `NX-Shell <https://github.com/joel16/NX-Shell>`_.
These are the easiest to develop kind of homebrew as prototyping is fast and debugging is pretty easy with some good
C/C++ knowledge.

Getting started
...............

The first thing you'll need to get to start a project is a Makefile. These files are used to tell ``make`` how to turn your code into 
a executable .nro file. Luckily there's a `premade template project <https://github.com/switchbrew/switch-examples/tree/master/templates/application>`_
that can be used for this purpose.

Download the whole application folder from the GitHub repo and put it somewhere on your computer.

.. important::
    Make sure the path is not too long and doesn't contain any spaces! Placing it in a OneDrive/GDrive sync folder is a terrible idea too.

Once you're done, rename the application folder to whatever your project should be called and open in in VSCode.


Setup code completion for libnx
...............................

To use code completion in VSCode for libnx functions, the libnx include file path has to be added to the c_cpp_properties.json
config file. To do this, first you need the `C/C++ extension <https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools>`_
from the market place. After a reload open the ``.vscode`` folder that got created in your project directory (If it isn't there, just create it).
In that folder create a file called ``c_cpp_properties.json`` and paste the following code into it::

    {
        "configurations": [
            {
                "name": "DKP aarch64",
                "includePath": [
                    "/path/to/devkitPro/devkitA64/aarch64-none-elf/include/**",
                    "/path/to/devkitPro/devkitA64/lib/gcc/aarch64-none-elf/8.3.0/include/**",
                    "/path/to/devkitPro/libnx/include/**",
                    "/path/to/devkitPro/portlibs/switch/include/**"
                ],
                "defines": [
                    "SWITCH",
                    "__SWITCH__",
                    "DEBUG"
                ],
                "compilerPath": "/path/to/devkitPro/devkitA64/bin/aarch64-none-elf-g++",
                "cStandard": "c11",
                "cppStandard": "c++17",
                "intelliSenseMode": "gcc-x64"
            }
        ],
        "version": 4
    }

Now replace all the ``/path/to`` with the actual path to your devkitPro folder.

.. note::
    On windows this is usually C:/devkitPro, on Linux it's /opt/devkitpro

Configuring the Makefile
........................

To give the app a name, author and version you'll have to define ``APP_TITLE``, ``APP_AUTHOR`` and ``APP_VERSION``
in the Makefile. These three strings will later get displayed in the hbmenu.

.. image::
    https://totallynotavir.us/i/nv51r8hm.png

Most apps also need an icon. For this, draw a 256x256 pixel JPG image, name it icon.jpg and place it in the root of your project folder
(the same location where your Makefile lies).


Building the NRO
................

If everything was setup correctly simply open a shell in your project directory and type ``make``.
(Use msys2 that got installed by devkitPro on Windows)
If everything has been setup correctly up to this point, it will build successfully and you'll end up with a .nro file.

Simply copy the file into your /switch folder on your SD card and run it using the hbmenu. If it's working it will display
``Hello World`` on the screen and wait until you press the PLUS button on your joycon and then exits back to the hbmenu.


Actually writing code
---------------------

Now that your project is up and running you probably want to start writing some code. Here are the most
common things that you'll most likely use in your project.


Command line interfaces
.......................

A command line interface is the most basic way to return information to the user in form of a text-based UI::
    
    int main(int argc, char* argv[]) {
        consoleInit(NULL);              // Initialize the console; redirect printf to the console

        printf("Hello World!\n");       // Print Hello World to the console

        while (appletMainLoop()) {      // while the application hasn't received an exit request...
            consoleUpdate(NULL);        // Update the screen
        }

        consoleExit(NULL);              // Clean up 
        return 0;
    }

The above code should seem fairly familiar to you. It's the same as in the template project.
If you want colorful text, the normal `ANSI color commands <http://www.andrewnoske.com/wiki/Bash_-_adding_color>`_ can be used.


Button input
............

To get input from the joycon controllers, the hid interface from libnx can be used.
First of all the controllers have to be polled. This should happen once every frame by calling ``hidScanInput()``
inside the ``while(appletMainLoop())`` loop.

To actually read the input, the following functions are available:

* ``hidKeysDown(CONTROLLER_P1_AUTO)``: Returns the buttons that are pressed right now but weren't in the last frame.
* ``hidKeysHeld(CONTROLLER_P1_AUTO)``: Returns the buttons that are pressed right now.
* ``hidKeysUp(CONTROLLER_P1_AUTO)``: Returns the buttons that aren't pressed anymore right now but were in the last frame.

The value that gets returned from these functions is a bitmap with the appropriate bits set to one.
To check if e.g the A button has been pressed, the following code can be used::

    hidScanInput();

    u64 kdown = hidKeysDown(CONTROLLER_P1_AUTO);

    if (kdown & KEY_A)
        printf("The A button was pressed");

If you want to check for other buttons, you can find the enum with all the button values `in hid.h on the libnx GitHub <https://github.com/switchbrew/libnx/blob/master/nx/include/switch/services/hid.h#L243-L290>`_.

Keep in mind that homebrews usually don't do automatic controller switching. Passing ``CONTROLLER_P1_AUTO`` to the hidKeys functions
is the closest you can get to the default behaviour. If no external controller is connected, it will read the input from the attached
joycons. Otherwise it will read input from the first controller. 


Debugging
---------

For homebrew apps, there are three main ways to debug your code.

Printf debugging through nxlink
...............................

Nxlink is a command line tool that comes with devkitpro::

    Usage: nxlink [options] nrofile

    --help,    -h   Display this information
    --address, -a   Hostname or IPv4 address of Switch
    --retries, -r   number of times to ping before giving up
    --path   , -p   set upload path for file
    --args          args to send to nro
    --server , -s   start server after completed upload

If setup correctly inside the homebrew it can be used to redirect printf output to the computer over TCP.
Setting up is done as follows::

    socketInitializeDefault();              // Initialize sockets
    nxlinkStdio();                          // Redirect stdout and stderr over the network to nxlink
    
    while (appletMainLoop()) {
        printf("Hello from the switch!");   // Will get sent to nxlink
    }

    socketExit();                           // Cleanup

To launch the application and attach to it now, open the hbmenu and press the Y button. You're now in NetLoader mode.
On the computer open a command line and type ``nxlink -s path/to/homebrew.nro``. If nxlink can't find the switch
because of the network setup, ``-a xxx.xxx.xxx.xxx`` can be used to manually specify the IP of the switch.
This will send the specified NRO to the switch, launches it and attaches to its opened TCP socket.

If the switch crashes with a **2347-0005 (0xb5b)** fatal error, make sure you passed the .nro file to nxlink. 
.elf, .nso or .ncap will **NOT** work!

Interpreting fatal error screens
................................

The fatal error screen is incredibly useful to find errors that manage to crash the switch.
The following image shows a typical fatal screen.

.. image::
    https://totallynotavir.us/i/bz838pwl.png

**Error Code**

This is the reason why a fatal error was issued. Most common ones are

- 2168-0002: Segmentation Fault (Reading or Writing from or to a bad address)
- 2168-0001: Prefetch-abort (Program counter tries to execute non-executable memory)

For any error codes that are not specified in the list above, check `switchbrew's error codes page <https://switchbrew.org/wiki/Error_codes>`_

**Title**

The title in which the crash occured. ``010000000000100D`` is the titleID of the album and therefor of your homebrew app.
If there's a different titleID mentioned, an action in your homebrew probably managed to crash a sysmodule and you should check
your IPC/svc calls.

**PC and Backtrace**

This is the most useful information because these addresses can be used to find **the exact line the crash happened on**.
First the address relative to the start of your homebrew has to be calculated. For this, take either the value next to PC or
the values on the backtrace stack (if you need to know the exact path the program took) and subtract the **Backtrace - Start Address**
value from it. Next use ``aarch64-none-elf-addr2line -e /path/to/homebrew.elf -f -p -C -a 0xCAFEBABE`` (replace 0xCAFEBABE with your calculated value)
to find the exact line in your program. Make sure to pass the .elf file to addr2line and **NOT** the .nro!


Twili
.....

Twili is a debug monitor with **A TON** of great features. If you're interested in how to setup and use it, check out the
`GitHub page <https://github.com/misson20000/twili>`_


.. toctree::
   :maxdepth: 2
   :caption: Contents: