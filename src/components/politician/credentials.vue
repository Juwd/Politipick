<template>
    <v-container fluid>
        <v-row wrap >
            <v-col md="6" sm="12">
            <div v-if="profileLoaded">
                <school v-bind:detail="details"/>
            </div>
            <div v-else>
                <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                    <v-skeleton-loader
                    class="mx-auto"
                    type="card"
                    ></v-skeleton-loader>
                </v-sheet>
            </div>
            </v-col>
            
            <v-col md="6" xs="12">
                <div v-if="profileLoaded">
                    <certificate v-bind:detail="details"/>
                </div>
                <div v-else>
                <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                    <v-skeleton-loader
                    class="mx-auto"
                    type="card"
                    ></v-skeleton-loader>
                </v-sheet>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col lg='12'>
                <div v-if="profileLoaded">
                    <plan v-bind:detail="details"/>
                </div>
                <div v-else>
                <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                    <v-skeleton-loader
                    class="mx-auto"
                    type="card"
                    ></v-skeleton-loader>
                </v-sheet>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col lg='12'>
                <div v-if="profileLoaded">
                    <highlights v-bind:detail="details"/>
                </div>
                <div v-else>
                <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                    <v-skeleton-loader
                    class="mx-auto"
                    type="card"
                    ></v-skeleton-loader>
                </v-sheet>
                </div>
            </v-col>
        </v-row>
        <!-- for political beliefs -->
        <v-row >
            <v-col  md="6" sm="12">
                <div v-if="profileLoaded">
                    <belief v-bind:detail="details"/>
                </div>
                <div v-else>
                <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                    <v-skeleton-loader
                    class="mx-auto"
                    type="card"
                    ></v-skeleton-loader>
                </v-sheet>
                </div>
            </v-col>
            <v-col md="6" xs="12">
                <div v-if="profileLoaded">
                    <job v-bind:detail="details"/>
                </div>
                <div v-else>
                <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                    <v-skeleton-loader
                    class="mx-auto"
                    type="card"
                    ></v-skeleton-loader>
                </v-sheet>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="6" sm="12">
                <div v-if="profileLoaded">
                    <affiliation v-bind:detail="details"/>
                </div>
                <div v-else>
                <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                    <v-skeleton-loader
                    class="mx-auto"
                    type="card"
                    ></v-skeleton-loader>
                </v-sheet>
                </div>
            </v-col>
            <v-col md="6" xs="12">
                <div v-if="profileLoaded">
                    <relatives v-bind:detail="details"/>
                </div>
                <div v-else>
                <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                    <v-skeleton-loader
                    class="mx-auto"
                    type="card"
                    ></v-skeleton-loader>
                </v-sheet>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import school from './credentials.details/school'
import certificate from './credentials.details/certificate'
import plan from './credentials.details/plan'
import highlights from './credentials.details/highlights'
import belief from './credentials.details/belief'
import affiliation from './credentials.details/affiliation'
import job from './credentials.details/job'
import relatives from './credentials.details/relatives'
import politicianService from '../../service/politicianService.js'

export default {
    name:'credentials',
    data () {
        return {
            // detail: {school:[{description:'Unibersidad ng somewhere' ,level:'PHD in economics'}, {description:'That university' ,level:'Master in economics'}], 
            //         certificate:[{description: 'magaling lang', place: 'DSWD'}, {description: 'taga hulma ng lupa', place: 'DPWH'}], 
            //         plan:['wala','wala talaga', 'mag budots'], highlights:[{description:'nagpatayo ng waiting shed', date:'2020'}], belief:'Authoritarianism',
            //         affiliation:[{description: 'kaliwa', date: '2016'}, {description: 'kanan', date: '2020'}], job:'Taga-kurakot', relatives:[{person:'John doe',position:'VP of finance'}], citation:[{url:"a.com", cited:"school"}, {url:"b.com", cited:"school"}, {url:"c.com", cited:"certificate"},{url:"d.com", cited:"plans"},{url:"e.com", cited:"highlights"}, 
            //         {url:"f.com", cited:"Affiliation"},{url:"c.com", cited:"belief"}, {url:"c.com", cited:"job"}]}
            details: [],
            profileLoaded: false
        }
    },
    async created() {
        try {
            this.details = await politicianService.getPoliticiansId(this.$route.params.id);
            this.profileLoaded = true;
            //console.log(this.details);
            //console.log(this.profileLoaded)
        } catch (err) {
            this.error = err.message
        }
    } ,
    components: {
        certificate,
        school,
        plan,
        highlights,
        belief,
        affiliation,
        job,
        relatives
    },
    inject: {
      theme: {
        default: { isDark: false },
      }
      }
}
</script>