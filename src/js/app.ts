declare var Vue: any;

var app = new Vue({
    el: '#app',
    methods: {
        doSomething: function() {
            console.log("done something!");
        },
        screenSave: function(){
            alert("Save");
        },
        screenCancel: function() {
            alert("Cancel");
        },
        screenNew: function() {
            alert("New");
        }
    }
});

Vue.config.devtools = true;