var app = new Vue({
    el: '#app',
    data: {
        mainToolbar: {
            collapsed: true
        },
        User: {
            name: 'User',
            lastname: 'Test',
            id: 1,

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
        },
        showTwoColumnLayout() {
            window.location.href="./showcase/two-columns.html";
        },
        takeAction(item) {
            if (item.description.toLowerCase() === "home")
                this.showHome();
        },
        showHome()
        {
            window.location.href="../index.html";
        }
    }
});

Vue.config.devtools = true;