<template>
    <div id="app">
        <Auth v-if="interfaces.auth.show"/>
        <Notification ref="notify"/>
    </div>
</template>

<script>
import Auth from './views/auth.vue'
import Notification from './views/notification.vue'

export default {
    name: 'App',
    data() {
        return {
            interfaces: {
                "auth": {
                    show: 0
                }
            }
        }
    },
    components: {
        Auth,
        Notification
    },
    methods: {
        addNotify(type, text) {
            this.$refs.notify.addNotify(type, text);
        },

        showInterface(name, toggle) {
            this.interfaces[name].show = toggle;
        },

        hideAllInterfaces() {
            for (let el in this.interfaces) {
                this.interfaces[el] = 0;
            }
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500;600&display=swap');

#app {
    font-family: 'Nunito', sans-serif;
}
</style>
