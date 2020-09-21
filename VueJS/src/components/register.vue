<template>
    <div id="signup__block">
        <input type="text" spellcheck="false" placeholder="Username" v-model="username">
        <input type="email" spellcheck="false" placeholder="E-mail" v-model="email">
        <input type="password" spellcheck="false" placeholder="Password" v-model="password">
        <input type="password" spellcheck="false" placeholder="Password" v-model="confirmPassword">
        <div class="signup__button" @click="register">Sign up</div>
        <div class="signup__window" @click="changeWindow">Back</div>
    </div>
</template>

<script>
export default {
    name: "register",
    data() {
        return {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    },
    methods: {
        changeWindow() {
            this.$emit('change-window');
        },

        register() {
            let checkPassword = /^[a-zA-Z0-9]+$/;
            let checkUsername = /^[a-zA-Z1-9]+$/;
            let checkEmail = /\S+@\S+\.\S+/;


            if (this.password !== this.confirmPassword) return global.app.addNotify(`e`, `Passwords don't match`);
            if (!(checkPassword.test(this.password))) return global.app.addNotify(`e`, `Password may only contain a-z A-Z 0-9`);
            if (!(this.password.length >= 8 && this.password.length <= 32)) return global.app.addNotify(`e`, `Password must be between 8 and 32 characters`);
            if (!(checkUsername.test(this.username))) return global.app.addNotify(`e`, `Login can only contain a-z A-Z 1-9`);
            if (!(this.username.length > 3 && this.username.length < 17)) return global.app.addNotify(`e`, `Login must be between 4 and 16 characters`);
            if (!(checkEmail.test(this.email))) return global.app.addNotify(`e`, `E-mail doesn't match the format`);
            if (!(this.email.length > 6 && this.email.length < 49)) return global.app.addNotify(`e`, `E-mail must be between 6 and 48 characters`);

            window.mp.trigger('client::auth:register', this.username, this.email, this.password);
        }
    }
}
</script>

<style scoped>
#signup__block {
    color: #e9e9e9;
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -65%);
    width: 20%;
    font-size: .9vw;
    text-align: center;
    user-select: none;
}

#signup__block input {
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

#signup__block input:focus {
    box-shadow: 0 0 5px #f90;
}

::placeholder {

    font-size: .9vw;
    color: #ccc;
    opacity: .5;
}

.signup__button {
    background-color: #f90;
    font-size: .9vw;
    text-align: center;
    width: 100%;
    padding: .8vw 0;
    margin: .3vw 0;
    border-radius: .2vw;
    cursor: pointer;
}

.signup__window {
    cursor: pointer;
    margin: 1vw 0;
    text-decoration: underline;
}

.signup__window:hover {
    color: #ccc;
    text-decoration: none;
}
</style>