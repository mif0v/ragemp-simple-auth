<template>
    <div id="notice__screen">
        <div v-show="list[2].show" class="notice__body">
            <div class="notice__left">
                <i :class="getPic(list[2].pic)" aria-hidden="true"></i>
            </div>
            <div class="notice__text" v-text="list[2].text">
            </div>
        </div>

        <div v-show="list[1].show" class="notice__body">
            <div class="notice__left">
                <i :class="getPic(list[1].pic)" aria-hidden="true"></i>
            </div>
            <div class="notice__text" v-text="list[1].text">
            </div>
        </div>

        <div v-show="list[0].show" class="notice__body">
            <div class="notice__left">
                <i :class="getPic(list[0].pic)" aria-hidden="true"></i>
            </div>
            <div class="notice__text" v-text="list[0].text">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "notification",
    data() {
        return {
            list: [
                {
                    show: false,
                    pic: '',
                    text: ''
                },
                {
                    show: false,
                    pic: '',
                    text: ''
                },
                {
                    show: false,
                    pic: '',
                    text: ''
                }
            ],
            queue: []
        }
    },
    methods: {
        addNotify(type, text) {
            let added = false;

            this.list.forEach(el => {
                if (!el.show && !added) {
                    added = true;
                    let i = this.list.indexOf(el);

                    this.list[i] = {
                        show: true,
                        pic: type,
                        text: text
                    }
                    console.log(this.list)
                    setTimeout(this.removeNotify, 5000);
                }
            });

            if (!added) {
                this.queue.push({type: type, text: text});
            }
        },

        removeNotify() {
            try {
                if (this.queue[0]) {
                    let el = this.queue.shift();
                    this.list.push({
                        show: true,
                        pic: el.type,
                        text: el.text
                    });
                    this.list.shift();
                    setTimeout(this.removeNotify, 5000);
                } else {
                    this.list.push({
                        show: false,
                        pic: '',
                        text: ''
                    });
                    this.list.shift();
                    console.log(this.list)
                }
            } catch (e) {
                console.log(e)
            }
        },

        getPic(type) {
            switch (type) {
                case "s": {
                    return "fa fa-bell";
                }
                case "w": {
                    return "fa fa-exclamation-triangle";
                }
                case "e": {
                    return "fa fa-times";
                }
            }
        }
    },

    computed: {}
}
</script>

<style scoped>
#notice__screen {
    position: absolute;
    bottom: 0;
    left: 50%;

    width: 28%;
    min-height: 3vw;
    max-height: 20vw;
    margin-right: -50%;
    font-size: .9vw;
    color: white;
    transform: translate(-50%);
}

.notice__body {
    position: relative;
    width: 100%;
    padding: 3% 0;

    margin-bottom: 1.5%;
    border-radius: .3em;
    background-color: #191919;
}

.notice__left {
    top: 0;
    left: 0;
    height: 100%;
    width: 11%;
    position: absolute;
    background-color: #191919;
    border-radius: .3em 0 0 .3em;
}

.notice__left i {

    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)

}

.notice__text {

    text-align: center;
    width: 80%;
    padding: 0 0 0 13%;
}
</style>