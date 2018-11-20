<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Updating/Downgrading Manually Without Burning Fuses
            </h1>
            <div class="ui divider"/>
            <p>When you update your system firmware version, your Nintendo Switch burns a microscopic fuse to prevent your Switch from being able to downgrade. Essentially, if a firmware tries to boot but too many fuses are burnt for that specific firmware version, the system will simply power off, preventing you from booting.<br/><br/>
            Hekate, ReiNX and SXOS bypass these fuse checks and the fuse burns. By enabling AutoRCM and then manually updating using ChoiDujourNX, you can keep your Switch in a state where it can be downgraded again the future.<br/><br/>
            You can also use this guide as a way to upgrade your Switch if your Switch does not have access to the internet or is superbanned, and to downgrade your Switch to any firmware version.</p>
            <div class="ui red message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <div class="ui header">Do not update to 6.2.0+</div>
                Nintendo changed key derivation and there are currently no bootloaders compatible with the changes. Updating to 6.2.0+ will currently break CFW. This will be fixed in the near future.
            </div>
        </div>

        <div class="ui teal message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            If something goes wrong or you need help, check <router-link to="/troubleshooting">troubleshooting</router-link>.
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 1: Enabling AutoRCM
            </h2>
            <div class="ui divider"></div>
            <p>AutoRCM is an optional software method of forcing your Switch to go into RCM on every launch, without the need of a jig or hardmod. Essentially, you are purposefully bricking your Switch in a controlled matter that forces it to launch into recovery. This might sound scary but is not actually dangerous, and can be undone at any time.<br><br>
            It is <b>highly recommended that you enable AutoRCM</b> as if you ever boot your Switch without Hekate, your fuses will burn and you will not be able to cleanly downgrade again in the future.</p>
            <div class="ui red message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <div class="ui header">IMPORTANT</div>
                By doing this, you will need to use a payload sender to boot your Switch after every restart/shutdown.
            </div>
            <div class="ui red message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <div class="ui header">IMPORTANT</div>
                This step is required if you want to downgrade to a system version expecting less fuses than you have burnt.
            </div>
            <div class="ui info message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                If you just want to manually update your system firmware and do not care about burning fuses, you can skip this step.
            </div>
            <ol>
                <li>Enter Hekate</li>
                <li>Select <b>'Tools > AutoRCM > Enable AutoRCM'</b></li>
                <li>Go back to the main menu and choose <b>'Power Off'</b></li>
            </ol>

            <p>You can disable AutoRCM by entering the same menu above and selecting <b>'Disable AutoRCM'</b>.<br><br>
                From now on, to boot into stock firmware, select <b>'Launch > Stock'</b> in Hekate.</p>

            <div class="ui yellow message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                Shutting down the Switch from Horizon after booting with AutoRCM <b>will not turn off the Switch!</b> You must choose <b>'Power Off'</b> from Hekate or hold the power button for 15 seconds to properly shutdown the Switch. Not doing so will leave your Switch in RCM, slowing draining battery.
            </div>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 2: Preparing Files
            </h2>
            <div class="ui divider"></div>
            <ol>
                <li>Make sure your SD card includes a basic Hekate/Atmosphere setup (such as the one installed when following this guide)</li>
                <li>Insert your SD card into your PC</li>
                <li>Go to <a href="https://darthsternie.bplaced.net/switch.html">darthsternie.bplaced.net/switch</a></li>
                <li>Download the .ZIP file for the system firmware version you want to upgrade/downgrade to
                <ul><li>Do not use pre-release firmware versions unless you know what you are doing</li></ul></li>
                <li>Create a new folder on the root of your SD card named <b>"firmware"</b></li>
                <li>Extract <b>the contents</b> of the downloaded ZIP file into the new <b>/firmware</b> folder on your SD card</li>
                <li>Go to <a href="https://switchtools.sshnuke.net/">switchtools.sshnuke.net</a></li>
                <li>Download the latest version of ChoiDujourNX by rajkosto</li>
                <li>Extract the <b>ChoiDujourNX.nro</b> file within the downloaded .ZIP file into the <b>/switch</b> folder on your SD card</li>
            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 3: Installing the New Firmware Version
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
                <li>After processing, select <b>[x.x.x] (exFAT)</b> where [x.x.x] is the firmware version you chose</li>
                <li>After verification, choose <b>Select Firmware</b></li>
                <li>Choose <b>Start installation</b></li>
                <li>Wait for the firmware update to finish
                    <ul><li>This can be take little time or a long time depending on the situation. Be patient, and don't worry if it finishes very quickly.</li></ul></li>
                <li>After installation, select <b>Reboot</b> and then <b>Shutdown Now!</b></li>
            </ol>

            <p>You can now delete the <b>/firmware</b> folder on your SD card.</p>
        </div>

        <div class="ui green message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            Your Switch is now running the firmware version you chose!
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