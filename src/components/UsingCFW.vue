<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Using CFW
            </h1>
        </div>

        <div class="ui teal message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            If something goes wrong or you need help, check <router-link to="/troubleshooting">troubleshooting</router-link>.
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
            <p>You can backup and restore save files locally, without Nintendo Switch Online, by using <b>Checkpoint</b> from within the Homebrew Menu. Dumped saves will go in <b>'/switch/checkpoint/'</b> on your SD card for you to copy elsewhere. These save backups can later be restored to any user account on any Switch using Checkpoint.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UsingCFW"
    }
</script>

<style scoped>

</style>