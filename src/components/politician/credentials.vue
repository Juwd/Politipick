<template>
    <v-container fluid>
        <v-row wrap >
            <v-col md="6" sm="12">
                <school/>
            </v-col>
            <v-col md="6" xs="12">
                <certificate/>
            </v-col>
        </v-row>
        <v-row>
            <v-col lg='12'>
                <plan/>
            </v-col>
        </v-row>
        <v-row>
            <v-col lg='12'>
                <v-card>
                    <v-card-title>
                        <v-icon left large>mdi-seal </v-icon>Political Highlights
                    </v-card-title>
                    <div v-for="detail in details.highlights" :key="detail.index">
                        <v-card-subtitle class="ml-11"><strong>{{detail.description}},</strong> {{detail.date}}</v-card-subtitle> 
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <!-- for political beliefs -->
        <v-row >
            <v-col  md="6" sm="12">
                <v-card >
                    <v-card-title >
                        <v-icon left large>mdi-lightbulb-group</v-icon>Political Belief
                    </v-card-title>
                    <v-card-subtitle class="ml-11">{{details.belief}}</v-card-subtitle>
                </v-card>
            </v-col>
            <v-col md="6" xs="12">
                <v-card>
                    <v-card-title>
                        <v-icon left large>mdi-relation-one-to-one-or-many </v-icon>Political Affiliation History
                    </v-card-title>
                    <div v-for="detail in details.affiliation" :key="detail.index">
                        <v-card-subtitle class="ml-11"><strong>{{detail.description}},</strong> {{detail.date}}</v-card-subtitle>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="6" sm="12">
                
                <v-card >
                    <v-card-title>
                        <v-icon left large>mdi-briefcase-variant</v-icon>Former Job
                    </v-card-title>
                    <v-card-subtitle class="ml-11">{{details.job}}</v-card-subtitle>
                </v-card>
            </v-col>
            <v-col md="6" xs="12">
                <v-card>
                    <v-card-title>
                        <v-icon left large>mdi-human-male-female </v-icon>Relatives in Position
                    </v-card-title>
                    <div v-for="detail in details.relatives" :key="detail.index">
                        <v-card-subtitle class="ml-11"><strong>{{detail.person}},</strong> {{detail.position}}</v-card-subtitle>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import school from './credentials.details/school';
import certificate from './credentials.details/certificate';
import plan from './credentials.details/plan'
export default {
    name:'credentials',
    data () {
        return {
            details: {school:[{description:'Unibersidad ng somewhere' ,level:'PHD in economics'}, {description:'That university' ,level:'Master in economics'}], 
                    certificate:[{description: 'magaling lang', place: 'DSWD'}, {description: 'taga hulma ng lupa', place: 'DPWH'}], 
                    plan:['wala','wala talaga', 'mag budots'], highlights:[{description:'nagpatayo ng waiting shed', date:'2020'}], belief:'Authoritarianism',
                    affiliation:[{description: 'kaliwa', date: '2016'}, {description: 'kanan', date: '2020'}], job:'Taga-kurakot', relatives:[{person:'John doe',position:'VP of finance'}], citation:[{url:"a.com", cited:"school"}, {url:"b.com", cited:"school"}, {url:"c.com", cited:"certificate"},{url:"d.com", cited:"plans"},{url:"e.com", cited:"highlights"}, 
                    {url:"f.com", cited:"Affiliation"},{url:"c.com", cited:"belief"}, {url:"c.com", cited:"job"}]}
        }
    },
    components: {
        certificate,
        school,
        plan
    }
}
</script>