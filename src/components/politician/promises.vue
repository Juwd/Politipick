<template>
    <div>
    <v-container>
    <v-row >
            <v-col lg=12>
                <v-card @click="revealPriorities = !revealPriorities" outlined elevation="3"> 
                    <v-tooltip bottom :nudge-top="30">
                        <template v-slot:activator="{on, attrs}"> <!-- to hover tool tip -->
                            <v-card-title v-bind="attrs" v-on="on">My priorities
                                <v-spacer></v-spacer>
                            <v-icon v-if="details.priorities.citation.length" right>mdi-clipboard-check-multiple</v-icon> <!-- clipboard -->
                            <v-icon v-else right>mdi-clipboard-alert</v-icon> 
                            </v-card-title>
                        </template>
                    <span v-if="details.priorities.citation.length" >cited</span>
                    <span v-else>No citation found</span>
                    </v-tooltip>
                    <v-card-text>
                           {{details.priorities.priorities}}
                    </v-card-text>
                    <v-expand-transition>
                    <v-card v-if="revealPriorities && details.priorities.citation.length" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                        <v-card-title>Citation</v-card-title>
                        <div v-for="sites in details.priorities.citation" :key="sites.index">
                        <v-card-text>{{sites.url}}</v-card-text>
                        </div>
                    </v-card>
                    </v-expand-transition>
                </v-card>
            </v-col>
    </v-row>
    <v-row>
        <v-col lg="12">
        <v-card @click="revealReasons = !revealReasons" outlined elevation="3"> 
            <v-tooltip bottom :nudge-top="30">
                <template v-slot:activator="{on, attrs}"> <!-- to hover tool tip -->
                    <v-card-title v-bind="attrs" v-on="on">Why I'm Running
                        <v-spacer></v-spacer>
                    <v-icon v-if="details.reasons.citation.length" right>mdi-clipboard-check-multiple</v-icon> <!-- clipboard -->
                    <v-icon v-else right>mdi-clipboard-alert</v-icon> 
                    </v-card-title>
                </template>
            <span v-if="details.reasons.citation.length" >cited</span>
            <span v-else>No citation found</span>
            </v-tooltip>
            <v-card-text>
                    {{details.reasons.reasons}}
            </v-card-text>
            <v-expand-transition>
            <v-card v-if="revealReasons && details.reasons.citation.length" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                <v-card-title>Citation</v-card-title>
                <div v-for="sites in details.reasons.citation" :key="sites.index">
                <v-card-text>{{sites.url}}</v-card-text>
                </div>
            </v-card>
            </v-expand-transition>
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
                <v-btn icon dark @click="policy.model = false;window=0">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                </v-toolbar>
            <v-card-text>
                <h2 text-center class="font-weight-light">{{policy.description}}</h2>
                <v-divider></v-divider>
            </v-card-text>
             <v-row class="fill-height" align="center" justify="center">
                <v-item-group
                v-model="policy.window"
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
                <v-window v-model="policy.window">
                    <v-window-item v-for="subpolicy in policy.subtopics" :key="subpolicy.title">
                    <v-card>
                        <v-card-title>{{ subpolicy.title }}</v-card-title>
                        <v-card-text>{{ subpolicy.description }}</v-card-text>
                        <v-divider inset></v-divider>
                        <v-card-title>What {{details.name}} has to say</v-card-title>
                        <!-- For getting the specific reply for each subpolicy -->
                        <div v-for="filteredSubpolicy in filteredPolicy(subpolicy.title)" :key="filteredSubpolicy._id">
                            <v-card-text v-if="filteredSubpolicy.opinion">{{filteredSubpolicy.opinion}}</v-card-text>
                            <v-card-text v-else>Nothing to say :(</v-card-text>
                            <v-divider inset></v-divider>
                            <v-card-title>Why</v-card-title>
                            <!-- Why -->
                            <v-card-text v-if="filteredSubpolicy.why">{{filteredSubpolicy.why}}</v-card-text>
                            <v-card-text v-else>Nothing to say :( </v-card-text>
                            <v-divider inset></v-divider>
                            <v-card-title>How</v-card-title>
                            <!-- how -->
                            <v-card-text v-if="filteredSubpolicy.how">{{filteredSubpolicy.how}}</v-card-text>
                            <v-card-text v-else>Nothing to say :( </v-card-text>
                            <v-divider></v-divider>
                            <v-card-title>Citations</v-card-title>
                            <!-- Citations -->
                            <div v-for="citations in filteredSubpolicy.citation" :key="citations._id">
                                <v-card-text v-if="filteredSubpolicy.citation">{{citations.url}}</v-card-text>
                                <v-card-text v-else>No citations </v-card-text>
                            </div>
                        </div>
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
        revealPriorities:false,
        revealReasons:false,
        overlay:false,
        migration:false,
        policies: [{window:0,name:"borders",title:"Borders and Migration", img:"https://res.cloudinary.com/polipick/image/upload/v1613182324/policies/BordersAndMigration_kublfb.jpg",model:false,description:"The Covid-19 pandemic has seen global travel grind to a halt. How the country manages its borders is now a major election issue, especially as pressure mounts around reopening the border.",
                subtopics:[{title:"Immigration", description:"Immigration has been restricted by the current government but some parties say that PH shoud limit immigration further. Others say skills and labour from overseas is exactly what the country needs to help the economy recover from Covid-19"},{title:"Borders and quarantine", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Refugees", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},]},
        
        {window:0,name:"community",title:"Community and Inclusion", description:"lorem ipsum dolor doler", img:"https://res.cloudinary.com/polipick/image/upload/v1613454170/policies/communityAndInclusion_izxifk.png",model:false,
        subtopics:[{title:"Indigenous people", description:"description of indigenous people"},{ title:"Free expression and hate speech", description:"random shizz"},{ title:"Rainbow Community", description:"rainbow"},{ title:"Disability", description:"rainbow"},{ title:"Seniors", description:"Seniors"},{ title:"Animal welfare", description:"rainbow"}, { title:"Young people", description:"rainbow"},{ title:"Women", description:"rainbow"}],},
        
        {window:0,name:"defence",title:"Defence and Foreign affairs", description:"eeyyyy defence", img:"https://res.cloudinary.com/polipick/image/upload/v1613454222/policies/defenceAndForeignAffairs_qknhdz.jpg",model:false,
        subtopics:[{title:"Aid, development and institution", description:"Immigration has been restricted by the current government but some parties say that PH shoud limit immigration further. Others say skills and labour from overseas is exactly what the country needs to help the economy recover from Covid-19"},{ title:"International relations", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Defence and veterans", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},]},
        
        {window:0,name:"economy",title:"Economy", description:"economy", img:"https://res.cloudinary.com/polipick/image/upload/v1621520963/policies/BuildingsEconomyResize_ni9wkm.jpg",model:false,
        subtopics:[{title:"Business support", description:"Immigration"},{ title:"Regional development", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Forestry", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Fisheries", description:"Immigration"},{ title:"Tourism", description:"E"},{ title:"Economic Development and industry", description:"Immigration"},
        { title:"Trade and exports", description:"Immigration"},{ title:"Agriculture", description:"Immigration"},{ title:"Oil, gas and mining", description:"Immigration"},{ title:"Government revenue and finance", description:"Immigration"},{ title:"Foreign investment", description:"Immigration"}],},
        
        {window:0,name:"education",title:"Education", img:"https://res.cloudinary.com/polipick/image/upload/v1621521910/policies/Education_aaronFavila_blwqo9.jpg",model:false,
        subtopics:[{title:"Schools", description:"Immigration"},{ title:"Early child education", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Tertiary education and research", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Tertiary fees and student support", description:"Immigration"},{ title:"Trades and vocational education", description:"E"},]},
        
        {window:0,name:"environment",title:"Environment", img:"https://res.cloudinary.com/polipick/image/upload/v1621522004/policies/fishing_uedbgq.jpg",model:false,
        subtopics:[{title:"Conservation", description:"Immigration"},{ title:"Emmisions reduction", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Waste management", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Climate adaptation", description:"Immigration"},{ title:"Oceans", description:"E"},{ title:"Fresh water and pollution", description:"E"},]},
        
        {window:0,name:"health",title:"Health", img:"https://res.cloudinary.com/polipick/image/upload/v1621522045/policies/Health_gqoetx.jpg",model:false,
        subtopics:[{title:"Covid-19 health response", description:"Immigration"},{ title:"Public health", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Health funding and workforce", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Alchol and drugs", description:"Immigration"},{ title:"Mental health", description:"E"},{ title:"Health services", description:"E"},]},
        
        {window:0,name:"housing",title:"Housing", img:"https://res.cloudinary.com/polipick/image/upload/v1621522093/policies/HouseManila_nmmax6.jpg",model:false,
        subtopics:[{title:"Housing and affordability", description:"Immigration"},{ title:"Social and public housing", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Housing quality", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Renting", description:"Immigration"},]},
        
        {window:0,name:"incomes",title:"Incomes and Employment", img:"https://res.cloudinary.com/polipick/image/upload/v1621523086/policies/Economy_1_k8xtfs.webp",model:false,
        subtopics:[{title:"Tax and income support", description:"Immigration"},{ title:"Jobs and employment", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Wages and working conditions", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Superannuation", description:"Immigration"},{ title:"Benefits", description:"E"},]},
        
        {window:0,name:"law",title:"Law,Justice and Government", img:"https://res.cloudinary.com/polipick/image/upload/v1621523669/policies/LawAndGovernment_tbahel.jpg",model:false,
        subtopics:[{title:"Criminal Justice", description:"Immigration"},{ title:"Parliament and democracy", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Local Government", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Civil Justice", description:"Immigration"},{ title:"Policing", description:"E"},{ title:"Family justice and safety", description:"Immigration"},
        { title:"Firearms", description:"Immigration"},{ title:"Public sector", description:"Immigration"},]},
        
        {window:0,name:"media",title:"Media, culture and recreation", img:"https://res.cloudinary.com/polipick/image/upload/v1621524294/policies/Culture_1_v6wn33.jpg",model:false,
        subtopics:[{title:"Broadcasting and media", description:"description of indigenous people"},{ title:"Arts, culture and heritage", description:"random shizz"},{ title:"Sports and recreation", description:"rainbow"},]},
        
        {window:0,name:"transport",title:"Transport and infrastructure", img:"https://res.cloudinary.com/polipick/image/upload/v1621526022/policies/Transportation_pvzdet.jpg",model:false, 
        subtopics:[{title:"Public transport, cycling and walking", description:"Immigration"},{ title:"Transport funding and planning", description:"With few exceptions, only citizens and permanent residents can cross the border, and those who do arrive must spend 14 days in managed isolation"},{ title:"Energy", description:"Repatriation of Filipino refugees remain difficult due to the ongoing conflict in the southern Philippines."},{ title:"Internet and telecommunications", description:"Immigration"},{ title:"Rail transport", description:"E"},{ title:"Cars and roads", description:"Immigration"},
        { title:"Construction", description:"Immigration"},{ title:"Urban planning and resource management", description:"Immigration"},]},]
    }},
    methods: {
        filteredPolicy: function(policy) {
            return this.details.promises.filter((sub)=> {
                return sub.subpolicy==policy
            })
            
        }
        
    }
}

</script>
