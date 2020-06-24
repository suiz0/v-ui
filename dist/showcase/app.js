var app = new Vue({
    el: '#app',
    data: {
        mainToolbar: {
            collapsed: true
        }
    },
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
        },
        toggleSidebar() {
            this.mainToolbar.collapsed = !this.mainToolbar.collapsed;
        }
    }
});

Vue.config.devtools = true;