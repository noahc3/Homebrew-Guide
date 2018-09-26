<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Section 1: Accessing RCM
            </h1>
            <div class="ui divider"></div>
            <p style="text-align:center">This section of the guide will teach you how to access RCM, determine if your Switch is vulnerable to fusee-gelee, and run a payload</p>
            <div class="ui purple message" v-bind:class="{ inverted: $root.$data.darkTheme }" style="text-align:center">
                <b>If you already have access to RCM and can launch payloads, continue to <router-link to="/sdsetup">SD Card Setup</router-link></b>
            </div>
        </div>

        <div class="ui teal message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            If something goes wrong or you need help, check <router-link to="/troubleshooting">troubleshooting</router-link>.
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 0: What You Will Need
            </h2>
            <div class="ui divider"></div>
            <ul>
                <li>
                    A way to ground pin 10 on the right joycon rail
                    <ul>
                        <li>
                            To access RCM, you must hold down volume up, power and the home button. <b>The home button described here is not the home button on the joycon,</b> but instead a hardware home button (think of the physical home button found on smartphones). The Nintendo Switch doesn't have this button, but you can simulate pressing it down by grounding pin 10 of the right joycon rail.
                        </li>
                        <li>
                            There are many ways to do this. You can pick any method <a href="https://gbatemp.net/threads/the-ultimate-list-of-mods-to-enter-rcm.502145/">listed here.</a> Some of these options are permanent hardmods, others are temporary. Later in the guide, you will learn of a way to have the Switch automatically enter RCM on every boot through a software mod, so don't worry about hardmodding or purchasing anything if you don't want to.
                        </li>
                    </ul>
                </li>
                <li>
                    A payload sender
                    <ul><li>
                        This guide will cover options for Windows, OSX, Linux and Android, though note that options exist for Chromebooks and jailbroken iOS devices.
                    </li></ul>
                </li>
                <li>
                    A USB Type C to A/Micro USB/USB Type C cable/adapter
                    <ul><li>
                        You need a cable to connect your Switch to your payload sender of choice.
                    </li></ul>
                </li>
                <li>
                    A payload sending application <b>(Download and install one now)</b>
                    <ul><li>
                        For Windows, you can use <a href="https://github.com/eliboa/TegraRcmGUI/releases">TegraRcmGUI by eliboa and rajkosto.</a>
                    </li></ul>
                    <ul><li>
                        For OSX and Linux, you can use <a href="https://github.com/Cease-and-DeSwitch/fusee-launcher">fusee-launcher by ReSwitched.</a>
                    </li></ul>
                    <ul><li>
                        For Android, you can use <a href="https://github.com/MenosGrante/Rekado/releases">Rekado by MenosGrante.</a>
                    </li></ul>
                    <ul><li>
                        After determining if your Switch is vulnerable to fusee-gelee, you can also choose to purchase any number of dedicated payload sending dongles, or purchase and install a modchip.
                    </li></ul>
                </li>
                <li>
                    A Micro SD Card
                    <ul><li>
                        You should have an SD card at least 4GB in size (32GB or higher is recommended, however). A small SD card is enough to get CFW running, but larger ones are preferred for installing games and performing NAND backups efficiently.
                    </li></ul>
                </li>
                <li>
                    <a href="https://drive.google.com/open?id=1Bzku9r9GJ4F_3BoCBa-9QsPUav2-_2V4">This test payload</a> downloaded to your payload sender device to verify if your Switch is vulnerable to fusee-gelee.
                </li>
            </ul>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 1: Accessing RCM
            </h2>
            <div class="ui divider"></div>
            <p>It's time to get into recovery mode.</p>
            <ol>
                <li>Completely power off your Switch
                    <ul><li>Hold the power button on your Switch for 3 seconds and choose to power down in the menu</li></ul>
                </li>
                <li>Ground pin 10 of your right Joycon rail
                    <ul><li>Using a method from the guide linked above, ground pin 10. <b>Be very careful, bridging the wrong pins can fry your Switch!</b></li></ul>
                </li>
                <li>Pressing Volume Up + Power
                    <ul><li>While your grounding pin 10, hold down Volume Up and then hold down Power.
                        <ul><li>You will know you are successful if the Switch <b>seemingly does not turn on.</b></li></ul>
                        <ul><li>If your Switch turns on, try again. <b>This does not mean fusee-gelee is patched</b> as RCM is still available on patched Switches.</li></ul>
                    </li></ul>
                </li>
            </ol>

            <div class="ui red message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                This can be an extemely frustrating and tedious process without a jig. Keep trying, you'll get it eventually.
            </div>

            <div class="ui divider"></div>

            Did it work? Pat yourself on the back, you just finished the hardest part!
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h2 class="ui header" style="text-align:center">
                Step 2: Determining if Your Switch is Vulnerable to fusee-gelee
            </h2>
            <div class="ui divider"></div>
            <p>Time to find out if any of this prep was worth it.<br><br><b>Only follow the part related to the payload sender you chose.</b></p>
            <div class="ui divider"></div>
            <b>If you are using TegraRcmGUI, follow these instructions:</b>
            <ol>
                <li>Open TegraRCMGUI</li>
                <li>Navigate to the Settings tab.</li>
                <li>Click on Install Driver (this will install the driver required to communicate with your Switch).</li>
                <li>After the driver is installed, navigate to the Payload tab.</li>
                <li>Plug your Switch into your PC using your USB cable
                    <ul><li>Your PC should play the device connected sound and your Switch <b>should not turn on.</b> If your Switch turns on, repeat Step 1 to enter RCM.</li></ul>
                </li>
                <li>Once your Switch is plugged in, you should see a green icon with the message "RCM OK".</li>
                <li>Select the <b>fusee-test.bin</b> test payload you downloaded earlier</li>
                <li>Select "Inject Payload" if the payload has not already been injected.
                    <ul><li>If you get the error "RC=-50", restart the application and try again.</li></ul>
                </li>
            </ol>
            <div class="ui green message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                A success message should now be displayed on your Switch. If so, celebrate! Your Switch is vulnerable and you can now push payloads!
            </div>
            <div class="ui red message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                If the application says the payload launch was successful, but nothing appears on your screen, unfortunately your Nintendo Switch is patched. You will not be able to run CFW at this time. <br>(You should try a few more times just to be sure)
            </div>

            <div class="ui divider"></div>
            <b>If you are using fusee-launcher, follow these instructions:</b>
            <ol>
                <li>Open a terminal in the fusee-launcher directory.</li>
                <li>Copy the <b>fusee-test.bin</b> file to this directory..</li>
                <li>Plug your Switch into your PC using your USB cable.
                    <ul><li>Your Switch <b>should not turn on.</b> If your Switch turns on, repeat Step 1 to enter RCM.</li></ul>
                </li>
                <li>Run the command 'sudo python3 ./fusee-launcher.py ./fusee-test.bin'</li>
            </ol>
            <div class="ui green message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                A success message should now be displayed on your Switch. If so, celebrate! Your Switch is vulnerable and you can now push payloads!
            </div>
            <div class="ui red message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                If the application says the payload launch was successful, but nothing appears on your screen, unfortunately your Nintendo Switch is patched. You will not be able to run CFW at this time.<br>(You should try a few more times just to be sure)
            </div>
            <div class="ui divider"></div>
            <b>If you are using Rekado, follow these instructions:</b>
            <ol>
                <li>Open Rekado on your Android device.</li>
                <li>Navigate to the Payloads section of the app and allow it to request storage.</li>
                <li>Click the '+' button and select the <b>fusee-test.bin</b> file.</li>
                <li>Plug your Switch into your Android device using a USB cable/adapter.</li>
                <li>Your phone should give you a prompt to open Rekado with the option to use by default. Accept and press OK.</li>
                <li>Under the Select Injector menu, touch Boot Payload and <b>fusee-test.bin</b></li>
            </ol>
            <div class="ui green message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                A success message should now be displayed on your Switch. If so, celebrate! Your Switch is vulnerable and you can now push payloads!
            </div>
            <div class="ui red message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                If the application says the payload launch was successful, but nothing appears on your screen, unfortunately your Nintendo Switch is patched. You will not be able to run CFW at this time.<br>(You should try a few more times just to be sure)
            </div>
            <div class="ui divider"></div>
            Wait for your Switch to shutdown before continuing.
        </div>

        <div class="ui divider"></div>

        <div class="ui purple message" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <b>Continue to <router-link to="/sdsetup">SD Card Setup</router-link></b>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccessingRCM"
    }
</script>

<style scoped>

</style>