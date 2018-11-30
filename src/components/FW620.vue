<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Firmware 6.2.0 FAQ
            </h1>
            <div class="ui divider"></div>
            <p>Nintendo released firmware 6.2.0 which has temporarily broken all third-party bootloaders, meaning you cannot launch custom firmware. This page will answer some common questions.<br><br>
            <b>Update 2018/11/29:</b> Atmosphere has now been updated for 6.2.0 support, and includes the TSEC vulnerability. You can now launch stock atmosphere on 6.2. <b>Hekate does not work yet,</b> and Kosmos will be updated as soon as Hekate supports 6.2.0.</p>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h3 class="ui header" style="text-align:center">
                What happened in firmware 6.2.0? Why were custom firmwares broken?
            </h3>
            <div class="ui divider"></div>
            <p><b>Non-technical explanation:</b> Nintendo changed the method of decrypting the firmware, meaning all third-party bootloaders, including Hekate, fusee, ReiNX and SX OS, are unable to decrypt the firmware and launch the Switch operating system. <br><br>
            <b>Technical explanation:</b> Masterkey decryption in pkg1ldr now relies heavily on the new stock TSEC firmware. Additionally, this new TSEC firmware does <i>a lot</i> of verifications on the code it is running and the state of the system to verify nothing sketchy is happening. For example, TSEC now checks for specific modifications to pkg1ldr and freezes the system if anything is wrong. It will also freeze the system if something like DRAM is initialized earlier in the boot process than it should be. These checks amongst others make it very obnoxious to run custom authenticated code on the TSEC chip. Without being able to run custom authenticated code on the TSEC chip, we can't derive the latest masterkey and boot the firmware.</p>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h3 class="ui header" style="text-align:center">
                Can these changes be adapted to? Will CFW work again in the future?
            </h3>
            <div class="ui divider"></div>
            <p><b>Update 2018/11/29:</b> Atmosphere has now been updated with the TSEC vulnerability integrated into the bootloader. You can now use stock Atmosphere on 6.2.0. Kosmos will become compatible as soon as Hekate is updated to integrate the exploit as well.</p>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h3 class="ui header" style="text-align:center">
                How do I prevent my Switch from updating to the latest firmware?
            </h3>
            <div class="ui divider"></div>
            <p>You can either:</p>
            <ul>
                <li>Permanently enable airplane mode or remove all WiFi connections</li>
                <li>Configure 90DNS on your WiFi connection. See step 3 of <router-link to="/safetyprecautions">Safety Precautions</router-link> to configure this.</li>
            </ul>
            <p>You should also heavily consider <b>backing up your NAND pre-6.2.0 and dumping your BIS keys just in case.</b> You can find out how to do these things with step 1 of <router-link to="/safetyprecautions">Safety Precautions</router-link>.</p>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h3 class="ui header" style="text-align:center">
                I'm on a firmware below 6.1.0, how can I update to 6.1.0 without risking updating to 6.2.0?
            </h3>
            See <router-link class="item" to="/manualupdate">Manually Updating/Downgrading</router-link> to install any firmware version.
        </div>

        <div class="ui red message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            If this page doesn't answer your question, feel free to ask in the <a href="https://discord.gg/qbRAuy7">support channel</a> on the Team AtlasNX Discord.
        </div>


    </div>
</template>

<script>
    export default {
        name: "FW620"
    }
</script>

<style scoped>

</style>