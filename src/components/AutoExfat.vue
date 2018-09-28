<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Preparing exFAT (Auto)
            </h1>
        </div>

        <div class="ui teal message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            If something goes wrong or you need help, check <router-link to="/troubleshooting">troubleshooting</router-link>.
        </div>

        <div class="ui red message"  v-bind:class="{ inverted: $root.$data.darkTheme }">
            <div class="ui header" style="text-align:center">IMPORTANT</div>
            Do not follow this page if any of these apply to you: <br/>
            <ul>
                <li>You do not want to update to the latest system firmware</li>
                <li>You cannot update your firmware due to no internet, superban or otherwise</li>
                <li>You are using a DNS like 90dns and do not want to turn it off</li>
                <li>You do not want to take your Switch online</li>
                <li>You are using AutoRCM</li>
            </ul>
            If any of the above apply to you, instead follow <router-link to="/preparingexfat/manual">Preparing exFAT (Manual)</router-link>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 1: Formatting SD Card
            </h2>
            <div class="ui divider"></div>

            <b>If you are using Windows, follow these instructions:</b>
            <ol>
                <li>Insert your SD card into your PC.</li>
                <li>If you have data on your SD card you would like to keep, copy this data onto your PC somewhere, as <b>formatting will wipe your SD card!</b></li>
                <li>Open <b>File Explorer</b>, right click the SD card drive and select Format</li>
                <li>For <b>File System</b>, select <b>exFAT</b></li>
                <li>For <b>Allocation Unit Size</b>, select <b>128kb</b></li>
                <li>Change the volume label to whatever name you want your SD card to appear with in File Explorer.</li>
                <li>Make sure <b>"Quick Format"</b> is checked!</li>
                <li>Click Start</li>
                <li>Close the dialog</li>
                <li>If you copied data off, you can move this data back to your SD card</li>
            </ol>

            <div class="ui divider"></div>

            <b>If you are using OSX, follow these instructions:</b>
            <ol>
                <li>Insert your SD card into your PC</li>
                <li>If you have data on your SD card you would like to keep, copy this data onto your PC somewhere, as <b>formatting will wipe your SD card!</b></li>
                <li>Open <b>Disk Utility</b></li>
                <li>Select your SD card on the left side of the window</li>
                <li>Click the <b>"Erase"</b> button at the top</li>
                <li>Choose a name for your SD card</li>
                <li>Select <b>ExFAT</b> as the format</li>
                <li>Click <b>Erase</b></li>
                <li>Close Disk Utility</li>
                <li>If you copied data off, you can move this data back to your SD card</li>
            </ol>

            <div class="ui divider"></div>

            <b>If you are using Linux, you'll need to Google how to reformat your SD card to exFAT based on your distribution.</b>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 2: Disable Update Blocking DNS
            </h2>
            <div class="ui divider"></div>
            <p>If you enabled an update blocking DNS as instructed, you will need to disable it to download the exFAT system update.<br/>
                <b>Skip this step if you do not have an update blocking DNS.</b></p>
            <ol>
                <li>Power on your Switch normally (no CFW)</li>
                <li>Open Settings and go to the Internet tab</li>
                <li>Select your Wifi network and choose Change Settings</li>
                <li>Set DNS Settings to Auto</li>
                <li>Save and perform the connection test</li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 3: Installing the exFAT system update
            </h2>
            <div class="ui divider"></div>
            <ol>
                <li>Turn on your Switch normally (no CFW) with your SD card inserted if it is not already</li>
                <li>Connect to the internet if you aren't already</li>
                <li>Your Switch will ask to install a system update to support your SD card. Accept this and wait for the update to install.</li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 4: Re-enable Update Blocking DNS
            </h2>
            <div class="ui divider"></div>
            <p>If you disabled the update blocking DNS, you now need to re-enable it.<br/>
                <b>Skip this step if you do not want an update and telemetry blocking DNS.</b></p>
            <ol>
                <li>Open Settings and go to the Internet tab</li>
                <li>Select your Wifi network and choose Change Settings</li>
                <li>Set DNS Settings to Manual</li>
                <li>Set <b>'Primary DNS'</b> to <b>'163.172.141.219'</b></li>
                <li>Set <b>'Secondary DNS'</b> to <b>'45.248.48.62'</b></li>
                <li>Save and perform the connection test</li>
            </ol>
        </div>

        <div class="ui green message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            Your Switch now supports the exFAT filesystem!
        </div>

        <div class="ui divider"></div>

        <div class="ui purple message" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <b>Back to <router-link to="/final">After Setup</router-link></b>
        </div>    </div>
</template>

<script>
    export default {
        name: "AutoExfat"
    }
</script>

<style scoped>

</style>