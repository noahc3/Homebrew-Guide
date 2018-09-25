<template>
    <div class="ui container">
        <img class="ui small image" src="../img/logo.png" style="display:block;margin-left:auto;margin-right:auto;margin-bottom:1.5rem;width:60%" v-bind:class="{ invertimg: $root.$data.darkTheme }"/>

        <div class="ui segment" v-bind:class="{ inverted: $root.$data.darkTheme }">
            <h1 class="ui header" style="text-align:center">The Ultimate Noob Guide for Hacking your Nintendo Switch</h1>
            <div class="ui divider"></div>
            <p style="text-align:center">Want to hack your Nintendo Switch but don't know where to start? Just follow this guide!<br/><br/>
                This website will walk you through all of the steps required to getting homebrew and custom firmware on your Nintendo Switch.</p>
        </div>
        <router-link to="/beforestarting"><button class="fluid ui red button" v-bind:class="{ inverted: $root.$data.darkTheme }">Proceed to Section 0: Before Starting</button></router-link>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>