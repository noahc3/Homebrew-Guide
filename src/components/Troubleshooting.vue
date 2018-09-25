<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Troubleshooting
            </h1>
            <div class="ui divider"></div>
            <p style="text-align:center">Something didn't work right? Here are some common problems with their solutions.</p>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h3 class="ui header" style="text-align:center">
                The Homebrew Menu doesn't show anything!
            </h3>
            <div class="ui divider"></div>
            <p>This is usually due to an archive metadata bit used by some OS's that Horizon simply can't deal with. Here's how to fix it:</p>
            <ol>
                <li>Launch into Hekate</li>
                <li>Select <b>'Tools > Unset archive bit (all sd files)'</b>
                    <ul><li>This might take a while, be patient.</li></ul>
                </li>

            </ol>
        </div>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h3 class="ui header" style="text-align:center">
                When launching Hekate after shutting down from Horizon, it shows a Hekate logo and then doesn't boot.
            </h3>
            <div class="ui divider"></div>
            <p>This is a feature designed for modchips but can be annoying for other users. A later version of Hekate will have the option to disable this functionality. You can find out more <a href="https://github.com/CTCaer/hekate/issues/114">on the Github issue</a></p>
        </div>

        <div class="ui red message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            If this page doesn't solve your problem, feel free to ask for help in the <a href="https://discord.gg/5WrBKQ">support channel</a> on the SDFilesSwitched Discord.
        </div>
    </div>
</template>

<script>
    export default {
        name: "Troubleshooting"
    }
</script>

<style scoped>

</style>