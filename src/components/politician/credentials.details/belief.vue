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
    name:'belief',
    props : ['detail'],
    data () {
        return {
            details: this.detail.belief,
            reveal: false,
            citeBelief:[]
        }
    },
    created() {
        for(let i=0; i<this.details.citation.length;i+=1)
        {
            this.citeBelief.push(this.details.citation[i])
        }
    },
    computed : {
        //you could optimize this by using only one filtering tool, but I am too lazy to think right now 
        // citeBelief: function() {
        //     return this.details.citations.filter(function(x) {
        //         return (x.cited=="belief")
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