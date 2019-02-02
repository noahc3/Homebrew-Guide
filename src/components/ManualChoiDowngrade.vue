<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Downgrading Manually from/to Any Firmware
            </h1>
            <div class="ui divider"></div>
            <p style="text-align: center">This guide will teach you how to downgrade any firmware version to any firmware version of your choosing, using the Choidujour Windows application.<br><br>
                <b style="color:red;">This guide will likely take at least an hour to complete if it is your first time. If you decide to stop half way through, you must restore your NAND backup that you will create with Hekate to make your Switch work again.</b> <br><br>
                <sub>Credit to shchmue for figuring out how to recover BIS keys from firmware 6.2.0+</sub></p>
        </div>

        <div class="ui teal message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            If something goes wrong or you need help, check <router-link to="/troubleshooting">troubleshooting</router-link>.
        </div>

        <div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                !!! IMPORTANT !!!
            </h2>
            <div class="ui divider"></div>
            <p><b style="color:red">This guide is only for who do not have access to CFW on their latest firmware version and do not have a working NAND backup from a lower firmware version.</b> If you have access to CFW, follow <router-link class="item" to="/manualupdate">Manually Updating/Downgrading</router-link> instead. If you have a working NAND backup, you can restore that with Hekate instead to downgrade to whatever firmware version that NAND backup was made on. <b>In all cases, the side-effects below might still apply.</b></p>
        </div>

        <div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                IMPORTANT: To 7.0.0 Downgraders
            </h2>
            <div class="ui divider"></div>
            <p>You cannot downgrade directly to 6.2.0 as the ChoiDujour PC application does not support 6.2.0. You must downgrade to any other firmware version first and then upgrade back to 6.2.0 with ChoiDujourNX if you specifically want 6.2.0</p>
        </div>

        <div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                !!! IMPORTANT !!!
            </h2>
            <div class="ui divider"></div>
            <p>This process is very complex and contains many steps. Make sure to read everything carefully, as <b style="color: red">any missteps can lead to a bricked Switch.</b> You have been warned. </p>
        </div>

        <div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                IMPORTANT: Understanding AutoRCM
            </h2>
            <div class="ui divider"></div>
            <p><b style="color:red">AutoRCM is required while your Switch is downgraded. </b>AutoRCM is a software method of forcing your Switch to go into RCM on every launch, without the need of a jig or hardmod. Essentially, you are purposefully bricking your Switch in a controlled matter that forces it to launch into recovery. This might sound scary but is not actually dangerous, and can be undone at any time.<br><br>
                AutoRCM has the following benefits:
            </p>
            <ul>
                <li>You will be able to bypass the normally required fuse count, allowing you to launch any firmware version of your choosing.</li>
                <li>The Switch will not burn any fuses, meaning you can downgrade your Switch to a lower firmware version in the future should the need arise.</li>
                <li>You will never accidentally boot stock firmware, meaning you can avoid having telemetry data accidentally sent to Nintendo.</li>
            </ul>
            <p style="color:red">AutoRCM has the following disadvantages:</p>
            <ul>
                <li>You will not be able to boot your Switch at all without a payload sender.</li>
                <li>Your Switch will not turn off correctly from the Switch OS. You will have to shutdown from a payload like Hekate.</li>
            </ul>
            <p>
                Because your fuse count will be incorrect for the firmware version you are downgrading to, <b style="color:red">AutoRCM is required to boot your Switch</b> until you upgrade again.
            </p>

            <p>AutoRCM can always be disabled <b>Hekate > Tools > AutoRCM</b></p>

            <p style="color:red">In the past, downgrading below your fuse count would mean you could no longer use sleep mode. This is no longer the case, as Hekate and Atmosphere both support sleep mode while downgraded.</p>
        </div>

        <div class="ui info message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            This guide will allow you to recover your BIS keys if you do not already have them.
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 0: Before Starting
            </h2>
            <div class="ui divider"></div>
            <ol>
                <li>You should have the latest version of Hekate and a working Hekate setup on your SD card (ex. Kosmos)</li>
                <li>You need a Windows PC capable of pushing payloads <b>(you <i>need</i> a Windows PC to follow this guide)</b></li>
                <li>You need the firmware binaries for the firmware version you want to downgrade to. These cannot be shared here as they are copyrighted. Google is your friend.
                    <ul>
                        <li>You cannot use 6.2.0 or 7.0.0 firmware files as the ChoiDujour PC application does not support these versions. If you want to specifically downgrade to 6.2.0, you must first downgrade to any other firmware version and then upgrade to 6.2.0 using ChoiDujourNX.</li>
                    </ul>
                </li>
                <li>You need a fully populated hactool keys.txt file. These cannot be shared as doing so is illegal. Google is your friend.
                    <ul>
                        <li>ChoiDujour is very picky about the keys file you use. If you have one generated from Lockpick or HACGUI, use that.</li>
                        <li>You cannot generate this with a 7.0.0 NAND (ex. lockpick or HACGUI). You must obtain this either from a dump you already have or online.</li>
                    </ul>
                </li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 1: Preparing Files
            </h2>
            <div class="ui divider"></div>
            <ol>
                <li>Make sure your SD card includes a basic Hekate/Atmosphere setup (such as the one installed when following this guide)</li>
                <li>Insert your SD card into your PC</li>
                <li>Go to <a href="https://switchtools.sshnuke.net/">switchtools.sshnuke.net</a></li>
                <li>Download the latest version of <b>ChoiDujour</b> (NOT ChoiDujour<b style="color: red;">NX</b>) by rajkosto</li>
                <li>Download the latest version of <b>HacDiskMount</b> by rajkosto</li>
                <li>Download the latest version of <b>memloader</b> by rajkosto</li>
                <li>Extract each downloaded .ZIP file to separate folders on your PC</li>
                <li>Copy your hactool <b>keys.txt</b> into the ChoiDujour folder</li>
                <li>Create a folder named <b>"fw"</b> inside of your ChoiDujour folder</li>
                <li>Extract the contents of your firmware .ZIP file to the newly created <b>"fw"</b> folder</li>
                <li>Go to <a href="https://www.balena.io/etcher/">https://www.balena.io/etcher/</a>, download and install Etcher for your system</li>
                <li>In File Explorer, make sure Hidden Files are set to be shown</li>
                <img src="https://puu.sh/C65Ri/a4bf21e2f4.png" style="max-width: 100%;display:block;margin:auto"/>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 2: Backing up your NAND
            </h2>
            <div class="ui divider"></div>
            <p>By backing up your NAND (the Switch's internal memory), you will later be able to restore it in the event that anything goes wrong, essentially rewinding it back to a previous state.<br><br>
                <b style="color: red;">If anything goes wrong during this guide, you can always restore this backup with Hekate and restart</b> </p>

            <ol>
                <li>Enter RCM and send the <b>"hekate-ctcaer-4.6.bin"</b> payload</li>
                <li>In Hekate, select <b>'Tools > Backup > Backup eMMC BOOT0/1'</b>
                    <ul><li>Use Volume +/- to change menu selection and Power to select an option.</li></ul>
                </li>
                <li>When finished, remove your SD card (you don't need to shutdown Hekate), insert it into your PC, and copy the 'backup' folder to a safe location on your PC. Afterwards, delete the 'backup' folder on your SD card.</li>
                <li>Insert your SD card back into your Switch</li>
                <li>In Hekate, select <b>'Backup eMMC RAW GPP'</b>
                    <ul><li>If your SD card has less than ~32GB free space, Hekate will provide additional instructions every few minutes about pulling files off of your SD card so it can continue.</li></ul>
                </li>
                <li>If you weren't required to copy files during the backup process, once again copy the 'backup' folder off of your SD card and put it in a safe location on your PC. Delete the 'backup' folder on your SD card.</li>
                <li>Go back to the main menu and select 'Reboot (RCM)'</li>
            </ol>
            <div class="ui yellow message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                It is highly recommended that you store these backups in multiple locations (ex. cloud storage, external harddrive, etc) as they may be critical to restoring your Switch if anything goes wrong in the future.
            </div>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 3: Preparing SD card
            </h2>
            <div class="ui divider"></div>
            <ol>
                <li>Insert your SD card into your PC</li>
                <li>Navigate to where you extracted memloader earlier</li>
                <li>Copy <b>the contents</b> of the <b>"/sample"</b> folder to <b>the root</b> of your SD card</li>
                <li>Safely eject your SD card from your PC and put it into your Switch</li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 4: Converting Firmware Files
            </h2>
            <div class="ui divider"></div>
            <ol>
                <li>Navigate to your ChoiDujour folder with File Explorer</li>
                <li>In the address bar at the top, type <b>"cmd"</b> and press enter. A command prompt should open.</li>
                <img src="https://puu.sh/C652v/857f93f5ed.png" style="max-width: 100%;display:block;margin:auto"/>
                <li>In the command prompt, type <b>"ChoiDujour.exe --keyset=keys.txt fw"</b> without quotes
                    <ul>
                        <li>If ChoiDujour says it cannot find firmware files or keys.txt, you likely put keys.txt or the firmware files in the wrong location. Try steps 1.9-1.13 again.</li>
                        <li>If the script fails otherwise, your keys.txt may be incompatible with ChoiDujour.</li>
                    </ul>
                </li>
                <li>Once finished, you should see a message similar to <b>"All files verified! Prepared firmware update is in folder NX-6.1.0"</b> in the command prompt. Make sure you can find this folder, it will be used later.</li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 5: Transferring boot0 to your Switch
            </h2>
            <div class="ui divider"></div>
            <div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h2 class="ui header" style="text-align:center">
                    !!! IMPORTANT !!!
                </h2>
                <div class="ui divider"></div>
                <p style="text-align: center;">In this step, <b style="color: red">NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".</b></p>
                <img src="https://puu.sh/C65yy/8d4a4708fd.png" style="max-width: 100%;display:block;margin:auto"/>
            </div>
            <div class="ui divider"></div>
            <ol>
                <li>Press <b>Windows Key + R</b></li>
                <li>In the <b>"Run"</b> dialogue, type <b>"devmgmt.msc"</b> without quotes and press enter to open Device Manager</li>
                <li>Put your Switch into RCM and send the <b>"memloader.bin"</b> payload you downloaded earlier</li>
                <li>On your Switch, using volume buttons, navigate to <b>"ums_boot0.ini"</b> and select it with power</li>
                <li>The disk should now connect to your PC. In Device Manager, make sure you can see <b>"LINUX UMS DISK 0"</b> under <b>"Disk Drives"</b>
                    <ul>
                        <li>If you see <b>"USB Download Gadget"</b>, right click the entry and choose Uninstall.</li>
                        <li>If you cannot see this, look through Device Manager for any devices with a yellow warning icon. Right click and choose uninstall.</li>
                        <li>After doing the above, choose <b>"Scan for hardware changes"</b> in the Device Manager toolbar</li>
                        <li>If you still cannot see <b>"LINUX UMS DISK 0"</b> under <b>"Disk Drives"</b>, <b>STOP!</b> Press and hold the power button to shutdown the Switch and try steps 5.3-5.5 again. <b>You cannot continue until you see this device.</b></li>
                    </ul>
                </li>
                <li>Open Etcher.</li>
                <li>Click <b>"Select image"</b>, browse for <b>"BOOT0.BIN"</b> which was generated within the NX-X.X.X folder you created earlier with ChoiDujour
                    <ul>
                        <li>Etcher may say that <b>BOOT0.BIN</b> is not a bootable image. Select <b>"Continue"</b> anyways.</li>
                    </ul>
                </li>
                <li>Make sure the target is <b>"Linux UMS USB Device"</b> if it is not already chosen</li>
                <li><b style="color:red;">"BOOT0.BIN" MUST SHOW AS 1.57MB. "Linux UMS USB Device" MUST SHOW AS 4.19MB.</b> If any of the sizes are incorrect, <b style="color:red;">STOP! You cannot continue!</b> Repeat steps 1.11-1.13, 4.1-4.4, and 5.3-5.9.</li>
                <img src="https://puu.sh/C66TN/97d03d8ae3.png" style="max-width: 100%;display:block;margin:auto"/>
                <li>If everything looks alright, press <b>"Flash!"</b> and wait for the process to complete.</li>
                <li>Once finished, hold the power button to shutdown your Switch.</li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 6: Transferring boot1 to your Switch
            </h2>
            <div class="ui divider"></div>
            <div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h2 class="ui header" style="text-align:center">
                    !!! IMPORTANT !!!
                </h2>
                <div class="ui divider"></div>
                <p style="text-align: center;">In this step, <b style="color: red">NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".</b></p>
                <img src="https://puu.sh/C65yy/8d4a4708fd.png" style="max-width: 100%;display:block;margin:auto"/>
            </div>
            <div class="ui divider"></div>
            <ol>
                <li>Put your Switch into RCM and send the <b>"memloader.bin"</b> payload you downloaded earlier</li>
                <li>On your Switch, using volume buttons, navigate to <b>"ums_boot1.ini"</b> and select it with power</li>
                <li>The disk should now connect to your PC. In Device Manager, make sure you can see <b>"LINUX UMS DISK 0"</b> under <b>"Disk Drives"</b>
                    <ul>
                        <li>If you see <b>"USB Download Gadget"</b>, right click the entry and choose Uninstall.</li>
                        <li>If you cannot see this, look through Device Manager for any devices with a yellow warning icon. Right click and choose uninstall.</li>
                        <li>After doing the above, choose <b>"Scan for hardware changes"</b> in the Device Manager toolbar</li>
                        <li>If you still cannot see <b>"LINUX UMS DISK 0"</b> under <b>"Disk Drives"</b>, <b>STOP!</b> Press and hold the power button to shutdown the Switch and try steps 5.3-5.5 again. <b>You cannot continue until you see this device.</b></li>
                    </ul>
                </li>
                <li>Click <b>"Select image"</b>, browse for <b>"BOOT1.BIN"</b> which was generated within the NX-X.X.X folder you created earlier with ChoiDujour
                    <ul>
                        <li>Etcher may say that <b>BOOT1.BIN</b> is not a bootable image. Select <b>"Continue"</b> anyways.</li>
                    </ul>
                </li>
                <li>Click <b>"Select image"</b>, browse for <b>"BOOT1.BIN"</b> which was generated within the NX-X.X.X folder you created earlier with ChoiDujour</li>
                <li>Make sure the target is <b>"Linux UMS USB Device"</b> if it is not already chosen</li>
                <li><b style="color:red;">"BOOT1.BIN" MUST SHOW AS 524.29KB. "Linux UMS USB Device" MUST SHOW AS 4.19MB.</b> If any of the sizes are incorrect, <b style="color:red;">STOP! You cannot continue!</b> Repeat steps 1.11-1.13, 4.1-4.4, and 5.1-5.7.</li>
                <img src="https://puu.sh/C676E/3dc60b58bb.png" style="max-width: 100%;display:block;margin:auto"/>
                <li>If everything looks alright, press <b>"Flash!"</b> and wait for the process to complete.</li>
                <li>Once finished, hold the power button to shutdown your Switch.</li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 7: Transferring BCPKG2 images to your Switch
            </h2>
            <div class="ui divider"></div>
            <div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h2 class="ui header" style="text-align:center">
                    !!! IMPORTANT !!!
                </h2>
                <div class="ui divider"></div>
                <p style="text-align: center;">In this step, <b style="color: red">NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".</b></p>
                <img src="https://puu.sh/C65yy/8d4a4708fd.png" style="max-width: 100%;display:block;margin:auto"/>
            </div>
            <div class="ui divider"></div>
            <ol>
                <li>Put your Switch into RCM and send the <b>"memloader.bin"</b> payload you downloaded earlier</li>
                <li>On your Switch, using volume buttons, navigate to <b>"ums_emmc.ini"</b> and select it with power</li>
                <li>The disk should now connect to your PC. In Device Manager, make sure you can see <b>"LINUX UMS DISK 0"</b> under <b>"Disk Drives"</b>
                    <ul>
                        <li>If you see <b>"USB Download Gadget"</b>, right click the entry and choose Uninstall.</li>
                        <li>If you cannot see this, look through Device Manager for any devices with a yellow warning icon. Right click and choose uninstall.</li>
                        <li>After doing the above, choose <b>"Scan for hardware changes"</b> in the Device Manager toolbar</li>
                        <li>If you still cannot see <b>"LINUX UMS DISK 0"</b> under <b>"Disk Drives"</b>, <b>STOP!</b> Press and hold the power button to shutdown the Switch and try steps 5.3-5.5 again. <b>You cannot continue until you see this device.</b></li>
                    </ul>
                </li>
                <li>Locate HacDiskMount which you extracted earlier</li>
                <li>Right click <b>HacDiskMount.exe</b> and choose <b>"Run as Administrator"</b></li>
                <li>Choose <b>File > Open Physical Drive</b> from the menu bar</li>
                <li>Choose <b>Linux UMS disk 0 (29.121GiB)</b>. If you do not see this device <b>with the exact name, STOP! You cannot continue.</b> Close HacDiskMount and hold the power button on your Switch to shut down. Repeat steps 7.1-7.7</li>
                <li>Make sure you see a list of partitions as shown below</li>
                <img src="https://puu.sh/C67nN/a471896603.png" style="max-width: 100%;display:block;margin:auto"/>
                <li>Double-click <b>"BCPKG2-1-Normal-Main"</b></li>
                <li>Make sure both BIS key text boxes are BLANK. Clear them and press <b>"Test"</b> if they are not.</li>
                <li>In the <b>"Restore from file"</b> section, select <b>"Browse"</b> and search for the <b>"BCPKG2-1-Normal-Main.bin"</b> file inside of the NX-X.X.X folder generated earlier with ChoiDujour.</li>
                <li>Select <b>"Start"</b> and wait for the process to complete.</li>
                <li>Close the <b>"Operations on BCPKG2-1-Normal-Main"</b> window</li>
                <li>Repeat steps 7.9-7.13 for each of the following partitions, <b style="color:red;">making sure to select the appropriately named paritions and filenames for each:</b>
                    <ul>
                        <li>BCPKG2-2-Normal-Sub</li>
                        <li>BCPKG2-3-SafeMode-Main</li>
                        <li>BCPKG2-4-SafeMode-Sub</li>
                    </ul>
                    For example, for <b>"BCPKG2-3-SafeMode-Main"</b> you would double click the <b>"BCPKG2-3-SafeMode-Main"</b> partition, and use the <b>"BCPKG2-3-SafeMode-Main.bin"</b> file when restoring.
                </li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 8: Recovering your BIS Keys
            </h2>
            <div class="ui divider"></div>
            <div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h2 class="ui header" style="text-align:center">
                    !!! IMPORTANT !!!
                </h2>
                <div class="ui divider"></div>
                <p style="text-align: center;">BIS, TSEC and SBK keys are console unique. <b style="color: red">You cannot use someone else's BIS, TSEC or SBK keys.</b> Make sure you are using/dumping your own.</p>
            </div>
            <div class="ui teal message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <p style="text-align: center;">If you already have your BIS keys, skip to <b>Step 9</b></p>
            </div>
            <div class="ui teal message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <p style="text-align: center;">If you already have a backup of <b>your console unique</b> fuses.bin and tsec_keys.bin, skip to <b>Step 8.12</b></p>
            </div>
            <div class="ui teal message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <p style="text-align: center;">You can follow this step even if you have already updated to 6.2.0.</p>
            </div>
            <div class="ui divider"></div>
            <ol>
                <li>Close HacDiskMount</li>
                <li>Hold the power button on your Switch to shut down</li>
                <li>Put your Switch into RCM and send the <b>"hekate-ctcaer-4.6.bin"</b> payload you downloaded earlier</li>
                <li>In Hekate, navigate to <b>Console Info > Print fuse info</b></li>
                <li>Press <b>Power</b> to dump your fuse information to your SD card</li>
                <li>Press <b>Volume +/-</b> to go back</li>
                <li>Navigate to Print TSEC keys</li>
                <li>Press <b>Power</b> to dump your TSEC keys to your SD card</li>
                <li>Press <b>Volume +/-</b> to go back</li>
                <li>Go back to the main menu and choose <b>Reboot (RCM)</b></li>
                <li>Insert your SD Card into your PC</li>
                <li>Go to <a href="https://www.sdsetup.com/biskeygen">https://www.sdsetup.com/biskeygen</a> </li>
                <li>Under <b>"Upload Hekate fuses.bin"</b>, click <b>Choose File</b></li>
                <li>Browse for <b>"[SD]/backup/[8 character folder]/dumps/fuses.bin"</b></li>
                <li>Under <b>"Upload Hekate tsec_keys.bin"</b>, click <b>Choose File</b></li>
                <li>Browse for <b>"[SD]/backup/[8 character folder]/dumps/tsec_keys.bin"</b></li>
                <li>Press <b>"Derive BIS Keys"</b></li>
                <li>The <b>"Output"</b> textbox should now be filled with 8 keys as shown below.</li>
                <img src="https://puu.sh/C68E1/e7692c881a.png" style="max-width: 100%;display:block;margin:auto"/>
                <li>Store these keys somewhere safe, they will be used in the next step.</li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 9: Configuring HacDiskMount BIS Keys
            </h2>
            <div class="ui divider"></div>
            <div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h2 class="ui header" style="text-align:center">
                    !!! IMPORTANT !!!
                </h2>
                <div class="ui divider"></div>
                <p style="text-align: center;">In this step, <b style="color: red">NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".</b></p>
                <img src="https://puu.sh/C65yy/8d4a4708fd.png" style="max-width: 100%;display:block;margin:auto"/>
            </div>
            <div class="ui divider"></div>
            <ol>
                <li>If you closed memloader and HacDiskMount in the last step:
                    <ol>
                        <li>Put your Switch into RCM and send the <b>"memloader.bin"</b> payload you downloaded earlier</li>
                        <li>On your Switch, using volume buttons, navigate to <b>"ums_emmc.ini"</b> and select it with power</li>
                        <li>The disk should now connect to your PC. In Device Manager, make sure you can see <b>"LINUX UMS DISK 0"</b> under <b>"Disk Drives"</b>
                            <ul>
                                <li>If you see <b>"USB Download Gadget"</b>, right click the entry and choose Uninstall.</li>
                                <li>If you cannot see this, look through Device Manager for any devices with a yellow warning icon. Right click and choose uninstall.</li>
                                <li>After doing the above, choose <b>"Scan for hardware changes"</b> in the Device Manager toolbar</li>
                                <li>If you still cannot see <b>"LINUX UMS DISK 0"</b> under <b>"Disk Drives"</b>, <b>STOP!</b> Press and hold the power button to shutdown the Switch and try steps 5.3-5.5 again. <b>You cannot continue until you see this device.</b></li>
                            </ul>
                        </li>
                        <li>Locate HacDiskMount which you extracted earlier</li>
                        <li>Right click <b>HacDiskMount.exe</b> and choose <b>"Run as Administrator"</b></li>
                        <li>Choose <b>File > Open Physical Drive</b> from the menu bar</li>
                        <li>Choose <b>Linux UMS disk 0 (29.121GiB)</b>. If you do not see this device <b>with the exact name, STOP! You cannot continue.</b> Close HacDiskMount and hold the power button on your Switch to shut down. Repeat steps 7.1-7.7</li>
                        <li>Make sure you see a list of partitions as before</li>
                    </ol>
                </li>
                <li>Double-click the <b>"PRODINFO"</b> partition</li>
                <li>Copy the 32 character <b>"BIS Key 0 (Crypt)"</b> key you obtained earlier into the <b>Crypto (Upper)</b> text box</li>
                <li>Copy the 32 character <b>"BIS Key 0 (Tweak)"</b> key you obtained earlier into the <b>Tweak (Lower)</b> text box</li>
                <li>Press <b>"Save"</b>
                    <ul>
                        <li>You should see a green message with <b>"OK!"</b> next to the <b>"Save"</b> button like shown in the picture below.</li>
                        <li>If the message is red, <b style="color: red;">STOP! Your keys are WRONG! You cannot continue.</b> Make sure you put in the correct keys, and otherwise repeat step 8.</li>
                    </ul>
                </li>
                <img src="https://puu.sh/C693m/8de28d2b24.png" style="max-width: 100%;display:block;margin:auto"/>
                <li>Close the <b>"Operations on PRODINFO"</b> window</li>
                <br>
                <li>Double-click the <b>"PRODINFOF"</b> partition</li>
                <li>Make sure the keys are prefilled</li>
                <li>Press <b>"Test"</b>
                    <ul>
                        <li>You should see a green message with <b>"OK!"</b> next to the <b>"Save"</b> button like before.</li>
                        <li>If the message is red, <b style="color: red;">STOP! Your keys are WRONG! You cannot continue.</b> Make sure you put in the correct keys in the last step, and otherwise repeat step 8.</li>
                    </ul>
                </li>
                <li>Close the <b>"Operations on PRODINFOF"</b> window</li>
                <br>
                <li>Double-click the <b>"SAFE"</b> partition</li>
                <li>Copy the 32 character <b>"BIS Key 1 (Crypt)"</b> key you obtained earlier into the <b>Crypto (Upper)</b> text box</li>
                <li>Copy the 32 character <b>"BIS Key 1 (Tweak)"</b> key you obtained earlier into the <b>Tweak (Lower)</b> text box</li>
                <li>Press <b>"Save"</b>
                    <ul>
                        <li>You should see a green message with <b>"OK!"</b> next to the <b>"Save"</b> button like before.</li>
                        <li>If the message is red, <b style="color: red;">STOP! Your keys are WRONG! You cannot continue.</b> Make sure you put in the correct keys, and otherwise repeat step 8.</li>
                    </ul>
                </li>
                <li>Close the <b>"Operations on SAFE"</b> window</li>
                <br>
                <li>Double-click the <b>"SYSTEM"</b> partition</li>
                <li>Copy the 32 character <b>"BIS Key 2 (Crypt)"</b> key you obtained earlier into the <b>Crypto (Upper)</b> text box</li>
                <li>Copy the 32 character <b>"BIS Key 2 (Tweak)"</b> key you obtained earlier into the <b>Tweak (Lower)</b> text box</li>
                <li>Press <b>"Save"</b>
                    <ul>
                        <li>You should see a green message with <b>"OK!"</b> next to the <b>"Save"</b> button like before.</li>
                        <li>If the message is red, <b style="color: red;">STOP! Your keys are WRONG! You cannot continue.</b> Make sure you put in the correct keys, and otherwise repeat step 8.</li>
                    </ul>
                </li>
                <li>Close the <b>"Operations on SYSTEM"</b> window</li>
                <br>
                <li>Double-click the <b>"USER"</b> partition</li>
                <li>Copy the 32 character <b>"BIS Key 3 (Crypt)"</b> key you obtained earlier into the <b>Crypto (Upper)</b> text box</li>
                <li>Copy the 32 character <b>"BIS Key 3 (Tweak)"</b> key you obtained earlier into the <b>Tweak (Lower)</b> text box</li>
                <li>Press <b>"Save"</b>
                    <ul>
                        <li>You should see a green message with <b>"OK!"</b> next to the <b>"Save"</b> button like before.</li>
                        <li>If the message is red, <b style="color: red;">STOP! Your keys are WRONG! You cannot continue.</b> Make sure you put in the correct keys, and otherwise repeat step 8.</li>
                    </ul>
                </li>
                <li>Close the <b>"Operations on USER"</b> window</li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 10: Transferring SAFE
            </h2>
            <div class="ui divider"></div>
            <div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h2 class="ui header" style="text-align:center">
                    !!! IMPORTANT !!!
                </h2>
                <div class="ui divider"></div>
                <p style="text-align: center;">In this step, <b style="color: red">NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".</b></p>
                <img src="https://puu.sh/C65yy/8d4a4708fd.png" style="max-width: 100%;display:block;margin:auto"/>
            </div>
            <div class="ui divider"></div>
            <ol>
                <li>Double-click <b>"SAFE"</b> in HacDiskMount</li>
                <li>Make sure both BIS key text boxes are FILLED as they should have been in Step 9. Press <b>"Test"</b> and make sure they are green as before.</li>
                <li>Under <b>"Virtual Drive"</b>, if the driver status shows up as <b>"Driver not installed"</b>, click <b>"Install"</b> to install it.
                    <ul>
                        <li>You may see driver signature verification dialogs. Accept all of them.</li>
                    </ul>
                </li>
                <li>Make sure the text now says <b>"Driver (ver xxxx.x.x.xx) installed, service is running"</b> as shown in the image below.</li>
                <img src="https://puu.sh/C69Sg/e203765548.png" style="max-width: 100%;display:block;margin:auto"/>
                <li>Under <b>"Virtual drive"</b>, select an unused drive letter</li>
                <li>Make sure <b>"Passthrough zeroes"</b> is checked</li>
                <li>Press <b>"Mount"</b></li>
                <li style="color:red">MAKE SURE YOU DO NOT FORMAT THE DRIVE AS PER THE WARNING ABOVE. You will not be warned again.</li>
                <li>Navigate to the newly mounted drive in File Explorer</li>
                <li>If you see anyt files/folders in this drive, delete ALL of them. <b>Make sure the drive is EMPTY before continuing.</b>
                    <ul>
                        <li>It is normal to not see any. If there are no files/folders, skip this step.</li>
                    </ul>
                </li>
                <li>Navigate to <b>"/NX-X.X.X/SAFE"</b> folder which was generated with ChoiDujour.</li>
                <li>If you see any files/folders in this folder, copy ALL OF THEM to the mounted drive.
                    <ul>
                        <li>It is normal to not see any. If there are no files/folders, skip this step.</li>
                    </ul>
                </li>
                <li>In HacDiskMount, under <b>"Virtual drive"</b>, press <b>"Unmount"</b></li>
                <li>Close the <b>"Operations on SAFE"</b> window.</li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 11: Transferring SYSTEM
            </h2>
            <div class="ui divider"></div>
            <div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h2 class="ui header" style="text-align:center">
                    !!! IMPORTANT !!!
                </h2>
                <div class="ui divider"></div>
                <p style="text-align: center;">In this step, <b style="color: red">NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".</b></p>
                <img src="https://puu.sh/C65yy/8d4a4708fd.png" style="max-width: 100%;display:block;margin:auto"/>
            </div>
            <div class="ui divider"></div>
            <ol>
                <li>Double-click <b>"SYSTEM"</b> in HacDiskMount</li>
                <li>Make sure both BIS key text boxes are FILLED as they should have been in Step 9. Press <b>"Test"</b> and make sure they are green as before.</li>
                <li>Under <b>"Virtual drive"</b>, select an unused drive letter</li>
                <li>Make sure <b>"Passthrough zeroes"</b> is checked</li>
                <li>Press <b>"Mount"</b></li>
                <li>Navigate to the newly mounted drive in File Explorer</li>
                <li>Delete the <b>"Contents"</b> folder</li>
                <li>If it exists, delete the <b>"PRF2SAFE.RCV"</b> file
                    <ul>
                        <li>It is normal to not see this. If this file is not there, skip this step.</li>
                    </ul>
                </li>
                <li>Navigate to <b>"/NX-X.X.X/SYSTEM"</b> folder which was generated with ChoiDujour.</li>
                <li>Copy ALL of the files/folders in this directory to the newly mounted drive
                    <ul>
                        <li>Make sure to <b>copy and replace</b> all duplicate files.</li>
                    </ul>
                </li>
                <li>In HacDiskMount, under <b>"Virtual drive"</b>, press <b>"Unmount"</b></li>
                <li>Close the <b>"Operations on SYSTEM"</b> window.</li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 12: Transferring USER
            </h2>
            <div class="ui divider"></div>
            <div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h2 class="ui header" style="text-align:center">
                    !!! IMPORTANT !!!
                </h2>
                <div class="ui divider"></div>
                <p style="text-align: center;">In this step, <b style="color: red">NEVER NEVER EVER SELECT FORMAT DISK WHEN WINDOWS ASKS OR YOUR SWITCH WILL BRICK. Always select "Cancel".</b></p>
                <img src="https://puu.sh/C65yy/8d4a4708fd.png" style="max-width: 100%;display:block;margin:auto"/>
            </div>
            <div class="ui divider"></div>
            <ol>
                <li>Double-click <b>"USER"</b> in HacDiskMount</li>
                <li>Make sure both BIS key text boxes are FILLED as they should have been in Step 9. Press <b>"Test"</b> and make sure they are green as before.</li>
                <li>Under <b>"Virtual drive"</b>, select an unused drive letter</li>
                <li>Make sure <b>"Passthrough zeroes"</b> is checked</li>
                <li>Press <b>"Mount"</b></li>
                <li>Navigate to <b>"/NX-X.X.X/USER"</b> folder which was generated with ChoiDujour.</li>
                <li>Copy ALL of the files/folders in this directory to the newly mounted drive
                    <ul>
                        <li>Make sure to <b>copy and replace</b> all duplicate files.</li>
                    </ul>
                </li>
                <li>In HacDiskMount, under <b>"Virtual drive"</b>, press <b>"Unmount"</b></li>
                <li>Close the <b>"Operations on USER"</b> window.</li>
                <li>Close HacDiskMount</li>
                <li>Hold the power button on your Switch to shutdown.</li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 13: Launching the First Time After Downgrading
            </h2>
            <div class="ui divider"></div>
            <ol>
                <li>Insert your SD card into your PC</li>
                <li>Navigate to the <b>"/bootloader"</b> folder on your SD card</li>
                <li>Rename <b>"hekate_ipl.ini"</b> to <b>"hekate_bak.ini"</b></li>
                <li>Navigate to <b>"/NX-X.X.X/microSD"</b> folder which was generated with ChoiDujour.</li>
                <li>Copy the <b>"FSXXX-exfat_nocmac_nogc.kip1"</b> file to <b>the root</b> of your SD card</li>
                <li>Copy the <b>"hekate_ipl.ini"</b> file to the <b>"/bootloader"</b> folder on your SD card</li>
                <li>Safely eject your SD card and insert it into your Switch</li>
                <li>Enter RCM and send the <b>"hekate-ctcaer-4.6.bin"</b> payload</li>
                <li>In Hekate, select <b>'Launch > FS_610-exfat_nocmac_nogc'</b></li>
                <li>Make sure your system successfully boots
                    <ul>
                        <li>Your system may say it was unable to read the gamecard. This is normal.</li>
                    </ul>
                </li>
                <li>Shutdown</li>
                <li>Insert your SD card into your PC</li>
                <li>Navigate to the <b>/bootloader</b> folder on your SD card</li>
                <li>Delete the <b>"hekate_ipl.ini"</b> file</li>
                <li>Rename the <b>"hekate_bak.ini"</b> file to <b>"hekate_ipl.ini"</b></li>
                <li>Safely eject your SD card and insert it into your Switch</li>
                <li>Enter RCM and send the <b>"hekate-ctcaer-4.6.bin"</b> payload</li>
                <li>In Hekate, select <b>'Launch > CFW'</b></li>
                <li>Make sure your system successfully boots</li>
            </ol>
        </div>

        <div class="ui green message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            You have successfully downgraded your Switch!
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManualChoiDowngrade"
    }
</script>

<style scoped>

</style>