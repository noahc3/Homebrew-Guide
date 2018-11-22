import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import BeforeStarting from './components/BeforeStarting'
import AccessingRCM from './components/AccessingRCM'
import SDSetup from './components/SDSetup'
import SafetyPrecautions from './components/SafetyPrecautions'
import Final from './components/Final'
import FAQ from './components/FAQ'
import Troubleshooting from './components/Troubleshooting'
import Credits from './components/Credits'
import ConfiguringHekate from './components/ConfiguringHekate'
import UsingCFW from './components/UsingCFW'
import ManualUpdate from './components/ManualUpdate'
import FW620 from './components/FW620'
import Manual620Downgrade from './components/Manual620Downgrade'

Vue.use(Router)

export default new Router({
    mode: 'hash',
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
        },
        {
            path: '/manualupdate',
            name: 'manualupdate',
            component: ManualUpdate
        },
        {
            path: '/fw620',
            name: 'fw620',
            component: FW620
        },
        {
            path: '/manual620downgrade',
            name: 'manual620downgrade',
            component: Manual620Downgrade
        }
    ]
})