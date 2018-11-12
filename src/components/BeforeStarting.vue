<template>
    <div>
        <div class="ui container">
            <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h1 class="ui header" style="text-align:center">
                    Section 0: Before Starting
                </h1>
                <div class="ui divider"></div>
                <p>This section of the guide will teach you basic information about terminology used, what you will be able to do after following this guide, and provide some warnings before you proceed.</p>
            </div>
			
			<div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                This is a lot of info to take in, but if you are a complete noob to the Switch scene, you should seriously consider reading all of it. The Switch scene is very different from the 3DS/WiiU/Wii.
            </div>

            <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h2 class="ui header" style="text-align:center">
                    What is Homebrew?
                </h2>
                <div class="ui divider"></div>
                <p>Homebrew is a term used to describe software not authorized by Nintendo. This includes custom firmwares, tools, applications, games, emulators, etc.</p>
            </div>

            <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h2 class="ui header" style="text-align:center">
                    What is Custom Firmware?
                </h2>
                <div class="ui divider"></div>
                <p>Custom Firmware (CFW) gives homebrew more access to the system than standard userland homebrew most commonly available on most systems. <br><br>Currently, all Nintendo Switches sold before July 2018 can run custom firmware. Switches sold after this point may not be exploitable right now. This guide will include checking if your system is vulnerable.</p>
            </div>

            <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h2 class="ui header" style="text-align:center">
                    What will I get by following this guide?
                </h2>
                <div class="ui divider"></div>
                <p>This guide will give you the ability to run a custom firmware of choice on a previously unmodified Nintendo Switch.<br><br>
                    The guide will utilize the fusee-gelee exploit (sometimes also referred to as ShofEL2 or CVE-2018-6242, these are all the same exploit) which takes advantage of an oversight in the Nintendo Switch built-in recovery mode (referred to as RCM). <b>fusee-gelee is a tethered, non-persistent exploit</b>, meaning you require a secondary device (such as a PC or Android phone) to enable CFW on every reboot. This is unlike the untethered coldboot exploits available on other systems such as Boot9strap for 3DS and Henkaku Enso for Vita.<br><br>
                    The fusee-gelee exploit allows for a full system takeover; the exploit runs before even the normal bootloader code, meaning anything about the normal Switch operating system (named Horizon, or HOS) can be changed. The exploit also allows dumping on the bootloader and any console unique information.<br><br>
                    For an advanced technical overview on how fusee-gelee works, you can view <a href="https://www.exploit-db.com/docs/english/44532-nintendo-switchnvidia-vulnerability-disclosure-fus%C3%A9e-gel%C3%A9e.pdf">this whitepaper</a><br><br>
                    This guide will focus on using a configuration of the Hekate custom bootloader, as well as the Atmosphere custom firmware, both provided by Team AtlasNX's Kosmos. You can also install ReiNX along the way if you wish to use that instead.</p>
            </div>

            <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h2 class="ui header" style="text-align:center">
                    What does Custom Firmware let me do?
                </h2>
                <div class="ui divider"></div>
                <ul>
                    <li>Create backups of your system NAND, allowing you to restore your Switch to a previous state if anything goes wrong</li>
                    <li>Use mods or rom-hacks</li>
                    <li>Backup, edit, and restore game saves locally without Nintendo Switch Online</li>
                    <li>Run many emulators using RetroNX</li>
                    <li>Install game backups to your system</li>
                    <li>Listen to music in the background of your games</li>
                    <li>Manage your SD card remotely without shutting down using FTP</li>
                    <li>Display games you are playing on Discord as Rich Presence Applications</li>
                    <li>Play a number of homebrew games</li>
                </ul>
            </div>

            <div class="ui red message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h2 class="ui header" style="text-align:center">
                    Important: Warnings before using Custom Firmware
                </h2>
                <div class="ui divider"></div>
                <ul>
                    <li>Nintendo is taking no chances with the Nintendo Switch. <b>Permanent console bans can and often do happen.</b> This guide will take many precautions to avoid getting banned, but this site assumes no responsibility if your system is banned.</li>
                    <li>There is always a chance that your Nintendo Switch will <b>brick</b>. This is very rare, and often recoverable thanks to the level of access fusee-gelee provides, but <b>unrecoverable bricks CAN happen.</b>
                    <li>Due to the level of access fusee-gelee provides, malicious homebrew exists. These can brick your Switch or otherwise render your Switch inoperable. You should only ever run homebrew from trusted sources.</li>
                    <li>Follow the guide and everything should be fine.</li>
                </ul>
            </div>

            <div class="ui teal message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                This guide will work on <b>all firmware versions</b> as long as fusee-gelee is not patched on the Switch. The guide will include a step for checking if fusee-gelee is patched or not.
            </div>

            <div class="ui divider"></div>

            <div class="ui purple message" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <b>Continue to <router-link to="/accessingrcm">Accessing RCM</router-link></b>
            </div>


        </div>
    </div>
</template>