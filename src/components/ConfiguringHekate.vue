<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Using and Configuring Hekate
            </h1>
        </div>

        <div class="ui teal message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            If something goes wrong or you need help, check <router-link to="/troubleshooting">troubleshooting</router-link>.
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Launching Atmosphere CFW
            </h2>
            <div class="ui divider"></div>
            <p>Atmosphere is currently the CFW with the largest feature set. It enables game modding, homebrew, backup installs, and more. To launch Atmosphere:</p>
            <ol>
                <li>Enter RCM on your Switch</li>
                <li>Push the Hekate payload to your Switch</li>
                <li>Select <b>'Launch > CFW'</b></li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Chainloading other fusee-gelee payloads within Hekate
            </h2>
            <div class="ui divider"></div>
            <p>Hekate itself supports chainloading other fusee-payloads so you can, for example, launch ReiNX from Hekate.</p>
            <ol>
                <li>Enter RCM on your Switch</li>
                <li>Push the Hekate payload to your Switch</li>
                <li>Select <b>'Launch > Payloads'</b></li>
                <li>Select your payload of choice</li>
            </ol>

            <p>Payloads go in the <b>'/bootloader/payloads'</b> folder on your SD card.</p>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Configuring Auto-Boot with Hekate
            </h2>
            <div class="ui divider"></div>
            <p>Hekate allows you to automatically launch CFW immediately after pushing a payload.</p>
            <ol>
                <li>Enter RCM on your Switch</li>
                <li>Push the Hekate payload to your Switch</li>
                <li>Select <b>'Options > Auto boot'</b></li>
                <li>Select your launch configuration of choice</li>
            </ol>

            <p>Next time you run Hekate, instead of seeing the menu, you will be greeted with a splash screen and immediately launch into the configuration you picked.<br><br>
                If you need to get back into the menu, hold Volume Down when sending the Hekate payload.</p>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Enabling AutoRCM
            </h2>
            <div class="ui divider"></div>
            <p>AutoRCM is an optional software method of forcing your Switch to go into RCM on every launch, without the need of a jig or hardmod. Essentially, you are purposefully bricking your Switch in a controlled matter that forces it to launch into recovery. This might sound scary but is not actually dangerous, and can be undone at any time.<br><br>
                By doing this, you will need to use a payload sender to boot your Switch after every restart/shutdown.</p>
            <ol>
                <li>Enter Hekate</li>
                <li>Select <b>'Tools > AutoRCM > Enable AutoRCM'</b></li>
            </ol>

            <p>You can disable AutoRCM by entering the same menu above and selecting <b>'Disable AutoRCM'</b>.<br><br>
                From now on, to boot into stock firmware, select <b>'Launch > Stock'</b> in Hekate.</p>

            <div class="ui yellow message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                Shutting down the Switch from Horizon after booting with AutoRCM <b>will not turn off the Switch!</b> You must choose <b>'Power Off'</b> from Hekate to properly shutdown the Switch. Not doing so will leave your Switch in RCM, slowing draining battery.
            </div>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Creating a NAND Backup
            </h2>
            <div class="ui divider"></div>
            <p>By backing up your NAND (the Switch's internal memory), you will later be able to restore it in the event that anything goes wrong, essentially rewinding it back to a previous state.</p>

            <ol>
                <li>Enter RCM but this time send the Hekate payload provided in the SDSetup download to your Switch (refer to <router-link to="/accessingrcm">Section 1: Accessing RCM</router-link> if you've forgotten how)</li>
                <li>In Hekate, select <b>'Tools > Backup > Backup eMMC BOOT0/1'</b>
                    <ul><li>Use Volume +/- to change menu selection and Power to select an option.</li></ul>
                </li>
                <li>When finished, remove your SD card (you don't need to shutdown Hekate), insert it into your PC, and copy the 'backup' folder to a safe location on your PC. Afterwards, delete the 'backup' folder on your SD card.</li>
                <li>Insert your SD card back into your Switch</li>
                <li>In Hekate, select <b>'Backup eMMC RAW GPP'</b>
                    <ul><li>If your SD card has less than ~32GB free space, Hekate will provide additional instructions every few minutes about pulling files off of your SD card so it can continue.</li></ul>
                </li>
                <li>If you weren't required to copy files during the backup process, once again copy the 'backup' folder off of your SD card and put it in a safe location on your PC. Delete the 'backup' folder on your SD card.</li>
                <li>Go back to the main menu and select 'Power Off'</li>
            </ol>
            <div class="ui yellow message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                It is highly recommended that you store these backups in multiple locations (ex. cloud storage, external harddrive, etc) as they may be critical to restoring your Switch if anything goes wrong in the future.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ConfiguringHekate"
    }
</script>

<style scoped>

</style>