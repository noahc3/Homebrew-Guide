<template>
    <div>
        <div class="ui container">
            <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <h1 class="ui header" style="text-align:center">
                    Credits
                </h1>
                <div class="ui divider"></div>
                <ul>
                    <li>Plailect for starting this guide trend and providing a basis for this guide.</li>
                    <li>SciresM and ReSwitched for Atmosphere</li>
                    <li>CTCaer and naehrwert for Hekate</li>
                    <li>tomGER for SDFilesSwitch</li>
                    <li>ReiNX Team for ReiNX and the first sections of <a href="https://reinx.guide/">https://reinx.guide</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Credits.vue"
    }
</script>

<style scoped>

</style>
