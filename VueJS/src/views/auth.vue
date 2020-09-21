<template>
    <div class="blackBG"></div>
    <div class="auth__main">
        <div class="auth__server__name">Simple</div>
        <div class="auth__action">{{ action }}</div>
        <Login @change-window="changeWindow(false)" v-if="loginWindow"/>
        <Register @change-window="changeWindow(true)" v-else/>
    </div>
</template>

<script>
import Login from '../components/login.vue';
import Register from '../components/register.vue';


export default {
    name: "auth",
    data() {
        return {
            loginWindow: true,
            action: "Sign In"
        }
    },
    components: {
        Login,
        Register
    },
    methods: {
        changeWindow(toggle) {
            this.loginWindow = toggle;

            this.action = toggle ? "Sign In" : "Sign Up";
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

.blackBG {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
}

.auth__main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-image: url("../assets/authBG.png");
    background-repeat: no-repeat;
    background-size: cover;
}

.auth__server__name {
    text-align: center;
    user-select: none;
    font-size: 7.5vh;
    font-family: 'Righteous', cursive;
    background: -webkit-linear-gradient(#F7BC49, #F0AB24);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 22.5vh;
}

.auth__action {
    text-align: center;
    user-select: none;
    color: white;
    font-size: 2.5vh;
    margin: 5vh 0;
}
</style>