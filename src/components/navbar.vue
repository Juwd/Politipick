<template>
    <nav>
        <v-app-bar app >
            <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase" >
                <span class="font-weight-light">Poli</span>
                <span>pick</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn outlined color>
                <span>Login</span>
                <v-icon right>mdi-login</v-icon>
            </v-btn>
        </v-app-bar>
    
<v-navigation-drawer app v-model="drawer" class="teal lighten-4">
     <v-list >
        <v-subheader>MAIN MENU</v-subheader>
            <v-list-item-group>
            <v-list-item v-for="link in links" :key="link.text"  :to="link.route" router>
            <div v-if="link.parent=='Politicians'">
                <span v-if="link.text=='Politician list'">
                <v-divider></v-divider>
                <v-list-item-subtitle>
                    Politicians
                </v-list-item-subtitle>
                </span>    
                    <v-row>
                    <v-list-item-icon>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </v-list-item-content>    
                    </v-row>
            </div>
            <div v-else>
            <v-row>
            <v-list-item-icon>
                <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{link.text}}</v-list-item-title>
            </v-list-item-content>
            </v-row>
            </div>
            </v-list-item>
            </v-list-item-group>
    </v-list>  
    <!-- <v-list>
        <v-list-item-group
              v-for="link in links"
              v-model="link.active"
              :key="link.text"
              :prepend-icon="link.icon"
              no-action
              @input="onItemClick($event, link.text)"
            >
              <v-list slot="activator">
                <v-list-item-content>
                  <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list>
              <v-list v-for="subItem in link.children" :key="subItem.title" :to="link.route" router>
                <v-list-item-content>
                  <v-list-item-title>{{ subItem.text }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>{{ subItem.icon }}</v-icon>
                </v-list-item-action>
              </v-list>
            </v-list-item-group>
          </v-list> -->
    
</v-navigation-drawer>

</nav>    
</template>

<script>
export default {
    name: 'navbar',
    data () {
        return {drawer: false,
        links: [{ icon:'mdi-home', text:"Home", route:"/"},
        { icon:'mdi-account-group-outline', parent:"Politicians" , text: "Politician list", route: "/politicians"},
         { icon:'mdi-account-multiple-plus-outline', parent:"Politicians" ,text: "Add Politicians", route: "/politicians/add"}, //children:[{icon:'mdi-account-group-outline',text: "Politician list", route: "/politicians"},{icon:'mdi-account-multiple-plus-outline',text: "Add Politicians", route: "/politicians/add"}]
        { icon:'mdi-information-outline', text:"about", route:"/about"}
    ]}
    },
    methods: {
    onItemClick(event, item) {
      if(event) {
        this.selected = item
      }
    }
  }
    
}
</script>

<style lang="stylus" scoped>

</style>