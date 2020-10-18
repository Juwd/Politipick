<template>
   <vue-flip active-click="" width="400px" height="250px"> <!-- fix this, like para mag rotate siya in its place, and within the v-col -->
                <template v-slot:front class="front">
                <v-card>
                    <v-tooltip bottom :nudge-top="30">
                    <template v-slot:activator="{on, attrs}"> <!-- to hover tool tip -->
                    <v-card-title v-bind="attrs" v-on="on">
                        <v-icon left large>mdi-certificate </v-icon>Certifications <v-spacer></v-spacer> 
                        <v-icon v-if="citeCertificate.length" right>mdi-clipboard-check-multiple</v-icon> <!-- clipboard -->
                        <v-icon v-else right>mdi-clipboard-alert</v-icon> 
                    </v-card-title>
                    </template>
                    <span v-if="citeCertificate.length" >cited</span>
                        <span v-else>No citation found</span>
                    </v-tooltip>
                    <div v-for="detail in details.certificate" :key="detail.index">
                        <v-card-subtitle class="ml-11"><strong>{{detail.description}},</strong></v-card-subtitle>
                        <v-card-text class=ml-11>{{detail.place}}</v-card-text>
                    </div>
                </v-card>
                </template>
                <template v-slot:back class="back" >
                <!-- To call all citations -->
                
                <v-card>
                    <v-card-title>Citation</v-card-title>
                    <div v-for="sites in citeCertificate" :key="sites.index">
                        <v-card-text>{{sites.url}}</v-card-text>
                    </div>
                </v-card>
                </template>
                </vue-flip>
</template>

<script>
import Vueflip from 'vue-flip';
export default {
    name:'credentials',
    data () {
        return {
            details: {school:[{description:'Unibersidad ng somewhere' ,level:'PHD in economics'}, {description:'That university' ,level:'Master in economics'}], 
                    certificate:[{description: 'magaling lang', place: 'DSWD'}, {description: 'taga hulma ng lupa', place: 'DPWH'}], plan:['wala','wala talaga', 'mag budots'], highlights:[{description:'nagpatayo ng waiting shed', date:'2020'}], belief:'Authoritarianism',
                    affiliation:[{description: 'kaliwa', date: '2016'}, {description: 'kanan', date: '2020'}], job:'Taga-kurakot', relatives:[{person:'John doe',position:'VP of finance'}], citation:[{url:"a.com", cited:"school"}, {url:"b.com", cited:"school"}, {url:"c.com", cited:"certificate"},{url:"d.com", cited:"plans"},{url:"e.com", cited:"highlights"}, 
                    {url:"f.com", cited:"Affiliation"},{url:"c.com", cited:"belief"}, {url:"c.com", cited:"job"}]}
        }
    },
    computed : {
        //you could optimize this by using only one filtering tool, but I am too lazy to think right now 
        citeCertificate: function() {
            return this.details.citation.filter(function(x) {
                return (x.cited=="certificate")
            })
        }
    },
    components: {
        'vue-flip': Vueflip
    }
}
</script>