<template>
    <v-card @click="reveal = !reveal">
        <v-tooltip bottom :nudge-top="30">
            <template v-slot:activator="{on, attrs}"> <!-- to hover tool tip -->
            <v-card-title v-bind="attrs" v-on="on">
                <v-icon left large>mdi-google-analytics </v-icon>Economic Plan <v-spacer></v-spacer>
                <v-icon v-if="citePlan.length" right>mdi-clipboard-check-multiple</v-icon> <!-- clipboard -->
                <v-icon v-else right>mdi-clipboard-alert</v-icon> 
            </v-card-title>
            </template>
            <span v-if="citePlan.length" >cited</span>
            <span v-else>No citation found</span>
        </v-tooltip>
                <div v-for="detail in details" :key="detail.index">
                    <v-card-text class=ml-11>{{detail.plans}}</v-card-text>
                </div>

            <!-- To call all citations -->
        <v-expand-transition>
        <v-card v-if="reveal && citePlan.length" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
            <v-card-title>Citation</v-card-title>
            <div v-for="sites in citePlan" :key="sites.index">
            <v-card-text>{{sites.url}}</v-card-text>
            </div>
        </v-card>
        </v-expand-transition>
    </v-card>
</template>

<script>
export default {
    name:'plan',
    props : ['detail'],
    data () {
        return {
            details: this.detail.plans,
            reveal: false,
            citePlan:[],
        }
    },
    created() {
        for(let i=0; i<this.details.length;i+=1)
        {
            for( let x=0; x<this.details[i].citation.length;x+=1)
                this.citePlan.push(this.details[i].citation[x])
        }
    },
    computed : {
        //you could optimize this by using only one filtering tool, but I am too lazy to think right now 
        // citePlan: function() {
        //     return this.details.citations.filter(function(x) {
        //         return (x.cited=="plan")
        //     })
        // }
    },
    
}
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>