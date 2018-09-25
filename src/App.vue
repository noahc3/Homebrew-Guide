<template>
    <div id="app" v-bind:class="{ darkbackground: $root.$data.darkTheme }">
        <div class="pc-tablet-only" style="margin-bottom:2rem">
            <div class="ui menu" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <router-link to="/" class="item"><img class="ui small image" src="./img/logo.png" style="margin-left:auto;margin-right:auto" v-bind:class="{ invertimg: $root.$data.darkTheme }"/></router-link>
                <div class="ui simple dropdown item" v-bind:class="{ inverted: $root.$data.darkTheme }">
                    Procedure
                    <i class="dropdown icon"></i>
                    <div class="menu">
                        <router-link class="item" to="/beforestarting">
                            Before Starting
                        </router-link>
                        <router-link class="item" to="/accessingrcm">
                            Accessing RCM
                        </router-link>
                        <router-link class="item" to="/sdsetup">
                            SD Card Setup
                        </router-link>
                        <router-link class="item" to="/safetyprecautions">
                            Safety Precautions
                        </router-link>
                        <router-link class="item" to="/final">
                            Using CFW
                        </router-link>
                    </div>
                </div>
                <router-link class="item" to="/troubleshooting">
                    Troubleshooting
                </router-link>
                <router-link class="item" to="/faq">
                    Frequently Asked Questions
                </router-link>
                <router-link class="item" to="/credits">
                    Credits
                </router-link>
                <div class="right menu">
                    <a href="https://www.sdsetup.com" class="item">
                        Back to SDSetup
                    </a>
                </div>
            </div>
        </div>
        <div class="mobile-only" style="width:100%;margin-bottom:2rem;margin-top:0;">
            <div class="ui vertical menu" style="width:100%" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <router-link to="/" class="item"><img class="ui small image" src="./img/logo.png" style="margin-left:auto;margin-right:auto" v-bind:class="{ invertimg: $root.$data.darkTheme }"/></router-link>
                <div class="ui item">
                    Procedure
                    <div class="menu">
                        <router-link class="item" to="/beforestarting">
                            Before Starting
                        </router-link>
                        <router-link class="item" to="/accessingrcm">
                            Accessing RCM
                        </router-link>
                        <router-link class="item" to="/sdsetup">
                            SD Card Setup
                        </router-link>
                        <router-link class="item" to="/safetyprecautions">
                            Safety Precautions
                        </router-link>
                        <router-link class="item" to="/final">
                            Using CFW
                        </router-link>
                    </div>
                </div>
                <router-link class="item" to="/troubleshooting">
                    Troubleshooting
                </router-link>
                <router-link class="item" to="/faq">
                    Frequently Asked Questions
                </router-link>
                <router-link class="item" to="/credits">
                    Credits
                </router-link>
                <a href="https://www.sdsetup.com" class="item">
                    Back to SDSetup
                </a>
            </div>
        </div>


        <router-view/> <!-- main page -->

        <div style="margin-top:2em">
            <div class=" ui center compact segment" style="margin:auto" v-bind:class="{ inverted: $root.$data.darkTheme }">
                <span style="margin-right:1rem;padding-bottom:0.5rem">Light</span>
                <div class="ui toggle fitted checkbox" v-bind:class="{ inverted: $root.$data.darkTheme }">
                    <input id="cbx-theme" type="checkbox" v-model="$root.$data.darkTheme">
                    <label/>
                </div>
                <span style="margin-left:1rem">Dark</span>
            </div>
            <br>
            <div style="text-align:center;color:#808080">
                <b>
                    &copy; 2018 noahc3<br/>The Nintendo Switch name and logo are &copy; Nintendo. This site is in no way affiliated with Nintendo or any of its partners.
                </b>
            </div>
        </div>
        <br/>
    </div>
</template>

<style>
    .mobile-only {
        display: none;
        visibility:collapse;
    }

    @media only screen and (max-width: 768px) {
        .mobile-only {
            display: block;
            visibility:visible;
        }
    }

    .pc-tablet-only {
        display: block;
        visibility:visible;
    }

    @media only screen and (max-width: 768px) {
        .pc-tablet-only {
            display: none;
            visibility:collapse;
        }
    }

    .invertimg {
        filter: invert(1);
        -webkit-filter: invert(1);
    }

    .darkbackground {
        background-color: #282828;
    }

    #app {
        min-height: 100%;
    }

    html, body {
        min-height: 100%;
        margin: 0;
        padding: 0;
    }

</style>
