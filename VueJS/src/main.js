import {createApp} from 'vue'
import App from './App.vue'

if (!window.mp) {
    window.mp = {
        trigger() {
        }
    }
}

global.app = createApp(App).mount('#app')


