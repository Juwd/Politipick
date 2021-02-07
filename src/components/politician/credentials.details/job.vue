<template>
    <v-card @click="reveal = !reveal">
        <v-tooltip bottom :nudge-top="30">
            <template v-slot:activator="{on, attrs}"> <!-- to hover tool tip -->
                <v-card-title v-bind="attrs" v-on="on">
                    <v-icon left large>mdi-briefcase-variant </v-icon>Job<v-spacer></v-spacer> 
                    <v-icon v-if="citeJob.length" right>mdi-clipboard-check-multiple</v-icon> <!-- clipboard -->
                    <v-icon v-else right>mdi-clipboard-alert</v-icon>
                </v-card-title>
                </template>
                    <span v-if="citeJob.length">cited</span>
                    <span v-else>No citation found</span>
                </v-tooltip>
                <v-card-subtitle class="ml-11">{{details.job}}</v-card-subtitle>
                <!-- To call all citations -->
            <v-expand-transition>
                <v-card v-if="reveal && citeJob.length" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                    <v-card-title>Citation</v-card-title>
                    <div v-for="sites in citeJob" :key="sites.index">
                        <v-card-text>{{sites.url}}</v-card-text>
                    </div>
                </v-card>
            </v-expand-transition>
    </v-card>
</template>

<script>
export default {
    name:'job',
    props : ['detail'],
    data () {
        return {
            details: this.detail,
            reveal: false,
        }
    },
    computed : {
        //you could optimize this by using only one filtering tool, but I am too lazy to think right now 
        citeJob: function() {
            return this.details.citations.filter(function(x) {
                return (x.cited=="job")
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