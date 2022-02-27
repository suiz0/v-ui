var app = new Vue({
    el: '#app',
    data: {
        view: '',
        mainToolbar: {
            collapsed: true
        },
        User: {
            name: 'User',
            lastname: 'Test',
            id: 1,

        },
        alert: {
            countDown: 0
        },
        tree: [
            {description: 'item1'},
            {description: 'item2', children: [
                {description: 'item 2.1',
                children: [
                    {description: 'item 2.1.1'},
                    {description: 'item 2.1.2'}
                ]
                },
                {description: 'item 2.2'}
            ]}
        ],
        sidebar: {
            menu1: true,
            menu2: false,
            menu3: false,
            'tree-ctrl': false,
            'table': false,
            'master-details': false
        }
    },
    methods: {
        doSomething() {
            console.log("done something!");
        },
        sidebarItemClicked(key) {
            this.toggleItems(key);

            if(key === "menu1") {
                this.view = "";
            } else if(key === "menu3") { 
                this.view = "screen";
            } else {
                this.view = key;
            }
        },
        toggleItems(key) {
            for(var k in this.sidebar){
                this.sidebar[k] = false;
            }
            
            this.sidebar[key] = true;
        },
        showAlert() {
            this.$refs['alert1'].show();
        },
        updateAlertCountDown(time) {
            this.alert.countDown = time;
        },
        screenSave(){
            alert("Save");
        },
        screenCancel() {
            alert("Cancel");
        },
        screenDelete() {
            alert("deleting...");
        },
        screenCancelRef() {
            this.$refs['screen'].cancel();
        },
        toggleSidebar() {
            this.mainToolbar.collapsed = !this.mainToolbar.collapsed;
        },
        showTwoColumnLayout() {
            window.location.href="./two-columns.html";
        },
        takeAction(item, child) {
            if (item.description.toLowerCase() === "back to main view")
                this.showHome();

            // For tree items
            if(child && child.description.toLowerCase() === "sample item 1.1")
                alert("Item from tree selected");
        },
        showHome()
        {
            window.location.href="../index.html";
        }
    }
});

Vue.config.devtools = true;