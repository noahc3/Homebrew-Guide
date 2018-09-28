<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Preparing exFAT (Manual)
            </h1>
        </div>

        <div class="ui teal message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            If something goes wrong or you need help, check <router-link to="/troubleshooting">troubleshooting</router-link>.
        </div>

        <div class="ui red message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <div class="ui header">IMPORTANT</div>
            Your SD card must start with the FAT32 format to manually install the exFAT firmware files.
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 1: Preparing Files
            </h2>
            <div class="ui divider"></div>
            <ol>
                <li>Make sure your SD card includes a basic Hekate/Atmosphere setup (such as the one installed when following this guide)</li>
                <li>Insert your SD card into your PC</li>
                <li>Go to <a href="https://darthsternie.bplaced.net/switch.html">darthsternie.bplaced.net/switch</a></li>
                <li>Download the .ZIP file for your system firmware version
                <ul><li>Do not use the pre-release firmware 6.0.0 unless you know what you are doing</li></ul></li>
                <li>Create a new folder on the root of your SD card named "firmware"</li>
                <li>Extract <b>the contents</b> of the downloaded ZIP file into the new <b>/firmware</b> folder on your SD card</li>
                <li>Go to <a href="https://switchtools.sshnuke.net/">switchtools.sshnuke.net</a></li>
                <li>Download the latest version of ChoiDujourNX by rajkosto</li>
                <li>Extract the <b>ChoiDujourNX.nro</b> file within the downloaded .ZIP file into the <b>/switch</b> folder on your SD card</li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 2: Installing exFAT
            </h2>
            <div class="ui divider"></div>
            <ol>
                <li>Insert your SD card into your Switch</li>
                <li>Run Hekate using your payload sender of choice</li>
                <li>Launch CFW <b>(Launch > CFW)</b></li>
                <li><b>IMPORTANT: Plug your Switch in to prevent the Switch from dying midway through the install process</b></li>
                <li>Enter the Homebrew Menu through Album</li>
                <li>Select <b>ChoiDujourNX</b></li>
                <li>In ChoiDujourNX, enter the <b>/firmware</b> you created earlier and select <b>Choose</b> </li>
                <li>After processing, select <b>[x.x.x] (exFAT)</b> where [x.x.x] is your firmware version</li>
                <li>After verification, choose <b>Select Firmware</b></li>
                <li>Choose <b>Start installation</b></li>
                <li>Wait for the firmware update to finish
                    <ul><li>This can be take little time or a long time depending on the situation. Be patient, and don't worry if it finishes very quickly.</li></ul></li>
                <li>After installation, select <b>Reboot</b> and then <b>Shutdown Now!</b></li>
            </ol>

            <p>You can now delete the <b>/firmware</b> folder on your SD card.</p>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 3: Formatting SD Card
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
        name: "ManualExfat"
    }
</script>

<style scoped>

</style>