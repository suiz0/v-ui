import Vue from 'vue';

const AppAlert = Vue.component('app-alert', {
    template: `<b-alert @dismissed="dismissed" @dismiss-count-down="countDownUpdate" :show="countDown" :variant="variant" @dismissed="resetCountDown" :dismissible="dismissible">
        <slot></slot>
    </b-alert>`,
    props: {
        isHidden: {type: Boolean, default: false},
        variant: {type: String, default: 'info'},
        dismissible: {type: Boolean, default: false},
        timeout: {type: Number, default: null}
    },
    data: function() {
        return {
            countDown: !this.isHidden
        };
    },
    methods: {
        resetCountDown() {
            this.countDown = 0;
        },
        show() {
            if(this.timeout !== null) {
                this.countDown = this.timeout;
            } else {
                this.countDown = true;
            }
        },
        dismissed() {
            this.countDown = 0;
            this.$emit('dismissed');
        },
        countDownUpdate(remaining) {
            this.$emit('dismiss-count-down', remaining);
        }
    }
});

export default AppAlert;