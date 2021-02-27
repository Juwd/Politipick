<template>
    <v-card @click="reveal = !reveal" >
        <v-tooltip bottom :nudge-top="30">
            <template v-slot:activator="{on, attrs}"> <!-- to hover tool tip -->
            <v-card-title v-bind="attrs" v-on="on">
                <v-icon left large>mdi-relation-one-to-one-or-many </v-icon>Affiliation <v-spacer></v-spacer>
                <v-icon v-if="citeAffiliation.length" right>mdi-clipboard-check-multiple</v-icon> <!-- clipboard -->
                <v-icon v-else right>mdi-clipboard-alert</v-icon> 
            </v-card-title>
            </template>
            <span v-if="citeAffiliation.length" >cited</span>
            <span v-else>No citation found</span>
        </v-tooltip>
                <div v-for="detail in details" :key="detail.index">
                        <v-card-subtitle class="ml-11"><strong>{{detail.description}},</strong> {{detail.date}}</v-card-subtitle> 
                </div>

            <!-- To call all citations -->
        <v-expand-transition>
        <v-card v-if="reveal && citeAffiliation.length" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
            <v-card-title>Citation</v-card-title>
            <div v-for="sites in citeAffiliation" :key="sites.index">
            <v-card-text>{{sites.url}}</v-card-text>
            </div>
        </v-card>
        </v-expand-transition>
    </v-card>
</template>

<script>
export default {
    name:'affiliation',
    props : ['detail'],
    data () {
        return {
            details: this.detail.affiliations,
            reveal: false,
            citeAffiliation:[]
        }
    },
    created() {
        for(let i=0; i<this.details.length;i+=1)
        {
            for( let x=0; x<this.details[i].citation.length;x+=1)
                this.citeAffiliation.push(this.details[i].citation[x])
        }
    },
computed : {
        //you could optimize this by using only one filtering tool, but I am too lazy to think right now 
    //     citeAffiliation: function() {
    //         console.log("this one" + this.details._id);
    //         return this.details.citations.filter(function(x) {
    //             return (x.cited=="affiliation")
    //         })
    //     }
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