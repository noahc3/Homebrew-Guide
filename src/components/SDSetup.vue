<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Section 2: SD Card Setup
            </h1>
            <div class="ui divider"></div>
            <p style="text-align:center">At this point, you've verified that you can exploit fusee-gelee to run CFW. You will now prepare your SD card with the necessary software.</p>
        </div>

        <div class="ui blue message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            If something goes wrong or you need help, check <a href="troubleshooting.html">troubleshooting</a>.
        </div>

        <div class="ui blue message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            This guide will assume you want to use <a href="https://www.sdsetup.com">https://www.sdsetup.com</a> to get your homebrew setup, and will guide you on doing so. You can alternatively directly use <a href="https://www.github.com/tumGER/SDFilesSwitch">tomGER's SDFilesSwitch</a>, or obtain and setup CFW software on your own (not recommended).
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 1: Downloading Software
            </h2>
            <div class="ui divider"></div>
            <p>This guide will walk you through the process of using the website SDSetup to prepare your SD card. This website allows you to easily select which homebrew you want and will automatically prepare a ZIP file with the correct file structure for your SD card.</p>
            <ol>
                <li>Go to <a href=https://www.sdsetup.com>https://www.sdsetup.com</a></li>
                <li>Select Nintendo Switch</li>
                <li>Select the <b>"SDFiles Defaults"</b> package
                    <ul><li>If you think you know what you are doing, you can choose whatever CFW and options you wish. This guide will assume you at least select Atmosphere, HBMenu and Hekate.</li></ul>
                </li>
                <li>Select any additional homebrew packages you wish.
                    <ul><li>On desktop, you can hover over the homebrew names to get a description of what they do.</li></ul>
                </li>
                <li>Select <b>"Download your ZIP"</b>
                    <ul><li>This can take a while depending on your Internet speed and latency. Be patient.</li></ul>
                </li>
                <li>Save the resulting ZIP if your browser does not do so automatically.</li>

            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 2: Preparing Software
            </h2>
            <div class="ui divider"></div>
            <p>Extract the ZIP file from SDSetup to a folder on your PC.</p>
            <ul>
                <li>The <b>'sd'</b> folder contains all of the files that should go on your SD card. <b>Copy all of the contents of this folder to the root of your SD card.</b></li>
                <li>The <b>'payloads'</b> folder contains all of the fusee-gelee payloads which can be launched with TegraRcmGui/Rekado/fusee-launcher/etc that you selected.</li>
                <li>The <b>'pc'</b> folder contains all of the PC tools that you selected.</li>
                <li>The <b>'android'</b> folder contains all of the Android tools you selected.</li>
                <li>The <b>'licenses'</b> folder contains distribution licenses for downloaded applications</li>
                <li>The <b>'readmes'</b> folder contains readmes for selected applications, if one was provided.</li>
            </ul>

            <p>After copying the SD card files to your SD card, insert it back into your Switch.</p>
        </div>

        <div class="ui green message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            You are technically done! At this point, you can use the Hekate payload provided in your download in conjunction with your payload sender to launch into Atmosphere or ReiNX CFW. The next section includes important information about safety precautions you should take.
        </div>

        <router-link to="/safetyprecautions"><button class="fluid ui red button" v-bind:class="{ inverted: $root.$data.darkTheme }">Proceed to Section 3: Safety Precautions</button></router-link>
    </div>
</template>

<script>
    export default {
        name: "SDSetup"
    }
</script>

<style scoped>

</style>