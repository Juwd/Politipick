<template>
    <div>
    <v-container>
    <v-row >
            <v-col lg=12>
                <v-card outlined elevation="3"> 
                    <v-card-title>My priorities</v-card-title>
                    <v-card-text>
                            Henlo
                    </v-card-text>
                </v-card>
                <v-card outlined elevation="3">
                    <v-card-title>Why I'm running</v-card-title>
                    <v-card-text>
                            because i wanna win
                    </v-card-text>
                </v-card>
            </v-col>
    </v-row>
    <v-divider></v-divider>
    <h1>Promises on policies</h1>
    
    <v-row>
        <v-col lg=4 v-for="policy in policies" :key="policy.title">
        <v-hover>
            <template v-slot:default="{ hover }">
            <v-card>
                <v-img height="200" :src="policy.img"></v-img>
                <v-card-title>{{policy.title}}</v-card-title>
            <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn @click="policy.model = !policy.model">See more info</v-btn>
                </v-overlay>
            </v-fade-transition>
            </v-card>
            </template>
        </v-hover>
        </v-col>
    </v-row>
    </v-container>
    <!-- for dialog -->
    <div v-for="policy in policies" :key="policy.title"> 
        <v-dialog v-model="policy.model"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            >
            <v-card tile>
                <v-toolbar flat dense dark color="primary">
                <v-toolbar-title>{{policy.title}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="policy.model = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                </v-toolbar>
            <v-card-text>
                <h2 text-center class="font-weight-light">{{policy.description}}</h2>
                <v-divider></v-divider>
            </v-card-text>
             <v-row class="fill-height" align="center" justify="center">
                <v-item-group
                v-model="window"
                class="shrink mr-6"
                mandatory
                tag="v-flex"
                >
                <v-item v-for="subpolicy in policy.subtopics" :key="subpolicy.title"  v-slot="{ active, toggle }">
                    <v-btn :input-value="active" icon @click="toggle">
                        <v-icon>mdi-record</v-icon>
                    </v-btn>
                </v-item>
                </v-item-group>
             </v-row>
            <v-row class="fill-height"
            align="center"
            justify="center">
                <v-col lg="12">
                <v-window v-model="window">
                    <v-window-item v-for="subpolicy in policy.subtopics" :key="subpolicy.title">
                    <v-card>
                        <v-card-title>{{ subpolicy.title }}</v-card-title>
                        <v-card-text>{{ subpolicy.description }}</v-card-text>
                        <v-divider inset></v-divider>
                        <v-card-title>What {{details.name}} has to say</v-card-title>
                        <!-- Edit this one to have promises that is equivalent to the subpolicies -->
                        <v-card-text v-if="details.promises">{{details.promises}}</v-card-text>
                        <v-card-text v-else>Nothing to say :( </v-card-text>
                        <v-divider inset></v-divider>
                        <v-card-title>Why</v-card-title>
                        <!-- Edit this one to have promises that is equivalent to the subpolicies -->
                        <v-card-text v-if="details.promises">{{details.promises}}</v-card-text>
                        <v-card-text v-else>Nothing to say :( </v-card-text>
                        <v-divider inset></v-divider>
                        <v-card-title>How</v-card-title>
                        <!-- Edit this one to have promises that is equivalent to the subpolicies -->
                        <v-card-text v-if="details.promises">{{details.promises}}</v-card-text>
                        <v-card-text v-else>Nothing to say :( </v-card-text>
                        <v-divider></v-divider>
                        <v-card-title>Citations</v-card-title>
                        <!-- Edit this one to have promises that is equivalent to the subpolicies -->
                        <v-card-text v-if="details.promises">{{details.promises}}</v-card-text>
                        <v-card-text v-else>Nothing to say :( </v-card-text>
                    </v-card>
                    </v-window-item>
                </v-window>
                </v-col>
             </v-row>
            
            </v-card>
        <div style="flex: 1 1 auto;"></div>
        </v-dialog>
    </div>
    </div>
</template>

<script>

export default {
    name:'praises',
    props : ['detail'],
    data () { 
      return{
        tabs: null,
        details: this.detail,
        overlay:false,
        migration:false,
        window:0,
        policies: [{title:"Borders and Migration", img:"https://res.cloudinary.com/polipick/image/upload/v1613182324/policies/BordersAndMigration_kublfb.jpg",model:false,description:"The Covid-19 pandemic has seen global travel grind to a halt. How the country manages its borders is now a major election issue, especially as pressure mounts around reopening the border.",
                subtopics:[{window:0,title:"Immigration", description:"Immigration has been restricted by the current government but some parties say that PH shoud limit immigration further. Others say skills and labour from overseas is exactly what the country needs to help the economy recover from Covid-19"},{window:1,title:"Borders and quarantine", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{window:2,title:"Refugees", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},]},
        {title:"Community and Inclusion", img:"https://res.cloudinary.com/polipick/image/upload/v1613182324/policies/BordersAndMigration_kublfb.jpg",model:false},
        {title:"Defence and Foreign affairs", img:"https://res.cloudinary.com/polipick/image/upload/v1613182324/policies/BordersAndMigration_kublfb.jpg",model:false},
        {title:"Economy", img:"https://res.cloudinary.com/polipick/image/upload/v1613182324/policies/BordersAndMigration_kublfb.jpg",model:false}]
    }},
    
}

</script>
