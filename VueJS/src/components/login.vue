<template>
    <div id="login__block">
        <input type="text" spellcheck="false" placeholder="Login" v-model="username">
        <input type="password" spellcheck="false" placeholder="Password" v-model="password">
        <div class="login__button" @click="login">Sign in</div>
        <div class="login__singup" @click="changeWindow">Sign up</div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        changeWindow() {
            this.$emit('change-window');
        },

        login() {
            window.mp.trigger('client::auth:login', this.username, this.password);
        }
    }
}
</script>

<style scoped>

#login__block {
    color: #e9e9e9;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -60%);
    width: 20%;
    font-size: .9vw;
    text-align: center;
    user-select: none;
}

#login__block input {
    font-size: .9vw;
    outline: none;
    line-height: 0;
    text-align: center;
    width: 99%;
    height: 1vw;
    padding: .8vw 0;
    margin: .3vw 0;
    background: none;
    border: .1vw solid #f60;
    border-radius: .2vw;
    color: #ddd;

}

#login__block input:focus {
    box-shadow: 0 0 5px #f90;
}

::placeholder {

    font-size: .9vw;
    color: #ccc;
    opacity: .5;
}

.login__button {
    background-color: #f90;
    font-size: .9vw;
    text-align: center;
    width: 100%;
    padding: .8vw 0;
    margin: .3vw 0;
    border-radius: .2vw;
    cursor: pointer;
}

.login__singup {
    cursor: pointer;
    margin: 1vw 0;
    text-decoration: underline;
}

.login__singup:hover {
    color: #ccc;
    text-decoration: none;
}
</style>