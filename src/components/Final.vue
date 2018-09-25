<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Section 4: Using CFW
            </h1>
            <div class="ui divider"></div>
            <p>Congratulations! By this point you have:</p>
            <ul>
                <li>Learned how to enter RCM</li>
                <li>Learned how to launch fusee-gelee payloads</li>
                <li>Learned how to perform NAND backups</li>
                <li>Learned how to block as much Nintendo telemetry as possible</li>
            </ul>
            <p>This section provides some extra info about using your newly found powers.</p>
        </div>

        <div class="ui blue message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
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
                Running other payloads within Hekate
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
                Accessing the Homebrew Menu
            </h2>
            <div class="ui divider"></div>
            <p>You can access the Homebrew Menu from within Atmosphere and ReiNX by loading Album from the Home Menu. To load Album normally, hold R when loading Album.<br><br>
                Homebrew usually comes in <b>.nro</b> format. Put these in the <b>'/switch'</b> folder on your SD card.</p>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Installing NSP files (home menu applications)
            </h2>
            <div class="ui divider"></div>
            <p>NSP is a standard format used for digital applications.<br><br>
                <b>Installing NSP files is the easiest way to get yourself banned!</b> You shouldn't do this if you want to keep using your Switch online.</p>
            <ol>
                <li>Create a <b>'tinfoil'</b> folder on your SD card, and a <b>'nsp'</b> folder inside that</li>
                <li>Copy your NSP file to the <b>'/tinfoil/nsp'</b> folder you just created on your SD card.</li>
                <li>Launch into <b>Atmosphere CFW</b> or <b>ReiNX</b></li>
                <li>Load the Homebrew Launcher (album icon)</li>
                <li>Launch <b>Tinfoil</b> and install your NSPs</li>
            </ol>

            <p>After installing, your applications will appear on the Home Menu.</p>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Backing Up Save Files
            </h2>
            <div class="ui divider"></div>
            <p>You can backup and restore save files locally, without Nintendo Switch Online, by using <b>Checkpoint</b> from within the Homebrew Menu. Dumped saves will go in <b>'/switch/checkpoint/'</b> on your SD card for you to copy elsewhere. These save backups can later be restored to any user account on any Switch.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Final"
    }
</script>

<style scoped>

</style>