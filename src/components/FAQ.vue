<template>
    <div>
        <div class="ui container">
            <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h1 class="ui header" style="text-align:center">
                    Frequently Asked Questions
                </h1>
            </div>

            <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h3 class="ui header" style="text-align:center">
                    Should I disable WiFi?
                </h3>
                <div class="ui divider"></div>
                <p>This is an extreme that you don't necessarily need to take, though it will basically 100% guarantee you won't get banned (since you are basically banning yourself).<br><br>
                    Using 90DNS (163.172.141.219 or 45.248.48.62) or enabling GDPR protections is usually enough to keep from being banned as long as you don't care about NSP files.</p>
            </div>

            <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h3 class="ui header" style="text-align:center">
                    What are sigpatches?
                </h3>
                <div class="ui divider"></div>
                <p>Sigpatches allow your Switch to install and run unofficial NSP files (digital titles that appear on the home menu). Note that you must use CFW to launch these applications even after installation as sigpatches are always required to do so.</p>
            </div>

            <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h3 class="ui header" style="text-align:center">
                    Is it safe to update to the latest firmware version?
                </h3>
                <div class="ui divider"></div>
                <p>When a new firmware update is released, you should always wait for SDSetup and/or SDFilesSwitch to add support for it, or if a trusted source says it is safe. New firmware versions can also bring unwanted telemetry. Ultimately, whether or not you update is up to you.<br><br>
                    <b>As of writing, the latest firmware version is 6.1. It is currently completely safe to update as long as you are using Kosmos/SDFiles v10+ or a bundle from SDSetup downloaded after October. 29th 2018.</b></p>
            </div>

            <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h3 class="ui header" style="text-align:center">
                    What does 'burning fuses' mean? / Can I downgrade my Nintendo Switch?
                </h3>
                <div class="ui divider"></div>
                <p>The Switch uses a common anti-downgrade technique that utilizes microscopic (ie. cannot be replaced) fuses built into the CPU. When you turn on your Switch through regular means, the firmware performs a fuse check:</p>
                <ul>
                    <li>The firmware will first check for how many fuses are burnt</li>
                    <li>If there are less fuses burnt than the firmware version expects, it will burn up fuses up to as many as it expects and reboot.</li>
                    <li>If there are exactly enough fuses burnt as the firmware expects, it will allow the Switch to load</li>
                    <li>If there are too many fuses burnt, your Switch will shutdown, not allowing the firmware to boot.</li>
                </ul>

                <p>The fusee-gelee exploit happens before any of these checks occur, meaning these checks can be bypassed. <b>Hekate, ReiNX, and SXOS all block fuses from being burnt and bypass the fuse check</b>, meaning you can keep your Switch in a downgradable state if you update your firmware in a certain way (detailed below).</p>
            </div>

            <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h3 class="ui header" style="text-align:center">
                    How do I upgrade without burning fuses? / How do I install any firmware version I want?
                </h3>
                <div class="ui divider"></div>
                <p>You can use a homebrew tool called <b><a href="https://gbatemp.net/threads/choidujournx-a-system-firmware-installer-homebrew-for-the-nintendo-switch.513416/">ChoiDujourNX by rajkosto</a></b> to install any firmware version you want.</p>
                <ul>
                    <li>This requires having a copy of the firmware binaries on your SD card. You can find these <a href="https://darthsternie.bplaced.net/switch.html">here.</a></li>
                    <li>If you want to keep your Switch in a downgradable state (ie. not burn fuses), you should enable AutoRCM before doing this. <b>If you ever boot your Switch without Hekate, ReiNX, or SXOS, your fuses will burn and you will not be able to downgrade (cleanly).</b>
                    <li>You can use this method to downgrade to any firmware version <b>even if too many fuses are burnt</b>, however you <b>must use Hekate, ReiNX or SXOS to boot</b> as otherwise the fuse check will fail.</li>
                </ul>
            </div>

            <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h3 class="ui header" style="text-align:center">
                    How can I load .XCI cartridge backups?
                </h3>
                <div class="ui divider"></div>
                <p>Currently only SX OS is able to emulate cartridges using XCI files. SX OS is a paid custom firmware (usually $25USD depending on the reseller) by Team Xecuter, with some drama behind it due to theft and license violation of open source code.<br><br>
                    If you want, you can instead install XCI files as if they were NSP files using <a href="https://gbatemp.net/threads/team-2168-zerotwoxci-the-xci-installer.518171/">ZeroTwoXCI by Elise and Team 2168</a>, but this comes with all of the same risks as installing NSP files.</p>

            </div>

            <div class="ui red message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
                If this page doesn't answer your question, feel free to ask in the <a href="https://discord.gg/qbRAuy7">support channel</a> on the Team AtlasNX Discord.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FAQ.Vue"
    }
</script>

<style scoped>

</style>