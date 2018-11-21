<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Firmware 6.2.0 FAQ
            </h1>
            <div class="ui divider"></div>
            <p>Nintendo released firmware 6.2.0 which has temporarily broken all third-party bootloaders, meaning you cannot launch custom firmware. This page will answer some common questions.</p>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h3 class="ui header" style="text-align:center">
                What happened in firmware 6.2.0? Why are custom firmwares broken?
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
            <p>Yes, but you'll need to wait for hard working developers to reverse engineer and reimplement the changes. This might take a while, as some pretty fundamental CFW functionality has been mitigated in this update.</p>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h3 class="ui header" style="text-align:center">
                If I updated to 6.2.0 by accident, am I screwed for the time being?
            </h3>
            <div class="ui divider"></div>
            <p>If you've used CFW before, probably not:</p>
            <ul>
                <li>If you have a NAND backup from before 6.2.0, you can restore this through Hekate to downgrade.</li>
                <li>If you don't have a NAND dump but have dumped your console's BIS keys in the past, you can use ChoiDujour (the PC client) to regenerate your Switch's NAND with an older firmware version. Follow <a href="https://gbatemp.net/threads/how-to-install-run-any-switch-firmware-unofficially-without-burning-any-fuses.507461/">this guide by rajkosto</a> to do this (a version of this guide will be available on this site soon).</li>
            </ul>
            <p>These solutions come with a caveat:</p>
            <ul>
                <li>If you ever launched your Switch into Horizon without Hekate/fusee/ReiNX/SXOS on firmware 6.2.0, you will have 8 fuses burnt (you can check your fuse count in Hekate > Tools > . This means you are <b>required to use AutoRCM upon downgrading</b> to bypass the fuse count mismatch. This means:
                <ul>
                    <li>Your Switch will not be able to wake from sleep mode as the Switch checks the fuse count when you try to wake up, and will shut down when it finds that the fuse count is wrong.</li>
                    <li>You have to deal with the normal issues with AutoRCM, such as odd charging behaviour with a dead battery, and the Switch not shutting down correctly from Horizon.</li>
                </ul></li>
            </ul>
            <p>If you do not have a NAND backup or your BIS keys, you will need to wait for either Hekate/fusee-primary to update with support for the new firmware, or a new version of biskeydump that supports the new encryption scheme. You can still use Lakka though, if that matters to you.</p>
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