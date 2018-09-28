<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Preparing exFAT
            </h1>
            <div class="ui divider"></div>
            <p>The default FAT32 filesystem on most SD cards have a file size limit of 4GB. This can be annoying when trying to install large NSP backup files. This guide will show you how to enable and use the exFAT filesystem, which does not have this limitation.<br/><br/>
            exFAT is a proprietary filesystem created by Microsoft. Nintendo must pay licensing fees to Microsoft for every Switch unit that has the exFAT drivers. Nintendo chooses to pay less by only installing exFAT for users that actually want it. As such, a system update to enable exFAT support on your Switch is required.</p>
        </div>

        <div class="ui divider"></div>

        <div class="ui purple message" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <b>If you are okay with updating to the latest system firmware, continue to <router-link to="/preparingexfat/auto">Preparing exFAT (Auto)</router-link></b>
        </div>

        <div class="ui purple message" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <b>If you do not want to update to the latest system firmware, continue to <router-link to="/preparingexfat/manual">Preparing exFAT (Manual)</router-link></b>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Exfat"
    }
</script>

<style scoped>

</style>