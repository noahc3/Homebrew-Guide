<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Section 3: Safety Precautions
            </h1>
            <div class="ui divider"></div>
            <p style="text-align:center">You are now able to run Hekate on your Nintendo Switch to launch Atmosphere or ReiNX custom firmwares. These next steps will make sure your being as careful as possible in regards to keeping your Switch from bricking and getting banned. <b>These steps are optional but highly recommended</b></p>
        </div>

        <div class="ui teal message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            If something goes wrong or you need help, check <router-link to="/troubleshooting">troubleshooting</router-link>.
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 1: Backing up your NAND and BIS keys.
            </h2>
            <div class="ui divider"></div>
            <p>By backing up your NAND (the Switch's internal memory), you will later be able to restore it in the event that anything goes wrong, essentially rewinding it back to a previous state. BIS keys are also good to backup so you can reinstall any firmware version manually should your NAND backup become corrupted or lost.</p>

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
                <li>Go back to the main menu and select 'Reboot (RCM)'</li>
                <li>Send the <b>"biskeydump"</b> payload provided in the SDSetup download to your Switch (if you do not have this payload, you can obtain it <a href="https://switchtools.sshnuke.net/">from sshnuke</a>.</li>
                <li>Scan the QR code displayed on screen with your phone.</li>
                <li><b>Store the BIS keys from the QR code in a safe location.</b></li>
                <li>Press the power button to shutdown.</li>
            </ol>
            <div class="ui yellow message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                It is highly recommended that you store these backups and keys in multiple locations (ex. cloud storage, external harddrive, etc) as they may be critical to restoring your Switch if anything goes wrong in the future.
            </div>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                (EU Only) Step 2: Enabling GDPR Protections
            </h2>
            <div class="ui divider"></div>
            <p>Users with EU Nintendo Network accounts have the option of enabling GDPR protections in their account settings. Doing so has been confirmed to disable lots of telemetry that can get you banned.</p>
            <ol>
                <li>Go to <a href=https://accounts.nintendo.com/setting>https://accounts.nintendo.com/setting</a></li>
                <li>Login with your NNID</li>
                <li>Under <b>'Other settings'</b>, Edit <b>'Usage information'</b> and set it to <b>'Don't share'</b></li>
                <li>Save your changes</li>

            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 3: Blocking Updates & Telemetry with 90DNS
            </h2>
            <div class="ui divider"></div>
            <p>You can configure your WiFi settings to use a custom DNS server that blocks all connections to Nintendo servers (except the internet connection test server). <br><br>

                <b>Doing this will make games unable to be played online, block eShop, game updates and system updates.</b> If you are OK with this, follow these instructions:</p>
            <ol>
                <li>Power on your Switch normally (no CFW).</li>
                <li>Open settings and go to the Internet tab</li>
                <li>Configure a WiFi connection if you have not already done so</li>
                <li>Select your Wifi network and pick Change Settings</li>
                <li>Set DNS Settings to Manual</li>
                <li>Set <b>'Primary DNS'</b> to <b>'163.172.141.219'</b></li>
                <li>Set <b>'Secondary DNS'</b> to <b>'45.248.48.62'</b></li>
                <li>Save and perform the connection test</li>
            </ol>
        </div>

        <div class="ui divider"></div>

        <div class="ui purple message" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <b>Continue to <router-link to="/final">Using CFW</router-link></b>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SafetyPrecautions"
    }
</script>

<style scoped>

</style>