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
            'master-details': false
        }
    },
    methods: {
        doSomething: function() {
            console.log("done something!");
        },
        sidebarItemClicked: function(key) {
            this.toggleItems(key);

            if(key==="menu1") {
                this.view ="";
            } else if(key==="menu3") { 
                this.view="screen";
            } else {
                this.view=key;
            }
        },
        toggleItems(key) {
            this.sidebar[key] = true;

            if(key!== 'menu1')
                this.sidebar.menu1 = false;
            
            if(key!== 'menu3')
                this.sidebar.menu3 = false;
            
            if(key!== 'tree-ctrl')
                this.sidebar['tree-ctrl'] = false;
            
            if(key!== 'master-details')
                this.sidebar['master-details'] = false;
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
            if (item.description.toLowerCase() === "back to main view")
                this.showHome();
        },
        showHome()
        {
            window.location.href="../index.html";
        }
    }
});

Vue.config.devtools = true;