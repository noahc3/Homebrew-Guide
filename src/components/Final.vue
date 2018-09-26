<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Post Setup
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

        <div class="ui teal message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
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

        <div class="ui divider"></div>

        <div class="ui purple message" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <b>(Recommended) For information on enabling and using exFAT, see <router-link to="/configuringhekate">Using exFAT</router-link></b>
        </div>

        <div class="ui divider"></div>

        <div class="ui purple message" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <b>For information on configuring and using the Hekate custom bootloader, see <router-link to="/configuringhekate">Using and Configuring Hekate</router-link></b>
        </div>

        <div class="ui divider"></div>

        <div class="ui purple message" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <b>For information on using Custom Firmware and the features they enable, see <router-link to="/usingcfw">Using Custom Firmware</router-link></b>
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