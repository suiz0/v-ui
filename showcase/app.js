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

        },
        sidebar: {
            menu1: true,
            menu2: false,
            menu3: false
        }
    },
    methods: {
        doSomething: function() {
            console.log("done something!");
        },
        sidebarItemClicked: function(key) {

            this.sidebar[key] = true;

            if(key!== 'menu1')
                this.sidebar.menu1 = false;
            
            if(key!== 'menu3')
                this.sidebar.menu3 = false;
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