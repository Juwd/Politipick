<template>
    <v-card @click="reveal = !reveal">
        <v-tooltip bottom :nudge-top="30">
            <template v-slot:activator="{on, attrs}"> <!-- to hover tool tip -->
            <v-card-title v-bind="attrs" v-on="on">
                <v-icon left large>mdi-human-male-female </v-icon>Relatives in position <v-spacer></v-spacer>
                <v-icon v-if="citeRelatives.length" right>mdi-clipboard-check-multiple</v-icon> <!-- clipboard -->
                <v-icon v-else right>mdi-clipboard-alert</v-icon> 
            </v-card-title>
            </template>
            <span v-if="citeRelatives.length" >cited</span>
            <span v-else>No citation found</span>
        </v-tooltip>
                <div v-for="detail in details.relatives" :key="detail.index">
                        <v-card-subtitle class="ml-11"><strong>{{detail.person}},</strong> {{detail.position}}</v-card-subtitle> 
                </div>

            <!-- To call all citations -->
        <v-expand-transition>
        <v-card v-if="reveal && citeRelatives.length" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
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
            details: this.detail,
            reveal: false,
        }
    },
    computed : {
        //you could optimize this by using only one filtering tool, but I am too lazy to think right now 
        citeRelatives: function() {
            return this.details.citations.filter(function(x) {
                return (x.cited=="relatives")
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