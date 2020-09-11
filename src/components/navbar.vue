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
            <v-list-item v-for="link in links" :key="link.text"  :to="link.route" router>
            <v-list-item-icon>
                <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{link.text}}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
    </v-list>
</v-navigation-drawer>

    </nav>    
</template>

<script>
export default {
    name: 'navbar',
    data () {
        return {drawer: false,
        links: [{ icon:'mdi-home', text:"Home", route:"/"},
        { icon:'mdi-account-group-outline', text: "Politicians", route: "/Politicians"},
        { icon:'mdi-information-outline', text:"about", route:"/about"}
    ]}
    }
    
}
</script>

<style lang="stylus" scoped>

</style>