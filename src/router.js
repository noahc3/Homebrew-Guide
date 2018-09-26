import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import BeforeStarting from './components/BeforeStarting.vue'
import AccessingRCM from './components/AccessingRCM.vue'
import SDSetup from './components/SDSetup.vue'
import SafetyPrecautions from './components/SafetyPrecautions.vue'
import Final from './components/Final.vue'
import FAQ from './components/FAQ.vue'
import Troubleshooting from './components/Troubleshooting.vue'
import Credits from './components/Credits.vue'
import ConfiguringHekate from './components/ConfiguringHekate.vue'
import UsingCFW from './components/UsingCFW'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/beforestarting',
            name: 'beforestarting',
            component: BeforeStarting
        },
        {
            path: '/accessingrcm',
            name: 'accessingrcm',
            component: AccessingRCM
        },
        {
            path: '/sdsetup',
            name: 'sdsetup',
            component: SDSetup
        },
        {
            path: '/safetyprecautions',
            name: 'safetyprecautions',
            component: SafetyPrecautions
        },
        {
            path: '/final',
            name: 'final',
            component: Final
        },
        {
            path: '/faq',
            name: 'faq',
            component: FAQ
        },
        {
            path: '/troubleshooting',
            name: 'troubleshooting',
            component: Troubleshooting
        },
        {
            path: '/credits',
            name: 'credits',
            component: Credits
        },
        {
            path: '/configuringhekate',
            name: 'configuringhekate',
            component: ConfiguringHekate
        },
        {
            path: '/usingcfw',
            name: 'usingcfw',
            component: UsingCFW
        }
    ]
})