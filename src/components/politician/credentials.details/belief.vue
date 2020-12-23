<template>
    <v-card @click="reveal = !reveal">
        <v-tooltip bottom :nudge-top="30">
            <template v-slot:activator="{on, attrs}"> <!-- to hover tool tip -->
                <v-card-title v-bind="attrs" v-on="on">
                    <v-icon left large>mdi-lightbulb-group </v-icon>Political Belief<v-spacer></v-spacer> 
                    <v-icon v-if="citeBelief.length" right>mdi-clipboard-check-multiple</v-icon> <!-- clipboard -->
                    <v-icon v-else right>mdi-clipboard-alert</v-icon>
                </v-card-title>
                </template>
                    <span v-if="citeBelief.length">cited</span>
                    <span v-else>No citation found</span>
                </v-tooltip>
                <v-card-subtitle class="ml-11">{{details.belief}}</v-card-subtitle>
                <!-- To call all citations -->
            <v-expand-transition>
                <v-card v-if="reveal && citeBelief.length" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                    <v-card-title>Citation</v-card-title>
                    <div v-for="sites in citeBelief" :key="sites.index">
                        <v-card-text>{{sites.url}}</v-card-text>
                    </div>
                </v-card>
            </v-expand-transition>
    </v-card>
</template>

<script>
export default {
    name:'job',
    data () {
        return {
            details: {school:[{description:'Unibersidad ng somewhere' ,level:'PHD in economics'}, {description:'That university' ,level:'Master in economics'}], 
                    certificate:[{description: 'magaling lang', place: 'DSWD'}, {description: 'taga hulma ng lupa', place: 'DPWH'}], plan:['wala','wala talaga', 'mag budots'], highlights:[{description:'nagpatayo ng waiting shed', date:'2020'}], belief:'Authoritarianism',
                    affiliation:[{description: 'kaliwa', date: '2016'}, {description: 'kanan', date: '2020'}], job:'Taga-kurakot', relatives:[{person:'John doe',position:'VP of finance'}], citation:[{url:"a.com", cited:"school"}, {url:"b.com", cited:"school"}, {url:"c.com", cited:"certificate"},{url:"d.com", cited:"plans"},{url:"e.com", cited:"highlights"}, 
                    {url:"f.com", cited:"Affiliation"},{url:"belief.com", cited:""}, {url:"c.com", cited:"job"}]},
            reveal: false,
        }
    },
    computed : {
        //you could optimize this by using only one filtering tool, but I am too lazy to think right now 
        citeBelief: function() {
            return this.details.citation.filter(function(x) {
                return (x.cited=="belief")
            })
        }
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