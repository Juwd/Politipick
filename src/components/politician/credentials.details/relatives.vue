<template>
    <v-card @click="reveal = !reveal">
        <v-tooltip bottom :nudge-top="30">
            <template v-slot:activator="{on, attrs}">  <!-- to hover tool tip --> 
            <v-card-title v-bind="attrs" v-on="on">
                <v-icon left large>mdi-human-male-female </v-icon>Relatives in position <v-spacer></v-spacer>
                <v-icon v-if="citeRelatives" right>mdi-clipboard-check-multiple</v-icon>  <!--clipboard--> 
                <v-icon v-else right>mdi-clipboard-alert</v-icon> 
            </v-card-title>
            </template>
            <span v-if="citeRelatives" >cited</span>
            <span v-else>No citation found</span>
        </v-tooltip>
            <div v-for="detail in details" :key="detail.index">
                    <v-card-subtitle class="ml-11"><strong>{{detail.person}},</strong> {{detail.position}}</v-card-subtitle> 
            </div>

            <!-- To call all citations -->
        <v-expand-transition>
        <v-card v-if="reveal && citeRelatives" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
            <v-card-title>Citation</v-card-title>
            <div v-for="sites in citeRelatives" :key="sites.index">
            <v-card-text>{{sites.url}}</v-card-text>
            </div>
        </v-card>
        </v-expand-transition>
    
    </v-card>
</template>

<script>
export default {
    name:'relatives',
    props : ['detail'],
    data () {
        return {
            details: this.detail.relatives,
            reveal: false,
            citeRelatives: []
        }
    },
    created() {
        for(let i=0; i<this.details.length;i+=1)
        {
            for( let x=0; x<this.details[i].citation.length;x+=1)
                this.citeRelatives.push(this.details[i].citation[x])
        }
    },
    computed : {
        //you could optimize this by using only one filtering tool, but I am too lazy to think right now 
        // citeRelatives: function() {
        //     return this.details.filter(function(x) {
        //         console.log(x.citation=="url")
        //         return (x.citation==="url")
        //     })
        // }
        // citeRelatives: function() {
        //     let count=0
        //     for(let i=0;i<this.detail.relatives.length;)
        //     {
        //         for(let x=0;x<this.detail.relatives[i].citation.length;)
        //             {
        //                 count=1+count
        //             }
        //     }
        //     return count
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