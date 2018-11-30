<template>
    <div class="ui container">
        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">
                Downgrading Manually from Firmware 6.2.0 to Any Firmware
            </h1>
            <div class="ui divider"></div>
            <p style="text-align: center">This page has moved!</p>
        </div>

        <div class="ui red message" style="text-align:center" v-bind:class="{ inverted: $root.$data.darkTheme }">
            Downgrading from 6.2.0 is no longer recommended as stock Atmosphere now supports 6.2.0, and Hekate 6.2.0 support should soon follow.
            If you still want to downgrade, see <router-link to="/manualchoidowngrade">Downgrading Manually from/to Any Firmware</router-link>.
        </div>
    </div>
</template>

<script>
    export default {
        name: "Manual620Downgrade"
    }
</script>

<style scoped>

</style>